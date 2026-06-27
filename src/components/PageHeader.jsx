import Reveal from './Reveal';
import { MadhubaniDivider } from './Madhubani';
import './PageHeader.css';

export default function PageHeader({ tag, tagVariant = '', title, hindi, intro, accent = 'saffron' }) {
  return (
    <header className={`pagehead pagehead--${accent}`}>
      <div className="container pagehead__inner">
        <Reveal className="pagehead__content">
          {tag && <span className={`tag ${tagVariant}`}>{tag}</span>}
          <h1 className="pagehead__title">
            {title} {hindi && <span className="desi pagehead__hindi">{hindi}</span>}
          </h1>
          {intro && <p className="lead pagehead__intro">{intro}</p>}
        </Reveal>
      </div>
      <MadhubaniDivider className="pagehead__divider" />
    </header>
  );
}
