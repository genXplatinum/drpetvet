import Icon from './Icon';
import { wa } from '../data/site';
import './WhatsAppFab.css';

/** Persistent floating WhatsApp button — the always-available "book a visit". */
export default function WhatsAppFab() {
  return (
    <a className="wa-fab" href={wa()} target="_blank" rel="noreferrer"
      aria-label="Book a home visit on WhatsApp" data-cursor>
      <Icon name="whatsapp" size={28} />
      <span className="wa-fab__label mai">बुक करू</span>
      <span className="wa-fab__pulse" aria-hidden="true" />
    </a>
  );
}
