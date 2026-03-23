import React from 'react';
import { resourceSources } from '../data/resourceSources';
import './AttributionModal.scss';

interface AttributionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AttributionModal: React.FC<AttributionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="attribution-overlay" onClick={onClose} role="presentation">
      <div className="attribution-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose} aria-label="Close info dialog">
          x
        </button>

        <h2>Project Info and Asset Credits</h2>
        <p>
          This project is a fan-made experience created for fun.
          It is not monetized, and no costs are charged to use it.
          I do not claim ownership of the creative content, characters, or third-party assets shown here.
        </p>

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
      </div>
    </div>
  );
};

export default AttributionModal;
