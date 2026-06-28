import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { usePageMeta } from '../lib/seo';
import { site, wa, tel, PHONE_DISPLAY, WA_DISPLAY } from '../data/site';
import './Contact.css';

const animals = ['Cow / Buffalo', 'Dog', 'Cat', 'Bird / Poultry', 'Other'];

export default function Contact() {
  usePageMeta(
    'Contact & Book a Visit — Petvet Care | Dr. Rajpal Singh, Darbhanga',
    'Book a home veterinary visit in Darbhanga & Mithila. WhatsApp or call Dr. Rajpal Singh, or send the quick form for a ready-to-send message.'
  );

  const [form, setForm] = useState({ name: '', village: '', animal: animals[0], problem: '', time: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `Namaste Dr. Rajpal, I would like to book a home visit.\n` +
      `• Name: ${form.name || 'Not given'}\n` +
      `• Village / area: ${form.village || 'Not given'}\n` +
      `• Animal: ${form.animal}\n` +
      `• Problem: ${form.problem || 'Not given'}\n` +
      `• Preferred time: ${form.time || 'As soon as possible'}`;
    window.open(wa(msg), '_blank', 'noopener');
  };

  return (
    <div className="contact-page">
      <PageHeader
        accent="sindoor"
        tag="सम्पर्क · Book a visit"
        mai="आउ, गप करी"
        title="Let’s get your animal back to health"
        intro="The quickest way to reach Dr. Rajpal is WhatsApp or a phone call. Fill in the short form below and it opens a ready-to-send WhatsApp message. Or simply tap to call."
      />

      <section className="section">
        <div className="container contact__grid">
          <Reveal className="contact__side">
            <a href={wa()} target="_blank" rel="noreferrer" className="contact__big contact__big--wa">
              <Icon name="whatsapp" size={32} />
              <span><strong className="mai">WhatsApp पर गप करू</strong><em>{WA_DISPLAY} · tap to chat</em></span>
            </a>
            <a href={tel()} className="contact__big contact__big--call">
              <Icon name="phone" size={28} />
              <span><strong>{PHONE_DISPLAY}</strong><em className="mai">अखने फोन करू</em></span>
            </a>

            <ul className="contact__details">
              <li><span className="contact__d-icon"><Icon name="location" size={20} /></span><div><strong>Clinic base</strong><p>{site.address}</p></div></li>
              <li><span className="contact__d-icon"><Icon name="clock" size={20} /></span><div><strong>Hours</strong><p>{site.hours}</p></div></li>
              <li><span className="contact__d-icon"><Icon name="paw" size={20} /></span><div><strong>We treat</strong><p>Cows, buffaloes, dogs, cats, birds & poultry</p></div></li>
            </ul>

            <a className="contact__map" href={site.mapUrl} target="_blank" rel="noreferrer">
              <Icon name="location" size={20} /> Open in Google Maps <span className="link__arrow">→</span>
            </a>
            <a className="contact__map" href={site.instagram} target="_blank" rel="noreferrer">
              <Icon name="instagram" size={20} /> Follow on Instagram {site.instagramHandle} <span className="link__arrow">→</span>
            </a>
          </Reveal>

          <Reveal className="contact__form-wrap card" variant="up">
            <form className="contact__form" onSubmit={submit}>
              <h2 className="contact__form-title">Request a home visit</h2>
              <p className="contact__form-note">No account needed. This opens WhatsApp with your details already filled in.</p>

              <label className="field"><span>Your name</span><input type="text" value={form.name} onChange={set('name')} placeholder="e.g. Ramesh Yadav" /></label>
              <label className="field"><span>Village / area</span><input type="text" value={form.village} onChange={set('village')} placeholder="e.g. Benipur" /></label>
              <label className="field"><span>Which animal?</span>
                <select value={form.animal} onChange={set('animal')}>{animals.map((a) => <option key={a} value={a}>{a}</option>)}</select>
              </label>
              <label className="field"><span>What’s wrong?</span><textarea rows={3} value={form.problem} onChange={set('problem')} placeholder="Describe the problem briefly" /></label>
              <label className="field"><span>Preferred time</span><input type="text" value={form.time} onChange={set('time')} placeholder="e.g. Today evening / urgent" /></label>

              <button type="submit" className="btn btn--whatsapp btn--lg contact__submit">
                <Icon name="whatsapp" size={20} /> Send on WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
