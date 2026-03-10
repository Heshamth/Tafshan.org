// ============================================================
//  TAFSHAN — Curated Sites List (100 clean, fun, safe sites)
//  To add a site: copy any entry block and fill in the fields.
//  To remove a site: delete its { } block.
//  The count is always dynamic — no hardcoded numbers needed.
// ============================================================
const SITES = [

  // ── Classics ────────────────────────────────────────────
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
    desc: "Type anything and look like a movie hacker!",
    descAr: "اكتب أي شيء وتظاهر بأنك هاكر في فيلم!",
    emoji: "💻"
  },
  {
    url: "https://thenicestplace.in",
    name: "The Nicest Place",
    nameAr: "أجمل مكان",
    desc: "Strangers giving you warm virtual hugs.",
    descAr: "غرباء يعطونك أحضاناً افتراضية دافئة.",
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
    desc: "Press any key to make music and animations.",
    descAr: "اضغط أي مفتاح لإنشاء موسيقى ورسوم متحركة.",
    emoji: "🎵"
  },
  {
    url: "https://windows93.net",
    name: "Windows 93",
    nameAr: "ويندوز 93",
    desc: "A fake retro OS packed with surprises.",
    descAr: "نظام تشغيل قديم مزيف مليء بالمفاجآت.",
    emoji: "🖥️"
  },
  {
    url: "https://findtheinvisiblecow.com",
    name: "Find the Invisible Cow",
    nameAr: "ابحث عن البقرة الخفية",
    desc: "Find the hidden cow using only sound!",
    descAr: "ابحث عن البقرة الخفية باستخدام الصوت فقط!",
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
    desc: "Explore the real night sky from your browser.",
    descAr: "استكشف السماء الليلية الحقيقية من متصفحك.",
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
    desc: "Just... hey.",
    descAr: "فقط... هاي.",
    emoji: "👋"
  },
  {
    url: "https://ertdfgcvb.xyz",
    name: "ertdfgcvb",
    nameAr: "رسوم ASCII",
    desc: "Hypnotic ASCII animations that pull you in.",
    descAr: "رسوم متحركة ASCII منومة تسحبك داخلها.",
    emoji: "🔮"
  },
  {
    url: "https://theuselessweb.com",
    name: "The Useless Web",
    nameAr: "الويب عديم الفائدة",
    desc: "Another button that sends you somewhere random!",
    descAr: "زر آخر يرسلك إلى مكان عشوائي!",
    emoji: "🕸️"
  },
  {
    url: "https://weirdorconfusing.com",
    name: "Weird or Confusing",
    nameAr: "غريب أم محير",
    desc: "The internet's most confusing experience.",
    descAr: "أكثر تجربة محيرة على الإنترنت.",
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
    desc: "Ducks are the best. Period.",
    descAr: "البط هو الأفضل. نقطة.",
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
    url: "https://thisthat.es",
    name: "This or That",
    nameAr: "هذا أم ذاك",
    desc: "Make impossible choices. Forever.",
    descAr: "اتخذ قرارات مستحيلة. إلى الأبد.",
    emoji: "🤔"
  },
  {
    url: "https://strobe.cool",
    name: "Strobe.cool",
    nameAr: "ستروب",
    desc: "A mesmerising strobe light experience.",
    descAr: "تجربة ضوء وامض مبهرة.",
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
    desc: "Shake the worm for a surprise! (Flashing lights)",
    descAr: "هز الدودة للمفاجأة! (أضواء وامضة)",
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
    desc: "Fall through a hypnotic infinite tunnel.",
    descAr: "اسقط عبر نفق منوم لا نهاية له.",
    emoji: "🌈"
  },
  {
    url: "https://isitchristmas.com",
    name: "Is It Christmas?",
    nameAr: "هل هو عيد الميلاد؟",
    desc: "The most important question, answered.",
    descAr: "الإجابة على أهم سؤال.",
    emoji: "🎄"
  },
  {
    url: "https://hasthelargehadroncolliderdestroyedtheworldyet.com",
    name: "LHC Destroyed the World?",
    nameAr: "هل دمر مصادم الجسيمات العالم؟",
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
  },

  // ── Cats & Animals ──────────────────────────────────────
  {
    url: "https://www.nyan.cat",
    name: "Nyan Cat",
    nameAr: "القطة نيان",
    desc: "The legendary rainbow cat flying through space.",
    descAr: "القطة الأسطورية تطير في الفضاء بقوس قزح.",
    emoji: "🌈"
  },
  {
    url: "https://procatinator.com",
    name: "Procatinator",
    nameAr: "المتسامح القطي",
    desc: "Random cats + music. The perfect procrastination tool.",
    descAr: "قطط عشوائية مع موسيقى. أداة التسويف المثالية.",
    emoji: "😹"
  },
  {
    url: "https://longdogechallenge.com",
    name: "Long Doge Challenge",
    nameAr: "تحدي الكلب الطويل",
    desc: "How long can you make Doge? Keep scrolling.",
    descAr: "كم يمكنك إطالة دوج؟ استمر في التمرير.",
    emoji: "🐕"
  },
  {
    url: "https://www.omfgdogs.com",
    name: "OMFG Dogs",
    nameAr: "كلاب تجري",
    desc: "Dogs running across your screen at full speed.",
    descAr: "كلاب تجري عبر شاشتك بأقصى سرعة.",
    emoji: "🐶"
  },
  {
    url: "https://bongo.cat",
    name: "Bongo Cat",
    nameAr: "قطة البونغو",
    desc: "Play any keyboard key and this cat jams with you.",
    descAr: "اضغط أي مفتاح وستعزف القطة معك.",
    emoji: "🥁"
  },
  {
    url: "https://www.chihuahuaormuffin.com",
    name: "Chihuahua or Muffin?",
    nameAr: "شيواوا أم كعكة؟",
    desc: "Can you tell the difference? It's harder than you think.",
    descAr: "هل تستطيع التمييز؟ الأمر أصعب مما تتخيل.",
    emoji: "🧁"
  },

  // ── Relaxing & Peaceful ──────────────────────────────────
  {
    url: "https://www.donothingfor2minutes.com",
    name: "Do Nothing for 2 Minutes",
    nameAr: "لا تفعل شيئاً لدقيقتين",
    desc: "Just watch the waves and do nothing. Can you?",
    descAr: "فقط شاهد الأمواج ولا تفعل شيئاً. هل تستطيع؟",
    emoji: "🌊"
  },
  {
    url: "https://thequietplaceproject.com",
    name: "The Quiet Place",
    nameAr: "المكان الهادئ",
    desc: "A peaceful corner of the internet, just for you.",
    descAr: "زاوية هادئة من الإنترنت، خصيصاً لك.",
    emoji: "🤫"
  },
  {
    url: "https://www.noisli.com",
    name: "Noisli",
    nameAr: "نويزلي",
    desc: "Mix ambient sounds to create your perfect environment.",
    descAr: "امزج الأصوات المحيطة لخلق بيئتك المثالية.",
    emoji: "🎧"
  },

  // ── Creative & Art ──────────────────────────────────────
  {
    url: "https://www.weavesilk.com",
    name: "Weave Silk",
    nameAr: "نسج الحرير",
    desc: "Create stunning symmetric silk art with your mouse.",
    descAr: "أنشئ فناً من الحرير المتماثل بالماوس.",
    emoji: "🎨"
  },
  {
    url: "https://www.bomomo.com",
    name: "Bomomo",
    nameAr: "بومومو",
    desc: "Unique drawing tools that create wild abstract art.",
    descAr: "أدوات رسم فريدة تخلق فناً تجريدياً مذهلاً.",
    emoji: "🖌️"
  },
  {
    url: "https://www.jacksonpollock.org",
    name: "Jackson Pollock",
    nameAr: "جاكسون بولوك",
    desc: "Paint like Jackson Pollock. Click to change color.",
    descAr: "ارسم مثل جاكسون بولوك. انقر لتغيير اللون.",
    emoji: "🫳"
  },
  {
    url: "https://zoomquilt.org",
    name: "Zoom Quilt",
    nameAr: "اللوحة اللانهائية",
    desc: "An infinitely zooming collaborative artwork.",
    descAr: "لوحة فنية تعاونية تكبر إلى ما لا نهاية.",
    emoji: "🔭"
  },

  // ── Music & Sound ────────────────────────────────────────
  {
    url: "https://musiclab.chromeexperiments.com",
    name: "Chrome Music Lab",
    nameAr: "مختبر الموسيقى",
    desc: "Google's music playground. Make music visually.",
    descAr: "ملعب جوجل الموسيقي. اصنع موسيقى بصرياً.",
    emoji: "🎹"
  },
  {
    url: "https://www.incredibox.com",
    name: "Incredibox",
    nameAr: "إنكريديبوكس",
    desc: "Mix beats and create music with animated characters.",
    descAr: "امزج الإيقاعات وأنشئ موسيقى مع شخصيات متحركة.",
    emoji: "🎶"
  },
  {
    url: "https://www.radiooooo.com",
    name: "Radiooooo",
    nameAr: "راديو الزمن",
    desc: "A time machine radio. Pick any decade, any country.",
    descAr: "راديو آلة الزمن. اختر أي عقد وأي بلد.",
    emoji: "📻"
  },
  {
    url: "https://multiplayerpiano.net",
    name: "Multiplayer Piano",
    nameAr: "بيانو الجميع",
    desc: "Play piano with strangers from around the world.",
    descAr: "العب البيانو مع غرباء من حول العالم.",
    emoji: "🎵"
  },
  {
    url: "https://noooooooooooooo.com",
    name: "NOOOOOOOO",
    nameAr: "لا لا لا لا لا",
    desc: "The most dramatic NO button on the internet.",
    descAr: "زر الـ'لا' الأكثر دراما على الإنترنت.",
    emoji: "😱"
  },

  // ── Games ────────────────────────────────────────────────
  {
    url: "https://slither.io",
    name: "Slither.io",
    nameAr: "سليذر",
    desc: "Multiplayer snake game. Grow the biggest snake!",
    descAr: "لعبة ثعبان متعددة اللاعبين. كن الأكبر!",
    emoji: "🐍"
  },
  {
    url: "https://orteil.dashnet.org/cookieclicker",
    name: "Cookie Clicker",
    nameAr: "ناقر الكعكة",
    desc: "Click cookies. Buy upgrades. It never ends.",
    descAr: "انقر الكعكات. اشتر ترقيات. لا تنتهي أبداً.",
    emoji: "🍪"
  },
  {
    url: "https://www.2048.la",
    name: "2048",
    nameAr: "2048",
    desc: "Slide tiles and reach 2048. Addictive puzzle!",
    descAr: "حرك البلاطات والوصل لـ2048. لعبة ألغاز مدمنة!",
    emoji: "🔢"
  },
  {
    url: "https://www.drawastickman.com",
    name: "Draw a Stickman",
    nameAr: "ارسم إنسان عصا",
    desc: "Draw a stickman and watch it come to life.",
    descAr: "ارسم إنسان عصا وشاهده ينبض بالحياة.",
    emoji: "✏️"
  },
  {
    url: "https://www.littlealchemy2.com",
    name: "Little Alchemy 2",
    nameAr: "الكيمياء الصغيرة 2",
    desc: "Mix elements to discover new things. Endlessly.",
    descAr: "امزج العناصر لاكتشاف أشياء جديدة. إلى الأبد.",
    emoji: "⚗️"
  },
  {
    url: "https://www.linerider.com",
    name: "Line Rider",
    nameAr: "راكب الخط",
    desc: "Draw a slope and watch a sledder ride it.",
    descAr: "ارسم منحدراً وشاهد متزلجاً يمشي عليه.",
    emoji: "🛷"
  },
  {
    url: "https://sandspiel.club",
    name: "Sandspiel",
    nameAr: "لعبة الرمال",
    desc: "A falling sand physics simulation game.",
    descAr: "لعبة محاكاة فيزياء الرمال المتساقطة.",
    emoji: "⏳"
  },
  {
    url: "https://www.ncase.me/trust",
    name: "The Evolution of Trust",
    nameAr: "تطور الثقة",
    desc: "An interactive game about cooperation and trust.",
    descAr: "لعبة تفاعلية عن التعاون والثقة.",
    emoji: "🤝"
  },

  // ── Typing & Reaction ────────────────────────────────────
  {
    url: "https://monkeytype.com",
    name: "Monkeytype",
    nameAr: "اختبار الطباعة",
    desc: "A beautiful, minimal typing speed test.",
    descAr: "اختبار سرعة الطباعة بتصميم بسيط وجميل.",
    emoji: "⌨️"
  },
  {
    url: "https://www.typeracer.com",
    name: "TypeRacer",
    nameAr: "سباق الطباعة",
    desc: "Race other players by typing as fast as you can.",
    descAr: "تسابق مع لاعبين آخرين بالطباعة بأقصى سرعة.",
    emoji: "🏎️"
  },
  {
    url: "https://humanbenchmark.com",
    name: "Human Benchmark",
    nameAr: "قياس الإنسان",
    desc: "Test your reaction time, memory, and more.",
    descAr: "اختبر وقت ردة فعلك وذاكرتك والمزيد.",
    emoji: "⚡"
  },

  // ── Science & Space ──────────────────────────────────────
  {
    url: "https://stars.chromeexperiments.com",
    name: "100,000 Stars",
    nameAr: "١٠٠٬٠٠٠ نجمة",
    desc: "An interactive visualization of nearby stars.",
    descAr: "تصور تفاعلي للنجوم القريبة من الشمس.",
    emoji: "⭐"
  },
  {
    url: "https://neal.fun/size-of-space",
    name: "Size of Space",
    nameAr: "حجم الفضاء",
    desc: "Scroll to understand just how massive space is.",
    descAr: "مرر لتفهم حجم الفضاء الهائل.",
    emoji: "🌍"
  },
  {
    url: "https://neal.fun/deep-sea",
    name: "Neal Fun: Deep Sea",
    nameAr: "أعماق البحار",
    desc: "Scroll down to explore the deep ocean.",
    descAr: "مرر للأسفل لاستكشاف أعماق المحيط.",
    emoji: "🦑"
  },

  // ── Fun Facts & Stats ────────────────────────────────────
  {
    url: "https://neal.fun/life-stats",
    name: "Life Stats",
    nameAr: "إحصائيات حياتك",
    desc: "Enter your birthday to see your life statistics.",
    descAr: "أدخل تاريخ ميلادك لترى إحصائيات حياتك.",
    emoji: "📊"
  },
  {
    url: "https://neal.fun/absurd-trolley-problems",
    name: "Absurd Trolley Problems",
    nameAr: "مشكلة العربة المجنونة",
    desc: "Make increasingly ridiculous moral choices.",
    descAr: "اتخذ خيارات أخلاقية سخيفة بشكل متزايد.",
    emoji: "🚃"
  },
  {
    url: "https://neal.fun/spend",
    name: "Spend Bill Gates' Money",
    nameAr: "أنفق ثروة بيل جيتس",
    desc: "You have 100 billion dollars. Can you spend it all?",
    descAr: "لديك 100 مليار دولار. هل تستطيع إنفاقها كلها؟",
    emoji: "💵"
  },
  {
    url: "https://neal.fun/worlds-smallest-violin",
    name: "World's Smallest Violin",
    nameAr: "أصغر كمان في العالم",
    desc: "Hover to play the world's tiniest violin.",
    descAr: "مرر المؤشر لتعزف أصغر كمان في العالم.",
    emoji: "🎻"
  },
  {
    url: "https://www.internetlivestats.com",
    name: "Internet Live Stats",
    nameAr: "إحصائيات الإنترنت الحية",
    desc: "Watch the internet grow in real time.",
    descAr: "شاهد الإنترنت ينمو في الوقت الفعلي.",
    emoji: "📡"
  },
  {
    url: "https://www.uselessfacts.net",
    name: "Useless Facts",
    nameAr: "حقائق لا فائدة منها",
    desc: "Random utterly useless facts you'll never forget.",
    descAr: "حقائق عشوائية لا فائدة منها لن تنساها أبداً.",
    emoji: "📚"
  },
  {
    url: "https://www.freerice.com",
    name: "Free Rice",
    nameAr: "أرز مجاني",
    desc: "Answer trivia and donate rice to people in need.",
    descAr: "أجب على الأسئلة وتبرع بالأرز للمحتاجين.",
    emoji: "🍚"
  },

  // ── Geography & World ────────────────────────────────────
  {
    url: "https://thetruesize.com",
    name: "The True Size",
    nameAr: "الحجم الحقيقي",
    desc: "Drag countries to see their true size vs maps.",
    descAr: "اسحب الدول لترى حجمها الحقيقي مقارنة بالخرائط.",
    emoji: "🗺️"
  },
  {
    url: "https://mapcrunch.com",
    name: "Map Crunch",
    nameAr: "رحلة عشوائية",
    desc: "Teleport to a random place on Google Street View.",
    descAr: "انتقل إلى مكان عشوائي على خرائط جوجل.",
    emoji: "📍"
  },
  {
    url: "https://globle-game.com",
    name: "Globle",
    nameAr: "غلوبل",
    desc: "Guess the mystery country. Hot and cold hints!",
    descAr: "خمن الدولة الغامضة. تلميحات حار وبارد!",
    emoji: "🌏"
  },
  {
    url: "https://worldle.teuteuf.fr",
    name: "Worldle",
    nameAr: "وورلدل",
    desc: "Wordle but with world country silhouettes.",
    descAr: "ووردل لكن مع صور ظلية لدول العالم.",
    emoji: "🌍"
  },

  // ── Quizzes & Brain Games ────────────────────────────────
  {
    url: "https://en.akinator.com",
    name: "Akinator",
    nameAr: "أكيناتور",
    desc: "A genie that can guess any person you're thinking of.",
    descAr: "جني يستطيع تخمين أي شخص تفكر فيه.",
    emoji: "🧞"
  },
  {
    url: "https://www.sporcle.com",
    name: "Sporcle",
    nameAr: "سبوركل",
    desc: "The world's best trivia and quiz games.",
    descAr: "أفضل ألعاب المعلومات العامة في العالم.",
    emoji: "🧠"
  },
  {
    url: "https://thewikigame.com",
    name: "The Wiki Game",
    nameAr: "لعبة ويكيبيديا",
    desc: "Race from one Wikipedia article to another.",
    descAr: "تسابق من مقالة ويكيبيديا إلى أخرى.",
    emoji: "📖"
  },
  {
    url: "https://trypap.com",
    name: "The Password Game",
    nameAr: "لعبة كلمة المرور",
    desc: "Can you follow ALL of the password rules?",
    descAr: "هل تستطيع اتباع جميع قواعد كلمة المرور؟",
    emoji: "🔐"
  },

  // ── Drawing & AI ─────────────────────────────────────────
  {
    url: "https://quickdraw.withgoogle.com",
    name: "Quick Draw",
    nameAr: "الرسم السريع",
    desc: "Draw something and let Google's AI guess what it is.",
    descAr: "ارسم شيئاً ودع ذكاء جوجل الاصطناعي يخمنه.",
    emoji: "✍️"
  },
  {
    url: "https://experiments.withgoogle.com",
    name: "Google Experiments",
    nameAr: "تجارب جوجل",
    desc: "A collection of fun AI and creative experiments.",
    descAr: "مجموعة من التجارب الممتعة بالذكاء الاصطناعي.",
    emoji: "🔬"
  },
  {
    url: "https://thispersondoesnotexist.com",
    name: "This Person Does Not Exist",
    nameAr: "هذا الشخص لا وجود له",
    desc: "Every refresh generates a photorealistic fake face.",
    descAr: "كل تحديث ينشئ وجهاً مزيفاً واقعياً.",
    emoji: "👤"
  },

  // ── Weird & Wonderful ────────────────────────────────────
  {
    url: "https://beesbeesbees.com",
    name: "Bees Bees Bees",
    nameAr: "نحل نحل نحل",
    desc: "Just... a lot of bees.",
    descAr: "فقط... الكثير من النحل.",
    emoji: "🐝"
  },
  {
    url: "https://corndog.io",
    name: "Corndog.io",
    nameAr: "كورن دوج",
    desc: "A corndog. On the internet. That's it.",
    descAr: "هوت دوج بالذرة. على الإنترنت. هذا كل شيء.",
    emoji: "🌭"
  },
  {
    url: "https://unnecessaryinventions.com",
    name: "Unnecessary Inventions",
    nameAr: "اختراعات لا داعي لها",
    desc: "Real solutions to problems that don't exist.",
    descAr: "حلول حقيقية لمشاكل غير موجودة.",
    emoji: "🔧"
  },
  {
    url: "https://www.itsthisforthat.com",
    name: "It's This for That",
    nameAr: "فكرة شركة ناشئة",
    desc: "Random startup ideas. Some might actually work.",
    descAr: "أفكار عشوائية لشركات ناشئة. بعضها قد ينجح.",
    emoji: "💡"
  },
  {
    url: "https://www.yourworldoftext.com",
    name: "Your World of Text",
    nameAr: "عالمك من النصوص",
    desc: "An infinite canvas where anyone can type anything.",
    descAr: "لوحة لانهائية حيث يمكن لأي شخص كتابة أي شيء.",
    emoji: "✏️"
  },
  {
    url: "https://www.random.org",
    name: "Random.org",
    nameAr: "عشوائية حقيقية",
    desc: "True randomness from atmospheric noise. For real.",
    descAr: "عشوائية حقيقية من الضوضاء الجوية. حقاً.",
    emoji: "🎰"
  },
  {
    url: "https://www.thisworddoesnotexist.com",
    name: "This Word Does Not Exist",
    nameAr: "هذه الكلمة غير موجودة",
    desc: "AI-invented words with fake but convincing definitions.",
    descAr: "كلمات اخترعها الذكاء الاصطناعي بتعريفات مقنعة.",
    emoji: "📝"
  },
  {
    url: "https://xkcd.com",
    name: "xkcd",
    nameAr: "إكس كيه سي دي",
    desc: "The famous webcomic about science, math and life.",
    descAr: "المانغا الشهيرة عن العلوم والرياضيات والحياة.",
    emoji: "🤓"
  },
  {
    url: "https://everynoise.com",
    name: "Every Noise at Once",
    nameAr: "كل موسيقى العالم",
    desc: "A map of every music genre in existence.",
    descAr: "خريطة لكل أنواع الموسيقى الموجودة.",
    emoji: "🎼"
  },
  {
    url: "https://agoodmovietowatch.com",
    name: "A Good Movie to Watch",
    nameAr: "فيلم جيد لمشاهدته",
    desc: "Curated movie recommendations. No account needed.",
    descAr: "توصيات أفلام مختارة بعناية. بدون حساب.",
    emoji: "🎬"
  },

  // ── Interactive Experiences ──────────────────────────────
  {
    url: "https://www.instantrimshot.com",
    name: "Instant Rimshot",
    nameAr: "صوت القرع الفوري",
    desc: "Press for the classic comedy drumroll sound. Ba dum tss!",
    descAr: "اضغط لسماع صوت الكوميديا الكلاسيكي. بادم تسس!",
    emoji: "🥁"
  },
  {
    url: "https://www.geoguessr.com",
    name: "GeoGuessr",
    nameAr: "جيوجيسر",
    desc: "You're dropped somewhere. Guess where in the world!",
    descAr: "أُسقطت في مكان ما. خمن أين أنت في العالم!",
    emoji: "🌐"
  },
  {
    url: "https://diep.io",
    name: "Diep.io",
    nameAr: "ديب آيو",
    desc: "Multiplayer tank battle game. Upgrade and destroy!",
    descAr: "لعبة دبابات متعددة اللاعبين. طور دباباتك وحارب!",
    emoji: "🔫"
  },
  {
    url: "https://www.sprunki.com",
    name: "Sprunki",
    nameAr: "سبرونكي",
    desc: "A wild interactive music mixing experience.",
    descAr: "تجربة مزج موسيقى تفاعلية ومجنونة.",
    emoji: "🎤"
  },
  {
    url: "https://www.nicelydone.club",
    name: "Nicely Done",
    nameAr: "عمل رائع",
    desc: "A collection of delightful web interactions.",
    descAr: "مجموعة من التفاعلات الرائعة على الويب.",
    emoji: "👌"
  },
  {
    url: "https://www.howmanypeopleareinspacerightnow.com",
    name: "People in Space Right Now",
    nameAr: "كم شخص في الفضاء الآن؟",
    desc: "Exactly how many people are in space this moment?",
    descAr: "كم عدد الأشخاص في الفضاء في هذه اللحظة بالضبط؟",
    emoji: "🚀"
  },
  {
    url: "https://www.ismycomputeron.com",
    name: "Is My Computer On?",
    nameAr: "هل حاسوبي يعمل؟",
    desc: "The most important website you'll visit today.",
    descAr: "أهم موقع ستزوره اليوم.",
    emoji: "💻"
  },
  {
    url: "https://seconds.app",
    name: "Seconds",
    nameAr: "ثواني",
    desc: "A beautifully minimal countdown timer.",
    descAr: "مؤقت عد تنازلي بسيط وجميل.",
    emoji: "⏱️"
  },
  {
    url: "https://www.falseknees.com",
    name: "False Knees",
    nameAr: "ركب خاطئة",
    desc: "Beautifully weird nature comics with birds.",
    descAr: "كوميكس طبيعية غريبة وجميلة مع الطيور.",
    emoji: "🐦"
  },
  {
    url: "https://www.shadertoy.com",
    name: "Shadertoy",
    nameAr: "شيدر تووي",
    desc: "Mind-blowing real-time graphics coded by artists.",
    descAr: "رسومات مذهلة في الوقت الفعلي مبرمجة من فنانين.",
    emoji: "🌀"
  },
  {
    url: "https://www.windowswallpaper.co",
    name: "Windows Wallpaper",
    nameAr: "خلفيات ويندوز",
    desc: "Explore iconic Windows wallpapers through the years.",
    descAr: "استكشف خلفيات ويندوز الشهيرة عبر السنوات.",
    emoji: "🖼️"
  }

];

// ============================================================
//  SHUFFLE QUEUE — No repeats until all sites are seen.
//  Fully dynamic: works with any number of sites.
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
  // Prevent same site appearing back-to-back across cycles
  if (lastUrl && urls[0] === lastUrl && urls.length > 1) {
    const swap = Math.floor(Math.random() * (urls.length - 1)) + 1;
    [urls[0], urls[swap]] = [urls[swap], urls[0]];
  }
  return urls;
}

/**
 * Returns the next site from the shuffle queue.
 * Cycles through ALL sites before any repeats, then reshuffles.
 * Works correctly regardless of how many sites are in SITES[].
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
  } catch (e) { /* sessionStorage might be blocked in some browsers */ }

  return SITES.find(s => s.url === nextUrl) || SITES[0];
}

/** Total visits this session */
function getVisitCount() {
  return parseInt(sessionStorage.getItem('tf_count') || '0', 10);
}

// Backward-compat alias
function getRandomSite() { return getNextSite(); }
