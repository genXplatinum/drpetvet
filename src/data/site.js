/* ============================================================
   Single source of truth for all Petvet Care content.

   Maithili (मैथिली) appears at major points with English support.
   ⚠️ CLIENT: please verify the Maithili wording — written in good
   faith, but a native speaker should confirm before launch.

   CLIENT TODO before launch:
      - Confirm ADDRESS, MAP_URL, HOURS
      - Replace sample testimonials with real ones
      - Link the domain drpetvet.in (DNS)
   ============================================================ */

// WhatsApp (chat) number — full international form, digits only.
export const WA_PHONE = '919117256642';
export const WA_DISPLAY = '+91 91172 56642';
// Voice-call number (shown next to call buttons).
export const CALL_PHONE = '917542045837';
export const PHONE_DISPLAY = '+91 75420 45837';

export const wa = (msg = 'Namaste Dr. Rajpal, I would like to book a home visit for my animal.') =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
export const tel = () => `tel:+${CALL_PHONE}`;

export const site = {
  name: 'Petvet Care',
  short: 'Petvet Care',
  doctor: 'Dr. Rajpal Singh',
  qualification: 'B.V.Sc & A.H.',
  domain: 'drpetvet.in',
  est: '2018',
  greeting: 'गोर लागी',                       // Maithili respectful greeting
  tagline: 'पशु चिकित्सा, अहाँक अंगना धरि।',    // Maithili
  taglineEn: 'Veterinary care, right at your courtyard.',
  bhar: 'अहाँक पशु, हमर परिवार।',              // "Your animal, our family."
  bharEn: 'Your animal is family to us.',
  city: 'Sundarpur, Darbhanga',
  region: 'Mithila · Bihar, India',
  address: 'Dera, near Hanuman Mandir & Bira Middle School, Sundarpur, Basdeopur, Darbhanga, Bihar 846005',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bira+Middle+School+Sundarpur+Darbhanga',
  hours: 'Open every day, 7 AM to 9 PM. Emergencies anytime.',
  instagram: 'https://www.instagram.com/drpetvetdbg',
  instagramHandle: '@drpetvetdbg',
  manifesto:
    'When an animal is sick or hurt, the last thing it needs is a long, frightening journey to a clinic. So Dr. Rajpal Singh comes to you instead. You get the same trusted care at your own home, farm or gaushala, where your animal feels safe and calm.',
};

/* Maithili UI labels (with English where shown together) */
export const ui = {
  bookWa: 'WhatsApp पर गप करू',   // talk on WhatsApp
  bookWaEn: 'Book on WhatsApp',
  callNow: 'अखने फोन करू',         // call right now
  learnMore: 'आर देखू',            // see more
  readStory: 'पूरा कथा पढ़ू',       // read the full story
  allServices: 'सभ सेवा देखू',     // see all services
  backTop: 'ऊपर चलू',             // go up
};

export const nav = [
  { label: 'Home', mai: 'घर', to: '/' },
  { label: 'Services', mai: 'सेवा', to: '/services' },
  { label: 'About', mai: 'बारे', to: '/about' },
  { label: 'Contact', mai: 'सम्पर्क', to: '/contact' },
];

/* ---------- Services ---------- */
export const services = [
  {
    id: 'cattle', icon: 'cow', accent: 'leaf',
    title: 'Cattle & Buffalo Care', mai: 'गाय-महिंस सेवा',
    summary:
      'Full treatment for your cattle right there at the farm, from a cow running a fever to a buffalo having a hard time giving birth. This is the work Dr. Rajpal does every single day.',
    points: [
      'Treatment for fever, infection and injury',
      'Pregnancy check and help during calving',
      'Artificial insemination and fertility care',
      'Vaccination for FMD, HS and BQ',
    ],
  },
  {
    id: 'pets', icon: 'dog', accent: 'sindoor',
    title: 'Dog & Cat Care', mai: 'कुकुर-बिलाइ सेवा',
    summary:
      'Your dog or cat gets proper attention without a stressful ride in the car. Checkups, vaccinations and treatment, all done calmly in your own home.',
    points: [
      'Vaccination for puppies, kittens and adults',
      'Rabies vaccination',
      'Skin, ear, tick and flea treatment',
      'Health checkups and minor procedures',
    ],
  },
  {
    id: 'birds', icon: 'bird', accent: 'peacock',
    title: 'Birds & Poultry', mai: 'चिड़ै-मुर्गी सेवा',
    summary:
      'Backyard hens, roosters or a pet parrot. These small patients need a gentle, experienced hand and the right medicine, and that is exactly what they get.',
    points: [
      'Poultry flock health and vaccination',
      'Deworming and nutrition for birds',
      'Treatment for injury and infection',
      'Advice on housing and feed',
    ],
  },
  {
    id: 'vaccination', icon: 'syringe', accent: 'magenta',
    title: 'Vaccination & Deworming', mai: 'टीका आ कीड़ा-दवाइ',
    summary:
      'It is always easier to stop a disease than to treat one. Dr. Rajpal handles vaccination and deworming for a single pet or your whole herd, on a proper schedule.',
    points: [
      'Vaccination through the seasons',
      'Regular deworming',
      'Drives for the whole herd or flock',
      'Reminders so you never miss a date',
    ],
  },
  {
    id: 'emergency', icon: 'cross', accent: 'sindoor',
    title: 'Emergency Home Visits', mai: 'तुरंत सेवा',
    summary:
      'When something goes wrong, every minute counts. Call Dr. Rajpal and he sets out to reach you, day or night, anywhere in Darbhanga and the villages around it.',
    points: [
      'Quick help for accidents and poisoning',
      'Difficult labour and bloat',
      'Wound dressing and emergency surgery',
      'Available late into the night',
    ],
  },
  {
    id: 'nutrition', icon: 'leaf', accent: 'haldi',
    title: 'Nutrition & Advice', mai: 'खुराक आ सलाह',
    summary:
      'A healthy animal starts with the right food. Get simple, practical advice on feed, better milk yield, clean housing and keeping disease away.',
    points: [
      'Better feed and more milk',
      'Mineral and supplement advice',
      'Hygiene and housing guidance',
      'A simple plan to keep disease away',
    ],
  },
];

/* ---------- How a home visit works ---------- */
export const process = [
  { step: '०१', title: 'Call or WhatsApp', mai: 'फोन वा WhatsApp करू',
    body: 'Tell us which animal it is, what the problem looks like, and your village. One message on WhatsApp is enough to get started.' },
  { step: '०२', title: 'We fix a time', mai: 'समय तय होइत अछि',
    body: 'Dr. Rajpal calls back with a visit time. If it is an emergency, he leaves right away.' },
  { step: '०३', title: 'Doctor comes to you', mai: 'डॉक्टर अहाँक घर अबैत छथि',
    body: 'He arrives with medicines and equipment, examines your animal calmly, and treats it on the spot.' },
  { step: '०४', title: 'Care & follow up', mai: 'इलाज आ देखभाल',
    body: 'He explains what to do next and checks back later to make sure your animal is recovering well.' },
];

/* ---------- Why home service ---------- */
export const why = [
  { icon: 'home', title: 'No stressful travel', mai: 'कोनो दौड़-भाग नहि',
    body: 'Your animal stays calm at home. No loading a hurt cow onto a cart or dragging a scared dog to a clinic.' },
  { icon: 'clock', title: 'Faster in an emergency', mai: 'आपात मे तेज',
    body: 'For bloat, poisoning or a hard labour, the doctor reaches you instead of you racing around to find one.' },
  { icon: 'rupee', title: 'Honest, fair pricing', mai: 'ईमानदार दाम',
    body: 'The visit charge is fair and you are told it before he comes. No hidden costs and no overcharging.' },
  { icon: 'heart', title: 'One doctor you can trust', mai: 'भरोसा के डॉक्टर',
    body: 'The same familiar doctor every time, who knows your animals and your family.' },
];

/* ---------- Stats ---------- */
export const stats = [
  { value: '5000+', label: 'Animals treated', mai: 'पशु के इलाज' },
  { value: '40+', label: 'Villages covered', mai: 'गाम' },
  { value: '10+', label: 'Years of practice', mai: 'बरख अनुभव' },
  { value: '24/7', label: 'Emergency on call', mai: 'आपात सेवा' },
];

/* ---------- Coverage ---------- */
export const coverage = [
  'Sundarpur', 'Darbhanga town', 'Laheriasarai', 'Benipur',
  'Bahadurpur', 'Kamtaul', 'Jale', 'Singhwara', '& nearby villages',
];

/* ---------- Doctor ---------- */
export const doctor = {
  name: 'Dr. Rajpal Singh',
  nameMai: 'डॉक्टर राजपाल सिंह',
  role: 'Veterinary Doctor · Founder, Petvet Care',
  qualification: 'B.V.Sc & A.H. (Bachelor of Veterinary Science & Animal Husbandry)',
  photo: import.meta.env.BASE_URL + 'About/2.jpg',
  headline: 'A village vet who actually picks up the phone.',
  headlineMai: 'गाम के डॉक्टर, जे फोन उठबैत छथि।',
  bio: [
    'Dr. Rajpal Singh is the founder and owner of Petvet Care and a qualified veterinary doctor (B.V.Sc & A.H.) serving Sundarpur, Darbhanga and the wider Mithila region of Bihar. He grew up around cattle and farms, so he knows that here an animal is not just a pet. It is the family’s income and very often its food.',
    'Instead of sitting behind a clinic counter, he started Petvet Care with one simple promise: the doctor comes to you. From a buffalo struggling to give birth at dawn to a child’s injured puppy at night, he has spent over a decade on the road and treated thousands of animals across the district.',
    'Honest advice, a steady hand, and a phone that actually gets answered. That is what Petvet Care is about.',
  ],
  quote:
    'An animal cannot tell you where it hurts. So I read it, treat it, and put a worried family at ease, right there at their own door.',
  quoteMai: 'पशु बाजि नहि सकैत अछि जे कतय दर्द अछि। हमर काज छै ओकरा बुझब आ ठीक करब, अहीं घर पर।',
};

/* ---------- Doctor gallery (public/About) ---------- */
export const doctorGallery = [
  { src: 'About/9.jpg', alt: 'Dr. Rajpal Singh with a dog during a home visit in Darbhanga' },
  { src: 'About/11.jpg', alt: 'Dr. Rajpal Singh caring for a pet dog at home' },
  { src: 'About/10.jpg', alt: 'Dr. Rajpal Singh with a patient dog' },
  { src: 'About/7.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/8.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/4.jpg', alt: 'Dr. Rajpal Singh' },
];

/* ---------- Testimonials (samples, replace with real ones) ---------- */
export const testimonials = [
  { quote: 'Our buffalo went down with milk fever at midnight. Doctor saab reached us within the hour and saved her. We will never forget it.',
    name: 'Ramesh Yadav', place: 'Dairy farmer, Benipur' },
  { quote: 'He vaccinates all our dogs at home every year. The children are not scared and the dogs stay healthy. A very kind doctor.',
    name: 'Sunita Devi', place: 'Laheriasarai' },
  { quote: 'For my poultry farm he made a proper vaccination schedule. My losses dropped a lot. Fair pricing and good advice.',
    name: 'Md. Aslam', place: 'Poultry farmer, Jale' },
];

/* ---------- FAQ ---------- */
export const faqs = [
  { q: 'Which areas do you visit?',
    a: 'Sundarpur, Darbhanga town, Laheriasarai and the villages around them. If you are nearby, just call and we will tell you honestly whether we can reach you.' },
  { q: 'What animals do you treat?',
    a: 'Cows, buffaloes and other livestock, dogs, cats, and birds and poultry. Everything from large farm animals to small family pets.' },
  { q: 'Do you handle emergencies at night?',
    a: 'Yes. For real emergencies like accidents, poisoning, difficult labour or bloat, Dr. Rajpal is available day and night.' },
  { q: 'How much does a home visit cost?',
    a: 'The visit charge is kept fair and is told to you before he comes. Medicines are charged separately at honest rates.' },
  { q: 'How do I book?',
    a: 'The quickest way is WhatsApp. Send one message with your animal, the problem and your village. You can also just call the number.' },
];
