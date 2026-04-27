/**
 * Personalize text here. Asset URLs point at the reference invitation host so visuals match
 * https://vasile-carolina.invitatii-web.md/ — change `assetBase` when you host your own files.
 */
export const assetBase = 'https://vasile-carolina.invitatii-web.md';

export default {
  pageTitle: 'Lidia & Constantin',

  /** Optional extra tiling image on top of the built-in wedding motif */
  bodyPatternUrl: '/rings-motif.svg',

  /** Hero: local file in /public (same image for desktop and mobile) */
  heroImageDesktop: '/hero-main.png',
  heroImageMobile: '/hero-main.png',
  /**
   * Hero crop: vertical % aligns a point on the image with the same % on the box. Too high (e.g. 42%)
   * shifts the crop down the artwork and can clip faces at the top; too low (e.g. 14%) can clip at the
   * bottom. ~26–32% is a good band for this portrait; nudge by 2–3% if needed.
   */
  heroObjectPositionDesktop: 'center 28%',
  heroObjectPositionMobile: 'center 28%',
  heroHeight: '600px',
  /** Taller desktop hero = less vertical crop (more of the portrait height visible). */
  heroHeightDesktop: 'min(72vh, 760px)',
  /** Slightly higher so illustrated hero reads through overlay + mask */
  heroImageOpacity: 0.56,

  mire: 'Constantin',
  mireasa: 'Lidia',

  saveTheDateLabel: '~ Salvează Data ~',
  saveTheDate: '17 Octombrie 2026',

  /** Nuntă: 17 octombrie 2026, ora 17:00 (EEST) */
  weddingDateTime: '2026-10-17T17:00:00+03:00',

  introQuote:
    'Două suflete nu se leagă prin jurăminte rostite, ci prin tăceri împărtășite și prin felul în care inimile lor învață să bată în același ritm.',

  countdownDays: 'zile',
  countdownHours: 'ore',
  countdownMinutes: 'minute',
  countdownSeconds: 'secunde',
  countdownDoneMessage: 'A sosit ziua cea mare! Cu drag, vă așteptăm.',

  inviteTitle: 'VĂ INVITĂM LA NUNTA NOASTRĂ!',
  inviteImageUrl: '/gallery-1.png',
  inviteBody: `Într-o atmosferă plină de iubire, speranță și promisiuni,
vom uni destinele noastre pentru a păși împreună pe drumul unei povești scrise în doi.

Vă invităm să ne fiți alături într-un moment ce marchează începutul unui nou capitol în viața noastră.

Prezența dumneavoastră va adăuga strălucire și căldură acestei zile de neuitat,
transformând-o într-o amintire prețioasă pentru sufletele noastre. 💍`,

  inviteGodparentsLabel: 'Îndrumătorii spirituali',
  inviteGodparentsNames: 'Carolina & Vasile',
  inviteGodparentsRole: '(Nașii)',

  venueSectionTitle: 'Unde și Când?',
  venueEventLabel: 'Locația Evenimentului',
  venueName: "Lu'Grand",
  venueDateTime: '17 octombrie 2026, sâmbătă, ora 17:00',
  venueLocation: 'Hîncești, Republica Moldova',
  /** Local photo of the venue (Lu'Grand) */
  venueCardImageUrl: '/venue-location.png',
  venueMapLink: 'https://maps.app.goo.gl/DpDQddF1jWhLSDYY9',
  venueMapEmbed:
    'https://www.google.com/maps?q=46.840747%2C28.6146818&hl=ro&z=16&output=embed',
  venueMapButtonLabel: 'Vezi Harta',

  funImageDesktop: `${assetBase}/static/media/welcom.f3d72f99528c0eaebc58.jpg`,
  funImageMobile: `${assetBase}/static/media/welcom2.8db192fce0288f8ff43e.jpg`,
  funSectionHeight: '400px',
  funImageOpacity: 0.2,
  funReminder: `Ne-ar bucura confirmarea dumneavoastră,
care ne va ajuta să pregătim fiecare detaliu cu grijă și eleganță.`,
  funDressCodeNote:
    'Cu delicatețe, vă rugăm să evitați ținutele în alb sau foarte deschise la culoare — în această zi specială ne bucurăm să păstrăm nuanțele de alb pentru mireasă.',

  rsvpTitle: 'Confirmare',
  rsvpDeadlineText:
    'Vă rugăm să confirmați prezența\npână la data de 1 septembrie 2026',

  labelFullName: 'Nume Prenume:',
  labelPhone: 'Număr de contact:',
  labelPresence: 'Selectați Prezența:',
  presenceYes: 'Da, vom fi prezenți',
  labelAdults: 'Adulți prezenți:',
  labelChildren: 'Copii prezenți:',
  presenceNo: 'Nu vom fi prezenți',
  labelMessage: 'Lăsați un mesaj sau detalii:',
  submitLabel: 'Confirmați Prezența',

  footerAnticipation:
    'Abia așteptăm să vă vedem! Dacă aveți orice altă întrebare, vă rugăm să ne contactați sau scrieți-ne un mesaj:',
  footerPhoneDisplay: '+491746206192',
  footerPhoneTel: '+491746206192',
  footerLinks: [
    { label: 'Phone', href: 'tel:+491746206192' },
    { label: 'Viber', href: 'viber://chat?number=%2B491746206192' },
    { label: 'WhatsApp', href: 'https://wa.me/+491746206192' },
  ],

  closingLine: 'Vă așteptăm cu drag!',

  formspreeFormId: 'mnjlgjey',
};
