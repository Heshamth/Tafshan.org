// ============================================================
//  TAFSHAN — Curated Sites List
// ============================================================
const SITES = [
  {
    url: "https://zombo.com",
    name: "Zombo.com",
    nameAr: "زومبو",
    desc: "You can do anything here. Anything at all.",
    descAr: "يمكنك فعل أي شيء هنا. أي شيء على الإطلاق.",
    emoji: "🌀"
  },
  {
    url: "https://cat-bounce.com",
    name: "Cat Bounce",
    nameAr: "قطط تقفز",
    desc: "Watch cats bounce around your screen.",
    descAr: "شاهد القطط تقفز على شاشتك.",
    emoji: "🐱"
  },
  {
    url: "https://endless.horse",
    name: "Endless Horse",
    nameAr: "الحصان اللانهائي",
    desc: "A horse. That goes on forever.",
    descAr: "حصان. لا ينتهي أبداً.",
    emoji: "🐴"
  },
  {
    url: "https://hackertyper.net",
    name: "Hacker Typer",
    nameAr: "الهاكر",
    desc: "Pretend to be a movie hacker. Type anything!",
    descAr: "تظاهر بأنك هاكر في فيلم. اكتب أي شيء!",
    emoji: "💻"
  },
  {
    url: "https://thenicestplace.in",
    name: "The Nicest Place",
    nameAr: "أجمل مكان",
    desc: "Strangers giving you virtual hugs.",
    descAr: "غرباء يعطونك أحضاناً افتراضية.",
    emoji: "🤗"
  },
  {
    url: "https://pointerpointer.com",
    name: "Pointer Pointer",
    nameAr: "مؤشر المؤشر",
    desc: "Someone is always pointing at your cursor.",
    descAr: "شخص ما يشير دائماً إلى مؤشرك.",
    emoji: "👆"
  },
  {
    url: "https://patatap.com",
    name: "Patatap",
    nameAr: "باتاتاب",
    desc: "Press keys to create music and animation.",
    descAr: "اضغط المفاتيح لإنشاء موسيقى ورسوم متحركة.",
    emoji: "🎵"
  },
  {
    url: "https://windows93.net",
    name: "Windows 93",
    nameAr: "ويندوز 93",
    desc: "A fake retro OS full of surprises.",
    descAr: "نظام تشغيل قديم مزيف مليء بالمفاجآت.",
    emoji: "🖥️"
  },
  {
    url: "https://findtheinvisiblecow.com",
    name: "Find the Invisible Cow",
    nameAr: "ابحث عن البقرة الخفية",
    desc: "Find the invisible cow using sound!",
    descAr: "ابحث عن البقرة الخفية باستخدام الصوت!",
    emoji: "🐄"
  },
  {
    url: "https://www.bouncingdvdlogo.com",
    name: "Bouncing DVD Logo",
    nameAr: "شعار DVD المتحرك",
    desc: "Will it hit the corner? Watch and wait.",
    descAr: "هل سيضرب الزاوية؟ شاهد وانتظر.",
    emoji: "📀"
  },
  {
    url: "https://stellarium-web.org",
    name: "Stellarium Web",
    nameAr: "ستيلاريوم",
    desc: "Explore the night sky from your browser.",
    descAr: "استكشف السماء الليلية من متصفحك.",
    emoji: "🌌"
  },
  {
    url: "https://www.koalastothemax.com",
    name: "Koalas to the Max",
    nameAr: "الكوالا للحد الأقصى",
    desc: "Hover to reveal a secret image made of dots.",
    descAr: "مرر المؤشر للكشف عن صورة سرية من النقاط.",
    emoji: "🐨"
  },
  {
    url: "https://heeeeeeeey.com",
    name: "Heeeeeeeey",
    nameAr: "هيييييي",
    desc: "Just say hey.",
    descAr: "فقط قل هاي.",
    emoji: "👋"
  },
  {
    url: "https://ertdfgcvb.xyz",
    name: "ertdfgcvb",
    nameAr: "رسوم ASCII",
    desc: "Hypnotic ASCII animations.",
    descAr: "رسوم متحركة ASCII منومة.",
    emoji: "🔮"
  },
  {
    url: "https://theuselessweb.com",
    name: "The Useless Web",
    nameAr: "الويب عديم الفائدة",
    desc: "Another button to send you somewhere useless!",
    descAr: "زر آخر يرسلك إلى مكان عديم الفائدة!",
    emoji: "🕸️"
  },
  {
    url: "https://weirdorconfusing.com",
    name: "Weird or Confusing",
    nameAr: "غريب أم محير",
    desc: "The most confusing website ever made.",
    descAr: "أكثر موقع محير تم صنعه على الإطلاق.",
    emoji: "😵"
  },
  {
    url: "https://papertoilet.com",
    name: "Paper Toilet",
    nameAr: "ورقة التواليت",
    desc: "Satisfy your urge to unroll toilet paper.",
    descAr: "أشبع رغبتك في فك ورق التواليت.",
    emoji: "🧻"
  },
  {
    url: "https://ducksarethebest.com",
    name: "Ducks Are The Best",
    nameAr: "البط هو الأفضل",
    desc: "Ducks are the best. That's it.",
    descAr: "البط هو الأفضل. هذا كل شيء.",
    emoji: "🦆"
  },
  {
    url: "https://checkboxrace.com",
    name: "Checkbox Race",
    nameAr: "سباق مربعات الاختيار",
    desc: "Race to check all the checkboxes!",
    descAr: "تسابق لتحديد جميع مربعات الاختيار!",
    emoji: "☑️"
  },
  {
    url: "https://thatsthefinger.com",
    name: "That's the Finger",
    nameAr: "هذا هو الإصبع",
    desc: "Just... an important finger.",
    descAr: "فقط... إصبع مهم.",
    emoji: "☝️"
  },
  {
    url: "https://thisthat.es",
    name: "This or That",
    nameAr: "هذا أم ذاك",
    desc: "Make impossible choices forever.",
    descAr: "اتخذ قرارات مستحيلة إلى الأبد.",
    emoji: "🤔"
  },
  {
    url: "https://strobe.cool",
    name: "Strobe.cool",
    nameAr: "ستروب",
    desc: "A mesmerizing strobe light experience.",
    descAr: "تجربة ضوء ساطع مبهرة.",
    emoji: "✨"
  },
  {
    url: "https://heaveninabrowser.com",
    name: "Heaven in a Browser",
    nameAr: "الجنة في متصفح",
    desc: "A peaceful, heavenly experience.",
    descAr: "تجربة سلمية وهادئة.",
    emoji: "☁️"
  },
  {
    url: "https://www.staggeringbeauty.com",
    name: "Staggering Beauty",
    nameAr: "جمال مذهل",
    desc: "WARNING: Flashing lights. Shake the worm!",
    descAr: "تحذير: أضواء وامضة. هز الدودة!",
    emoji: "🐛"
  },
  {
    url: "https://clickclickclick.click",
    name: "Click Click Click",
    nameAr: "انقر انقر انقر",
    desc: "Just... keep clicking.",
    descAr: "فقط... استمر في النقر.",
    emoji: "🖱️"
  },
  {
    url: "https://artsandculture.google.com/experiment/puzzle-party/EwGHLyghW-A0Lg",
    name: "Google Art Puzzle",
    nameAr: "أحجية جوجل للفنون",
    desc: "Solve beautiful art puzzles.",
    descAr: "حل أحاجي فنية جميلة.",
    emoji: "🧩"
  },
  {
    url: "https://www.fallingfalling.com",
    name: "Falling Falling",
    nameAr: "أسقط أسقط",
    desc: "Fall forever through a hypnotic tunnel.",
    descAr: "اسقط إلى الأبد عبر نفق منوم.",
    emoji: "🌈"
  },
  {
    url: "https://isitchristmas.com",
    name: "Is It Christmas?",
    nameAr: "هل هو عيد الميلاد؟",
    desc: "The most important question answered.",
    descAr: "الإجابة على أهم سؤال.",
    emoji: "🎄"
  },
  {
    url: "https://hasthelargehadroncolliderdestroyedtheworldyet.com",
    name: "LHC Destroyed World?",
    nameAr: "هل دمر العالم؟",
    desc: "Has the Large Hadron Collider destroyed the world yet?",
    descAr: "هل دمر مصادم الهادرونات الكبير العالم بعد؟",
    emoji: "⚛️"
  },
  {
    url: "https://www.patience-is-a-virtue.org",
    name: "Patience is a Virtue",
    nameAr: "الصبر فضيلة",
    desc: "Test your patience. Really.",
    descAr: "اختبر صبرك. حقاً.",
    emoji: "⏳"
  }
];

// ============================================================
//  SHUFFLE QUEUE — no repeats until all 30 sites are seen
// ============================================================

function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function _buildQueue(lastUrl) {
  let urls = _shuffle(SITES.map(s => s.url));
  // Prevent first pick from being same as last visited
  if (lastUrl && urls[0] === lastUrl && urls.length > 1) {
    const swap = Math.floor(Math.random() * (urls.length - 1)) + 1;
    [urls[0], urls[swap]] = [urls[swap], urls[0]];
  }
  return urls;
}

/**
 * Returns the next site from the shuffle queue.
 * Cycles through all sites before any repeats, then reshuffles.
 */
function getNextSite() {
  let queue = null;
  try {
    const raw = sessionStorage.getItem('tf_queue');
    if (raw) queue = JSON.parse(raw);
  } catch (e) { queue = null; }

  const lastUrl = sessionStorage.getItem('tf_last') || null;
  const count   = parseInt(sessionStorage.getItem('tf_count') || '0', 10);

  if (!Array.isArray(queue) || queue.length === 0) {
    queue = _buildQueue(lastUrl);
  }

  const nextUrl = queue.shift();

  try {
    sessionStorage.setItem('tf_queue', JSON.stringify(queue));
    sessionStorage.setItem('tf_last',  nextUrl);
    sessionStorage.setItem('tf_count', String(count + 1));
  } catch (e) { /* sessionStorage might be blocked */ }

  return SITES.find(s => s.url === nextUrl) || SITES[0];
}

function getVisitCount() {
  return parseInt(sessionStorage.getItem('tf_count') || '0', 10);
}

// backward-compat alias
function getRandomSite() { return getNextSite(); }
