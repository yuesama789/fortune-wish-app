import React, { useEffect } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { resourceSources } from '../data/resourceSources';
import './AttributionModal.scss';
import { changelogEntries } from '../data/changelogEntries';

interface AttributionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalTabId = 'attribution' | 'resources' | 'changelog' | 'comments';

interface ModalTab {
  id: ModalTabId;
  label: string;
}

const tabs: ModalTab[] = [
  { id: 'comments', label: 'Comments' },
  { id: 'attribution', label: 'Attribution' },
  { id: 'resources', label: 'Resources' },
  { id: 'changelog', label: 'Changelog' },
];

const DISQUS_SHORTNAME = 'genshinwishfortune';
const DISCUSSION_IDENTIFIER = 'genshin-wish-app-comments';
const DISCUSSION_TITLE = 'Genshin Impact Wish For Me?';

const AttributionModal: React.FC<AttributionModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<ModalTabId>('attribution');
  const discussionUrl = typeof window === 'undefined'
    ? ''
    : new URL(import.meta.env.BASE_URL, window.location.origin).toString();
  const discussionConfig = {
    url: discussionUrl,
    identifier: DISCUSSION_IDENTIFIER,
    title: DISCUSSION_TITLE,
    language: 'en_EN',
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setActiveTab('comments');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const renderTabContent = () => {
    if (activeTab === 'attribution') {
      return (
        <section className="menu-content-section">
          <h2>Project Info and Asset Credits</h2>
          <p>
            This project is a fan-made experience created for fun.
            It is not monetized, and no costs are charged to use it.
            I do not claim ownership of the creative content, characters, or third-party assets shown here.
          </p>
        </section>
      );
    }

    if (activeTab === 'resources') {
      return (
        <section className="menu-content-section">
          <h2>Resources</h2>
          {resourceSources.map((section) => (
            <section key={section.section} className="sources-section">
              <h3>{section.section}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={`${section.section}-${item.asset}`}>
                    <strong>{item.asset}</strong>
                    <span>{item.sourceName}</span>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>
                    ) : null}
                    {item.notes ? <small>{item.notes}</small> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      );
    }

    if (activeTab === 'comments') {
      return (
        <section className="menu-content-section comments-section">
          <h2>Feedback</h2>
          <p>
            Leave a message, report a bug, or share which fortune you pulled.
          </p>
          <div className="comments-embed-shell">
            <DiscussionEmbed shortname={DISQUS_SHORTNAME} config={discussionConfig} />
          </div>
        </section>
      );
    }

    return (
      <section className="menu-content-section">
        <h2>Changelog</h2>
        <div className="changelog-list">
          {changelogEntries.map((entry) => (
            <article key={entry.version} className="changelog-entry">
              <header>
                <h3>{entry.version}</h3>
                <span>{entry.date}</span>
              </header>
              <ul>
                {entry.changes.map((change) => (
                  <li key={`${entry.version}-${change}`}>{change}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="attribution-overlay" onClick={onClose} role="presentation">
      <div className="attribution-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose} aria-label="Close info dialog">
          x
        </button>

        <div className="menu-layout">
          <aside className="menu-panel" aria-label="Information categories">
            <h2>Menu</h2>
            <p className="menu-hint">Press Esc to close</p>
            <nav>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`menu-button ${activeTab === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="content-panel">{renderTabContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default AttributionModal;
