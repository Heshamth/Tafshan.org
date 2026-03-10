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
    url: "https://heaveninabrowser.com",
    name: "Heaven in a Browser",
    nameAr: "الجنة في متصفح",
    desc: "A peaceful, heavenly experience.",
    descAr: "تجربة سلمية وهادئة.",
    emoji: "☁️"
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
    url: "https://strobe.cool",
    name: "Strobe.cool",
    nameAr: "ستروب",
    desc: "A mesmerizing strobe light experience.",
    descAr: "تجربة ضوء ساطع مبهرة.",
    emoji: "✨"
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
    url: "https://thatsthefinger.com",
    name: "That's the Finger",
    nameAr: "هذا هو الإصبع",
    desc: "Just... an important finger.",
    descAr: "فقط... إصبع مهم.",
    emoji: "☝️"
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
    url: "https://thisthat.es",
    name: "This or That",
    nameAr: "هذا أم ذاك",
    desc: "Make impossible choices forever.",
    descAr: "اتخذ قرارات مستحيلة إلى الأبد.",
    emoji: "🤔"
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
    url: "https://checkboxrace.com",
    name: "Checkbox Race",
    nameAr: "سباق مربعات الاختيار",
    desc: "Race to check all the checkboxes!",
    descAr: "تسابق لتحديد جميع مربعات الاختيار!",
    emoji: "☑️"
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
    url: "https://trypap.com",
    name: "The Password Game",
    nameAr: "لعبة كلمة المرور",
    desc: "Can you follow all the password rules?",
    descAr: "هل يمكنك اتباع جميع قواعد كلمة المرور؟",
    emoji: "🔐"
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
    url: "https://www.koalastothemax.com",
    name: "Koalas to the Max",
    nameAr: "الكوالا للحد الأقصى",
    desc: "Hover to reveal a secret image made of dots.",
    descAr: "مرر المؤشر للكشف عن صورة سرية من النقاط.",
    emoji: "🐨"
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
    nameAr: "أحرف عشوائية",
    desc: "Hypnotic ASCII animations.",
    descAr: "رسوم متحركة ASCII منومة.",
    emoji: "🔮"
  },
  {
    url: "https://wordcounttool.com",
    name: "Word Count Tool",
    nameAr: "أداة عد الكلمات",
    desc: "Count your words. Compulsively.",
    descAr: "عد كلماتك. بشكل قهري.",
    emoji: "📝"
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
    url: "https://bongochamp.com",
    name: "Bongo Cat",
    nameAr: "قطة البونغو",
    desc: "A cat playing bongo drums. Purrrfect.",
    descAr: "قطة تعزف على طبول البونغو. رائع.",
    emoji: "🥁"
  },
  {
    url: "https://thejibber.com",
    name: "The Jibber",
    nameAr: "الثرثار",
    desc: "Nonsense sentences that make you think.",
    descAr: "جمل هراء تجعلك تفكر.",
    emoji: "💬"
  },
  {
    url: "https://clickclickclick.click",
    name: "Click Click Click",
    nameAr: "انقر انقر انقر",
    desc: "Just... keep clicking.",
    descAr: "فقط... استمر في النقر.",
    emoji: "🖱️"
  }
];

// Shuffle function for randomization
function shuffleSites() {
  const arr = [...SITES];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomSite(excludeUrl = null) {
  const available = SITES.filter(s => s.url !== excludeUrl);
  return available[Math.floor(Math.random() * available.length)];
}
