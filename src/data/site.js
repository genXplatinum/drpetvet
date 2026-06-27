/* ============================================================
   Single source of truth for all Petvet Care content.
   Edit copy, services, contact and doctor details here.

   CLIENT TODO before launch:
      - Replace PHONE with Dr. Rajpal's real WhatsApp/mobile number
      - Fill ADDRESS, MAP_URL, HOURS
      - Add a real doctor photo at public/doctor.jpg
      - Replace the sample testimonials with real ones
   ============================================================ */

// Replace with the real number in full international form, digits only.
// Format: country code + number (no +, spaces or dashes). India = 91.
export const PHONE = '919999999999'; // TODO: client's real WhatsApp number
export const PHONE_DISPLAY = '+91 99999 99999'; // TODO: pretty version shown on screen

// Pre-filled WhatsApp message helper. Returns a click-to-chat URL.
export const wa = (msg = 'Namaste Dr. Rajpal, I would like to book a home visit for my animal.') =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const tel = () => `tel:+${PHONE}`;

export const site = {
  name: 'Petvet Care',
  short: 'Petvet Care',
  doctor: 'Dr. Rajpal Singh',
  qualification: 'B.V.Sc & A.H.',
  est: '2018',
  tagline: 'Pashu chikitsa, aapke ghar tak.',
  taglineEn: 'The vet comes to your home.',
  city: 'Sundarpur, Darbhanga',
  region: 'Bihar, India',
  address: 'Sundarpur, Darbhanga, Bihar 846004', // TODO: confirm exact address
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sundarpur+Darbhanga',
  hours: 'Open every day, 7 AM to 9 PM. Emergencies anytime.',
  email: '', // optional, add if the doctor wants one shown
  social: [
    { label: 'WhatsApp', href: '' }, // filled by wa() in components
  ],
  manifesto:
    'When an animal is sick or hurt, the last thing it needs is a long, frightening journey to a clinic. So Dr. Rajpal Singh comes to you instead. You get the same trusted care at your own home, farm or gaushala, where your animal feels safe and calm.',
};

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

/* ---------- Services ---------- */
export const services = [
  {
    id: 'cattle',
    icon: 'cow',
    accent: 'green',
    title: 'Cattle & Buffalo Care',
    hindi: 'गौ-पशु सेवा',
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
    id: 'pets',
    icon: 'dog',
    accent: 'saffron',
    title: 'Dog & Cat Care',
    hindi: 'पालतू सेवा',
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
    id: 'birds',
    icon: 'bird',
    accent: 'sky',
    title: 'Birds & Poultry',
    hindi: 'पक्षी सेवा',
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
    id: 'vaccination',
    icon: 'syringe',
    accent: 'magenta',
    title: 'Vaccination & Deworming',
    hindi: 'टीकाकरण',
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
    id: 'emergency',
    icon: 'cross',
    accent: 'terra',
    title: 'Emergency Home Visits',
    hindi: 'आपातकालीन सेवा',
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
    id: 'nutrition',
    icon: 'leaf',
    accent: 'green',
    title: 'Nutrition & Advice',
    hindi: 'पोषण सलाह',
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
  {
    step: '01',
    title: 'Call or WhatsApp',
    hindi: 'फ़ोन करें',
    body: 'Tell us which animal it is, what the problem looks like, and your village. One message on WhatsApp is enough to get started.',
  },
  {
    step: '02',
    title: 'We fix a time',
    hindi: 'समय तय करें',
    body: 'Dr. Rajpal calls back with a visit time. If it is an emergency, he leaves right away.',
  },
  {
    step: '03',
    title: 'Doctor comes to you',
    hindi: 'डॉक्टर आपके घर',
    body: 'He arrives with medicines and equipment, examines your animal calmly, and treats it on the spot.',
  },
  {
    step: '04',
    title: 'Care & follow up',
    hindi: 'देखभाल',
    body: 'He explains what to do next and checks back later to make sure your animal is recovering well.',
  },
];

/* ---------- Why home service ---------- */
export const why = [
  {
    icon: 'home',
    title: 'No stressful travel',
    body: 'Your animal stays calm at home. No loading a hurt cow onto a cart or dragging a scared dog to a clinic.',
  },
  {
    icon: 'clock',
    title: 'Faster in an emergency',
    body: 'For bloat, poisoning or a hard labour, the doctor reaches you instead of you racing around to find one.',
  },
  {
    icon: 'rupee',
    title: 'Honest, fair pricing',
    body: 'The visit charge is fair and you are told it before he comes. No hidden costs and no overcharging.',
  },
  {
    icon: 'heart',
    title: 'One doctor you can trust',
    body: 'The same familiar doctor every time, who knows your animals and your family.',
  },
];

/* ---------- Stats ---------- */
export const stats = [
  { value: '5000+', label: 'Animals treated' },
  { value: '40+', label: 'Villages covered' },
  { value: '7+', label: 'Years of practice' },
  { value: '24/7', label: 'Emergency on call' },
];

/* ---------- Coverage area ---------- */
export const coverage = [
  'Sundarpur', 'Darbhanga town', 'Laheriasarai', 'Benipur',
  'Bahadurpur', 'Kamtaul', 'Jale', 'Singhwara', '& nearby villages',
];

/* ---------- Doctor ---------- */
export const doctor = {
  name: 'Dr. Rajpal Singh',
  role: 'Veterinary Doctor · Founder, Petvet Care',
  qualification: 'B.V.Sc & A.H. (Bachelor of Veterinary Science & Animal Husbandry)',
  photo: import.meta.env.BASE_URL + 'About/2.jpg',
  headline: 'A village vet who actually picks up the phone.',
  bio: [
    'Dr. Rajpal Singh is a qualified veterinary doctor (B.V.Sc) who looks after the animals of Sundarpur and the wider Darbhanga area. He grew up around cattle and farms, so he knows that here an animal is not just a pet. It is the family’s income and very often its food.',
    'Instead of sitting behind a clinic counter, he started Petvet Care with one simple promise: the doctor comes to you. From a buffalo struggling to give birth at dawn to a child’s injured puppy at night, he has spent years on the road and treated thousands of animals across the district.',
    'Honest advice, a steady hand, and a phone that actually gets answered. That is what Petvet Care is about.',
  ],
  quote:
    'An animal cannot tell you where it hurts. So I read it, treat it, and put a worried family at ease, right there at their own door.',
};

/* ---------- Doctor gallery (photos in public/About) ---------- */
export const doctorGallery = [
  { src: 'About/7.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/8.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/4.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/6.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/1.jpg', alt: 'Dr. Rajpal Singh' },
  { src: 'About/3.jpg', alt: 'Dr. Rajpal Singh' },
];

/* ---------- Testimonials (samples, replace with real ones) ---------- */
export const testimonials = [
  {
    quote:
      'Our buffalo went down with milk fever at midnight. Doctor saab reached us within the hour and saved her. We will never forget it.',
    name: 'Ramesh Yadav',
    place: 'Dairy farmer, Benipur',
  },
  {
    quote:
      'He vaccinates all our dogs at home every year. The children are not scared and the dogs stay healthy. A very kind doctor.',
    name: 'Sunita Devi',
    place: 'Laheriasarai',
  },
  {
    quote:
      'For my poultry farm he made a proper vaccination schedule. My losses dropped a lot. Fair pricing and good advice.',
    name: 'Md. Aslam',
    place: 'Poultry farmer, Jale',
  },
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    q: 'Which areas do you visit?',
    a: 'Sundarpur, Darbhanga town, Laheriasarai and the villages around them. If you are nearby, just call and we will tell you honestly whether we can reach you.',
  },
  {
    q: 'What animals do you treat?',
    a: 'Cows, buffaloes and other livestock, dogs, cats, and birds and poultry. Everything from large farm animals to small family pets.',
  },
  {
    q: 'Do you handle emergencies at night?',
    a: 'Yes. For real emergencies like accidents, poisoning, difficult labour or bloat, Dr. Rajpal is available day and night.',
  },
  {
    q: 'How much does a home visit cost?',
    a: 'The visit charge is kept fair and is told to you before he comes. Medicines are charged separately at honest rates.',
  },
  {
    q: 'How do I book?',
    a: 'The quickest way is WhatsApp. Send one message with your animal, the problem and your village. You can also just call the number.',
  },
];
