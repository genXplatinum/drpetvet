import Reveal from './Reveal';
import { MadhubaniDivider } from './Madhubani';
import './PageHeader.css';

export default function PageHeader({ tag, tagVariant = '', title, mai, intro, accent = 'sindoor' }) {
  return (
    <header className={`pagehead pagehead--${accent}`}>
      <div className="container pagehead__inner">
        <Reveal className="pagehead__content">
          {tag && <span className={`tag ${tagVariant}`}>{tag}</span>}
          {mai && <span className="mai pagehead__mai">{mai}</span>}
          <h1 className="pagehead__title">{title}</h1>
          {intro && <p className="lead pagehead__intro">{intro}</p>}
        </Reveal>
      </div>
      <MadhubaniDivider className="pagehead__divider" />
    </header>
  );
}
