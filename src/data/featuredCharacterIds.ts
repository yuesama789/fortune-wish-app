import { Character } from '../types';

interface FeaturedPatchSchedule {
	patchVersion: string;
	startDate: string; // YYYY-MM-DD
	featuredCharacterIds: Character['id'][];
	chronicleBannerIds?: Character['id'][];
}

interface ActiveFeaturedPatchInfo {
	patchVersion: string;
	featuredCharacterIds: Character['id'][];
	chronicleBannerIds?: Character['id'][];
}

// Update this schedule whenever banners rotate.
// Rules:
// 1) Keep entries sorted by startDate ascending.
// 2) Dates should be the banner start date in YYYY-MM-DD format.
// 3) featuredCharacterIds must exist in data/characters.ts.
export const featuredPatchSchedule: FeaturedPatchSchedule[] = [
	{
		patchVersion: '6.4.2',
		startDate: '2026-03-17',
		featuredCharacterIds: ['escoffier', 'skirk', 'candace', 'charlotte', 'dahlia'],
	},
	{
		patchVersion: '6.5.1',
		startDate: '2026-03-30',
		featuredCharacterIds: ['linnea', 'chasca', 'aino', 'noelle', 'illuga'],
		chronicleBannerIds: ['emilie', 'clorinde', 'navia', 'sigewinne', 'lyney', 'wriothesley']
	},
	{
		patchVersion: '6.5.2',
		startDate: '2025-04-29',
		featuredCharacterIds: ['nefer', 'lauma'],
	},
];

const parseScheduleDate = (dateString: string): Date => new Date(`${dateString}T00:00:00Z`);

export const getActiveFeaturedPatchInfo = (date: Date = new Date()): ActiveFeaturedPatchInfo => {
	if (featuredPatchSchedule.length === 0) {
		return {
			patchVersion: 'N/A',
			featuredCharacterIds: [],
		};
	}

	const sortedSchedule = [...featuredPatchSchedule].sort(
		(a, b) => parseScheduleDate(a.startDate).getTime() - parseScheduleDate(b.startDate).getTime(),
	);

	const todayTimestamp = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

	let activeEntry = sortedSchedule[0];

	for (const entry of sortedSchedule) {
		const entryTimestamp = parseScheduleDate(entry.startDate).getTime();

		if (entryTimestamp > todayTimestamp) {
			break;
		}

		activeEntry = entry;

		if (entryTimestamp === todayTimestamp) {
			break;
		}
	}

	return {
		patchVersion: activeEntry.patchVersion,
		featuredCharacterIds: activeEntry.featuredCharacterIds,
		chronicleBannerIds: activeEntry.chronicleBannerIds,
	};
};

export const getActiveFeaturedCharacterIds = (date: Date = new Date()): Character['id'][] =>
	getActiveFeaturedPatchInfo(date).featuredCharacterIds;
