export interface FAQItem {
  id: number;
  category: string;
  qBn: string;
  qEn: string;
  ansLines: string[];
  portalName: string;
  officialUrl: string;
  tags: string[];
}

export interface FAQCategory {
  id: string;
  titleBn: string;
  titleEn: string;
  iconName: string;
  description: string;
  count: number;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: 'all', titleBn: 'সব জিজ্ঞাসা (২০০)', titleEn: 'All Questions', iconName: 'Sparkles', description: 'সকল ভিসা ও পাসপোর্ট সংক্রান্ত ২০০টি প্রশ্ন ও উত্তর', count: 200 },
  { id: 'app-guide', titleBn: 'ভিসা চেক অ্যাপ ও ডাউনলোড', titleEn: 'App & Features', iconName: 'Smartphone', description: 'ভিসা চেক অ্যাপ ব্যবহার ও ডাউনলোড সংক্রান্ত গাইড', count: 20 },
  { id: 'passport-check', titleBn: 'পাসপোর্ট দিয়ে ভিসা চেক', titleEn: 'Passport Verification', iconName: 'FileText', description: 'পাসপোর্ট নম্বর দিয়ে অনলাইন ভিসা অনুসন্ধান', count: 20 },
  { id: 'saudi-arabia', titleBn: 'সৌদি আরব ও মুকিম ভিসা', titleEn: 'Saudi Arabia & Muqeem', iconName: 'Landmark', description: 'সৌদি ভিসা, মুকিম প্লাটফর্ম ও ইকামা চেক', count: 20 },
  { id: 'uae-dubai', titleBn: 'দুবাই ও ইউএই ভিসা', titleEn: 'UAE & Dubai', iconName: 'Building2', description: 'দুবাই, আবুধাবি, ICP ও GDRFA ভিসা চেক', count: 20 },
  { id: 'malaysia', titleBn: 'মালয়েশিয়া ও কলিং ভিসা', titleEn: 'Malaysia Calling Visa', iconName: 'Compass', description: 'মালয়েশিয়া কলিং ভিসা ও ইমিগ্রেশন স্ট্যাটাস', count: 20 },
  { id: 'gcc-countries', titleBn: 'কাতার, ওমান, কুয়েত ও বাহরাইন', titleEn: 'GCC Countries', iconName: 'Globe', description: 'উপসাগরীয় দেশসমূহের সরকারি ভিসা চেক', count: 20 },
  { id: 'fraud-prevention', titleBn: 'আসল-নকল ভিসা ও সতর্কতা', titleEn: 'Fraud Prevention', iconName: 'ShieldCheck', description: 'ভুয়া ভিসা শনাক্তকরণ ও দালাল চক্র থেকে সাবধানতা', count: 20 },
  { id: 'bmet-manpower', titleBn: 'BMET ম্যানপাওয়ার ও কার্ড', titleEn: 'BMET & Manpower', iconName: 'CreditCard', description: 'প্রবাসী কল্যাণ কার্ড ও ইমিগ্রেশন ক্লিয়ারেন্স', count: 20 },
  { id: 'gamca-medical', titleBn: 'গামকা মেডিকেল ও ফিটনেস', titleEn: 'GAMCA Medical', iconName: 'HeartPulse', description: 'মেডিকেল ফিটনেস স্লিপ ও রিপোর্ট যাচাই', count: 20 },
  { id: 'global-visas', titleBn: 'ভারত, ইউরোপ ও গ্লোবাল ভিসা', titleEn: 'Global Visas', iconName: 'MapPin', description: 'ভারত, ইতালি, রোমানিয়া, সিঙ্গাপুর ভিসা চেক', count: 20 },
];

export const FAQ_DATA: FAQItem[] = [
  {
    "id": 1,
    "category": "app-guide",
    "qBn": "ভিসা চেক করার অ্যাপ কোনটি সবচেয়ে ভালো?",
    "qEn": "Which is the best visa checking app?",
    "ansLines": [
      "১. 'ভিসা চেক' (Visa Check) অ্যাপটি বাংলাদেশি পাসপোর্টধারীদের জন্য সবচেয়ে আধুনিক ও বিশ্বস্ত অ্যাপ।",
      "২. এই অ্যাপের মাধ্যমে সৌদি আরব, দুবাই, মালয়েশিয়া, কাতারসহ বিশ্বের ২০টি প্রধান দেশের ভিসা এক প্ল্যাটফর্মেই চেক করা যায়।",
      "৩. কোনো তৃতীয় পক্ষের ভুয়া লিংকে না পাঠিয়ে সরাসরি সংশ্লিষ্ট দেশের সরকারি অফিসিয়াল পোর্টালে ডাটা রিডাইরেক্ট করে।",
      "৪. ব্যবহার করা ১০০% ফ্রি, কোনো ধরনের বিরক্তিকর ফুল-স্ক্রিন পপআপ বিজ্ঞাপন নেই এবং পাসপোর্ট ডাটা সুরক্ষিত থাকে।",
      "৫. ইন্টারনেট স্লো থাকলেও ক্যাশ মেমোরির সাহায্যে দ্রুত পেজ লোড হয় এবং অফলাইনে জরুরি গাইডলাইন দেখা যায়।"
    ],
    "portalName": "Visa Check App",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসা চেক অ্যাপ",
      "সেরা অ্যাপ",
      "best visa check app",
      "visa checking app"
    ]
  },
  {
    "id": 2,
    "category": "app-guide",
    "qBn": "মোবাইল দিয়ে ভিসা চেক করার অ্যাপ কিভাবে নামাব?",
    "qEn": "How to download visa checking app on mobile?",
    "ansLines": [
      "১. প্রথমে আপনার অ্যান্ড্রয়েড স্মার্টফোনের 'Google Play Store' অ্যাপটি ওপেন করুন।",
      "২. সার্চ বারে গিয়ে ইংরেজিতে 'Visa Check' অথবা বাংলায় 'ভিসা চেক অ্যাপ' লিখে সার্চ বাটনে চাপুন।",
      "৩. গোল্ডেন ও নেভি ব্লু কালারের পাসপোর্ট আইকনযুক্ত অফিসিয়াল 'Visa Check App' টি নির্বাচন করুন।",
      "৪. 'Install' বাটনে ট্যাপ করলে অ্যাপটি স্বয়ংক্রিয়ভাবে ডাউনলোড হয়ে কয়েক সেকেন্ডে ইন্সটল হয়ে যাবে।",
      "৫. এছাড়া আমাদের অফিসিয়াল ওয়েবসাইট (visacheckapp.net) থেকেও সরাসরি নিরাপদ গুগল প্লে লিঙ্ক পেতে পারেন।"
    ],
    "portalName": "Google Play Store",
    "officialUrl": "https://play.google.com/store/apps",
    "tags": [
      "অ্যাপ ডাউনলোড",
      "ইন্সটল",
      "download app",
      "play store"
    ]
  },
  {
    "id": 3,
    "category": "app-guide",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে ভিসা চেক অ্যাপ কিভাবে কাজ করে?",
    "qEn": "How does visa checking app work with passport number?",
    "ansLines": [
      "১. অ্যাপটি ওপেন করে প্রথমে যে দেশের ভিসা চেক করতে চান (যেমন সৌদি, মালয়েশিয়া বা দুবাই) সেই দেশটি সিলেক্ট করুন।",
      "২. আপনার পাসপোর্টের ইনফরমেশন পেজ দেখে সঠিক ৯ ডিজিটের পাসপোর্ট নম্বরটি নির্ধারিত ঘরে টাইপ করুন।",
      "৩. প্রয়োজন অনুসারে ভিসার আবেদন নম্বর বা আপনার জন্মতারিখ ও জাতীয়তা (Bangladeshi) সিলেক্ট করুন।",
      "৪. 'ভিসা চেক' বাটনে ট্যাপ করলে অ্যাপটি সরাসরি সংশ্লিষ্ট দেশের সরকারি ইমিগ্রেশন ডাটাবেজের সাথে যোগাযোগ করে।",
      "৫. সাথে সাথে আপনার ভিসার বর্তমান স্ট্যাটাস (Approved, Under Process, Issued বা Expired) স্ক্রিনে ভেসে উঠবে।"
    ],
    "portalName": "Live Government Gateway",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট নম্বর দিয়ে চেক",
      "অ্যাপের কাজ",
      "how app works",
      "passport check"
    ]
  },
  {
    "id": 4,
    "category": "app-guide",
    "qBn": "visa check app download কিভাবে করব?",
    "qEn": "How to download visa check app?",
    "ansLines": [
      "১. গুগল প্লে স্টোর ওপেন করে সার্চ বক্সে 'Visa Check App' লিখে সার্চ করুন।",
      "২. ডেভেলপার 'Visa Check Team' ভেরিফাইড অ্যাপটি দেখতে পাবেন, সেটিতে ক্লিক করুন।",
      "৩. ডাউনলোড সাইজ মাত্র ১৫-১৮ মেগাবাইট, তাই কম ডাটা খরচেই দ্রুত নামিয়ে নেওয়া যায়।",
      "৪. ডাউনলোড শেষ হলে 'Open' বাটনে চাপ দিয়ে অ্যাপের হোম স্ক্রিনে প্রবেশ করতে পারবেন।",
      "৫. কোনো সাইন আপ বা অ্যাকাউন্ট খোলার ঝামেলা ছাড়াই সম্পূর্ণ ফ্রিতে তাৎক্ষণিক ব্যবহার শুরু করা যায়।"
    ],
    "portalName": "Play Store Download",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "visa check app download",
      "apk download",
      "প্লে স্টোর ডাউনলোড"
    ]
  },
  {
    "id": 5,
    "category": "app-guide",
    "qBn": "সব দেশের ভিসা চেক করার অ্যাপ কোনটি?",
    "qEn": "Which app allows checking visas of all countries?",
    "ansLines": [
      "১. একক অ্যাপে সব প্রধান দেশের ভিসা চেক করার সেরা সমাধান হলো 'Visa Check App'।",
      "২. এখানে সৌদি আরব, ইউএই, মালয়েশিয়া, কাতার, ওমান, কুয়েত, সিঙ্গাপুর, ভারত সহ ২০টি দেশের লিংক সাজানো আছে।",
      "৩. ভিন্ন ভিন্ন দেশের জন্য আলাদা আলাদা অ্যাপ নামানোর প্রয়োজন নেই, ফলে মোবাইলের মেমোরি খালি থাকে।",
      "৪. প্রতিটি দেশের কাজের ভিসা, ভিজিট ভিসা ও ই-ভিসার জন্য আলাদা আলাদা ক্যাটাগরি রয়েছে।",
      "৫. বাংলা ও ইংরেজি উভয় ভাষায় সহজে ব্যবহারের সুবিধা থাকায় যেকোনো সাধারণ মানুষ এটি চালাতে পারেন।"
    ],
    "portalName": "All Country Hub",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "সব দেশের ভিসা চেক",
      "অল কান্ট্রি অ্যাপ",
      "all country visa check"
    ]
  },
  {
    "id": 6,
    "category": "app-guide",
    "qBn": "আসল ভিসা চেনার মোবাইল অ্যাপ আছে কি?",
    "qEn": "Is there a mobile app to detect authentic visas?",
    "ansLines": [
      "১. 'Visa Check App'-এ আসল ও নকল ভিসা শনাক্ত করার জন্য ডেডিকেটেড ভেরিফিকেশন গাইডলাইন যুক্ত রয়েছে।",
      "২. অ্যাপটি সরকারি সার্ভারের লাইভ ডাটা টেনে আনে, তাই সার্ভারে ডাটা না থাকলে ভিসাটি শতভাগ ভুয়া হিসেবে চিহ্নিত হয়।",
      "৩. পাসপোর্টের ভিসা স্টিকারের কিউআর কোড (QR Code) স্ক্যান করার নিয়ম অ্যাপে স্পষ্টভাবে দেখানো হয়েছে।",
      "৪. স্পন্সর বা কফিলের নাম, ভিসা নম্বর ও পেশা সরকারি রেকর্ডের সাথে মিলিয়ে নেওয়ার সুবিধা রয়েছে।",
      "৫. দালালদের দেওয়া ভুয়া ভিসা পেপারের সাধারণ ভুলগুলো শনাক্ত করতে অ্যাপের সিকিউরিটি গাইড অত্যন্ত কার্যকর।"
    ],
    "portalName": "Authenticity Engine",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "আসল ভিসা অ্যাপ",
      "নকল ভিসা চেনার উপায়",
      "fake visa detection"
    ]
  },
  {
    "id": 7,
    "category": "app-guide",
    "qBn": "ভিসা চেক অ্যাপস কিভাবে ব্যবহার করে?",
    "qEn": "How to use visa checking apps?",
    "ansLines": [
      "১. অ্যাপটি ওপেন করার পর হোমপেজে ২০টি দেশের জাতীয় পতাকাসহ সুন্দর গোল্ডেন কার্ড দেখতে পাবেন।",
      "২. আপনার কাঙ্ক্ষিত দেশে ট্যাপ করলে ভিসা চেক, নিয়মাবলী ও প্রয়োজনীয় তথ্যের অপশন আসবে।",
      "৩. 'ভিসা চেক' অপশনে গিয়ে পাসপোর্ট নম্বর ও ক্যাপচা কোড লিখে 'Search' বাটনে চাপ দিন।",
      "৪. কয়েক সেকেন্ডের মধ্যেই সরকারি সার্ভার থেকে আপনার ভিসার বৈধতা ও মেয়াদের কপি প্রদর্শিত হবে।",
      "৫. প্রাপ্ত ফলাফলটি স্ক্রিনশট বা পিডিএফ আকারে সেভ করে সরাসরি হোয়াটসঅ্যাপ বা ইমোতে শেয়ার করতে পারবেন।"
    ],
    "portalName": "User Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "অ্যাপ ব্যবহারের নিয়ম",
      "how to use app",
      "ইউজার গাইড"
    ]
  },
  {
    "id": 8,
    "category": "app-guide",
    "qBn": "best visa checking app for bangladesh কোনটি?",
    "qEn": "Which is the best visa checking app for Bangladesh?",
    "ansLines": [
      "১. বাংলাদেশি প্রবাসী ও বিদেশগামী কর্মীদের প্রথম পছন্দ 'Visa Check App' (ভিসা চেক অ্যাপ)।",
      "২. সম্পূর্ণ বিশুদ্ধ খাঁটি বাংলায় ইন্টারফেস এবং সহজবোধ্য নেভিগেশনের কারণে এটি বাংলাদেশের সেরা অ্যাপ।",
      "৩. প্রবাসী কল্যাণ মন্ত্রণালয় ও BMET ডাটাবেজ সহ বৈশ্বিক সরকারি পোর্টালগুলোর নিরাপদ সমন্বয় রয়েছে।",
      "৪. প্লে স্টোরে এর হাই-স্পিড সার্ভার কানেক্টিভিটি এবং রেগুলার আপডেটের জন্য ব্যবহারকারীদের রেটিং চমৎকার।",
      "৫. অ্যাপে পাসপোর্টের কোনো সংবেদনশীল তথ্য কোথাও স্টোর করা হয় না, যা ১০০% গোপনীয়তা নিশ্চিত করে।"
    ],
    "portalName": "Bangladesh Expat Choice",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "best visa check app",
      "bangladesh visa app",
      "সেরা ভিসা অ্যাপ"
    ]
  },
  {
    "id": 9,
    "category": "app-guide",
    "qBn": "কোন অ্যাপ দিয়ে সৌদি ভিসা চেক করা যায়?",
    "qEn": "Which app allows checking Saudi visa?",
    "ansLines": [
      "১. 'Visa Check App'-এর মাধ্যমে সৌদি আরবের ভিসা সবচেয়ে দ্রুত ও নির্ভুলভাবে চেক করা সম্ভব।",
      "২. সৌদি পররাষ্ট্র মন্ত্রণালয়ের অফিসিয়াল মুফা (MOFA) ও প্ল্যাটফর্ম পোর্টালের সাথে এটি সংযুক্ত।",
      "৩. এছাড়াও সৌদি আরবের ছুটির ভিসা বা রি-এন্ট্রি ভিসা মুকিম (Muqeem) পোর্টাল থেকে চেক করা যায়।",
      "৪. ইকামা নম্বর বা পাসপোর্ট নম্বর যেকোনো একটি দিয়েই তাৎক্ষণিক ভিসার মেয়াদ ও বৈধতা জানা যায়।",
      "৫. ভিসা স্ট্যাম্পিং হয়েছে কিনা কিংবা কাফালা বা হুরুব স্ট্যাটাস আছে কিনা তাও এই অ্যাপে যাচাই করা যায়।"
    ],
    "portalName": "Saudi Arabia Visa Hub",
    "officialUrl": "https://visacheckapp.net/countries/saudi-arabia",
    "tags": [
      "সৌদি ভিসা অ্যাপ",
      "saudi visa check app",
      "মুফা ভিসা চেক"
    ]
  },
  {
    "id": 10,
    "category": "app-guide",
    "qBn": "ফ্রি ভিসা চেক অ্যাপ কোনটি?",
    "qEn": "Which is a free visa checking app?",
    "ansLines": [
      "১. 'Visa Check App' সম্পূর্ণ ১০০% ফ্রি অ্যাপ্লিকেশন, যা ব্যবহারে কোনো সাবস্ক্রিপশন ফি বা টাকা লাগে না।",
      "২. অনেক অ্যাপে টাকা বা কয়েন দাবি করা হলেও এই অ্যাপে আজীবন বিনামূল্যে আনলিমিটেড ভিসা চেক করা যায়।",
      "৩. সরকারি সার্ভারের ফ্রি পাবলিক ভেরিফিকেশন লিঙ্কগুলোকেই অ্যাপটিতে সুশৃঙ্খলভাবে সাজিয়ে দেওয়া হয়েছে।",
      "৪. কোনো লুকানো চার্জ নেই এবং যেকোনো জরুরি মুহূর্তে যেকেউ ফ্রিতে নিজের ভিসা ভেরিফাই করতে পারেন।",
      "৫. প্লে স্টোর থেকে বিনামূল্যে ডাউনলোড করে সরাসরি পরিবার বা আত্মীয়স্বজনের ভিসাও চেক করে দিতে পারবেন।"
    ],
    "portalName": "100% Free Gateway",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ফ্রি ভিসা অ্যাপ",
      "free visa check app",
      "বিনা মূল্যে ভিসা চেক"
    ]
  },
  {
    "id": 11,
    "category": "app-guide",
    "qBn": "প্লে স্টোরে ভিসা চেক অ্যাপ লিখে সার্চ দিলে কি কি পাওয়া যায়?",
    "qEn": "What shows up when searching visa check app on Play Store?",
    "ansLines": [
      "১. প্লে স্টোরে সার্চ দিলে বেশ কিছু অ্যাপ দেখা যায়, তবে সবার আগে সঠিক রেটিং ও লোগো দেখে নেওয়া জরুরি।",
      "২. অনেক অ্যাপে অতিরিক্ত ফুল-স্ক্রিন বিজ্ঞাপন ও ভুয়া লিংক থাকে যা ব্যবহারকারীদের বিভ্রান্ত করে।",
      "৩. আমাদের অফিসিয়াল 'Visa Check App' সিলেক্ট করলে পরিষ্কার ইন্টারফেস ও নিরাপদ অফিসিয়াল গেটওয়ে পাবেন।",
      "৪. অ্যাপের রিভিউ, ডাউনলোডের সংখ্যা ও শেষ আপডেটের তারিখ চেক করে ইন্সটল করাই বুদ্ধিমানের কাজ।",
      "৫. ভেরিফাইড অ্যাপগুলোতে পাসপোর্টের তথ্য গোপন থাকে এবং সরাসরি সরকারি ইমিগ্রেশন পেজ ওপেন হয়।"
    ],
    "portalName": "Play Store Safety",
    "officialUrl": "https://play.google.com/store",
    "tags": [
      "প্লে স্টোর সার্চ",
      "প্লে স্টোর অ্যাপস",
      "play store search"
    ]
  },
  {
    "id": 12,
    "category": "app-guide",
    "qBn": "how to use visa check app on android?",
    "qEn": "How to use visa check app on Android?",
    "ansLines": [
      "১. Install the 'Visa Check' app from Google Play Store on your Android phone.",
      "২. Open the app and choose your destination country (e.g., Saudi Arabia, Malaysia, UAE).",
      "৩. Enter your official Passport Number and nationality correctly in the designated fields.",
      "৪. Tap on the 'Check Visa Status' button to connect directly to the official government immigration server.",
      "৫. Your verified visa validity, expiration date, and official status will be displayed instantly."
    ],
    "portalName": "Android Quickstart",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "how to use on android",
      "অ্যান্ড্রয়েড ব্যবহার",
      "android app guide"
    ]
  },
  {
    "id": 13,
    "category": "app-guide",
    "qBn": "ভিসা চেক করার সরকারি অ্যাপ কোনটি?",
    "qEn": "Which is the official government visa checking app?",
    "ansLines": [
      "১. সাধারণত প্রতিটি দেশের নিজস্ব সরকারি ওয়েবসাইট রয়েছে, একক কোনো আন্তর্জাতিক সরকারি অ্যাপ নেই।",
      "২. তবে বাংলাদেশ সরকারের অভিবাসন সেবার জন্য 'আমি প্রবাসী' (Ami Probashi) একটি সরকারি পার্টনার অ্যাপ।",
      "৩. বিদেশি ভিসার ক্ষেত্রে সৌদি সরকারের 'Muqeem' বা 'Absher' এবং দুবাই সরকারের 'Dubai Now' বা 'ICP' অফিসিয়াল অ্যাপ।",
      "৪. আমাদের 'Visa Check App' মূলত এই সমস্ত সরকারি পোর্টালগুলোকে এক ছাতার নিচে গুছিয়ে এনে দিয়েছে।",
      "৫. ফলে একাধিক জটিল সরকারি অ্যাপ আলাদাভাবে খোঁজার বদলে একটি নিরাপদ অ্যাপ থেকেই সব সরকারি লিংকে ঢোকা যায়।"
    ],
    "portalName": "Official Government Hub",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "সরকারি অ্যাপ",
      "official visa app",
      "আমি প্রবাসী",
      "সরকারি লিংক"
    ]
  },
  {
    "id": 14,
    "category": "app-guide",
    "qBn": "ভিসা চেকিং অ্যাপে পাসপোর্ট নম্বর দিলে কি নিরাপদ?",
    "qEn": "Is it safe to provide passport number in visa checking app?",
    "ansLines": [
      "১. হ্যাঁ, বিশ্বস্ত ও অফিসিয়াল 'Visa Check App'-এ পাসপোর্ট নম্বর প্রবেশ করানো সম্পূর্ণ নিরাপদ।",
      "২. অ্যাপটি আপনার পাসপোর্ট নম্বর নিজস্ব কোনো ডাটাবেজ বা থার্ড পার্টি সার্ভারে সংরক্ষণ বা বিক্রি করে না।",
      "৩. নম্বরটি শুধুমাত্র সরাসরি সরকারি ইমিগ্রেশন সার্ভারে কোয়েরি পাঠানোর সময় এনক্রিপ্ট হয়ে ব্যবহৃত হয়।",
      "৪. তবে অপরিচিত বা সন্দেহজনক আনভেরিফাইড এপিকে (APK) ফাইল বা লিংকে পাসপোর্ট নম্বর দেওয়া থেকে বিরত থাকুন।",
      "৫. কোনো অ্যাপ যদি আপনার পাসপোর্টের ছবি বা পিন নম্বর চায়, তবে তৎক্ষণাৎ তা ব্যবহার বন্ধ করা উচিত।"
    ],
    "portalName": "Security & Privacy",
    "officialUrl": "https://visacheckapp.net/privacy",
    "tags": [
      "তথ্য নিরাপত্তা",
      "পাসপোর্ট সেফটি",
      "is it safe",
      "privacy"
    ]
  },
  {
    "id": 15,
    "category": "app-guide",
    "qBn": "মালয়েশিয়া ভিসা চেক করার সেরা অ্যাপ কোনটি?",
    "qEn": "Which is the best app to check Malaysia visa?",
    "ansLines": [
      "১. মালয়েশিয়ার সব ধরণের ভিসা ট্র্যাক করতে 'Visa Check App'-এর মালয়েশিয়া সেকশনটি সবচেয়ে কার্যকর।",
      "২. এটি মালয়েশিয়া সরকারের FWCMS ও অফিসিয়াল ইমিগ্রেশন পোর্টালের সরাসরি লাইভ ডাটা লিংক প্রদান করে।",
      "৩. কলিং ভিসা (Calling Visa), ই-ভিসা (eVisa) স্টিকার ও মেডিকেল ফিটনেস স্ট্যাটাস যাচাই করা যায়।",
      "৪. কোম্পানি অ্যাপ্রুভাল ও পারমিট স্ট্যাটাস 'BARU', 'LULUS' বা 'TOLAK' কিনা তা সহজেই পরিষ্কার দেখা যায়।",
      "৫. মালয় ভাষা বা ইংরেজি না বুঝলেও বাংলা নির্দেশিকার মাধ্যমে সাধারণ প্রবাসীরাও নিজের ভিসা দেখতে পারেন।"
    ],
    "portalName": "Malaysia Immigration Hub",
    "officialUrl": "https://visacheckapp.net/countries/malaysia",
    "tags": [
      "মালয়েশিয়া ভিসা অ্যাপ",
      "malaysia visa check app",
      "কলিং ভিসা চেক"
    ]
  },
  {
    "id": 16,
    "category": "app-guide",
    "qBn": "দুবাই ভিসা চেক করার বিশ্বস্ত অ্যাপ কোনটি?",
    "qEn": "Which is the trusted app to check Dubai visa?",
    "ansLines": [
      "১. দুবাই ও পুরো সংযুক্ত আরব আমিরাতের ভিসা যাচাইয়ের জন্য 'Visa Check App' সবচেয়ে নির্ভরযোগ্য মাধ্যম।",
      "২. এটি সরাসরি দুবাই ইমিগ্রেশনের GDRFA পোর্টাল এবং আবুধাবি/অন্যান্য রাজ্যের জন্য ICP স্মার্ট সার্ভিস সংযুক্ত করে।",
      "৩. ভিজিট ভিসা, দুই বছরের এমপ্লয়মেন্ট কাজের ভিসা ও গ্রিন ভিসার আসল-নকল যাচাই করা যায়।",
      "৪. ভিসার মেয়াদ কতদিন আছে এবং কোনো ওভারস্টে জরিমানা (Fine) এসেছে কিনা তা অ্যাপে নির্ভুল দেখা যায়।",
      "৫. ইউনিফাইড নম্বর (UID) এবং পাসপোর্ট নম্বর উভয় পদ্ধতিতেই দুবাই ভিসা চেক করার সুবিধা রয়েছে।"
    ],
    "portalName": "UAE GDRFA & ICP Portal",
    "officialUrl": "https://visacheckapp.net/countries/uae",
    "tags": [
      "দুবাই ভিসা অ্যাপ",
      "dubai visa check app",
      "ইউএই ভিসা"
    ]
  },
  {
    "id": 17,
    "category": "app-guide",
    "qBn": "অফলাইনে কি ভিসা চেক অ্যাপ কাজ করে?",
    "qEn": "Does visa checking app work offline?",
    "ansLines": [
      "১. লাইভ ভিসা স্ট্যাটাস চেক করতে সরকারি সার্ভারে কানেক্ট হতে অবশ্যই ইন্টারনেট সংযোগ (Wi-Fi বা ডাটা) প্রয়োজন।",
      "২. তবে 'Visa Check App'-এর ভেতরে থাকা গুরুত্বপূর্ণ গাইডলাইন, আসল ভিসা চেনার নিয়ম ও টিপস অফলাইনে দেখা যায়।",
      "৩. ইতিপূর্বে দেখা ভিসার স্ক্রিনশট বা সেভ করা ডাটা আপনি ইন্টারনেট ছাড়াও অফলাইনে পড়তে পারবেন।",
      "৪. কোনো প্রত্যন্ত অঞ্চলে নেটওয়ার্ক দুর্বল হলেও অ্যাপটির লাইটওয়েট আর্কিটেকচার দ্রুত ডেটা ফেচ করতে সক্ষম।",
      "৫. নতুন কোনো ভিসার সর্বশেষ অবস্থা যাচাই করার সময় সাময়িক ইন্টারনেট চালু রাখাই নিয়ম।"
    ],
    "portalName": "Offline Cache System",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "অফলাইন সুবিধা",
      "offline visa check",
      "ইন্টারনেট ছাড়া"
    ]
  },
  {
    "id": 18,
    "category": "app-guide",
    "qBn": "কিউআর কোড স্ক্যান করে ভিসা চেক অ্যাপ কোনটি?",
    "qEn": "Which app checks visa by scanning QR code?",
    "ansLines": [
      "১. 'Visa Check App'-এ যেকোনো দেশের ই-ভিসা বা পেপার ভিসার কিউআর কোড স্ক্যানার গাইড অন্তর্ভুক্ত রয়েছে।",
      "২. আসল ভিসার কিউআর কোড স্ক্যান করলে সরাসরি সংশ্লিষ্ট দেশের পররাষ্ট্র বা ইমিগ্রেশন ওয়েবসাইটের ভেরিফিকেশন লিঙ্ক ওপেন হয়।",
      "৩. যদি কিউআর কোড স্ক্যান করে কোনো সাধারণ টেক্সট বা ভুল ওয়েবসাইট আসে, তবে বুঝতে হবে ভিসাটি জাল বা এডিটেড।",
      "৪. সৌদি আরবের মুফা ভিসা ও দুবাই ই-ভিসার কিউআর কোড সরাসরি সরকারি ডাটাবেজে নিয়ে যায়।",
      "৫. অ্যাপের ক্যামেরার সাহায্যে মাত্র ২ সেকেন্ডেই স্ক্যান সম্পন্ন করে ভিসার বৈধতা নিশ্চিত হওয়া যায়।"
    ],
    "portalName": "QR Code Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "কিউআর কোড স্ক্যান",
      "qr code visa check",
      "বারকোড স্ক্যানার"
    ]
  },
  {
    "id": 19,
    "category": "app-guide",
    "qBn": "visa checking app apk download link কোথায় পাব?",
    "qEn": "Where to find visa checking app apk download link?",
    "ansLines": [
      "১. সবচেয়ে নিরাপদ মাধ্যম হলো গুগল প্লে স্টোর থেকে সরাসরি অফিসিয়াল অ্যাপ নামিয়ে নেওয়া।",
      "২. এছাড়াও আমাদের অফিসিয়াল ওয়েবসাইট visacheckapp.net-এ ভেরিফাইড সরাসরি এপিকে (Direct APK) ডাউনলোড বাটন রয়েছে।",
      "৩. কোনো অপরিচিত থার্ড পার্টি ওয়েবসাইট বা ফেসবুক পেজের সন্দেহজনক ড্রাইভ লিঙ্ক থেকে APK ডাউনলোড করবেন না।",
      "৪. আমাদের সাইটে সবসময় ভাইরাসমুক্ত ও ম্যালওয়্যার মুক্ত সর্বশেষ অফিসিয়াল বিল্ড আপলোড করা থাকে।",
      "৫. APK ফাইল নামিয়ে ইন্সটল করার সময় ফোনে 'Install from Unknown Sources' অনুমতি অন করে নিতে পারেন।"
    ],
    "portalName": "Direct APK Download",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "apk download link",
      "এপিকে লিংক",
      "ডাউনলোড লিংক"
    ]
  },
  {
    "id": 20,
    "category": "app-guide",
    "qBn": "ভিসা চেক অ্যাপে কি ভুয়া ভিসা ধরা যায়?",
    "qEn": "Can fake visas be detected in visa checking app?",
    "ansLines": [
      "১. হ্যাঁ, সরকারি ডাটাবেজে যে ভিসার অস্তিত্ব নেই, তা এই অ্যাপে সার্চ করলেই 'No Record Found' বা ইনভ্যালিড দেখাবে।",
      "২. দালালরা সাধারণত আসল ভিসার উপরে ফটোশপ বা এডিটিং সফটওয়্যার দিয়ে নাম ও পাসপোর্ট নম্বর পরিবর্তন করে দেয়।",
      "৩. কিন্তু সরকারি সার্ভারে মূল পাসপোর্ট নম্বর দিলে যখন অন্য কারও নাম বা কোনো তথ্যই আসে না, তখনই জালিয়াতি ধরা পড়ে।",
      "৪. অ্যাপের ভিতরে উল্লেখিত ৫টি ক্রস-চেক নিয়ম ফলো করলে যেকেউ শতভাগ নিশ্চিত হতে পারেন ভিসাটি আসল নাকি ভুয়া।",
      "৫. টাকা লেনদেন করার পূর্বে এই অ্যাপ দিয়ে নিজে যাচাই করে লাখ লাখ টাকার প্রতারণা থেকে রক্ষা পাওয়া যায়।"
    ],
    "portalName": "Fraud Detection System",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভুয়া ভিসা ধরা",
      "fake visa detection",
      "প্রতারণা থেকে বাঁচুন"
    ]
  },
  {
    "id": 21,
    "category": "passport-check",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে ভিসা চেক কিভাবে করে?",
    "qEn": "How to check visa by passport number?",
    "ansLines": [
      "১. 'Visa Check App' ওপেন করে আপনার গন্তব্য দেশ (যেমন: সৌদি আরব, দুবাই বা মালয়েশিয়া) নির্বাচন করুন।",
      "২. সংশ্লিষ্ট দেশের 'ভিসা চেক' পেজে গিয়ে 'Passport Number' বক্সে আপনার ৯ অক্ষরের পাসপোর্ট নম্বরটি হুবহু লিখুন।",
      "৩. কিছু দেশের ক্ষেত্রে অতিরিক্ত অপশন হিসেবে জাতীয়তা (Bangladesh) এবং ক্যাপচা কোড পূরণ করতে হয়।",
      "৪. 'Search' বা 'Submit' বাটনে ক্লিক করলে কয়েক সেকেন্ডের মধ্যে আপনার ভিসার লাইভ স্ট্যাটাস প্রদর্শিত হবে।",
      "৫. স্ট্যাটাসে আবেদনকারীর নাম, ভিসার ক্যাটাগরি, অনুমোদনের তারিখ এবং মেয়াদের শেষ তারিখ মিলিয়ে নিন।"
    ],
    "portalName": "Passport Verification Hub",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট দিয়ে ভিসা চেক",
      "পাসপোর্ট নাম্বার",
      "passport number visa check"
    ]
  },
  {
    "id": 22,
    "category": "passport-check",
    "qBn": "শুধু পাসপোর্ট নম্বর দিয়ে কি ভিসা চেক করা সম্ভব?",
    "qEn": "Is it possible to check visa with only passport number?",
    "ansLines": [
      "১. হ্যাঁ, সৌদি আরব, দুবাই, কাতার, কুয়েত এবং ওমানের অধিকাংশ ভিসা শুধুমাত্র পাসপোর্ট নম্বর দিয়েই চেক করা যায়।",
      "২. তবে কোনো কোনো দেশে পাসপোর্ট নম্বরের পাশাপাশি জন্মতারিখ বা ভিসার অ্যাপ্লিকেশন নম্বর প্রয়োজন হতে পারে।",
      "৩. যেমন ভারতের ভিসা ট্র্যাকিংয়ে পাসপোর্ট নম্বর এবং ওয়েব ফাইল নম্বর (Web File No) উভয়ই লাগে।",
      "৪. মালয়েশিয়ার কলিং ভিসার ক্ষেত্রে পাসপোর্ট নম্বরের সাথে কোম্পানির রেজিস্ট্রেশন নম্বর থাকলে দ্রুত ফল পাওয়া যায়।",
      "৫. মূলকথা হলো আপনার পাসপোর্ট নম্বরটি সঠিক থাকলে যেকোনো দেশের সরকারি পোর্টালে প্রাথমিক তথ্য অবশ্যই বের করা সম্ভব।"
    ],
    "portalName": "General Visa Query",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "শুধু পাসপোর্ট নম্বর",
      "only passport number",
      "ভিসা চেক নিয়ম"
    ]
  },
  {
    "id": 23,
    "category": "passport-check",
    "qBn": "অনলাইনে পাসপোর্ট দিয়ে ভিসা চেক করার সঠিক নিয়ম কি?",
    "qEn": "What is the proper rule to check visa with passport online?",
    "ansLines": [
      "১. সবসময় তৃতীয় পক্ষের কোনো অনিরাপদ লিংকে না গিয়ে সংশ্লিষ্ট দেশের সরকারি পররাষ্ট্র বা ইমিগ্রেশন ডোমেইন ব্যবহার করুন।",
      "২. পাসপোর্ট বইয়ের মূল পাতার সাথে মিলিয়ে বড় হাতের ইংরেজি অক্ষরে (Capital Letters) নম্বরটি টাইপ করুন (যেমন A01234567)।",
      "৩. জন্মতারিখ দেওয়ার সময় দিন/মাস/বছর ফরম্যাটটি সঠিক নিয়মে সিলেক্ট করতে ভুলবেন না।",
      "৪. যদি সার্ভার স্লো থাকে বা লোডিং নেয়, তবে পেজটি রিফ্রেশ না করে ১০-১৫ সেকেন্ড শান্তভাবে অপেক্ষা করুন।",
      "৫. চেক সম্পন্ন হলে পাওয়া রেজাল্টটি ভবিষ্যতের প্রমাণের জন্য সাথে সাথে স্ক্রিনশট বা পিডিএফ সেভ করে রাখুন।"
    ],
    "portalName": "Online Standard Rules",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "অনলাইন ভিসা চেক নিয়ম",
      "সঠিক নিয়ম",
      "online visa check rules"
    ]
  },
  {
    "id": 24,
    "category": "passport-check",
    "qBn": "how to check visa by passport number online?",
    "qEn": "How to check visa by passport number online?",
    "ansLines": [
      "১. Launch the Visa Check App or visit the official immigration portal of the destination country.",
      "২. Locate the 'Visa Inquiry' or 'Track Application' section on the immigration homepage.",
      "৩. Input your original Bangladeshi Passport Number accurately in the designated search field.",
      "৪. Select your nationality as 'Bangladeshi' and enter your date of birth if prompted.",
      "৫. Complete the security captcha verification and click 'Inquire' to view your verified visa certificate."
    ],
    "portalName": "Online Global Gateway",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "how to check visa online",
      "passport query",
      "visa validity"
    ]
  },
  {
    "id": 25,
    "category": "passport-check",
    "qBn": "পাসপোর্ট নম্বর ভুল হলে কি ভিসা চেক করা যাবে?",
    "qEn": "Can visa be checked if passport number is wrong?",
    "ansLines": [
      "১. না, একটি ডিজিট বা বর্ণ ভুল হলেও সরকারি সার্ভারে আপনার কোনো ভিসার রেকর্ড খুঁজে পাওয়া যাবে না।",
      "২. ভুল নম্বর দিলে সাধারণত 'Invalid Passport Number' বা 'No Record Found' ইরর মেসেজ দেখাবে।",
      "৩. বিশেষ করে 'O' (অক্ষর) এবং '0' (শূন্য) এর মধ্যে অনেকেই ভুল করেন, এটি সতর্কভাবে দেখে নেওয়া উচিত।",
      "৪. যদি ভুলবশত সাবমিট করে থাকেন, তবে ব্রাউজারের ক্যাশ ক্লিয়ার করে আবার সঠিক নম্বরটি দিয়ে ট্রাই করুন।",
      "৫. পাসপোর্ট নম্বর ১০০% নির্ভুল থাকার পরেও যদি ডাটা না আসে, তবে বুঝতে হবে ভিসাটি এখনো সিস্টেমে এন্ট্রি হয়নি।"
    ],
    "portalName": "Error Resolution",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট নম্বর ভুল",
      "ভুল সংশোধন",
      "invalid passport number"
    ]
  },
  {
    "id": 26,
    "category": "passport-check",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে আসল ভিসা চেনার উপায় কি?",
    "qEn": "How to verify authentic visa using passport number?",
    "ansLines": [
      "১. পাসপোর্ট নম্বর দিয়ে সার্চ করার পর যদি সরকারি পোর্টালের পেজে আবেদনকারীর নাম, ছবি ও পাসপোর্ট নম্বর হুবহু মিলে যায়।",
      "২. সরকারি ডাটাবেজে ভিসার স্ট্যাটাস 'Approved', 'Issued' বা 'Valid' হিসেবে প্রদর্শিত হতে হবে।",
      "৩. দালাল যে কোম্পানি বা স্পন্সরের নাম বলেছে, সার্ভারেও সেই একই কফিল বা নিয়োগকর্তার নাম থাকতে হবে।",
      "৪. ভিসার ইস্যু ডেট ও এক্সপায়ারি ডেট সরকারি রেজাল্টের সাথে কাগজপত্রের প্রতিটি তারিখে মিল থাকতে হবে।",
      "৫. যদি পাসপোর্ট নম্বর দিয়ে কোনো তথ্যই না আসে অথবা অন্য কোনো ব্যক্তির ডাটা দেখায়, তবে ভিসাটি নিশ্চিতভাবে ভুয়া।"
    ],
    "portalName": "Authenticity Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "আসল ভিসা চেনার উপায়",
      "পাসপোর্ট দিয়ে আসল ভিসা",
      "real visa verification"
    ]
  },
  {
    "id": 27,
    "category": "passport-check",
    "qBn": "পুরাতন পাসপোর্ট নম্বর দিয়ে কি নতুন ভিসা চেক হয়?",
    "qEn": "Can new visa be checked with old passport number?",
    "ansLines": [
      "১. ভিসা আবেদন যদি পুরাতন পাসপোর্টের তথ্য দিয়ে জমা দেওয়া হয়ে থাকে, তবে পুরাতন নম্বর দিয়েই চেক করতে হবে।",
      "২. তবে পাসপোর্ট রিনিউ বা পরিবর্তন করার পর দূতাবাস বা ইমিগ্রেশন সিস্টেমে নতুন নম্বর আপডেট করা হলে নতুনটি প্রযোজ্য হবে।",
      "৩. অনেক দেশের সিস্টেমে পুরাতন ও নতুন উভয় পাসপোর্ট নম্বর লিঙ্ক থাকে, ফলে যেকোনো একটি দিয়ে ডাটা পাওয়া যায়।",
      "৪. যদি নতুন নম্বর দিয়ে 'No Data' দেখায়, তবে অবশ্যই পুরাতন পাসপোর্ট নম্বরটি দিয়ে একবার ট্রাই করা উচিত।",
      "৫. ভিসা পাওয়ার পর ভ্রমণের সময় অবশ্যই পুরাতন এবং নতুন উভয় পাসপোর্টই সাথে নিয়ে বিমানে উঠতে হবে।"
    ],
    "portalName": "Passport Transition Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পুরাতন পাসপোর্ট",
      "রিনিউ পাসপোর্ট",
      "old passport visa check"
    ]
  },
  {
    "id": 28,
    "category": "passport-check",
    "qBn": "পাসপোর্ট নম্বর ও জন্মতারিখ দিয়ে ভিসা চেক কিভাবে করব?",
    "qEn": "How to check visa with passport number and date of birth?",
    "ansLines": [
      "১. অনেক দেশের ইমিগ্রেশন পোর্টাল (যেমন: ওমান ROP বা দুবাই ICP) বাড়তি নিরাপত্তার জন্য জন্মতারিখ দাবি করে।",
      "২. পোর্টালে গিয়ে প্রথমে পাসপোর্ট নম্বর এবং দ্বিতীয় বক্সে ক্যালেন্ডার অপশন থেকে সঠিক জন্মতারিখ সিলেক্ট করুন।",
      "৩. পাসপোর্টের মূল ইনফরমেশন পেজে যে জন্মতারিখ লেখা আছে, ঠিক সেই দিন, মাস ও বছর দিতে হবে।",
      "৪. জন্মতারিখ এক দিনও অমিল হলে সিকিউরিটি কারণে সার্ভার কোনো রেজাল্ট প্রদর্শন করবে না।",
      "৫. উভয় তথ্য সঠিক থাকলে সাথে সাথে আপনার ভিসার স্টিকার এবং বৈধতার পূর্ণাঙ্গ বিবরণ সামনে চলে আসবে।"
    ],
    "portalName": "Two-Factor Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট ও জন্মতারিখ",
      "জন্মতারিখ দিয়ে চেক",
      "dob visa check"
    ]
  },
  {
    "id": 29,
    "category": "passport-check",
    "qBn": "passport number diye visa check korbo kivabe?",
    "qEn": "How to check visa using passport number in Banglish?",
    "ansLines": [
      "১. First e Visa Check App open kore je deshe jaben oi desher card e click korun.",
      "২. Tarpor 'Check Visa' option e giye apnar 9-digit passport number bhalo kore likhun.",
      "৩. Jodi kono captcha code chaye ta hole screen er text ta thikbhabe box e boshan.",
      "৪. Search button e chap dile 5 second er moddhe shorkari server theke result ashbe.",
      "৫. Result e Approved, Valid ba Expired shob kisu dekha jabe ebong screenshot rekhe diben."
    ],
    "portalName": "Banglish Quick Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "passport number diye check",
      "banglish guide",
      "kivabe visa check korbo"
    ]
  },
  {
    "id": 30,
    "category": "passport-check",
    "qBn": "অ্যাপ্লিকেশন আইডি ছাড়া কি পাসপোর্ট দিয়ে ভিসা দেখা যায়?",
    "qEn": "Can visa be viewed with passport without application ID?",
    "ansLines": [
      "১. হ্যাঁ, বেশিরভাগ দেশেই অ্যাপ্লিকেশন আইডি বা রেফারেন্স নম্বর ছাড়াও শুধু পাসপোর্ট নম্বর দিয়ে ভিসা দেখা যায়।",
      "২. সৌদি আরবের মুকিম বা দুবাইয়ের GDRFA তে অ্যাপ্লিকেশন আইডি ছাড়াই শুধু পাসপোর্ট ও নাম দিয়ে চেক করা যায়।",
      "৩. তবে প্রাথমিক আবেদনের সময় ভিসা স্ট্যাম্প হওয়ার আগে ট্র্যাক করার ক্ষেত্রে অ্যাপ্লিকেশন আইডির প্রয়োজন হতে পারে।",
      "৪. যদি আপনার কাছে অ্যাপ্লিকেশন আইডি না থাকে, তবে ড্রপডাউন মেনু থেকে 'Search by Passport' অপশন সিলেক্ট করবেন।",
      "৫. ভিসা চূড়ান্তভাবে ইস্যু হয়ে গেলে সবসময়ই কেন্দ্রীয় ডাটাবেজে পাসপোর্ট নম্বর দিয়ে পূর্ণাঙ্গ ডাটা পাওয়া যায়।"
    ],
    "portalName": "Application ID Fallback",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "অ্যাপ্লিকেশন আইডি ছাড়া",
      "শুধু পাসপোর্ট",
      "without application id"
    ]
  },
  {
    "id": 31,
    "category": "passport-check",
    "qBn": "পাসপোর্ট দিয়ে ভিসা চেক করতে কি কি তথ্য লাগে?",
    "qEn": "What information is needed to check visa with passport?",
    "ansLines": [
      "১. প্রধান তথ্য হলো আপনার ৯ ডিজিটের মূল পাসপোর্ট নম্বর (যা পাসপোর্টের প্রথম পাতায় থাকে)।",
      "২. দ্বিতীয়ত, পাসপোর্টে উল্লেখিত সঠিক জন্মতারিখ ও আবেদনকারীর জাতীয়তা (Bangladeshi)।",
      "৩. কোনো কোনো ক্ষেত্রে ভিসা ইস্যুকারী দেশের স্পন্সর আইডি বা অ্যাপ্লিকেশন রেফারেন্স নম্বর।",
      "৪. রোবট প্রতিরোধ করতে স্ক্রিনে দেখানো ছবির ক্যাপচা কোড বা গাণিতিক যোগফল সঠিকভাবে পূরণ করতে হয়।",
      "৫. এই কয়েকটি মৌলিক তথ্য ছাড়া কোনো পাসওয়ার্ড বা ওটিপির দরকার হয় না, তাই অন্য কোনো গোপন তথ্য কাউকে দেবেন না।"
    ],
    "portalName": "Requirements Checklist",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "কি কি তথ্য লাগে",
      "প্রয়োজনীয় তথ্য",
      "requirements for visa check"
    ]
  },
  {
    "id": 32,
    "category": "passport-check",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে ভিসা চেক করার সরকারি ওয়েবসাইট কোনটি?",
    "qEn": "Which is the government website to check visa with passport?",
    "ansLines": [
      "১. একেক দেশের জন্য একেকটি নির্দিষ্ট সরকারি ইমিগ্রেশন ডোমেইন রয়েছে, কোনো সার্বজনীন একটি সাইট নেই।",
      "২. যেমন সৌদি আরবের জন্য visa.mofa.gov.sa এবং muqeem.sa অফিসিয়াল সরকারি পোর্টাল।",
      "৩. সংযুক্ত আরব আমিরাতের জন্য smartservices.icp.gov.ae এবং gdrfad.gov.ae সরকারি পোর্টাল।",
      "৪. মালয়েশিয়ার জন্য eservices.imi.gov.my এবং কাতারের জন্য portal.moi.gov.qa একমাত্র অফিশিয়াল সাইট।",
      "৫. আমাদের Visa Check App এই সমস্ত অফিসিয়াল সরকারি সাইটগুলোকে এক জায়গায় সহজে লিংক করে দিয়েছে।"
    ],
    "portalName": "Government Portals Directory",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "সরকারি ওয়েবসাইট",
      "সরকারি পোর্টাল",
      "official government website"
    ]
  },
  {
    "id": 33,
    "category": "passport-check",
    "qBn": "ই-পাসপোর্ট নাম্বার দিয়ে ভিসা চেক করার পদ্ধতি কি?",
    "qEn": "How to check visa with e-passport number?",
    "ansLines": [
      "১. ই-পাসপোর্ট (E-Passport) দিয়ে ভিসা চেক করার নিয়ম প্রচলিত মেশিন রিডেবল পাসপোর্টের (MRP) মতোই এক।",
      "২. আপনার ই-পাসপোর্টের ইংরেজি অক্ষর (সাধারণত 'E' দিয়ে শুরু) সহ পুরো নম্বরটি নির্ধারিত ঘরে লিখুন।",
      "৩. ই-পাসপোর্টের আধুনিক চিপ থাকায় আন্তর্জাতিক ডাটাবেজে এর তথ্য খুব দ্রুত এবং নির্ভুলভাবে লোড হয়।",
      "৪. ই-পাসপোর্ট নম্বরের কোনো ডিজিট ভুল না করে হুবহু বসিয়ে সার্চ বাটনে ক্লিক করলেই তথ্য চলে আসবে।",
      "৫. বাংলাদেশ থেকে ইস্যু করা সব ধরণের ই-পাসপোর্ট বিশ্বব্যাপী সব ইমিগ্রেশন সিস্টেমে সমানভাবে কার্যকর।"
    ],
    "portalName": "e-Passport Processing",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ই-পাসপোর্ট দিয়ে চেক",
      "e-passport visa check",
      "ই পাসপোর্ট নিয়ম"
    ]
  },
  {
    "id": 34,
    "category": "passport-check",
    "qBn": "পাসপোর্ট জমা দেওয়ার পর ভিসা হয়েছে কিনা কিভাবে জানব?",
    "qEn": "How to know if visa is issued after submitting passport?",
    "ansLines": [
      "১. দূতাবাসে বা ভিসা সেন্টারে পাসপোর্ট জমা দেওয়ার পর আপনাকে একটি ট্র্যাকিং স্লিপ বা রেফারেন্স নম্বর দেওয়া হয়।",
      "২. Visa Check App এ গিয়ে সংশ্লিষ্ট দেশের ট্র্যাকিং পোর্টালে সেই রেফারেন্স বা পাসপোর্ট নম্বরটি লিখুন।",
      "৩. স্ট্যাটাস যদি 'Under Process' দেখায়, তবে বুঝতে হবে ভিসা যাচাই ও স্ট্যাম্পিংয়ের কাজ চলছে।",
      "৪. স্ট্যাটাস পরিবর্তন হয়ে 'Application Approved' বা 'Passport Dispatched' দেখালে ভিসা সম্পন্ন হয়েছে।",
      "৫. ভিসা চূড়ান্ত অনুমোদন হলে সরকারি সিস্টেমে আপনার পাসপোর্ট নম্বরের বিপরীতে অনলাইন ভিসা কপি দেখতে পাবেন।"
    ],
    "portalName": "Submission Tracking",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট জমা দেওয়ার পর",
      "ভিসা হয়েছে কিনা",
      "tracking after submission"
    ]
  },
  {
    "id": 35,
    "category": "passport-check",
    "qBn": "পাসপোর্ট ডেলিভারি হওয়ার কতদিন পর ভিসা অনলাইনে আসে?",
    "qEn": "How many days after passport delivery does visa appear online?",
    "ansLines": [
      "১. সাধারণত দূতাবাস বা ইমিগ্রেশনে ভিসা এপ্রুভ হওয়ার সাথে সাথেই ডিজিটাল সার্ভারে তা লাইভ হয়ে যায়।",
      "২. তবে পাসপোর্ট প্রিন্টিং ও ডেলিভারির কারণে সিস্টেম ডাটা সিঙ্ক হতে ২৪ থেকে সর্বোচ্চ ৪৮ ঘণ্টা সময় লাগতে পারে।",
      "৩. যদি আপনি হাতে পাসপোর্ট পেয়ে যান এবং তাতে ভিসা স্টিকার থাকে, তবে অনলাইনে তা অবিলম্বে দৃশ্যমান হওয়ার কথা।",
      "৪. কোনো কারণে ২ দিন পরেও অনলাইনে না আসলে ভিসা সেন্টারে বা এজেন্সির সাথে যোগাযোগ করে সিস্টেম আপডেট করাতে হবে।",
      "৫. ফ্লাইটের টিকিট কাটার পূর্বে অবশ্যই অনলাইন ডাটাবেজে ভিসা স্ট্যাটাস শতভাগ অ্যাক্টিভ আছে কিনা যাচাই করুন।"
    ],
    "portalName": "Data Synchronization",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসা অনলাইনে আসে কতদিনে",
      "ডাটা আপডেট সময়",
      "online sync time"
    ]
  },
  {
    "id": 36,
    "category": "passport-check",
    "qBn": "পাসপোর্টে ভিসা স্টিকার লাগানোর পর অনলাইনে চেক করব কিভাবে?",
    "qEn": "How to check online after visa sticker is affixed on passport?",
    "ansLines": [
      "১. পাসপোর্টে লাগানো ভিসা স্টিকারের উপরের অংশে থাকা 'Visa Number' এবং আপনার পাসপোর্ট নম্বরটি নিন।",
      "২. Visa Check App থেকে ওই দেশের অফিসিয়াল ভিসা পোর্টালে প্রবেশ করে পাসপোর্ট ও ভিসা নম্বর ইনপুট দিন।",
      "৩. অনলাইনে প্রদর্শিত নামের বানান, পেশা, স্পন্সরের নাম ও ছবির সাথে পাসপোর্টের স্টিকার মিলিয়ে দেখুন।",
      "৪. স্টিকারের নিচের লাইনে থাকা এমআরজেড (MRZ) কোডের সাথে অনলাইনের ডিজিটাল ডাটা হুবহু মিলতে হবে।",
      "৫. যদি স্টিকার লাগানো থাকে কিন্তু অনলাইনে 'No Record' আসে, তবে সেই স্টিকারটি নকল হওয়ার তীব্র সম্ভাবনা রয়েছে।"
    ],
    "portalName": "Sticker Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসা স্টিকার চেক",
      "পাসপোর্টে ভিসা লাগানোর পর",
      "visa sticker verify"
    ]
  },
  {
    "id": 37,
    "category": "passport-check",
    "qBn": "পাসপোর্ট হারিয়ে গেলে ভিসা স্ট্যাটাস চেক করব কিভাবে?",
    "qEn": "How to check visa status if passport is lost?",
    "ansLines": [
      "১. আপনার হারানো পাসপোর্টের কোনো ফটোকপি, ছবি বা নোট থেকে পাসপোর্ট নম্বরটি সংগ্রহ করুন।",
      "২. হারানো পাসপোর্টের নম্বরটি দিয়েই Visa Check App-এ সার্চ করে আপনি আপনার বিদ্যমান ভিসা স্ট্যাটাস দেখতে পারবেন।",
      "৩. ভিসার মেয়াদ ও বৈধতা থাকলে সেই অনলাইন কপিটি সাথে সাথে প্রিন্ট বা পিডিএফ করে সংরক্ষণ করে নিন।",
      "৪. এরপর নতুন পাসপোর্ট পাওয়ার পর সংশ্লিষ্ট দেশের দূতাবাসে যোগাযোগ করে ভিসাটি নতুন পাসপোর্টে ট্রান্সফার করতে হবে।",
      "৫. বিদেশে থাকা প্রবাসীরা হারানো পাসপোর্টের ভিসা কপি দেখিয়ে স্থানীয় বাংলাদেশ দূতাবাস ও ইমিগ্রেশন থেকে ট্রাভেল পারমিট পেতে পারেন।"
    ],
    "portalName": "Lost Passport Recovery",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট হারিয়ে গেলে",
      "হারানো পাসপোর্ট ভিসা",
      "lost passport check"
    ]
  },
  {
    "id": 38,
    "category": "passport-check",
    "qBn": "দালালের দেওয়া পাসপোর্ট স্লিপ দিয়ে কি ভিসা চেক হয়?",
    "qEn": "Can visa be checked with agent's passport slip?",
    "ansLines": [
      "১. দালালের দেওয়া সাধারণ কোনো সাদা কাগজের রিসিট দিয়ে সরকারি সার্ভারে সরাসরি কোনো ভিসা চেক করা যায় না।",
      "২. তবে সেই স্লিপে যদি অফিসিয়াল VFS Global, Tasheel বা এম্বাসির জেনুইন অ্যাপ্লিকেশন রেফারেন্স নম্বর থাকে তবে চেক হবে।",
      "৩. সবচেয়ে নির্ভরযোগ্য উপায় হলো স্লিপে লেখা আপনার মূল পাসপোর্ট নম্বরটি দিয়ে সরাসরি সরকারি পোর্টালে সার্চ করা।",
      "৪. দালাল যদি পাসপোর্ট নম্বর ছাড়া কোনো তথ্য না দেয়, তবে বুঝতে হবে তারা এখনো সরকারি ডাটাবেজে ফাইল জমা দেয়নি।",
      "৫. শুধু দালালের মুখের কথায় বা মনগড়া স্লিপ দেখে কোনো ধরনের আর্থিক লেনদেন করা সম্পূর্ণ ঝুঁকিপূর্ণ।"
    ],
    "portalName": "Agent Slip Validation",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "দালালের স্লিপ",
      "পাসপোর্ট স্লিপ দিয়ে চেক",
      "agent slip check"
    ]
  },
  {
    "id": 39,
    "category": "passport-check",
    "qBn": "পাসপোর্ট নম্বর সার্চ দিলে নো ডাটা ফাউন্ড দেখালে কি করণীয়?",
    "qEn": "What to do if search shows No Data Found?",
    "ansLines": [
      "১. প্রথমেই নিশ্চিত হোন যে পাসপোর্ট নম্বরের প্রতিটি ডিজিট এবং বর্ণ কোনো ভুল ছাড়া সঠিকভাবে টাইপ করেছেন।",
      "২. অনেক সময় নতুন জমা দেওয়া ফাইলের তথ্য সিস্টেমে তুলতে এম্বাসি বা ইমিগ্রেশনের ৩ থেকে ৭ কার্যদিবস সময় লাগে।",
      "৩. আপনার এজেন্সি বা দালালকে জিজ্ঞেস করুন তারা সরকারি ফি দিয়ে আবেদনটি চূড়ান্ত সাবমিট করেছে কিনা।",
      "৪. যদি অনেকদিন আগে আবেদন করা হয়ে থাকে তবুও 'No Data' দেখায়, তবে বুঝতে হবে কোনো আবেদনই জমা দেওয়া হয়নি।",
      "৫. অন্য ব্রাউজার বা Visa Check App থেকে ক্যাশ ক্লিয়ার করে পুনরায় চেক করে নিশ্চিত হয়ে নিন।"
    ],
    "portalName": "Troubleshooting Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "নো ডাটা ফাউন্ড",
      "no data found",
      "রেকর্ড নেই করণীয়"
    ]
  },
  {
    "id": 40,
    "category": "passport-check",
    "qBn": "পাসপোর্ট রিনিউ করলে আগের ভিসা কিভাবে চেক করব?",
    "qEn": "How to check previous visa after passport renewal?",
    "ansLines": [
      "১. পাসপোর্ট রিনিউ করলেও পুরাতন পাসপোর্টের নম্বরে ইস্যু হওয়া ভিসাটি তার নির্দিষ্ট মেয়াদ পর্যন্ত বৈধ থাকে।",
      "২. সরকারি ওয়েবসাইটে চেক করার সময় পুরাতন পাসপোর্ট নম্বরটি দিয়ে সার্চ দিলে আপনার পূর্বের ভিসার স্ট্যাটাস আসবে।",
      "৩. যদি আপনি ইতোমধ্যে ইমিগ্রেশনে গিয়ে ভিসা নতুন পাসপোর্টে ট্রান্সফার করে থাকেন, তবে নতুন নম্বর দিয়ে চেক করবেন।",
      "৪. প্রবাসীরা ছুটির ভিসা বা রি-এন্ট্রি ভিসার ক্ষেত্রে পুরাতন পাসপোর্ট নম্বর দিয়ে মুকিম বা সংশ্লিষ্ট পোর্টালে তথ্য দেখতে পারেন।",
      "৫. আন্তর্জাতিক ভ্রমণের ক্ষেত্রে নতুন ও পুরাতন উভয় পাসপোর্ট একসাথে বহন করলে কোনো জটিলতায় পড়তে হয় না।"
    ],
    "portalName": "Renewal & Validity Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পাসপোর্ট রিনিউ",
      "পূর্বের ভিসা চেক",
      "renewal visa validity"
    ]
  },
  {
    "id": 41,
    "category": "saudi-arabia",
    "qBn": "সৌদি আরবের ভিসা চেক কিভাবে করে?",
    "qEn": "How to check Saudi Arabia visa?",
    "ansLines": [
      "১. সৌদি ভিসা চেক করার সবচেয়ে নিরাপদ মাধ্যম হলো সৌদি পররাষ্ট্র মন্ত্রণালয়ের অফিসিয়াল প্ল্যাটফর্ম (visa.mofa.gov.sa)।",
      "২. Visa Check App-এর হোমপেজ থেকে 'সৌদি আরব' সিলেক্ট করে সরাসরি 'ভিসা চেক' অপশনে ক্লিক করুন।",
      "৩. আপনার পাসপোর্ট নম্বর, জাতীয়তা (Bangladesh), ভিসার ধরন এবং স্ক্রিনে প্রদর্শিত ক্যাপচা কোডটি লিখুন।",
      "৪. 'Search' বাটনে চাপলে কয়েক সেকেন্ডে আপনার ভিসা অনুমোদন, কফিলের নাম এবং স্পন্সর নম্বর প্রদর্শিত হবে।",
      "৫. যদি ভিসা স্ট্যাম্প হয়ে থাকে, তবে স্ক্রিনে একটি ডিজিটাল বারকোডসহ পূর্ণাঙ্গ অনলাইন ভিসা শিট দেখা যাবে।"
    ],
    "portalName": "Saudi MOFA Visa Platform",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি ভিসা চেক",
      "saudi visa check",
      "মুফা ভিসা"
    ]
  },
  {
    "id": 42,
    "category": "saudi-arabia",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে সৌদি ভিসা চেক করার নিয়ম কি?",
    "qEn": "What is the rule to check Saudi visa by passport number?",
    "ansLines": [
      "১. সৌদি ভিসা সার্ভিস পোর্টালে গিয়ে ইনকোয়ারি বক্সে 'Passport Number' অপশনটি বেছে নিন।",
      "২. পাসপোর্টের ৯ ডিজিটের সঠিক নম্বরটি ইংরেজি বড় হাতের অক্ষরে নির্ধারিত ঘরে টাইপ করুন।",
      "৩. আবেদনকারীর জাতীয়তা হিসেবে ড্রপডাউন মেনু থেকে 'Bangladesh' সিলেক্ট করুন।",
      "৪. ভিসার ধরন (যেমন Work Visa, Family Visit বা Umrah) সঠিকভাবে নির্বাচন করতে হবে।",
      "৫. ক্যাপচা কোডটি দিয়ে 'Perform Search' এ চাপলে মুহূর্তের মধ্যে ভিসার আসল ভ্যালিডিটি স্ট্যাটাস চলে আসবে।"
    ],
    "portalName": "Saudi MOFA Query",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "পাসপোর্ট দিয়ে সৌদি ভিসা",
      "saudi passport visa check",
      "সৌদি নিয়ম"
    ]
  },
  {
    "id": 43,
    "category": "saudi-arabia",
    "qBn": "saudi visa check online kivabe korbo?",
    "qEn": "How to check Saudi visa online in Banglish?",
    "ansLines": [
      "১. Visa Check App open kore Saudi Arabia te click korben ebong MOFA portal e jaben.",
      "২. Okhane apnar passport number ebong visa application number boshiye diben.",
      "৩. Nationality option e 'Bangladesh' select korben ebong screen er image code ta type korben.",
      "৪. Search korle jodi 'Visa has been issued' lekha ashe ta hole visa 100% genuine.",
      "৫. Sheshe pura visa copy ta mobile e PDF hishebe save kore WhatsApp e pathiye rakhun."
    ],
    "portalName": "Saudi Banglish Guide",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "saudi visa online kivabe",
      "banglish saudi visa",
      "saudi online check"
    ]
  },
  {
    "id": 44,
    "category": "saudi-arabia",
    "qBn": "মুফা (MOFA) নাম্বার দিয়ে সৌদি ভিসা চেক কিভাবে করব?",
    "qEn": "How to check Saudi visa with MOFA number?",
    "ansLines": [
      "১. সৌদি ভিসার মেডিকেল বা বায়োমেট্রিক করার সময় 'E' দিয়ে শুরু হওয়া একটি মুফা (MOFA) নম্বর পাওয়া যায়।",
      "২. সৌদি ভিসা প্ল্যাটফর্মে (visa.mofa.gov.sa) প্রবেশ করে 'Application Number' অপশনটি সিলেক্ট করুন।",
      "৩. প্রথম ঘরে আপনার 'E' নম্বরটি এবং দ্বিতীয় ঘরে মূল পাসপোর্ট নম্বরটি নির্ভুলভাবে লিখুন।",
      "৪. ক্যাপচা কোড প্রদান করে সার্চ বাটনে ক্লিক করলে আপনার ভিসা আবেদনের সর্বশেষ অগ্রগতি দেখা যাবে।",
      "৫. যদি ভিসা স্ট্যাম্পিং সফল হয়, তবে এই মুফা নম্বরের বিপরীতেই সরকারি ভিসা নম্বর জেনারেট হয়ে যাবে।"
    ],
    "portalName": "MOFA Application Service",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "মুফা নাম্বার দিয়ে চেক",
      "mofa number visa check",
      "e number visa"
    ]
  },
  {
    "id": 45,
    "category": "saudi-arabia",
    "qBn": "সৌদি কোম্পানি ভিসা আসল না ভুয়া কিভাবে বুঝব?",
    "qEn": "How to know if Saudi company visa is real or fake?",
    "ansLines": [
      "১. সরকারি মুফা ওয়েবসাইটে পাসপোর্ট নম্বর দিয়ে চেক করলে কোম্পানির আসল লাইসেন্সড নাম ও সিআর (CR) নম্বর দেখা যাবে।",
      "২. সৌদি মানবসম্পদ মন্ত্রণালয়ের 'Qiwa' (কুয়া) পোর্টালে গিয়ে কোম্পানির ডিজিটাল চুক্তিপত্র যাচাই করে নিতে পারেন।",
      "৩. ভিসার পেপারে উল্লেখিত পেশা ও বেতনের সাথে সরকারি ডাটাবেজের তথ্যে কোনো গরমিল থাকা যাবে না।",
      "৪. কোম্পানি যদি ভুয়া বা কালো তালিকাভুক্ত হয়, তবে সরকারি সার্ভারে ভিসার স্ট্যাটাস ব্লক বা বাতিল দেখাবে।",
      "৫. দালালের দেওয়া কাগুজে ভিসার কিউআর কোড স্ক্যান করে যদি সরাসরি mofa.gov.sa ডোমেইন না আসে, তবে তা ভুয়া।"
    ],
    "portalName": "Saudi Qiwa & MOFA Validation",
    "officialUrl": "https://qiwa.sa",
    "tags": [
      "সৌদি কোম্পানি ভিসা",
      "আসল না ভুয়া",
      "saudi company visa fake"
    ]
  },
  {
    "id": 46,
    "category": "saudi-arabia",
    "qBn": "মুকিম (Muqeem) এ ছুটির ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check exit-reentry visa on Muqeem?",
    "ansLines": [
      "১. প্রবাসীদের ছুটির ভিসা (Exit Re-entry Visa) চেক করার জন্য অফিসিয়াল ওয়েবসাইট হলো muqeem.sa।",
      "২. পোর্টালে গিয়ে প্রথম ঘরে আপনার ১০ ডিজিটের সৌদি ইকামা নম্বর (Iqama Number) প্রবেশ করান।",
      "৩. দ্বিতীয় ঘরে ম্যাচিং করার জন্য 'Passport Number' সিলেক্ট করে আপনার পাসপোর্ট নম্বরটি দিন।",
      "৪. 'Check' বাটনে ট্যাপ করলে আপনার ছুটির ভিসার মেয়াদ, ফিরে আসার শেষ তারিখ ও বর্তমান অবস্থা ভেসে উঠবে।",
      "৫. যদি স্ট্যাটাসে 'Active' ও সবুজ সংকেত থাকে, তবে আপনি নিশ্চিন্তে সৌদি আরবে ফিরে যেতে পারবেন।"
    ],
    "portalName": "Muqeem Visa Validity Service",
    "officialUrl": "https://muqeem.sa/#/visa-validity/check",
    "tags": [
      "মুকিম ছুটির ভিসা",
      "muqeem visa check",
      "সৌদি ছুটির মেয়াদ"
    ]
  },
  {
    "id": 47,
    "category": "saudi-arabia",
    "qBn": "সৌদি কাজের ভিসা স্ট্যাটাস চেক করার লিংক কোনটি?",
    "qEn": "Which is the official link to check Saudi work visa status?",
    "ansLines": [
      "১. সৌদি কাজের ভিসার কেন্দ্রীয় সরকারি লিংক হলো: visa.mofa.gov.sa।",
      "২. এই লিংকে প্রবেশ করে নাগরিক ও প্রবাসীদের জন্য নির্ধারিত ভিসা ট্র্যাকিং অপশনে যেতে হবে।",
      "৩. পাসপোর্ট নম্বর এবং জাতীয়তা দিয়ে সরাসরি এম্বাসি স্ট্যাম্পিংয়ের লাইভ অগ্রগতি দেখা যায়।",
      "৪. এছাড়া আমাদের Visa Check App সরাসরি এই লিংকের সাথে কোনো ব্রাউজার জটিলতা ছাড়া কানেক্ট করে।",
      "৫. কোনো ভুয়া ডোমেইনে না গিয়ে এই অফিসিয়াল লিংকটিই সবসময় ব্যবহার করা অত্যন্ত জরুরি।"
    ],
    "portalName": "Saudi Ministry of Foreign Affairs",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি কাজের ভিসা লিংক",
      "saudi work visa link",
      "অফিসিয়াল লিংক"
    ]
  },
  {
    "id": 48,
    "category": "saudi-arabia",
    "qBn": "সৌদি ভিসা স্ট্যাম্পিং হয়েছে কিনা কিভাবে জানব?",
    "qEn": "How to know if Saudi visa stamping is completed?",
    "ansLines": [
      "১. সৌদি এম্বাসিতে পাসপোর্ট জমা দেওয়ার পর ভিসা স্ট্যাম্পিং হতে সাধারণত ৩ থেকে ৫ কার্যদিবস লাগে।",
      "২. পাসপোর্ট নম্বর দিয়ে মুফা পোর্টালে চেক করলে যখন 'The visa has been issued with number...' দেখাবে, তখন স্ট্যাম্পিং নিশ্চিত।",
      "৩. এর সাথে স্ক্রিনে একটি পরিষ্কার ডিজিটাল বারকোড ও সৌদি রাষ্ট্রীয় সিলযুক্ত ভিসা কপি দেখতে পাবেন।",
      "৪. যতদিন শুধু আবেদন দেখাবে এবং কোনো ভিসা নম্বর আসবে না, ততদিন স্ট্যাম্পিং প্রক্রিয়াধীন রয়েছে।",
      "৫. ভিসা নম্বর দৃশ্যমান হওয়ার পরেই এজেন্সি বা দালালের সাথে চূড়ান্ত অর্থ লেনদেন করা নিরাপদ।"
    ],
    "portalName": "Embassy Stamping Tracker",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "ভিসা স্ট্যাম্পিং হয়েছে কিনা",
      "saudi visa stamping",
      "স্ট্যাম্পিং চেক"
    ]
  },
  {
    "id": 49,
    "category": "saudi-arabia",
    "qBn": "সৌদি ভিজিট ভিসা ভ্যালিডিটি কিভাবে চেক করব?",
    "qEn": "How to check Saudi visit visa validity?",
    "ansLines": [
      "১. ফ্যামিলি ভিজিট, পার্সোনাল বা ট্যুরিস্ট ভিসার ক্ষেত্রে মুকিম (muqeem.sa) অথবা মুফা প্ল্যাটফর্মে যেতে হবে।",
      "২. ভিসার ডকুমেন্ট নম্বর এবং পাসপোর্ট নম্বর দিয়ে সার্চ দিলে ভিসার কার্যকর দিনক্ষণ দেখা যাবে।",
      "৩. সিঙ্গেল এন্ট্রি ভিসার ক্ষেত্রে সৌদি প্রবেশের পর ৩০ দিন এবং মাল্টিপল এন্ট্রিতে ৯০ দিন পর্যন্ত অবস্থান বৈধ থাকে।",
      "৪. ভিসার মেয়াদের শেষ তারিখ ও ইন্সুরেন্স ভ্যালিডিটি উভয়ই পোর্টালে বিস্তারিতভাবে উল্লেখ থাকে।",
      "৫. মেয়াদ শেষ হওয়ার পূর্বে Absher (আবশির) পোর্টাল থেকে প্রয়োজনীয় ফি দিয়ে ভিজিট ভিসা বাড়িয়ে নেওয়া যায়।"
    ],
    "portalName": "Saudi Visit Visa Portal",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি ভিজিট ভিসা",
      "ভিজিট ভিসা ভ্যালিডিটি",
      "visit visa validity"
    ]
  },
  {
    "id": 50,
    "category": "saudi-arabia",
    "qBn": "ইকামা নাম্বার দিয়ে সৌদি ভিসা চেক করার পদ্ধতি কি?",
    "qEn": "How to check Saudi visa using Iqama number?",
    "ansLines": [
      "১. সৌদি প্রবাসীদের জন্য muqeem.sa পোর্টাল হলো সবচেয়ে সহজ ও নির্ভরযোগ্য ভিসা চেকিং ব্যবস্থা।",
      "২. ওয়েবসাইটের প্রথম ঘরে আপনার ১০ সংখ্যার ইকামা নম্বরটি (Iqama Number) নির্ভুলভাবে টাইপ করুন।",
      "৩. দ্বিতীয় ড্রপডাউন থেকে 'Passport Number' সিলেক্ট করে আপনার পাসপোর্ট নম্বরটি দিন।",
      "৪. 'Check' অপশনে চাপ দিলে সাথে সাথে আপনার ছুটির তারিখ, ফেরার শেষ দিন এবং ভিসার বৈধতা প্রদর্শিত হবে।",
      "৫. সৌদি এয়ারপোর্টে আসার আগে এই পেজটি প্রিন্ট করে সাথে রাখা প্রবাসীদের জন্য অত্যন্ত সহায়ক।"
    ],
    "portalName": "Muqeem Iqama Service",
    "officialUrl": "https://muqeem.sa",
    "tags": [
      "ইকামা নাম্বার দিয়ে চেক",
      "iqama visa check",
      "মুকিম ইকামা"
    ]
  },
  {
    "id": 51,
    "category": "saudi-arabia",
    "qBn": "সৌদি ভিসা চেক করতে কত টাকা স্পন্সর ফি দেখতে পাব?",
    "qEn": "What sponsor fee is shown when checking Saudi visa?",
    "ansLines": [
      "১. সৌদি সরকারি পোর্টালে ভিসা ইস্যু করার সময় প্রদত্ত অফিশিয়াল সরকারি ফি (যেমন ২০০০ রিয়াল) দেখতে পাবেন।",
      "২. এই ফি সম্পূর্ণভাবে সৌদি নিয়োগকর্তা বা কফিল সৌদি সরকারের কোষাগারে জমা দিয়ে থাকেন।",
      "৩. তবে কোনো ব্যক্তি বা প্রবাসীর জন্য ভিসা অনলাইনে চেক করতে বাড়তি কোনো টাকা বা ফি প্রদান করতে হয় না।",
      "৪. ভিসা পেপারে উল্লেখিত সরকারি ফির সাথে দালালদের অতিরিক্ত দাবি করা টাকার কোনো আইনি সম্পর্ক নেই।",
      "৫. ভিসা যাচাইয়ের মাধ্যমে নিশ্চিত হওয়া যায় যে স্পন্সর বৈধভাবে সরকারি ফি দিয়ে ভিসা সংগ্রহ করেছে।"
    ],
    "portalName": "Saudi Fee Transparency",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি ভিসা ফি",
      "স্পন্সর ফি",
      "saudi visa fee"
    ]
  },
  {
    "id": 52,
    "category": "saudi-arabia",
    "qBn": "সৌদি ওমরাহ ভিসা অনলাইনে চেক করব কিভাবে?",
    "qEn": "How to check Saudi Umrah visa online?",
    "ansLines": [
      "১. ওমরাহ ভিসা চেক করার জন্য সৌদি হজ ও ওমরাহ মন্ত্রণালয়ের নুশুক (Nusuk) অথবা মুফা প্ল্যাটফর্ম ব্যবহার করুন।",
      "২. আপনার পাসপোর্ট নম্বর এবং জাতীয়তা বাংলাদেশ সিলেক্ট করে সরাসরি ট্র্যাকিং অপশনে যান।",
      "৩. ভিসা অনুমোদন হলে ওমরাহ ভিসার রেফারেন্স নম্বর ও বায়োমেট্রিক ভ্যালিডিটি স্ক্রিনে প্রদর্শিত হবে।",
      "৪. ওমরাহ ভিসার মেয়াদ সৌদি আরবে প্রবেশের পর সাধারণত ৯০ দিন পর্যন্ত কার্যকর থাকে।",
      "৫. ভিসা কপিটি ডাউনলোড করে নুশুক অ্যাপে লগইন করলে সহজে ওমরাহ ও রওজা শরিফের পারমিট বুক করতে পারবেন।"
    ],
    "portalName": "Nusuk & MOFA Umrah Portal",
    "officialUrl": "https://www.nusuk.sa",
    "tags": [
      "সৌদি ওমরাহ ভিসা",
      "ওমরাহ ভিসা চেক",
      "umrah visa check"
    ]
  },
  {
    "id": 53,
    "category": "saudi-arabia",
    "qBn": "ইনজাজ (Enjaz) পোর্টালে ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check visa on Enjaz portal?",
    "ansLines": [
      "১. পূর্বে সৌদি আরবের ভিসা যাচাইয়ের জন্য জনপ্রিয় পোর্টাল ছিল Enjazit (ইনজাজ)।",
      "২. বর্তমানে ইনজাজ পোর্টালটিকে আধুনিকায়ন করে সরাসরি visa.mofa.gov.sa প্ল্যাটফর্মের সাথে একীভূত করা হয়েছে।",
      "৩. এখন ইনজাজের সব সেবা যেমন পাসপোর্ট দিয়ে সার্চ, অ্যাপ্লিকেশন স্ট্যাটাস সবই মুফা লিংকে পাওয়া যায়।",
      "৪. আপনার আগের ইনজাজ অ্যাপ্লিকেশন নম্বর (E-Number) দিয়েই মুফা পোর্টালে নির্বিঘ্নে ভিসা চেক করতে পারবেন।",
      "৫. কোনো পুরনো ইনজাজ লিংকে না গিয়ে সরাসরি মুফার বর্তমান সরকারি সাইটেই প্রবেশ করা নিরাপদ।"
    ],
    "portalName": "Enjaz MOFA Gateway",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "ইনজাজ ভিসা চেক",
      "enjaz visa check",
      "ইনজাজ আইটি"
    ]
  },
  {
    "id": 54,
    "category": "saudi-arabia",
    "qBn": "সৌদি আরবের আমেল মানজিল ভিসা চেক কিভাবে করব?",
    "qEn": "How to check Saudi Amel Manzil visa?",
    "ansLines": [
      "১. আমেল মানজিল বা গৃহকর্মী ভিসা চেক করতে সৌদি সরকারের 'Musaned' (মুসানাদ) ও মুফা পোর্টাল ব্যবহার করতে হয়।",
      "২. ভিসা চেক অ্যাপে সৌদি আরব অপশনে গিয়ে মুসানাদ এপ্রুভাল স্ট্যাটাস বাটনে ক্লিক করুন।",
      "৩. আপনার পাসপোর্ট নম্বর ও স্পন্সরের আইডি নম্বর দিলে চুক্তিপত্র ও ভিসার অনুমোদন দেখা যাবে।",
      "৪. আমেল মানজিল ভিসায় কফিলের নাম, মাসিক বেতন ও কাজের শর্তাবলী অনলাইনে স্পষ্টভাবে লেখা থাকে।",
      "৫. কোনো দালালের মাধ্যমে আসার আগে মুসানাদ সিস্টেমে চুক্তি রেজিস্টার্ড হয়েছে কিনা তা অবশ্যই যাচাই করুন।"
    ],
    "portalName": "Saudi Musaned Portal",
    "officialUrl": "https://musaned.com.sa",
    "tags": [
      "আমেল মানজিল ভিসা",
      "মুসানাদ ভিসা চেক",
      "domestic worker visa"
    ]
  },
  {
    "id": 55,
    "category": "saudi-arabia",
    "qBn": "সৌদি ভিসা রিজেক্ট হলে পোর্টালে কি লেখা আসে?",
    "qEn": "What shows up if Saudi visa is rejected?",
    "ansLines": [
      "১. ভিসা বাতিল বা প্রত্যাখ্যাত হলে মুফা পোর্টালে সাধারণত 'Application Rejected' বা 'Refused' বার্তা আসে।",
      "২. অনেক সময় সুনির্দিষ্ট কারণ যেমন 'Medical Unfit', 'Fingerprint Mismatch' বা 'Security Ban' উল্লেখ থাকে।",
      "৩. রিজেক্ট হলে কোনো ভিসা নম্বর বা বারকোড জেনারেট হয় না এবং স্ট্যাটাস লাল রঙে প্রদর্শিত হয়।",
      "৪. যদি রিজেকশন ঘটে, তবে সংশ্লিষ্ট রিক্রুটিং এজেন্সির মাধ্যমে দূতাবাস থেকে পাসপোর্ট ফেরত সংগ্রহ করতে হয়।",
      "৫. ভুল তথ্যের কারণে রিজেক্ট হলে প্রয়োজনীয় কাগজপত্র সংশোধন করে পুনরায় নতুন আবেদন করা সম্ভব।"
    ],
    "portalName": "Rejection Status Notice",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি ভিসা রিজেক্ট",
      "ভিসা বাতিল হলে করণীয়",
      "visa rejected notice"
    ]
  },
  {
    "id": 56,
    "category": "saudi-arabia",
    "qBn": "সৌদি ভিসা অনলাইন চেক করার পর কি প্রিন্ট করতে হয়?",
    "qEn": "Should Saudi visa be printed after checking online?",
    "ansLines": [
      "১. হ্যাঁ, অনলাইনে ভিসা দেখার পর পূর্ণাঙ্গ ভিসা শিটের একটি রঙিন বা স্পষ্ট কপি অবশ্যই প্রিন্ট করা উচিত।",
      "২. বর্তমান সময়ে সৌদি আরবের অধিকাংশ ভিসা ই-ভিসা (E-Visa) হিসেবে পেপার আকারে ইস্যু করা হয়।",
      "৩. বিমানবন্দর ইমিগ্রেশন, ম্যানপাওয়ার ক্লিয়ারেন্স এবং সৌদি এয়ারপোর্টে প্রবেশের সময় এই পেপারের দরকার হয়।",
      "৪. পেপারের উপরে থাকা কিউআর কোডটি যেন পরিষ্কার ও পঠনযোগ্য থাকে সেদিকে খেয়াল রাখবেন।",
      "৫. মূল প্রিন্ট কপির পাশাপাশি স্মার্টফোনে একটি অফলাইন পিডিএফ ফাইল ব্যাকআপ হিসেবে রেখে দেওয়া উত্তম।"
    ],
    "portalName": "Print & Documentation",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "ভিসা প্রিন্ট",
      "ই-ভিসা পেপার",
      "print saudi visa"
    ]
  },
  {
    "id": 57,
    "category": "saudi-arabia",
    "qBn": "সৌদি কফিল ভিসা পাঠিয়েছে কিনা কিভাবে চেক করব?",
    "qEn": "How to check if Saudi sponsor sent visa?",
    "ansLines": [
      "১. কফিল ভিসা সাবমিট করলে আপনার পাসপোর্ট নম্বরের বিপরীতে একটি অ্যাপ্লিকেশন আইডি তৈরি হয়।",
      "২. মুফা পোর্টালে পাসপোর্ট নম্বর দিয়ে সার্চ দিলে কফিলের নাম এবং স্পন্সর নম্বরসহ প্রাথমিক ডাটা দেখা যাবে।",
      "৩. কফিল যদি শুধু চাহিদাপত্র দেয় কিন্তু দূতাবাস প্রসেস না করে, তবে স্ট্যাটাসে 'Draft' বা প্রক্রিয়াধীন দেখাবে।",
      "৪. কফিলকে অনুরোধ করে ভিসা অনুমোদনের ডিজিটাল কপি বা মুসানাদ ওয়ার্ক অর্ডার সংগ্রহ করতে পারেন।",
      "৫. যতক্ষণ সরকারি পোর্টালে আপনার পাসপোর্ট নম্বর লিংক না হচ্ছে, ততক্ষণ ভিসা পাঠানো হয়েছে বলে নিশ্চিত হওয়া যায় না।"
    ],
    "portalName": "Sponsor Verification",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "কফিল ভিসা পাঠিয়েছে কিনা",
      "স্পন্সর চেক",
      "sponsor visa send check"
    ]
  },
  {
    "id": 58,
    "category": "saudi-arabia",
    "qBn": "সৌদি ভিসা চেক করার পর মেয়াদ কতদিন থাকে?",
    "qEn": "How long is Saudi visa valid after issuance?",
    "ansLines": [
      "১. কাজের ভিসার (Work Visa) ক্ষেত্রে স্ট্যাম্পিং হওয়ার দিন থেকে সাধারণত ৯০ দিন পর্যন্ত প্রবেশের মেয়াদ থাকে।",
      "২. এই ৯০ দিনের মধ্যে অবশ্যই ফ্লাইট করে সৌদি আরবের যেকোনো আন্তর্জাতিক বিমানবন্দরে প্রবেশ করতে হবে।",
      "৩. সৌদি আরবে প্রবেশের পর কফিল বা নিয়োগকর্তা ৩ মাসের মধ্যে আপনার জন্য ২ বছরের ইকামা (Iqama) তৈরি করে দেবেন।",
      "৪. ভিজিট ভিসার ক্ষেত্রে সাধারণত ৩০ দিন বা ৯০ দিন সৌদি আরবে অবস্থানের অনুমতি দেওয়া হয়।",
      "৫. ভিসার প্রিন্ট কপিতে 'Valid for Travel Until' তারিখে প্রবেশের সর্বশেষ দিন স্পষ্টভাবে লেখা থাকে।"
    ],
    "portalName": "Visa Validity Timeline",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি ভিসার মেয়াদ",
      "ভিসা মেয়াদ কতদিন",
      "saudi visa validity period"
    ]
  },
  {
    "id": 59,
    "category": "saudi-arabia",
    "qBn": "ভিসা প্ল্যাটফর্ম (visa.mofa.gov.sa) কিভাবে ব্যবহার করব?",
    "qEn": "How to use Saudi visa platform (visa.mofa.gov.sa)?",
    "ansLines": [
      "১. মোবাইল বা কম্পিউটার ব্রাউজারে visa.mofa.gov.sa ওয়েবসাইটটি ওপেন করে ভাষা ইংরেজি (EN) নির্বাচন করুন।",
      "২. পেজের মাঝামাঝি থাকা 'Query' বা 'Inquiry' বক্সে যান এবং সার্চ টাইপ নির্বাচন করুন।",
      "৩. পাসপোর্ট নম্বর বা অ্যাপ্লিকেশন নম্বর এবং আবেদনকারীর বর্তমান জাতীয়তা 'Bangladesh' সিলেক্ট করুন।",
      "৪. স্ক্রিনের ছবিতে থাকা সিকিউরিটি ক্যাপচা কোডটি নির্দিষ্ট ঘরে নিখুঁতভাবে টাইপ করুন।",
      "৫. 'Search' বাটনে চাপলেই কয়েক সেকেন্ডে আপনার সম্পূর্ণ ভিসা প্রোফাইল ওপেন হয়ে যাবে।"
    ],
    "portalName": "MOFA Official Portal Guide",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "visa mofa gov sa",
      "মুফা প্ল্যাটফর্ম",
      "mofa platform guide"
    ]
  },
  {
    "id": 60,
    "category": "saudi-arabia",
    "qBn": "সৌদি আরবের ড্রাইভিং ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check Saudi driving visa?",
    "ansLines": [
      "১. সৌদি ড্রাইভিং ভিসার পেশা হিসেবে সাধারণত 'সাইক খাস' (ব্যক্তিগত চালক) বা 'সাইক আম' (পাবলিক ড্রাইভার) লেখা থাকে।",
      "২. মুফা পোর্টালে পাসপোর্ট নম্বর দিয়ে সার্চ দিলে 'Profession' কলামে আপনার পেশা স্পষ্টভাবে প্রদর্শিত হবে।",
      "৩. সাইক খাস ভিসা মুসানাদ (Musaned) এর আওতাধীন এবং পাবলিক ড্রাইভার ভিসা কোম্পানি কোটায় অনুমোদিত হয়।",
      "৪. ড্রাইভিং ভিসায় আসার পূর্বে আপনার পাসপোর্ট ও ভিসার তথ্যে পেশার মিল আছে কিনা তা যাচাই করে নেওয়া জরুরি।",
      "৫. সৌদি এম্বাসিতে ড্রাইভিং লাইসেন্স যাচাইয়ের পর ভিসা স্ট্যাম্পিং সফল হলে ভিসা পেপারে গাড়ির ক্যাটাগরি লেখা থাকে।"
    ],
    "portalName": "Saudi Driving Visa Tracking",
    "officialUrl": "https://visa.mofa.gov.sa",
    "tags": [
      "সৌদি ড্রাইভিং ভিসা",
      "সাইক খাস ভিসা",
      "saudi driving visa check"
    ]
  },
  {
    "id": 61,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিসা চেক কিভাবে করে?",
    "qEn": "How to check Dubai visa?",
    "ansLines": [
      "১. দুবাইয়ের ভিসা চেক করার জন্য দুবাই ইমিগ্রেশনের অফিসিয়াল প্ল্যাটফর্ম হলো GDRFA (gdrfad.gov.ae)।",
      "২. আর আবুধাবি, শারজাহসহ অন্য আমিরাতের জন্য ফেডারেল অথরিটি ICP (smartservices.icp.gov.ae) ব্যবহার করা হয়।",
      "৩. Visa Check App এ 'দুবাই ও ইউএই' কার্ডে ক্লিক করে সরাসরি আপনার নির্দিষ্ট পোর্টালে ঢুকতে পারবেন।",
      "৪. পাসপোর্ট নম্বর, জাতীয়তা (Bangladesh) ও জন্মতারিখ দিয়ে সার্চ বাটনে ক্লিক করুন।",
      "৫. কয়েক সেকেন্ডে আপনার ভিসার ধরন, ইস্যু তারিখ ও মেয়াদের সর্বশেষ স্ট্যাটাস দেখা যাবে।"
    ],
    "portalName": "Dubai GDRFA & ICP Portal",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "দুবাই ভিসা চেক",
      "dubai visa check",
      "gdrfa dubai"
    ]
  },
  {
    "id": 62,
    "category": "uae-dubai",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে দুবাই ভিসা চেক করার নিয়ম কি?",
    "qEn": "What is the rule to check Dubai visa by passport number?",
    "ansLines": [
      "১. ICP স্মার্ট সার্ভিসে গিয়ে 'Passport Information' অপশনে টিক চিহ্ন দিন।",
      "২. 'Type' ড্রপডাউন থেকে 'Visa' সিলেক্ট করুন এবং আপনার পাসপোর্ট নম্বরটি ইংরেজিতে টাইপ করুন।",
      "৩. জাতীয়তা হিসেবে '207 - BANGLADESH' সিলেক্ট করে পাসপোর্টের জন্মতারিখ দিন।",
      "৪. ক্যাপচা কোডটি পূরণ করে 'Search' বাটনে চাপলে ভিসার ডাটা প্রদর্শিত হবে।",
      "৫. ফলাফলে ফাইল নম্বর, ভিসা ক্যাটাগরি এবং এক্সপায়ারি ডেট স্পষ্টভাবে দেখতে পাবেন।"
    ],
    "portalName": "ICP Passport Tracking",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "পাসপোর্ট দিয়ে দুবাই ভিসা",
      "dubai passport check",
      "icp passport"
    ]
  },
  {
    "id": 63,
    "category": "uae-dubai",
    "qBn": "uae visa check online passport number diye kivabe kore?",
    "qEn": "How to check UAE visa online using passport number in Banglish?",
    "ansLines": [
      "১. Visa Check App open kore UAE / Dubai te enter korben ebong ICP portal e jaben.",
      "২. Okhane 'Passport Information' select kore Visa option e click korben.",
      "৩. Apnar passport number ebong date of birth select kore nationality Bangladesh diben.",
      "৪. Search button e press korle file status Active ba Used dekha jabe.",
      "৫. Visa status 'Active' thakle bujhben visa 100% real ebong valid ache."
    ],
    "portalName": "UAE Banglish Guide",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "uae visa check online",
      "dubai banglish check",
      "passport diye uae visa"
    ]
  },
  {
    "id": 64,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিজিট ভিসা আসল না নকল কিভাবে বুঝব?",
    "qEn": "How to know if Dubai visit visa is genuine or fake?",
    "ansLines": [
      "১. আসল দুবাই ভিসায় সর্বদা একটি ইউনিক ইউনিফাইড নম্বর (UID) এবং ফাইল নম্বর উল্লেখ থাকে।",
      "২. GDRFA বা ICP পোর্টালে এই ফাইল নম্বর সার্চ দিলে আবেদনকারীর নাম ও পাসপোর্টের ছবি মিলে যাবে।",
      "৩. দালালদের তৈরি নকল ভিসায় প্রায়ই ফন্ট অমিল, নিম্নমানের লোগো বা কিউআর কোড নষ্ট থাকে।",
      "৪. অফিশিয়াল সার্ভারে সার্চ দিলে যদি কোনো ফাইল না পাওয়া যায়, তবে ভিসাটি নিশ্চিত জাল।",
      "৫. ভিসা যাচাইয়ের পাশাপাশি ইস্যুকারী ট্রাভেল এজেন্সির লাইসেন্স অনলাইনে যাচাই করে নেওয়া ভালো।"
    ],
    "portalName": "Dubai Fraud Prevention",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই ভিজিট ভিসা আসল নকল",
      "dubai visit visa fake",
      "নকল দুবাই ভিসা"
    ]
  },
  {
    "id": 65,
    "category": "uae-dubai",
    "qBn": "দুবাই কাজের ভিসা হয়েছে কিনা কিভাবে জানব?",
    "qEn": "How to know if Dubai work visa is issued?",
    "ansLines": [
      "১. দুবাই এমপ্লয়মেন্ট ভিসার প্রথম ধাপ হলো MOHRE (শ্রম মন্ত্রণালয়) থেকে ওয়ার্ক পারমিট অনুমোদন।",
      "২. এরপরে ইমিগ্রেশন থেকে ২ মাসের একটি এন্ট্রি পারমিট (Employment Entry Permit) ইস্যু করা হয়।",
      "৩. পাসপোর্ট নম্বর দিয়ে GDRFA বা ICP তে সার্চ দিলে স্ট্যাটাসে 'Employment Visa' দেখতে পাবেন।",
      "৪. অনুমোদিত হলে আপনি পেপার ভিসা কপি পাবেন যা নিয়ে দুবাইতে প্রবেশ করতে পারবেন।",
      "৫. দুবাই প্রবেশের পর মেডিকেল ও এমিরেটস আইডি করার পর ২ বছরের জন্য চূড়ান্ত রেসিডেন্স ভিসা লাগে।"
    ],
    "portalName": "MOHRE & GDRFA Dubai",
    "officialUrl": "https://www.mohre.gov.ae",
    "tags": [
      "দুবাই কাজের ভিসা",
      "dubai work visa status",
      "দুবাই এমপ্লয়মেন্ট"
    ]
  },
  {
    "id": 66,
    "category": "uae-dubai",
    "qBn": "দুবাই আইসিপি (ICP) স্মার্ট সার্ভিসে ভিসা চেক কিভাবে করে?",
    "qEn": "How to check visa on ICP Smart Services?",
    "ansLines": [
      "১. smartservices.icp.gov.ae সাইটে প্রবেশ করে 'Public Services' মেনুতে ক্লিক করুন।",
      "২. তালিকা থেকে 'File Validity' অপশনটি বেছে নিয়ে সার্চ শুরু করুন।",
      "৩. 'Passport Information' সিলেক্ট করে ভিসা রেডিও বাটনে ক্লিক করুন।",
      "৪. আপনার পাসপোর্ট নম্বর, জাতীয়তা ও জন্মতারিখ দিয়ে ক্যাপচা যাচাই সম্পন্ন করুন।",
      "৫. 'Search' বাটনে চাপলেই আপনার ফাইলের অবস্থা, ইস্যু তারিখ ও এক্সপায়ারি ডেট স্ক্রিনে ভেসে উঠবে।"
    ],
    "portalName": "ICP Smart Services Official",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "আইসিপি ভিসা চেক",
      "icp smart services",
      "icp file validity"
    ]
  },
  {
    "id": 67,
    "category": "uae-dubai",
    "qBn": "জিডিআরএফএ (GDRFA) দুবাই ভিসা চেক করার নিয়ম কি?",
    "qEn": "What is the rule to check visa on GDRFA Dubai?",
    "ansLines": [
      "১. শুধুমাত্র দুবাই রাজ্যের ভিসার জন্য gdrfad.gov.ae ওয়েবসাইটে প্রবেশ করতে হয়।",
      "২. হোমপেজের সার্ভিস অপশন থেকে 'Check Visa / Application Status' নির্বাচন করুন।",
      "৩. সার্চ অপশনে গিয়ে 'Application' অথবা 'File' নম্বর এবং পাসপোর্ট নম্বর প্রদান করুন।",
      "৪. প্রথম নাম (First Name ইংরেজিতে) এবং জন্মতারিখ ড্রপডাউন থেকে নির্বাচন করুন।",
      "৫. তথ্য সঠিক থাকলে এক মুহূর্তেই আপনার দুবাই ভিসার বর্তমান কার্যকর স্ট্যাটাস স্ক্রিনে চলে আসবে।"
    ],
    "portalName": "GDRFA Dubai Services",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "জিডিআরএফএ দুবাই",
      "gdrfa visa check",
      "gdrfa dubai check"
    ]
  },
  {
    "id": 68,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিসা জরিমানা (Fine) চেক করব কিভাবে?",
    "qEn": "How to check Dubai visa overstay fine?",
    "ansLines": [
      "১. দুবাইতে ভিসার মেয়াদের অতিরিক্ত অবস্থানের জন্য জরিমানা চেক করতে ICP বা GDRFA তে যাওয়া যায়।",
      "২. ICP পোর্টালের 'Fines - Pay Fines' সেকশনে গিয়ে পাসপোর্ট বা ফাইল নম্বর ইনপুট দিন।",
      "৩. প্রথম দিনের ওভারস্টের পর প্রতিদিনের হিসেবে সরকারি জরিমানার মোট পরিমাণ দেখতে পাবেন।",
      "৪. জরিমানার টাকার পাশাপাশি কোনো এক্সিট পাস বা আউটপাস লাগবে কিনা তা উল্লেখ থাকে।",
      "৫. জরিমানা পরিশোধের অনলাইন লিংক থেকেই নিরাপদ পেমেন্ট গেটওয়ে দিয়ে ফাইন প্রদান করা যায়।"
    ],
    "portalName": "UAE Fine Inquiry",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "দুবাই ভিসা জরিমানা",
      "dubai fine check",
      "overstay fine check"
    ]
  },
  {
    "id": 69,
    "category": "uae-dubai",
    "qBn": "দুবাই ফ্রিল্যান্স ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check Dubai freelance visa?",
    "ansLines": [
      "১. দুবাই ফ্রিল্যান্স ভিসার ক্ষেত্রে নির্দিষ্ট ফ্রিজোন বা দুবাই ডেভেলপমেন্ট অথরিটি পারমিট ইস্যু করে।",
      "২. আপনার পারমিট নম্বর এবং পাসপোর্ট দিয়ে সংশ্লিষ্ট ফ্রিজোন বা GDRFA পোর্টালে সার্চ দিন।",
      "৩. ফ্রিল্যান্স ভিসার ক্ষেত্রে পেশার জায়গায় 'Green Visa' বা নির্দিষ্ট অনুমোদিত পেশা উল্লেখ থাকে।",
      "৪. এই ভিসার মেয়াদ সাধারণত ২ থেকে ৫ বছর পর্যন্ত নবায়নযোগ্য হয়ে থাকে।",
      "৫. অনলাইন স্ট্যাটাসে অনুমোদিত হলে এমিরেটস আইডির জন্য সরাসরি বায়োমেট্রিক অ্যাপয়েন্টমেন্ট বুক করা যায়।"
    ],
    "portalName": "Dubai Freelance Tracking",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই ফ্রিল্যান্স ভিসা",
      "freelance visa check",
      "গ্রিন ভিসা"
    ]
  },
  {
    "id": 70,
    "category": "uae-dubai",
    "qBn": "দুবাই গ্রিন ভিসা চেক করার পদ্ধতি কি?",
    "qEn": "How to check Dubai Green Visa?",
    "ansLines": [
      "১. দুবাই গ্রিন ভিসা হলো দক্ষ কর্মী ও ফ্রিল্যান্সারদের জন্য ৫ বছর মেয়াদি সেলফ-স্পন্সরড ভিসা।",
      "২. ICP স্মার্ট সার্ভিস বা GDRFA পোর্টালে পাসপোর্ট নম্বর দিলে রেসিডেন্স টাইপে 'Green Visa' দেখাবে।",
      "৩. কোনো কফিলের প্রয়োজন ছাড়াই এই ভিসার স্ট্যাটাস সরাসরি আবেদনকারীর নিজের নিয়ন্ত্রণে থাকে।",
      "৪. ভিসার বৈধতা, ইনস্যুরেন্স ও পরিবারের সদস্যদের স্পনসরশিপের মেয়াদ একসাথে যাচাই করা যায়।",
      "৫. মেয়াদ শেষ হওয়ার আগে গ্রেস পিরিয়ডের সময়সীমাও পোর্টালে বিস্তারিতভাবে প্রদর্শিত হয়।"
    ],
    "portalName": "UAE Green Visa System",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "দুবাই গ্রিন ভিসা",
      "green visa check",
      "৫ বছরের ভিসা"
    ]
  },
  {
    "id": 71,
    "category": "uae-dubai",
    "qBn": "দুবাই ইনভেস্টর ও গোল্ডেন ভিসা চেক কিভাবে করে?",
    "qEn": "How to check Dubai Golden Visa?",
    "ansLines": [
      "১. ১০ বছর মেয়াদি গোল্ডেন ভিসার প্রাথমিক অনুমোদন ICP বা GDRFA গোল্ডেন সার্ভিসেস প্ল্যাটফর্মে দেখা যায়।",
      "২. আবেদন জমা দেওয়ার পর অ্যাপ্লিকেশন রেফারেন্স কোড দিয়ে নমিনেশন স্ট্যাটাস ট্র্যাক করতে হয়।",
      "৩. নমিনেশন এপ্রুভড হলে ৬ মাসের মাল্টিপল এন্ট্রি ভিসা পাওয়া যায় যার স্ট্যাটাস অনলাইনে ভ্যালিড থাকে।",
      "৪. চূড়ান্ত গোল্ডেন ভিসা ইস্যু হলে এমিরেটস আইডি সিস্টেমে ১০ বছরের মেয়াদ কার্যকর হয়ে যায়।",
      "৫. গোল্ডেন ভিসাধারীরা কোনো কফিল ছাড়াই আনলিমিটেড সময় দেশের বাইরে অবস্থান করতে পারেন।"
    ],
    "portalName": "UAE Golden Visa Portal",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "দুবাই গোল্ডেন ভিসা",
      "golden visa check",
      "১০ বছরের ভিসা"
    ]
  },
  {
    "id": 72,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিসা বাতিল (Cancel) হয়েছে কিনা কিভাবে চেক করব?",
    "qEn": "How to check if Dubai visa is cancelled?",
    "ansLines": [
      "১. কোম্পানি বা স্পন্সর ভিসা ক্যানসেল করলে তার স্ট্যাটাস সাথে সাথে ইমিগ্রেশন সার্ভারে আপডেট হয়।",
      "২. ICP বা GDRFA তে ফাইল নম্বর সার্চ দিলে স্ট্যাটাসে 'Cancelled' বা 'Used' লেখা দেখতে পাবেন।",
      "৩. ভিসা বাতিল হওয়ার পর দেশ ত্যাগ বা নতুন ভিসা লাগানোর জন্য সাধারণত ৩০ দিনের গ্রেস পিরিয়ড থাকে।",
      "৪. ক্যানসেলেশন পেপারে সরকারি অনুমোদন নম্বর ও ক্যানসেলের তারিখ সুনির্দিষ্টভাবে উল্লেখ থাকে।",
      "৫. যদি স্ট্যাটাস এখনও 'Active' থাকে, তবে বুঝতে হবে স্পন্সর এখনো সরকারিভাবে ভিসা বাতিল করেনি।"
    ],
    "portalName": "Cancellation Tracker",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই ভিসা বাতিল",
      "visa cancelled check",
      "গ্রেস পিরিয়ড"
    ]
  },
  {
    "id": 73,
    "category": "uae-dubai",
    "qBn": "আবুধাবি ভিসা চেক করার জন্য কোন ওয়েবসাইটে যাব?",
    "qEn": "Which website to visit to check Abu Dhabi visa?",
    "ansLines": [
      "১. আবুধাবি রাজ্যের সব ধরণের ভিসা ও এন্ট্রি পারমিট ICP স্মার্ট সার্ভিসের আওতাধীন।",
      "২. এর অফিসিয়াল ওয়েবসাইট হলো: smartservices.icp.gov.ae।",
      "৩. এখানে পাসপোর্ট নম্বর ও জন্মতারিখ দিয়ে আবুধাবির ভিজিট ও রেসিডেন্স ভিসা ট্র্যাক করা যায়।",
      "৪. দুবাইয়ের মতো আবুধাবির জন্য আলাদা কোনো স্থানীয় ইমিগ্রেশন নেই, ফেডারেল আইসিপিই একমাত্র পোর্টাল।",
      "৫. Visa Check App এ ক্লিক করলে সরাসরি আবুধাবি ভিসা ট্র্যাকিং উইন্ডো ওপেন হয়ে যাবে।"
    ],
    "portalName": "Abu Dhabi ICP Portal",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "আবুধাবি ভিসা চেক",
      "abu dhabi visa check",
      "আবুধাবি আইসিপি"
    ]
  },
  {
    "id": 74,
    "category": "uae-dubai",
    "qBn": "শারজাহ ভিসা চেক করার আলাদা লিংক আছে কি?",
    "qEn": "Is there a separate link to check Sharjah visa?",
    "ansLines": [
      "১. শারজাহ, আজমান, উম্মুল আল কুওয়াইন, রাস আল খাইমাহ ও ফুজাইরাহ এই ৫টি আমিরাতের ভিসা ICP পোর্টালেই চেক হয়।",
      "২. এর জন্য আলাদা কোনো সাইট নেই, সরাসরি smartservices.icp.gov.ae ব্যবহার করতে হয়।",
      "৩. সার্চের সময় আমিরাত কোড বা ফাইল নম্বরের শুরুতে শারজাহর জন্য '3' বা নির্দিষ্ট কোড থাকে।",
      "৪. পাসপোর্ট নম্বর দিয়ে সার্চ দিলে শারজাহ ইমিগ্রেশন কর্তৃপক্ষের সিল ও অনুমোদন দৃশ্যমান হবে।",
      "৫. শারজাহ বিমানবন্দর দিয়ে প্রবেশের ক্ষেত্রে এই পোর্টালে ভিসা একটিভ থাকা বাধ্যতামূলক।"
    ],
    "portalName": "Sharjah & Northern Emirates",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "শারজাহ ভিসা চেক",
      "sharjah visa check",
      "আজমান ভিসা"
    ]
  },
  {
    "id": 75,
    "category": "uae-dubai",
    "qBn": "দুবাই এন্ট্রি পারমিট ভ্যালিডিটি কিভাবে চেক করব?",
    "qEn": "How to check Dubai Entry Permit validity?",
    "ansLines": [
      "১. কাজের ভিসা বা ভিজিট ভিসায় দুবাই ঢোকার আগে যে পেপার দেওয়া হয় তাকে এন্ট্রি পারমিট বলে।",
      "২. এন্ট্রি পারমিটে লেখা পারমিট নম্বর ও পাসপোর্ট দিয়ে GDRFA পোর্টালে ভ্যালিডিটি দেখা যায়।",
      "৩. সাধারণত এন্ট্রি পারমিট ইস্যু হওয়ার ৬০ দিনের মধ্যে দুবাই এয়ারপোর্টে প্রবেশ করতে হয়।",
      "৪. এই ৬০ দিনের মধ্যে প্রবেশ না করলে পারমিটের মেয়াদ উত্তীর্ণ (Expired) হয়ে বাতিল হয়ে যায়।",
      "৫. স্ট্যাটাসে 'Valid' লেখা থাকলে আপনি কোনো বাধা ছাড়াই বিমানে ভ্রমণ করতে পারবেন।"
    ],
    "portalName": "Entry Permit Inquiry",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই এন্ট্রি পারমিট",
      "entry permit validity",
      "দুবাই প্রবেশ পারমিট"
    ]
  },
  {
    "id": 76,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিসার রেফারেন্স নাম্বার কোথায় থাকে?",
    "qEn": "Where is the reference number located on Dubai visa?",
    "ansLines": [
      "১. আপনার ভিসার প্রিন্ট কপির একদম উপরের ডান কোণায় 'File No' বা ফাইল নম্বর লেখা থাকে।",
      "২. এটি সাধারণত তিনটি ভাগে বিভক্ত থাকে (যেমন 201/2026/1234567), যেখানে প্রথম অংশটি আমিরাত কোড।",
      "৩. এছাড়া ভিসার ওপরের অংশে ৯ বা ১০ ডিজিটের একটি 'UID No' বা ইউনিফাইড নম্বর থাকে।",
      "৪. এই দুটি নম্বরের যেকোনো একটি দিয়ে এবং পাসপোর্ট নম্বর দিয়ে পোর্টালে নিখুঁত সার্চ করা যায়।",
      "৫. দালালের দেওয়া ভিসায় এই ফাইল নম্বর না থাকলে বা অস্পষ্ট হলে ভিসাটি ভুয়া হতে পারে।"
    ],
    "portalName": "Document Anatomy Guide",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই রেফারেন্স নাম্বার",
      "দুবাই ফাইল নম্বর",
      "uid number dubai"
    ]
  },
  {
    "id": 77,
    "category": "uae-dubai",
    "qBn": "দুবাই ট্যুরিস্ট ভিসার মেয়াদ শেষ হলে কিভাবে রিনিউ চেক করব?",
    "qEn": "How to check renewal of Dubai tourist visa?",
    "ansLines": [
      "১. বর্তমানে দুবাই ট্যুরিস্ট ভিসা বাড়ানোর আবেদন যে ট্রাভেল এজেন্সি থেকে নেওয়া হয়েছিল তাদের মাধ্যমে করতে হয়।",
      "২. এজেন্সি আবেদন সাবমিট করার পর ICP বা GDRFA তে আপনার পাসপোর্ট দিয়ে সার্চ দিলে নতুন মেয়াদ আসবে।",
      "৩. এক্সটেনশন অনুমোদন হলে এক্সপায়ারি ডেট ৩০ দিন বা ৬০ দিন বৃদ্ধি পেয়ে 'Extended' স্ট্যাটাস দেখাবে।",
      "৪. যদি এখনো আগের মেয়াদই দেখায়, তবে বুঝতে হবে রিনিউয়াল প্রক্রিয়াধীন বা ফি জমা হয়নি।",
      "৫. ওভারস্টে এড়াতে ভিসার শেষ দিনের কমপক্ষে ৩ দিন আগেই রিনিউয়াল স্ট্যাটাস কনফার্ম করা নিরাপদ।"
    ],
    "portalName": "Tourist Visa Extension",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "দুবাই ট্যুরিস্ট ভিসা রিনিউ",
      "tourist visa extension",
      "ভিসার মেয়াদ বাড়ানো"
    ]
  },
  {
    "id": 78,
    "category": "uae-dubai",
    "qBn": "দুবাই দুই বছরের এমপ্লয়মেন্ট ভিসা চেক কিভাবে করে?",
    "qEn": "How to check Dubai 2-year employment visa?",
    "ansLines": [
      "১. দুবাই প্রবেশের পর মেডিকেল টেস্ট ও এমিরেটস আইডির বায়োমেট্রিক ফিঙ্গারপ্রিন্ট সম্পন্ন করতে হয়।",
      "২. এরপর ইমিগ্রেশন আপনার পাসপোর্টে ডিজিটাল ২ বছরের রেসিডেন্স ভিসা স্ট্যাম্প করে দেয়।",
      "৩. এই ভিসা GDRFA অ্যাপ বা ICP অ্যাপে পাসপোর্ট ও এমিরেটস আইডি নম্বর দিয়ে চেক করা যায়।",
      "৪. স্ট্যাটাসে 'Residency Valid' এবং পুরো ২ বছরের মেয়াদের শেষ দিন দেখতে পাবেন।",
      "৫. এই ডিজিটাল রেসিডেন্স কপিটি আপনার ফোনে সেভ থাকলে বিদেশে যাওয়া-আসা এবং ব্যাংক অ্যাকাউন্ট খুলতে কাজে লাগে।"
    ],
    "portalName": "Residency Visa Gateway",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই ২ বছরের ভিসা",
      "employment visa check",
      "রেসিডেন্স ভিসা"
    ]
  },
  {
    "id": 79,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিসায় ইউনিফাইড নাম্বার (UID) কি এবং কোথায় পাব?",
    "qEn": "What is Unified Number (UID) on Dubai visa?",
    "ansLines": [
      "১. UID হলো সংযুক্ত আরব আমিরাত সরকারের পক্ষ থেকে প্রতিটি বিদেশিকে দেওয়া স্থায়ী ৯ ডিজিটের ডিজিটাল পরিচয়।",
      "২. আপনার দুবাই ভিসা পেপারের ওপরের দিকে 'U.D.B. No' বা 'Unified No' হিসেবে এটি মুদ্রিত থাকে।",
      "৩. একবার দুবাই প্রবেশ করলে পরবর্তীতে যেকোনো নতুন ভিসা বা জরিমানার তথ্য এই ইউআইডি নম্বরে সংরক্ষিত হয়।",
      "৪. ICP পোর্টালে 'Unified Number Search' অপশনে গিয়ে পাসপোর্ট দিয়েও আপনি নিজের UID বের করতে পারেন।",
      "৫. এমিরেটস আইডি কার্ড তৈরি এবং ড্রাইভিং লাইসেন্স আবেদনে এই ইউআইডি নম্বরটি সবচেয়ে গুরুত্বপূর্ণ।"
    ],
    "portalName": "UID Identity Gateway",
    "officialUrl": "https://smartservices.icp.gov.ae",
    "tags": [
      "দুবাই ইউআইডি নম্বর",
      "unified number uae",
      "uid number check"
    ]
  },
  {
    "id": 80,
    "category": "uae-dubai",
    "qBn": "দুবাই ভিসা স্ট্যাটাস এপ্রুভড হলে অফিশিয়াল কপি কিভাবে ডাউনলোড করব?",
    "qEn": "How to download official copy of approved Dubai visa?",
    "ansLines": [
      "১. GDRFA বা ICP পোর্টালে আপনার ভিসা স্ট্যাটাস যখন 'Approved' দেখাবে, তখন পেজের নিচে প্রিন্ট অপশন আসবে।",
      "২. 'Print Electronic Visa' বা 'Download PDF' বাটনে ক্লিক করলেই মূল ডিজিটাল ভিসা শিটটি ডাউনলোড হবে।",
      "৩. এটি দুবাই সরকারের অফিশিয়াল সিকিউরিটি কিউআর কোডসহ একটি রঙিন পিডিএফ সার্টিফিকেট।",
      "৪. এই ফাইলটি আপনার কম্পিউটারে বা মোবাইলে সেভ করে একটি কালার প্রিন্ট বের করে রাখুন।",
      "৫. আন্তর্জাতিক ভ্রমণ এবং এয়ারপোর্ট ইমিগ্রেশনে এই প্রিন্ট কপিটি দেখালে কোনো আলাদা স্টিকারের প্রয়োজন হয় না।"
    ],
    "portalName": "Electronic Visa Issuance",
    "officialUrl": "https://gdrfad.gov.ae",
    "tags": [
      "দুবাই ভিসা ডাউনলোড",
      "download dubai visa",
      "ই-ভিসা পিডিএফ"
    ]
  },
  {
    "id": 81,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিসা চেক করার সঠিক নিয়ম কি?",
    "qEn": "What is the proper rule to check Malaysia visa?",
    "ansLines": [
      "১. মালয়েশিয়ার ভিসা চেক করার একমাত্র নির্ভরযোগ্য মাধ্যম হলো দেশটির ইমিগ্রেশন পোর্টাল (eservices.imi.gov.my)।",
      "২. Visa Check App এ মালয়েশিয়া অপশনে গিয়ে সরাসরি কলিং ভিসা অথবা ই-ভিসা ট্র্যাকিং লিংকে প্রবেশ করুন।",
      "৩. প্রথম বক্সে আপনার মূল ৯ সংখ্যার পাসপোর্ট নম্বরটি নির্ভুলভাবে টাইপ করুন।",
      "৪. দেশ হিসেবে 'BGD - BANGLADESH' সিলেক্ট করে সাবমিট বাটনে চাপ দিন।",
      "৫. যদি ভিসা প্রক্রিয়াধীন বা অনুমোদিত থাকে, তবে আবেদনকারীর নাম, রেফারেন্স কোড ও স্ট্যাটাস প্রদর্শিত হবে।"
    ],
    "portalName": "Malaysia Immigration Portal",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া ভিসা চেক",
      "malaysia visa check",
      "মালয়েশিয়া নিয়ম"
    ]
  },
  {
    "id": 82,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া কলিং ভিসা চেক কিভাবে করব?",
    "qEn": "How to check Malaysia Calling Visa?",
    "ansLines": [
      "১. কলিং ভিসার আবেদনের অগ্রগতি দেখতে মালয়েশিয়া ইমিগ্রেশনের FWCMS বা ই-সার্ভিসেস পোর্টালে যান।",
      "২. সার্চ অপশনে আপনার পাসপোর্ট নম্বর এবং রিক্রুটিং কোম্পানির রেজিস্ট্রেশন নম্বর (ROC) ইনপুট দিন।",
      "৩. যদি কোম্পানি কোটা এপ্রুভাল পায়, তবে স্ট্যাটাসে 'LULUS' বা 'Approved' লেখা দেখতে পাবেন।",
      "৪. এরপরেই বাংলাদেশ থেকে বায়োমেট্রিক ও মেডিকেল সম্পন্ন করে ই-ভিসা (eNTRI/eVisa) প্রসেস করা হয়।",
      "৫. যতক্ষণ সরকারি ডাটাবেজে স্ট্যাটাস 'LULUS' না আসছে, ততক্ষণ কাউকে কলিং ভিসার জন্য টাকা দেওয়া উচিত নয়।"
    ],
    "portalName": "Malaysia Calling Visa Tracker",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া কলিং ভিসা",
      "calling visa check",
      "লুলুস চেক"
    ]
  },
  {
    "id": 83,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ই-ভিসা (eVisa) আসল কিনা কিভাবে চেক করব?",
    "qEn": "How to check if Malaysia eVisa is genuine?",
    "ansLines": [
      "১. মালয়েশিয়া ই-ভিসা আসল কিনা তা যাচাইয়ের অফিসিয়াল লিংক হলো malaysiavisa.imi.gov.my।",
      "২. সেখানে 'Verify eVisa' মেনুতে গিয়ে পাসপোর্ট নম্বর ও স্টিকার নম্বর লিখে সার্চ দিন।",
      "৩. যদি ভিসাটি জেনুইন হয়, তবে মালয়েশিয়ান রাজকীয় সিলসহ সম্পূর্ণ ভিসা সার্টিফিকেটের কপি ওপেন হবে।",
      "৪. নকল ভিসার ক্ষেত্রে পোর্টালে 'Record Not Found' বা 'Invalid eVisa Number' প্রদর্শিত হবে।",
      "৫. ভিসার প্রিন্ট কপির কিউআর কোডটি স্ক্যান করেও সরাসরি সরকারি ভেরিফিকেশন ইউআরএল যাচাই করতে পারেন।"
    ],
    "portalName": "Official eVisa Verification",
    "officialUrl": "https://malaysiavisa.imi.gov.my",
    "tags": [
      "মালয়েশিয়া ই-ভিসা চেক",
      "verify evisa malaysia",
      "ই-ভিসা আসল নকল"
    ]
  },
  {
    "id": 84,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া এফডব্লিউসিএমএস (FWCMS) স্ট্যাটাস চেক কিভাবে করে?",
    "qEn": "How to check FWCMS status for Malaysia?",
    "ansLines": [
      "১. FWCMS হলো মালয়েশিয়া বিদেশি কর্মী ব্যবস্থাপনার কেন্দ্রীয় ডিজিটাল প্ল্যাটফর্ম।",
      "২. fwcms.com.my পোর্টালে কর্মী ট্র্যাকিং অপশনে আপনার পাসপোর্ট নম্বর ও জাতীয়তা প্রদান করুন।",
      "৩. এখানে প্রাক-আগমন মেডিকেল (Pre-Departure Medical), ফিঙ্গারপ্রিন্ট ও সিকিউরিটি ক্লিয়ারেন্সের তথ্য থাকে।",
      "৪. মেডিকেল রিপোর্ট 'FIT' হলে কোম্পানি পরবর্তী ধাপে ভিসা প্রসেসিংয়ের জন্য ইমিগ্রেশনে আবেদন করে।",
      "৫. FWCMS পোর্টালে আপনার ফাইলের অগ্রগতি দেখে নিশ্চিত হতে পারবেন আপনার ভিসা প্রক্রিয়া কতটুকু এগিয়েছে।"
    ],
    "portalName": "FWCMS Foreign Worker System",
    "officialUrl": "https://www.fwcms.com.my",
    "tags": [
      "এফডব্লিউসিএমএস চেক",
      "fwcms status check",
      "মেডিকেল ফিট মালয়েশিয়া"
    ]
  },
  {
    "id": 85,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া মেডিকেল ফিট হলে ভিসা কতদিনে আসে?",
    "qEn": "How long does it take for visa after Malaysia medical fit?",
    "ansLines": [
      "১. মেডিকেল রিপোর্ট সরকারি পোর্টালে 'FIT' আপডেট হওয়ার পর কোম্পানি সাধারণত ৭-১০ দিনের মধ্যে ফাইল জমা দেয়।",
      "২. ইমিগ্রেশনে ফাইল জমা হওয়ার পর প্রাথমিক অনুমোদন (VDR Approval) পেতে সাধারণত ২ থেকে ৪ সপ্তাহ সময় লাগে।",
      "৩. অনুমোদন পাওয়ার পর এম্বাসি থেকে ই-ভিসা স্টিকার ইস্যু হতে আরও ৩ থেকে ৫ কার্যদিবস প্রয়োজন হয়।",
      "৪. সব মিলিয়ে মেডিকেল ফিট হওয়ার পর সম্পূর্ণ ভিসা হাতে পেতে আনুমানিক ২৫ থেকে ৪০ দিন সময় লাগতে পারে।",
      "৫. যদি কোনো কোটা জটিলতা থাকে তবে কিছুটা বিলম্ব হতে পারে, যা FWCMS পোর্টালে লাইভ ট্র্যাক করা যায়।"
    ],
    "portalName": "Malaysia Processing Timeline",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মেডিকেল ফিট হলে ভিসা কতদিনে",
      "ভিসা প্রসেসিং সময়",
      "malaysia visa timeline"
    ]
  },
  {
    "id": 86,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া স্টুডেন্ট ভিসা ইএমজিএস (EMGS) চেক কিভাবে করে?",
    "qEn": "How to check Malaysia student visa on EMGS?",
    "ansLines": [
      "১. মালয়েশিয়ায় উচ্চশিক্ষা বা স্টুডেন্ট ভিসার সকল ফাইল EMGS (educationmalaysia.gov.my) এর মাধ্যমে প্রসেস হয়।",
      "২. পোর্টালে 'Track Application' অপশনে গিয়ে পাসপোর্ট নম্বর ও জাতীয়তা বাংলাদেশ সিলেক্ট করুন।",
      "৩. এখানে পার্সেন্টেজ হিসেবে অগ্রগতি দেখায় (যেমন 15%, 35%, 70%, 100%)।",
      "৪. যখন অগ্রগতি 70% বা 80% এ পৌঁছায় তখন ইমিগ্রেশন থেকে ই-ভ্যাল (eVAL) বা এপ্রুভাল লেটার ইস্যু হয়।",
      "৫. eVAL ডাউনলোড করে আপনি ঢাকায় মালয়েশিয়ান হাইকমিশনে সিঙ্গেল এন্ট্রি ভিসার জন্য আবেদন করতে পারবেন।"
    ],
    "portalName": "Education Malaysia Global Services",
    "officialUrl": "https://educationmalaysia.gov.my",
    "tags": [
      "মালয়েশিয়া স্টুডেন্ট ভিসা",
      "emgs visa tracking",
      "eval download"
    ]
  },
  {
    "id": 87,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া প্রফেশনাল ভিসা ডিপিটেন (DP10) চেক কিভাবে করে?",
    "qEn": "How to check Malaysia DP10 professional visa?",
    "ansLines": [
      "১. মালয়েশিয়ার এক্সপ্যাট্রিয়েট বা প্রফেশনাল এমপ্লয়মেন্ট পাসের আবেদন ESD (esd.imi.gov.my) পোর্টাল থেকে চেক করা হয়।",
      "২. কোম্পানির রেজিস্ট্রেশন রেফারেন্স কোড এবং কর্মীর পাসপোর্ট নম্বর দিয়ে ট্র্যাকিং অপশনে সার্চ দিন।",
      "৩. কমিটি অনুমোদনের পর স্ট্যাটাসে 'Approved' এবং পাসের মেয়াদ (যেমন ১, ২ বা ৩ বছর) উল্লেখ থাকবে।",
      "৪. DP10 ভিসা সম্পূর্ণ বৈধ এবং এর মাধ্যমে মালয়েশিয়ায় পরিবারের সদস্যদের নিয়ে যাওয়ার ডিপেন্ডেন্ট ভিসা পাওয়া যায়।",
      "৫. অনলাইন স্ট্যাটাস এপ্রুভড হলে এজেন্সি বা কোম্পানি থেকে অফিশিয়াল এপ্রুভাল লেটার সংগ্রহ করে নিন।"
    ],
    "portalName": "Expatriate Services Division",
    "officialUrl": "https://esd.imi.gov.my",
    "tags": [
      "মালয়েশিয়া প্রফেশনাল ভিসা",
      "dp10 visa check",
      "esd malaysia"
    ]
  },
  {
    "id": 88,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া স্পেশাল পাস চেক করার নিয়ম কি?",
    "qEn": "How to check Malaysia Special Pass?",
    "ansLines": [
      "১. কোনো বিশেষ কারণে বা ভিসা পরিবর্তনের সময় মালয়েশিয়া ইমিগ্রেশন অস্থায়ী ৩০ দিনের স্পেশাল পাস ইস্যু করে।",
      "২. স্পেশাল পাসের রিসিপ্ট নম্বর ও পাসপোর্ট নম্বর দিয়ে ইমিগ্রেশনের মাইইমিগ্রেশন সিস্টেমে ভ্যালিডিটি দেখা যায়।",
      "৩. স্পেশাল পাসের মেয়াদ শেষ হওয়ার পূর্বেই নতুন ভিসা লাগানো অথবা দেশত্যাগ করার শর্ত থাকে।",
      "৪. অনলাইনে চেক করে দেখে নেওয়া জরুরি যে ইমিগ্রেশন ডাটাবেজে পাসটি সঠিক মেয়াদে আপডেট হয়েছে কিনা।",
      "৫. স্পেশাল পাস ওভারস্টে করলে পরবর্তীতে বড় অঙ্কের জরিমানা বা ব্ল্যাকলিস্ট হওয়ার ঝুঁকি থাকে।"
    ],
    "portalName": "Special Pass Services",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া স্পেশাল পাস",
      "special pass check",
      "ইমিগ্রেশন পাস"
    ]
  },
  {
    "id": 89,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া রিক্যালিব্রেশন ভিসা চেক করার লিংক কি?",
    "qEn": "What is the link to check Malaysia Recalibration visa?",
    "ansLines": [
      "১. মালয়েশিয়ায় অবৈধ কর্মীদের বৈধকরণের রিক্যালিব্রেশন (RTK 2.0) প্রোগ্রামের নিজস্ব যাচাই লিংক রয়েছে।",
      "২. মালয়েশিয়া ইমিগ্রেশনের অফিশিয়াল লিঙ্ক: recalibration.imi.gov.my পোর্টালে যেতে হবে।",
      "৩. আপনার পাসপোর্ট নম্বর এবং ফিঙ্গারপ্রিন্ট রেজিস্ট্রেশন স্লিপ নম্বর দিয়ে সার্চ করুন।",
      "৪. ভেরিফিকেশনে 'LULUS' আসলে বুঝতে হবে আপনার জরিমানা পরিশোধ ও ওয়ার্ক পারমিট অনুমোদন সম্পন্ন হয়েছে।",
      "৫. ভুয়া কোনো দালালের রিক্যালিব্রেশন স্লিপ বিশ্বাস না করে সরাসরি এই সরকারি লিংকে ডাটা মিলিয়ে নিন।"
    ],
    "portalName": "Recalibration RTK 2.0",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "রিক্যালিব্রেশন ভিসা চেক",
      "rtk 2 0 check",
      "বৈধকরণ চেক"
    ]
  },
  {
    "id": 90,
    "category": "malaysia",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে মালয়েশিয়া ভিসা চেক করার সরকারি লিংক কোনটি?",
    "qEn": "Which is the government link to check Malaysia visa by passport?",
    "ansLines": [
      "১. সরকারি কেন্দ্রীয় ট্র্যাকিং লিঙ্কটি হলো: eservices.imi.gov.my/myimms/praApplicationStatus।",
      "২. Visa Check App এ ক্লিক করলে সরাসরি কোনো রিডাইরেক্ট ঝামেলা ছাড়াই এই পেজে নিয়ে যায়।",
      "৩. পাসপোর্ট নম্বর টাইপ করে জাতীয়তা ড্রপডাউন থেকে বাংলাদেশ সিলেক্ট করতে হয়।",
      "৪. এই পেজটি সরাসরি পুত্রজায়া সেন্ট্রাল ইমিগ্রেশন ডাটাবেজের সাথে লাইভ সংযুক্ত।",
      "৫. এখানে দেখানো তথ্যের বাইরে দালাল যদি অন্য কোনো মনগড়া তথ্য দেয়, তবে তা কখনোই গ্রহণযোগ্য নয়।"
    ],
    "portalName": "MyIMMs Official Portal",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া সরকারি লিংক",
      "myimms portal",
      "official malaysia link"
    ]
  },
  {
    "id": 91,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিসা আবেদনের স্ট্যাটাস 'BARU' দেখালে কি বুঝায়?",
    "qEn": "What does status 'BARU' mean on Malaysia visa check?",
    "ansLines": [
      "১. মালয় ভাষায় 'BARU' শব্দের ইংরেজি অর্থ হলো 'New' বা 'নতুন আবেদন'।",
      "২. এর অর্থ হলো কোম্পানি মাত্র আপনার পাসপোর্ট দিয়ে ইমিগ্রেশনে ভিসা কোটার ফাইল সাবমিট করেছে।",
      "৩. এই পর্যায়ে এখনো ইমিগ্রেশন অফিসাররা ফাইলের কাগজপত্র যাচাই ও অনুমোদন সম্পন্ন করেননি।",
      "৪. স্ট্যাটাস বারু (BARU) থেকে পরিবর্তিত হয়ে 'LULUS' হতে সাধারণত ৭ থেকে ২১ দিন সময় লাগে।",
      "৫. সুতরাং 'BARU' দেখালে ভিসা ফাইনাল হয়নি, এটি কেবল প্রাথমিক প্রক্রিয়ার সূচনা নির্দেশ করে।"
    ],
    "portalName": "Status Dictionary",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া স্ট্যাটাস baru",
      "baru meaning",
      "নতুন আবেদন"
    ]
  },
  {
    "id": 92,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিসার স্ট্যাটাস 'LULUS' বা 'APPROVED' হলে করণীয় কি?",
    "qEn": "What to do when Malaysia visa status is 'LULUS'?",
    "ansLines": [
      "১. মালয় ভাষায় 'LULUS' শব্দের অর্থ 'Pass' বা 'Approved' (অনুমোদিত)।",
      "২. স্ট্যাটাস লুলুস দেখানো মানে মালয়েশিয়া সরকার আপনার নামে ওয়ার্ক পারমিটের চূড়ান্ত অনুমোদন দিয়েছে।",
      "৩. এখন কোম্পানি সরকারি লেভি (Levy) ফি প্রদান করে ভিসা উইথ রেফারেন্স (VDR) সংগ্রহ করবে।",
      "৪. এরপর ঢাকায় বিএমইটি (BMET) থেকে ম্যানপাওয়ার ক্লিয়ারেন্স ও এয়ার টিকিট কাটার প্রস্তুতি নিতে হবে।",
      "৫. লুলুস হওয়ার পর দেরি না করে দ্রুত ফ্লাইট প্রসেসিং সম্পন্ন করা বুদ্ধিমানের কাজ।"
    ],
    "portalName": "Approval Action Guide",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া স্ট্যাটাস lulus",
      "lulus meaning",
      "ভিসা অনুমোদন"
    ]
  },
  {
    "id": 93,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিসা রিজেক্ট বা 'TOLAK' হলে কি করতে হবে?",
    "qEn": "What to do if Malaysia visa is 'TOLAK' or rejected?",
    "ansLines": [
      "১. মালয় ভাষায় 'TOLAK' শব্দের অর্থ হলো 'Rejected' বা 'বাতিল'।",
      "২. মেডিকেল আনফিট, পুলিশ ক্লিয়ারেন্সের ত্রুটি বা কোম্পানির কোটা শেষ হলে তোয়াক (Tolak) আসতে পারে।",
      "৩. টোলাক আসলে কোম্পানি আপিল করার সুযোগ পায় যদি এটি কোনো টেকনিক্যাল ত্রুটির কারণে ঘটে থাকে।",
      "৪. যদি স্থায়ী কোনো ব্ল্যাকলিস্টের কারণে বাতিল হয়, তবে সেই কোম্পানি আর ওই কর্মীকে নিতে পারবে না।",
      "৫. এমন পরিস্থিতিতে এজেন্সি বা দালালের সাথে বসে কোনো অর্থ পরিশোধ না করে পাসপোর্ট ফেরত নেওয়া উচিত।"
    ],
    "portalName": "Rejection Guidelines",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া স্ট্যাটাস tolak",
      "tolak meaning",
      "ভিসা বাতিল মালয়েশিয়া"
    ]
  },
  {
    "id": 94,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিজিট ভিসা প্রসেসিং চেক কিভাবে করব?",
    "qEn": "How to check Malaysia visit visa processing?",
    "ansLines": [
      "১. ট্যুরিস্ট বা ভিজিট ভিসার ক্ষেত্রে ই-ভিসা (eVisa) পোর্টাল malaysiavisa.imi.gov.my তে যেতে হয়।",
      "২. আপনার ই-ভিসা আবেদন নম্বর ও পাসপোর্ট নম্বর দিয়ে লগইন ছাড়াই ট্র্যাকিং করা যায়।",
      "৩. প্রসেসিংয়ে সাধারণত ৩ থেকে ৫ কার্যদিবস সময় লাগে এবং স্ট্যাটাসে 'In Process' দেখায়।",
      "৪. অনুমোদন হলে আপনার রেজিস্টার্ড ইমেইলে সরাসরি কালার পিডিএফ ভিসা কপি পাঠিয়ে দেওয়া হয়।",
      "৫. ভিজিট ভিসার মেয়াদ ইস্যু হওয়ার পর ৩ মাস থাকে এবং মালয়েশিয়ায় সর্বোচ্চ ৩০ দিন থাকা যায়।"
    ],
    "portalName": "Tourist Visa Processing",
    "officialUrl": "https://malaysiavisa.imi.gov.my",
    "tags": [
      "মালয়েশিয়া ভিজিট ভিসা",
      "malaysia tourist visa",
      "ট্যুরিস্ট ভিসা প্রসেস"
    ]
  },
  {
    "id": 95,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া কোম্পানি এপ্রুভাল কোটা কিভাবে যাচাই করব?",
    "qEn": "How to verify Malaysia company approval quota?",
    "ansLines": [
      "১. কলিং ভিসায় যাওয়ার আগে নিয়োগকারী কোম্পানির সরকারের বৈধ কর্মী আনার কোটা আছে কিনা জানা জরুরি।",
      "২. কোম্পানির ROC নম্বর এবং KDN কোটা রেফারেন্স নম্বর দিয়ে FWCMS পোর্টালে কোটা দেখা যায়।",
      "৩. যদি কোনো কোম্পানির কোটা শেষ হয়ে যায়, তবে তারা নতুন কর্মী আনতে পারে না এবং ফাইল বাতিল হয়।",
      "৪. এজেন্সি বা রিক্রুটিং এজেন্টের কাছ থেকে কোম্পানির KDN অনুমোদন পত্রের কপি চেয়ে নিতে পারেন।",
      "৫. বৈধ কোটাহীন কোম্পানিতে আবেদন করলে কর্মীদের দীর্ঘদিন ভিসা আটকে থাকার ভোগান্তিতে পড়তে হয়।"
    ],
    "portalName": "KDN Quota Verification",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "কোম্পানি কোটা চেক",
      "kdn quota check",
      "কোটা অনুমোদন"
    ]
  },
  {
    "id": 96,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া কাজের ভিসার মেয়াদ অনলাইনে কিভাবে চেক করব?",
    "qEn": "How to check Malaysia work permit validity online?",
    "ansLines": [
      "১. যারা মালয়েশিয়ায় আছেন তাদের পাসপোর্টের পিএলকেএস (PLKS) স্টিকারের মেয়াদ অনলাইনে যাচাই করা যায়।",
      "২. ইমিগ্রেশনের e-Services পোর্টালে পাসপোর্ট নম্বর দিয়ে সার্চ দিলে পাসের বর্তমান মেয়াদ দেখা যাবে।",
      "৩. কোম্পানি যদি সময়মতো রিনিউ না করে, তবে সিস্টেমে 'Expired' স্ট্যাটাস দৃশ্যমান হবে।",
      "৪. মেয়াদ শেষ হওয়ার অন্তত ২-৩ মাস আগে থেকেই কোম্পানির এইচআর এর সাথে যোগাযোগ করে রিনিউ প্রক্রিয়া শুরু করুন।",
      "৫. মেয়াদোত্তীর্ণ ওয়ার্ক পারমিট নিয়ে অবস্থান করলে মালয়েশিয়া ইমিগ্রেশন আইনের অধীনে গ্রেফতারের ঝুঁকি থাকে।"
    ],
    "portalName": "PLKS Validity Service",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া পারমিটের মেয়াদ",
      "plks validity check",
      "ওয়ার্ক পারমিট রিনিউ"
    ]
  },
  {
    "id": 97,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিসার সিকিউরিটি ক্লিয়ারেন্স কিভাবে যাচাই করে?",
    "qEn": "How to verify Malaysia security clearance?",
    "ansLines": [
      "১. বিদেশি কর্মীদের কোনো অপরাধমূলক রেকর্ড বা পূর্বে মালয়েশিয়া থেকে ডিপোর্টেশনের ইতিহাস আছে কিনা তা খতিয়ে দেখা হয়।",
      "২. ইমিগ্রেশন সিস্টেমে একে বায়োমেট্রিক সিকিউরিটি স্ক্রিনিং (BSS) বলা হয়।",
      "৩. FWCMS পোর্টালে মেডিকেল টেস্টের সাথে এই সিকিউরিটি ক্লিয়ারেন্স স্ট্যাটাস আপডেট হয়।",
      "৪. সিকিউরিটি ক্লিয়ারেন্স সফল হলে স্ট্যাটাসে 'Passed' সংকেত দেখতে পাবেন।",
      "৫. অতীতে কোনো ভিসা লংঘন না থাকলে যেকোনো সাধারণ কর্মী সহজেই এই ক্লিয়ারেন্স পেয়ে থাকেন।"
    ],
    "portalName": "Security Screening Gate",
    "officialUrl": "https://www.fwcms.com.my",
    "tags": [
      "সিকিউরিটি ক্লিয়ারেন্স",
      "security clearance check",
      "বায়োমেট্রিক স্ক্রিনিং"
    ]
  },
  {
    "id": 98,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ইমিগ্রেশন ব্ল্যাকলিস্ট চেক কিভাবে করব?",
    "qEn": "How to check Malaysia immigration blacklist?",
    "ansLines": [
      "১. পূর্বে যারা মালয়েশিয়ায় ওভারস্টে করেছেন বা আউটপাস নিয়ে দেশে ফিরেছেন তাদের ব্ল্যাকলিস্ট রেকর্ড থাকে।",
      "২. মালয়েশিয়া ইমিগ্রেশন সার্ভিসে পাসপোর্ট নম্বর দিয়ে সার্চ দিলে যদি 'Senarai Hitam' বা 'Blacklisted' দেখায়।",
      "৩. সাধারণত অপরাধের ধরনভেদে ব্ল্যাকলিস্টের মেয়াদ ২ বছর, ৫ বছর অথবা স্থায়ী (Permanent) হয়ে থাকে।",
      "৪. ব্ল্যাকলিস্ট থাকা অবস্থায় কোনো এজেন্সি যতই লোভ দেখাক, মালয়েশিয়ায় নতুন ভিসা কোনোভাবেই হবে না।",
      "৫. ব্ল্যাকলিস্টের মেয়াদ শেষ হওয়ার পর মালয়েশিয়া দূতাবাস থেকে ক্লিয়ারেন্স নিয়ে নতুন আবেদন করা যায়।"
    ],
    "portalName": "Blacklist Status Inquirer",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "মালয়েশিয়া ব্ল্যাকলিস্ট",
      "blacklist check malaysia",
      "আউটপাস রেকর্ড"
    ]
  },
  {
    "id": 99,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া ভিসা স্টিকার অনলাইনে ভেরিফাই করার পদ্ধতি কি?",
    "qEn": "How to verify Malaysia visa sticker online?",
    "ansLines": [
      "১. পাসপোর্টে লাগানো ভিসা স্টিকারের ওপরের ডান কোণায় থাকা বারকোডের সিরিয়াল নম্বরটি সংগ্রহ করুন।",
      "২. ইমিগ্রেশনের ভেরিফিকেশন পোর্টালে গিয়ে সেই সিরিয়াল নম্বর এবং পাসপোর্ট নম্বর ইনপুট দিন।",
      "৩. স্ক্রিনে আসা তথ্যে ভিসা স্টিকারের ধরন, ইস্যু করা অফিসের নাম ও মেয়াদ পাসপোর্টের সাথে মিলিয়ে নিন।",
      "৪. স্টিকারের নিরাপত্তা হলোগ্রাম আলোর বিপরীতে ঘুরালে মালয়েশিয়া সরকারের কোট অফ আর্মস ভেসে উঠবে।",
      "৫. যদি অনলাইন ডাটার সাথে স্টিকারের একটি শব্দও না মিলে, তবে তৎক্ষণাৎ তা ভুয়া স্টিকার হিসেবে গণ্য হবে।"
    ],
    "portalName": "Sticker Security Verification",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "ভিসা স্টিকার ভেরিফাই",
      "মালয়েশিয়া স্টিকার আসল",
      "visa sticker verify"
    ]
  },
  {
    "id": 100,
    "category": "malaysia",
    "qBn": "মালয়েশিয়া কলিং ভিসা বের হতে সর্বোচ্চ কতদিন সময় লাগে?",
    "qEn": "How many days maximum to get Malaysia calling visa?",
    "ansLines": [
      "১. স্বাভাবিক প্রক্রিয়ায় মেডিকেল ফিট হওয়ার পর কলিং ভিসা হতে ১ থেকে ৩ মাস সময় লাগে।",
      "২. তবে সরকারি কোটা বরাদ্দ ও এম্বাসির ব্যাকলগের ওপর ভিত্তি করে কখনো কখনো ৪ থেকে ৫ মাস পর্যন্ত হতে পারে।",
      "৩. বায়োমেট্রিক ও পুলিশ ক্লিয়ারেন্স জমা দেওয়ার পর ফাইলের ধারাবাহিক অগ্রগতি পোর্টালে দেখা যায়।",
      "৪. যদি কোনো দালাল বলে যে ৭ দিনে কলিং ভিসা দেবে, তবে তা নিশ্চিতভাবে ভুয়া ও প্রতারণামূলক আশ্বাস।",
      "৫. ভিসা প্রক্রিয়ার দীর্ঘসূত্রিতা এড়াতে নিয়মিত Visa Check App এর মাধ্যমে স্ট্যাটাস পরিবর্তন নজরে রাখুন।"
    ],
    "portalName": "Calling Visa Timeframe",
    "officialUrl": "https://eservices.imi.gov.my",
    "tags": [
      "কলিং ভিসা কতদিন লাগে",
      "calling visa processing time",
      "মালয়েশিয়া সময়সীমা"
    ]
  },
  {
    "id": 101,
    "category": "gcc-countries",
    "qBn": "কাতার ভিসা চেক কিভাবে করব পাসপোর্ট দিয়ে?",
    "qEn": "How to check Qatar visa using passport?",
    "ansLines": [
      "১. কাতার ভিসা যাচাইয়ের একমাত্র সরকারি পোর্টাল হলো কাতার স্বরাষ্ট্র মন্ত্রণালয় (portal.moi.gov.qa)।",
      "২. Visa Check App এ কাতার কার্ডে ট্যাপ করে 'MOI Visa Services' এ প্রবেশ করুন।",
      "৩. 'Visa Services' থেকে 'Visa Inquiries' অপশনে গিয়ে পাসপোর্ট নম্বর সিলেক্ট করুন।",
      "৪. জাতীয়তা বাংলাদেশ সিলেক্ট করে স্ক্রিনের ক্যাপচা কোডটি পূরণ করে 'Submit' এ ক্লিক করুন।",
      "৫. মুহূর্তের মধ্যে আপনার ভিসার স্ট্যাটাস, ক্যাটাগরি, বৈধতার মেয়াদ ও স্পন্সরের নাম ভেসে উঠবে।"
    ],
    "portalName": "Qatar Ministry of Interior (MOI)",
    "officialUrl": "https://portal.moi.gov.qa",
    "tags": [
      "কাতার ভিসা চেক",
      "qatar visa check",
      "moi qatar"
    ]
  },
  {
    "id": 102,
    "category": "gcc-countries",
    "qBn": "ওমান ভিসা চেক করার লিংক কি?",
    "qEn": "What is the link to check Oman visa?",
    "ansLines": [
      "১. ওমানের ভিসা চেক করার অফিসিয়াল লিংক হলো রয়্যাল ওমান পুলিশ (ROP): evisa.rop.gov.om।",
      "২. সেখানে 'Track Your Application' মেনুতে গিয়ে পাসপোর্ট নম্বর ও জন্মতারিখ দিন।",
      "৩. অ্যাপ্লিকেশন রেফারেন্স নম্বর এবং আবেদনকারীর জাতীয়তা হিসেবে বাংলাদেশ নির্বাচন করুন।",
      "৪. কয়েক সেকেন্ডে আপনার ই-ভিসা স্ট্যাটাস (Approved বা Processing) দেখতে পাবেন।",
      "৫. Visa Check App এ ক্লিক করলে সরাসরি কোনো ঝামেলা ছাড়া এই লিংকে প্রবেশ করা যায়।"
    ],
    "portalName": "Royal Oman Police (ROP)",
    "officialUrl": "https://evisa.rop.gov.om",
    "tags": [
      "ওমান ভিসা চেক লিংক",
      "oman visa check link",
      "rop oman"
    ]
  },
  {
    "id": 103,
    "category": "gcc-countries",
    "qBn": "কুয়েত ভিসা অনলাইনে কিভাবে চেক করে?",
    "qEn": "How to check Kuwait visa online?",
    "ansLines": [
      "১. কুয়েত ভিসা চেক করার অফিসিয়াল ওয়েবসাইট হলো কুয়েত স্বরাষ্ট্র মন্ত্রণালয় (moi.gov.kw)।",
      "২. ই-ভিসা ট্র্যাকিং সেকশনে গিয়ে 'Visa Application Number' অথবা পাসপোর্ট নম্বর দিন।",
      "৩. নিরাপত্তা ক্যাপচা কোড পূরণ করে 'Inquire' বাটনে চাপলে ভিসা ডাটা ওপেন হবে।",
      "৪. এখানে ভিসার অনুমোদন, কাজের চুক্তিপত্র এবং স্পন্সরের বৈধতার পূর্ণ বিবরণ প্রদর্শিত হয়।",
      "৫. ভিসার মেয়াদ উত্তীর্ণ হয়েছে কিনা বা স্ট্যাম্পিং সম্পন্ন হয়েছে কিনা তাও পরিষ্কার দেখা যায়।"
    ],
    "portalName": "Kuwait Ministry of Interior",
    "officialUrl": "https://moi.gov.kw",
    "tags": [
      "কুয়েত ভিসা চেক",
      "kuwait visa check",
      "moi kuwait"
    ]
  },
  {
    "id": 104,
    "category": "gcc-countries",
    "qBn": "বাহরাইন ভিসা চেক করার নিয়ম কি?",
    "qEn": "What is the rule to check Bahrain visa?",
    "ansLines": [
      "১. বাহরাইনের ভিসা যাচাই করার সরকারি পোর্টাল হলো লেবার মার্কেট রেগুলেটরি অথরিটি (lmra.gov.bh)।",
      "২. এছাড়াও বাহরাইন ন্যাশনাল পোর্টাল evisa.gov.bh তে গিয়ে ভিসা ট্র্যাকিং করা যায়।",
      "৩. পাসপোর্ট নম্বর, জন্মতারিখ এবং জাতীয়তা প্রদান করে সাবমিট করতে হবে।",
      "৪. স্ট্যাটাসে 'Approved' আসলে আপনি অফিশিয়াল বাহরাইন ই-ভিসা পেপার ডাউনলোড করতে পারবেন।",
      "৫. LMRA পোর্টালে গিয়ে আপনি নিয়োগকারী কোম্পানির বৈধ লাইসেন্সও যাচাই করে নিতে পারবেন।"
    ],
    "portalName": "Bahrain LMRA & eVisa Portal",
    "officialUrl": "https://www.evisa.gov.bh",
    "tags": [
      "বাহরাইন ভিসা চেক",
      "bahrain visa check",
      "lmra bahrain"
    ]
  },
  {
    "id": 105,
    "category": "gcc-countries",
    "qBn": "কাতার ভিসা ভ্যালিডিটি ও মেয়াদ চেক করার নিয়ম কি?",
    "qEn": "How to check Qatar visa validity and expiration?",
    "ansLines": [
      "১. MOI কাতার ওয়েবসাইটের 'Visa Inquiry and Printing' অপশনে পাসপোর্ট নম্বর দিন।",
      "২. ভিসা বৈধ থাকলে স্ট্যাটাসে 'Ready for Print' অথবা 'Valid to Use' বার্তা আসবে।",
      "৩. এতে কাতারে প্রবেশের শেষ তারিখ (Expiry Date) সুস্পষ্টভাবে উল্লেখ থাকবে।",
      "৪. কাজের ভিসার ক্ষেত্রে প্রবেশের তারিখ থেকে ৩ মাসের মধ্যে রেসিডেন্স পারমিট (QID) করতে হয়।",
      "৫. ভিজিট ভিসার ক্ষেত্রে অবস্থান বৃদ্ধির জন্য অনলাইনেই রিনিউয়াল স্ট্যাটাস ট্র্যাক করা যায়।"
    ],
    "portalName": "Qatar Visa Validity Guide",
    "officialUrl": "https://portal.moi.gov.qa",
    "tags": [
      "কাতার ভিসা মেয়াদ",
      "qatar visa validity",
      "ভিসার শেষ তারিখ"
    ]
  },
  {
    "id": 106,
    "category": "gcc-countries",
    "qBn": "ওমান কাজের ভিসা চেক করার ওয়েবসাইট কোনটি?",
    "qEn": "Which is the website to check Oman work visa?",
    "ansLines": [
      "১. ওমান কাজের ভিসার প্রধান ওয়েবসাইট হলো: evisa.rop.gov.om।",
      "২. ওমান শ্রম মন্ত্রণালয়ের (Ministry of Labour) পোর্টালে কাজের পারমিট চুক্তিপত্রও দেখা যায়।",
      "৩. পাসপোর্ট নম্বর দিলে কোম্পানি নাম, পেশা এবং ভিসা ক্যাটাগরি সামনে চলে আসবে।",
      "৪. Visa Check App দিয়ে সরাসরি এই সরকারি পেজে প্রবেশ করে যেকোনো ওমানি ভিসা যাচাই করা যায়।",
      "৫. অনুমোদন নিশ্চিত হলে অনলাইন থেকে ভিসা ডকুমেন্টটি রঙিন প্রিন্ট করে নিতে হবে।"
    ],
    "portalName": "ROP Oman Work Portal",
    "officialUrl": "https://evisa.rop.gov.om",
    "tags": [
      "ওমান কাজের ভিসা ওয়েবসাইট",
      "oman work visa site",
      "রয়্যাল ওমান পুলিশ"
    ]
  },
  {
    "id": 107,
    "category": "gcc-countries",
    "qBn": "কাতার কিউভিসি (QVC) মেডিকেল চেক কিভাবে করব?",
    "qEn": "How to check Qatar QVC medical report?",
    "ansLines": [
      "১. কাতারের কাজের ভিসার মেডিকেল ও বায়োমেট্রিক ঢাকার কাতার ভিসা সেন্টারে (QVC) হয়।",
      "২. এর অফিশিয়াল ট্র্যাকিং ওয়েবসাইট হলো: qatarvisacenter.com।",
      "৩. পাসপোর্ট নম্বর ও ভিসা নম্বর দিয়ে সার্চ করলে মেডিকেল ও ফিঙ্গারপ্রিন্ট স্ট্যাটাস দেখা যাবে।",
      "৪. স্ট্যাটাসে 'Medical Fit' দেখালে বুঝতে হবে আপনার মেডিকেল অনুমোদন হয়ে গেছে।",
      "৫. কিউভিসি সম্পন্ন হওয়ার পরই কাতার ইমিগ্রেশন থেকে চূড়ান্ত কর্মসংস্থান ভিসা স্ট্যাম্প হয়।"
    ],
    "portalName": "Qatar Visa Center (QVC)",
    "officialUrl": "https://www.qatarvisacenter.com",
    "tags": [
      "কাতার কিউভিসি",
      "qvc medical check",
      "কাতার মেডিকেল রিপোর্ট"
    ]
  },
  {
    "id": 108,
    "category": "gcc-countries",
    "qBn": "ওমান রয়্যাল পুলিশ (ROP) ভিসা চেক করার নিয়ম কি?",
    "qEn": "What is the rule to check visa on ROP Oman?",
    "ansLines": [
      "১. evisa.rop.gov.om পোর্টালে প্রবেশ করে 'Track Your Application' এ ক্লিক করুন।",
      "২. আবেদনের সময় প্রাপ্ত ভিসা অ্যাপ্লিকেশন নম্বর এবং পাসপোর্ট নম্বর ইনপুট দিন।",
      "৩. আবেদনকারীর দেশ বাংলাদেশ নির্বাচন করে স্ক্রিনের নিরাপত্তা কোডটি পূরণ করুন।",
      "৪. সাবমিট করার পর ভিসার বর্তমান অবস্থা ও মেয়াদ স্ক্রিনে সম্পূর্ণ প্রদর্শিত হবে।",
      "৫. অনুমোদন পেলে সেখান থেকেই সরাসরি পিডিএফ ফাইলটি ডাউনলোড করে নেওয়া যাবে।"
    ],
    "portalName": "Royal Oman Police Gateway",
    "officialUrl": "https://evisa.rop.gov.om",
    "tags": [
      "ওমান আরওপি ভিসা",
      "rop visa check",
      "ওমান পুলিশ ভিসা"
    ]
  },
  {
    "id": 109,
    "category": "gcc-countries",
    "qBn": "কুয়েত ভিসা স্ট্যাম্পিং চেক কিভাবে করতে হয়?",
    "qEn": "How to check Kuwait visa stamping?",
    "ansLines": [
      "১. কুয়েতের ভিসা এম্বাসি স্ট্যাম্পিং সম্পন্ন হয়েছে কিনা তা MOI পোর্টালে দেখা যায়।",
      "২. কুয়েত ভিসা নম্বর ও পাসপোর্ট নম্বর দিয়ে ইনকোয়ারি সেকশনে সার্চ দিন।",
      "৩. স্ট্যাটাসে 'Visa Approved' বা 'Stamped' আসলে ভিসাটি ভ্রমণের জন্য প্রস্তুত।",
      "৪. স্ট্যাম্পিং সম্পন্ন হলে পাসপোর্টের মূল পাতায় দূতাবাস কর্তৃক স্টিকার লাগানো থাকে।",
      "৫. অনলাইন স্ট্যাটাস নিশ্চিত হওয়ার পরই এজেন্সি থেকে পাসপোর্ট গ্রহণ করা নিরাপদ।"
    ],
    "portalName": "Kuwait Stamping Tracker",
    "officialUrl": "https://moi.gov.kw",
    "tags": [
      "কুয়েত ভিসা স্ট্যাম্পিং",
      "kuwait visa stamping",
      "কুয়েত ভিসা চেক"
    ]
  },
  {
    "id": 110,
    "category": "gcc-countries",
    "qBn": "কাতার কাজের ভিসা আসল কিনা চেনার উপায় কি?",
    "qEn": "How to know if Qatar work visa is authentic?",
    "ansLines": [
      "১. কাতার MOI ওয়েবসাইটে পাসপোর্ট নম্বর দিয়ে সার্চ দিলে কোম্পানির নাম ও কাজের ধরন মিলবে।",
      "২. আসল ভিসার নিচের অংশে কাতারি নিরাপত্তা বারকোড ও পররাষ্ট্র মন্ত্রণালয়ের সিল থাকবে।",
      "৩. দালালদের ভুয়া ভিসায় কিউআর কোড স্ক্যান করলে ভুল কোনো লিঙ্ক বা টেক্সট আসে।",
      "৪. যদি MOI পোর্টালে 'No Records' দেখায়, তবে নিশ্চিতভাবে ভিসাটি ভুয়া ও জাল।",
      "৫. কিউভিসি (QVC) ছাড়া সরাসরি কাজের ভিসা প্রসেস হয় না, তাই সেন্টারের রেকর্ড মিলিয়ে নিন।"
    ],
    "portalName": "Qatar Authenticity Guide",
    "officialUrl": "https://portal.moi.gov.qa",
    "tags": [
      "কাতার কাজের ভিসা আসল",
      "fake qatar visa",
      "আসল কাতার ভিসা"
    ]
  },
  {
    "id": 111,
    "category": "gcc-countries",
    "qBn": "ওমান ভিজিট ভিসা কনভার্ট হয়েছে কিনা কিভাবে দেখব?",
    "qEn": "How to check if Oman visit visa is converted to work visa?",
    "ansLines": [
      "১. ওমান সরকার অনুমোদিত ক্ষেত্রে ভিজিট ভিসা ওয়ার্ক ভিসায় রূপান্তরের সুযোগ দেয়।",
      "২. রূপান্তরের আবেদন জমা হলে ROP পোর্টালে স্ট্যাটাস 'Under Process - Conversion' দেখাবে।",
      "৩. নতুন কাজের ভিসা অনুমোদন হলে পূর্বের ভিজিট ভিসার জায়গায় 'Employment Visa' চলে আসবে।",
      "৪. রূপান্তর সম্পন্ন হলে কোম্পানি আপনাকে একটি নতুন এন্ট্রি কপি বা রেসিডেন্স অনুমোদনপত্র দেবে।",
      "৫. এই নতুন স্ট্যাটাসটি অনলাইনে যাচাই না করে কোনো দালালের কথায় টাকা দেওয়া অনুচিত।"
    ],
    "portalName": "Oman Visa Conversion Service",
    "officialUrl": "https://evisa.rop.gov.om",
    "tags": [
      "ওমান ভিসা কনভার্ট",
      "oman visit to work",
      "ভিসা পরিবর্তন চেক"
    ]
  },
  {
    "id": 112,
    "category": "gcc-countries",
    "qBn": "কাতার ফ্রি ভিসা চেক করার লিংক কোনটি?",
    "qEn": "Which is the link to check Qatar free visa?",
    "ansLines": [
      "১. আইনগতভাবে কোনো দেশে 'ফ্রি ভিসা' বলতে কিছু নেই, এটি সাধারণত কোনো কোম্পানির উন্মুক্ত কাজের পারমিট।",
      "২. এই ভিসাও সাধারণ ওয়ার্ক ভিসার মতো MOI কাতারের portal.moi.gov.qa লিংক থেকেই চেক করতে হয়।",
      "৩. সেখানে স্পন্সরের নাম ও সিআর (CR) নম্বর দেখে নিশ্চিত হোন কোম্পানিটি বৈধ কিনা।",
      "৪. ভুয়া দালালরা অনেক সময় কোনো কোটা না থাকা সত্ত্বেও ফ্রি ভিসার নামে জাল কাগজ দিয়ে থাকে।",
      "৫. সরকারি পোর্টালে অনুমোদন নিশ্চিত হয়েই যেকোনো কফিলের সাথে চুক্তি সম্পন্ন করুন।"
    ],
    "portalName": "Qatar Free Visa Reality",
    "officialUrl": "https://portal.moi.gov.qa",
    "tags": [
      "কাতার ফ্রি ভিসা",
      "qatar free visa check",
      "ফ্রি ভিসা চেক"
    ]
  },
  {
    "id": 113,
    "category": "gcc-countries",
    "qBn": "বাহরাইন এলএমআরএ (LMRA) এক্সপ্রেস ভিসা চেক কিভাবে করে?",
    "qEn": "How to check Bahrain LMRA Express Visa?",
    "ansLines": [
      "১. বাহরাইনের লেবার মার্কেট রেগুলেটরি অথরিটির ওয়েবসাইট: lmra.gov.bh তে যান।",
      "২. 'Express Services' থেকে 'Application Status' নির্বাচন করুন।",
      "৩. পাসপোর্ট নম্বর ও জাতীয়তা বাংলাদেশ সিলেক্ট করে সাবমিট করুন।",
      "৪. আবেদন অনুমোদিত হলে ভিসা পারমিট নম্বর এবং মাসিক পারমিটের বৈধতা প্রদর্শিত হবে।",
      "৫. LMRA সিস্টেম সরাসরি বাহরাইন সরকারের স্বরাষ্ট্র মন্ত্রণালয়ের সাথে সিঙ্ক থাকে।"
    ],
    "portalName": "Bahrain LMRA Express",
    "officialUrl": "https://www.lmra.gov.bh",
    "tags": [
      "বাহরাইন এলএমআরএ",
      "lmra express check",
      "বাহরাইন পারমিট"
    ]
  },
  {
    "id": 114,
    "category": "gcc-countries",
    "qBn": "কুয়েত ভিসা আকদ (Agreement) কিভাবে দেখব?",
    "qEn": "How to check Kuwait visa agreement online?",
    "ansLines": [
      "১. কুয়েতের কাজের ভিসার চুক্তিপত্র বা আকদ কুয়েত শ্রম সংস্থার পোর্টালে নিবন্ধিত থাকে।",
      "২. পাসপোর্ট নম্বর ও ভিসা রেফারেন্স দিয়ে পাবলিক অথরিটি ফর ম্যানপাওয়ার (PAM) পোর্টালে ঢুকুন।",
      "৩. এখানে প্রবাসীদের মাসিক বেতন, কাজের কর্মঘণ্টা ও ছুটির শর্তাবলী বিস্তারিত উল্লেখ থাকে।",
      "৪. চুক্তিপত্র এপ্রুভড হলেই কুয়েত স্বরাষ্ট্র মন্ত্রণালয় থেকে চূড়ান্ত ভিসা স্ট্যাম্পিং অনুমতি দেওয়া হয়।",
      "৫. দেশে থাকা অবস্থাতেই এই ডিজিটাল আকদ পড়ে নিশ্চিত হওয়া যায় দালাল মিথ্যা বেতন বলেছে কিনা।"
    ],
    "portalName": "Kuwait PAM Labor Agreement",
    "officialUrl": "https://www.manpower.gov.kw",
    "tags": [
      "কুয়েত ভিসা আকদ",
      "kuwait labor contract",
      "কাজের চুক্তিপত্র"
    ]
  },
  {
    "id": 115,
    "category": "gcc-countries",
    "qBn": "কাতার হায়া (Hayya) কার্ড ভিসা কিভাবে চেক করে?",
    "qEn": "How to check Qatar Hayya Card visa?",
    "ansLines": [
      "১. কাতার হায়া কার্ড বা পর্যটন প্রবেশের জন্য অফিসিয়াল পোর্টাল হলো: hayya.qa।",
      "২. হায়া পোর্টালে আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করে আবেদন স্ট্যাটাস ট্র্যাক করতে হয়।",
      "৩. হায়া অনুমোদন পেলে একটি এন্ট্রি পারমিট কিউআর কোড জেনারেট হয় যা মোবাইলে ডাউনলোড করা যায়।",
      "৪. হায়া ভিসার মেয়াদ ও মাল্টিপল এন্ট্রি সুবিধা সরকারি নির্দেশিকা অনুযায়ী প্রদর্শিত হয়।",
      "৫. কাতারে প্রবেশের পূর্বে হায়া পোর্টালের স্ট্যাটাস 'Approved' থাকা আবশ্যক।"
    ],
    "portalName": "Hayya Qatar Official",
    "officialUrl": "https://www.hayya.qa",
    "tags": [
      "কাতার হায়া কার্ড",
      "hayya card check",
      "কাতার ট্যুরিস্ট এন্ট্রি"
    ]
  },
  {
    "id": 116,
    "category": "gcc-countries",
    "qBn": "ওমান এয়ারপোর্ট ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check Oman airport on-arrival visa?",
    "ansLines": [
      "১. ওমানে যাওয়ার পূর্বে অনেক ক্ষেত্রে অনুমোদিত ট্রাভেলারদের জন্য অন-অ্যারাইভাল বা ই-ভিসা লাগে।",
      "২. evisa.rop.gov.om সাইটে গিয়ে আপনার পূর্বানুমোদিত ভিসার ভ্যালিডিটি প্রিন্ট করে নিতে হবে।",
      "৩. ওমান এয়ারপোর্ট ইমিগ্রেশনে এই প্রিন্ট কপি ও পাসপোর্ট দেখালে এন্ট্রি স্ট্যাম্প দেওয়া হয়।",
      "৪. অনলাইনে স্ট্যাটাস 'Valid' না থাকলে কোনো এয়ারলাইন্স বোর্ডিং পাস ইস্যু করবে না।",
      "৫. ফ্লাইট বুকিংয়ের আগেই Visa Check App দিয়ে আপনার ওমানি ভিসার সক্রিয়তা নিশ্চিত করুন।"
    ],
    "portalName": "ROP Airport Clearance",
    "officialUrl": "https://evisa.rop.gov.om",
    "tags": [
      "ওমান এয়ারপোর্ট ভিসা",
      "oman airport visa",
      "অন অ্যারাইভাল ওমান"
    ]
  },
  {
    "id": 117,
    "category": "gcc-countries",
    "qBn": "কুয়েত ই-ভিসা ট্র্যাকিং কিভাবে করব?",
    "qEn": "How to track Kuwait eVisa online?",
    "ansLines": [
      "১. কুয়েতের ট্যুরিস্ট ও কমার্শিয়াল ই-ভিসা ট্র্যাকিংয়ের ওয়েবসাইট হলো: evisa.moi.gov.kw।",
      "২. ই-ভিসা অ্যাপ্লিকেশন রেফারেন্স কোড ও পাসপোর্ট নম্বর দিয়ে সাবমিট করুন।",
      "৩. ভিসা ইস্যু হলে একটি পিডিএফ সার্টিফিকেট ডাউনলোড করার লিঙ্ক দেখতে পাবেন।",
      "৪. কুয়েত ই-ভিসায় প্রবেশের সময়সীমা ৩০ দিন থাকে যা বাড়ানো যায় না।",
      "৫. ভিসার নিচের দিকের সিকিউরিটি বারকোডটি পাসপোর্ট কন্ট্রোলে স্ক্যান করে প্রবেশ করানো হয়।"
    ],
    "portalName": "Kuwait eVisa Tracking",
    "officialUrl": "https://evisa.moi.gov.kw",
    "tags": [
      "কুয়েত ই-ভিসা",
      "kuwait evisa check",
      "ই-ভিসা ট্র্যাকিং"
    ]
  },
  {
    "id": 118,
    "category": "gcc-countries",
    "qBn": "বাহরাইন ভিজিট ভিসা স্ট্যাটাস চেক করার পদ্ধতি কি?",
    "qEn": "How to check Bahrain visit visa status?",
    "ansLines": [
      "১. বাহরাইন ভিজিট ভিসা চেক করতে evisa.gov.bh পোর্টালে যান।",
      "২. 'Check an Application' অপশনে গিয়ে অ্যাপ্লিকেশন রেফারেন্স ও পাসপোর্ট নম্বর প্রদান করুন।",
      "৩. ভিসার স্ট্যাটাস 'Granted' দেখালে আপনার ভিসা অনুমোদন সফল হয়েছে।",
      "৪. ভিজিট ভিসার অবস্থানকাল সাধারণত ২ সপ্তাহ থেকে ১ মাস পর্যন্ত হয়ে থাকে।",
      "৫. মেয়াদ বৃদ্ধি করতে হলে বাহরাইনে প্রবেশের পর ইমিগ্রেশন অফিসে গিয়ে আবেদন করতে হয়।"
    ],
    "portalName": "Bahrain Visit Visa Portal",
    "officialUrl": "https://www.evisa.gov.bh",
    "tags": [
      "বাহরাইন ভিজিট ভিসা",
      "bahrain visit visa check",
      "ভিজিট ভিসা বাহরাইন"
    ]
  },
  {
    "id": 119,
    "category": "gcc-countries",
    "qBn": "কাতার ভিসা আবেদন প্রিন্ট করার নিয়ম কি?",
    "qEn": "How to print Qatar visa application?",
    "ansLines": [
      "১. কাতার MOI ওয়েবসাইটে 'Visa Services' থেকে 'Visa Print' অপশনে ক্লিক করুন।",
      "২. পাসপোর্ট নম্বর ও জাতীয়তা প্রদান করে ক্যাপচা কোডটি পূরণ করে সাবমিট করুন।",
      "৩. স্ক্রিনে কাতারি রাষ্ট্রীয় মনোগ্রামযুক্ত অফিশিয়াল ভিসা কপিটি পিডিএফ হিসেবে ওপেন হবে।",
      "৪. 'Print' বাটনে চাপ দিয়ে সরাসরি প্রিন্ট করুন অথবা মোবাইল মেমরিতে সংরক্ষণ করুন।",
      "৫. কাতারে যাত্রা করার সময় এই প্রিন্ট পেপারটি সাথে রাখা বাধ্যতামূলক।"
    ],
    "portalName": "MOI Visa Printing Service",
    "officialUrl": "https://portal.moi.gov.qa",
    "tags": [
      "কাতার ভিসা প্রিন্ট",
      "print qatar visa",
      "ভিসা পেপার ডাউনলোড"
    ]
  },
  {
    "id": 120,
    "category": "gcc-countries",
    "qBn": "ওমান রেসিডেন্স কার্ড স্ট্যাটাস কিভাবে চেক করব?",
    "qEn": "How to check Oman residence card status?",
    "ansLines": [
      "১. ওমানে পৌঁছার পর কর্মীদের সিভিল আইডি বা রেসিডেন্স কার্ড (Bataqa) তৈরি করতে হয়।",
      "২. ROP সিভিল স্ট্যাটাস পোর্টালে গিয়ে সিভিল নম্বর দিয়ে কার্ডের বৈধতা দেখা যায়।",
      "৩. কার্ড প্রস্তুত হলে 'Card Ready for Collection' নোটিফিকেশন অনলাইনে দেখা যাবে।",
      "৪. রেসিডেন্স কার্ডের মেয়াদ সাধারণত কর্মসংস্থান চুক্তির মেয়াদের সাথে মিল রেখে ২ বছর থাকে।",
      "৫. এই কার্ডটি ওমানে প্রবাসীদের প্রধান আইনি পরিচয়পত্র হিসেবে সর্বদা সাথে রাখতে হয়।"
    ],
    "portalName": "ROP Civil Status Portal",
    "officialUrl": "https://evisa.rop.gov.om",
    "tags": [
      "ওমান রেসিডেন্স কার্ড",
      "oman civil id check",
      "ওমান বাত্তাকা চেক"
    ]
  },
  {
    "id": 121,
    "category": "fraud-prevention",
    "qBn": "দালাল যে ভিসা দিয়েছে তা আসল না ভুয়া কিভাবে যাচাই করব?",
    "qEn": "How to verify if agent provided visa is real or fake?",
    "ansLines": [
      "১. দালালের দেওয়া ভিসা পেপার হাতে পেলেই সবার আগে মূল পাসপোর্ট নম্বর দিয়ে সংশ্লিষ্ট দেশের সরকারি সার্ভারে সার্চ দিন।",
      "২. সরকারি ডাটাবেজে যদি 'No Record Found' আসে বা কোনো তথ্যই না থাকে, তবে ভিসাটি শতভাগ ভুয়া।",
      "৩. ভিসায় থাকা কিউআর কোডটি আপনার মোবাইলের সাধারণ ক্যামেরা দিয়ে স্ক্যান করুন এবং ইউআরএলটি মিলিয়ে নিন।",
      "৪. কিউআর কোড যদি কোনো সাধারণ টেক্সট বা .gov ডোমেইন ছাড়া অন্য কোনো সাইটে নিয়ে যায়, তবে তা ফটোশপ করা জাল ভিসা।",
      "৫. যতক্ষণ না সরকারি পোর্টালে আপনার নিজের ছবি, নাম ও পাসপোর্ট নম্বর দেখতে পাচ্ছেন, ততক্ষণ দালালকে এক টাকাও দেবেন না।"
    ],
    "portalName": "Anti-Fraud Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "দালালের ভিসা আসল না ভুয়া",
      "fake visa detection",
      "দালাল প্রতারণা"
    ]
  },
  {
    "id": 122,
    "category": "fraud-prevention",
    "qBn": "অনলাইনে আসল ভিসা চেনার ৫টি সহজ উপায় কি কি?",
    "qEn": "What are 5 simple ways to identify a real visa online?",
    "ansLines": [
      "১. সরকারি ডোমেইন চেক: লিঙ্কটি অবশ্যই সংশ্লিষ্ট দেশের অফিশিয়াল (.gov / .gov.sa / .gov.ae) সরকারি সাইট হতে হবে।",
      "২. লাইভ পাসপোর্ট সার্চ: ওই সরকারি সাইটে গিয়ে নিজে পাসপোর্ট নম্বর লিখে সার্চ দিয়ে ডাটা আসতে হবে।",
      "৩. নামের বানান ও পাসপোর্ট মিল: অনলাইন কপির নাম, জন্মতারিখ ও পাসপোর্ট নম্বরে এক অক্ষরেরও অমিল থাকা চলবে না।",
      "৪. কিউআর কোড ভেরিফিকেশন: কিউআর কোড স্ক্যান করলে সরাসরি ওই সরকারি পেজের লাইভ স্ট্যাটাস ওপেন হতে হবে।",
      "৫. সিকিউরিটি ওয়াটারমার্ক ও বারকোড: জেনুইন ভিসার রেজুলেশন পরিষ্কার থাকে এবং কোনো কাটাছেঁড়া বা এডিটের দাগ থাকে না।"
    ],
    "portalName": "5-Step Security Audit",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "আসল ভিসা চেনার ৫ উপায়",
      "5 ways to check real visa",
      "আসল ভিসা শনাক্ত"
    ]
  },
  {
    "id": 123,
    "category": "fraud-prevention",
    "qBn": "ভুয়া ভিসা চেনার জন্য কি কি জিনিস দেখতে হয়?",
    "qEn": "What signs to look for to identify a fake visa?",
    "ansLines": [
      "১. ফন্ট ও লেখার সাইজের অমিল: ভুয়া ভিসায় সাধারণত নাম বা নম্বরের ফন্ট অন্যান্য লেখার সাথে মেলে না।",
      "২. ব্লার বা ঝাপসা লোগো: জালিয়াতি চক্র সাধারণত ইন্টারনেটের নিম্নমানের লোগো বা সিল কপি-পেস্ট করে বসায়।",
      "৩. ভুল তারিখ বা ব্যাকডেটেড তথ্য: ভিসার ইস্যু ডেট ও এক্সপায়ারি ডেটের মধ্যকার হিসেবে ভুল দেখা যায়।",
      "৪. স্ক্যান না হওয়া বারকোড: ভুয়া ভিসার বারকোড বা কিউআর কোড স্ক্যানারে রিড করে না অথবা এরর দেখায়।",
      "৫. সবচেয়ে বড় প্রমাণ হলো সরকারি পোর্টালে সার্চ দিলে সেই ভিসা নম্বরের কোনো অস্তিত্বই খুঁজে পাওয়া যায় না।"
    ],
    "portalName": "Fraud Anatomy Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভুয়া ভিসা চেনার লক্ষণ",
      "signs of fake visa",
      "জাল ভিসা চেনার উপায়"
    ]
  },
  {
    "id": 124,
    "category": "fraud-prevention",
    "qBn": "বারকোড স্ক্যানার দিয়ে কি আসল ভিসা চেনা যায়?",
    "qEn": "Can a barcode scanner identify an authentic visa?",
    "ansLines": [
      "১. হ্যাঁ, বর্তমান আধুনিক ভিসার নিচের অংশে একটি এনক্রিপ্টেড 2D বারকোড বা কিউআর কোড থাকে।",
      "২. স্ক্যানার দিয়ে স্ক্যান করলে এর ভেতরে থাকা সংরক্ষিত পাসপোর্ট নম্বর ও ভিসা রেফারেন্স কোড বেরিয়ে আসে।",
      "৩. যদি বারকোডের ভেতরের ডাটার সাথে প্রিন্ট করা কাগজের পাসপোর্ট নম্বর হুবহু মিলে যায় তবে তা আসল।",
      "৪. কিন্তু দালালরা যদি অন্য কারো ভিসার ওপর শুধু আপনার নাম বসিয়ে দেয়, তবে বারকোড স্ক্যানে আগের ব্যক্তির নাম আসবে।",
      "৫. সুতরাং স্মার্টফোনের বারকোড স্ক্যানার হলো জালিয়াতি ধরার সবচেয়ে সহজ ও দ্রুততম পকেট টুল।"
    ],
    "portalName": "Barcode Security Engine",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "বারকোড স্ক্যানার ভিসা",
      "barcode visa check",
      "কিউআর কোড জালিয়াতি"
    ]
  },
  {
    "id": 125,
    "category": "fraud-prevention",
    "qBn": "ভিসা জালিয়াতি হলে কার কাছে অভিযোগ করতে হয়?",
    "qEn": "Where to file a complaint if visa fraud occurs?",
    "ansLines": [
      "১. দালাল বা এজেন্সির ভিসা ভুয়া প্রমাণিত হলে প্রথমে প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়ে অভিযোগ করুন।",
      "২. জনশক্তি, কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET) এর লিগ্যাল উইংয়ে লিখিত অভিযোগ দায়ের করা যায়।",
      "৩. পুলিশের অপরাধ তদন্ত বিভাগ (CID) এর মানবপাচার ও সাইবার ক্রাইম ইউনিটে অভিযোগ করতে পারেন।",
      "৪. দালাল যদি বায়রার (BAIRA) কোনো লাইসেন্সধারী এজেন্সির প্রতিনিধি হয়, তবে বায়রার সালিশ বোর্ডে অভিযোগ দেওয়া যায়।",
      "৫. লেনদেনের সব ব্যাংক রিসিট, চেক, স্ট্যাম্প পেপার ও দালালের সাথে চ্যাটের স্ক্রিনশট প্রমাণ হিসেবে সংরক্ষণ করুন।"
    ],
    "portalName": "Legal Complaint Gateway",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ভিসা জালিয়াতি অভিযোগ",
      "visa fraud complaint",
      "দালালের বিরুদ্ধে মামলা"
    ]
  },
  {
    "id": 126,
    "category": "fraud-prevention",
    "qBn": "ভিসা স্ট্যাম্পিং পেপার আসল কিনা বুঝব কিভাবে?",
    "qEn": "How to verify if visa stamping paper is genuine?",
    "ansLines": [
      "১. ভিসা স্ট্যাম্পিং পেপারের উপরে দূতাবাস কর্তৃক মুদ্রিত অফিসিয়াল সিকিউরিটি নম্বর ও এমআরজেড কোড থাকে।",
      "২. কাগজের পেছনের দিক থেকে আলোর বিপরীতে ধরলে কোনো জলছাপ বা সিকিউরিটি থ্রেড থাকলে তা দৃশ্যমান হয়।",
      "৩. সরকারি ওয়েবসাইটে পাসপোর্ট নম্বর দিয়ে সার্চ দিলে হুবহু এই স্ট্যাম্পিং পেপারের ডিজিটাল কপি বের হয়ে আসবে।",
      "৪. যদি অনলাইনে কোনো স্ট্যাম্পিং ডাটা না থাকে কিন্তু হাতে স্ট্যাম্প পেপার থাকে, তবে বুঝতে হবে কাগজটি জাল।",
      "৫. ভিসা সেন্টারের ভেরিফিকেশন সিল ও দূতাবাসের রেফারেন্স নম্বর সরকারিভাবে মেলালেই শতভাগ নিশ্চিত হওয়া যায়।"
    ],
    "portalName": "Stamping Paper Audit",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসা স্ট্যাম্পিং পেপার আসল",
      "stamping paper real check",
      "জাল স্ট্যাম্পিং"
    ]
  },
  {
    "id": 127,
    "category": "fraud-prevention",
    "qBn": "দালালের দেওয়া ভিসা পেপারে কোন কোন ভুল দেখলে ভুয়া বুঝবেন?",
    "qEn": "What errors on agent's visa paper indicate a fake?",
    "ansLines": [
      "১. ইংরেজি বানান ও ব্যাকরণগত ভুল: সরকারি ভিসায় কখনো বানান বা ব্যাকরণে কোনো ভুল থাকে না।",
      "২. আরবি বা বিদেশি টেক্সটের ফন্ট ভেঙে যাওয়া বা অসামঞ্জস্যপূর্ণ অক্ষর থাকা।",
      "৩. পাসপোর্ট নম্বর বা জন্মতারিখে হাতের লেখা বা অস্পষ্ট কোনো কারেকশন ফ্লুইডের ব্যবহার।",
      "৪. মেয়াদ উত্তীর্ণ কোনো পুরনো সালের রেফারেন্স বা মনগড়া এয়ারলাইন্সের লোগো ব্যবহার করা।",
      "৫. এই ধরনের যেকোনো ছোটখাটো অসংগতি দেখলেই কোনো টাকা লেনদেন না করে সতর্ক হওয়া জরুরি।"
    ],
    "portalName": "Visual Inspection Rules",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসা পেপারে ভুল",
      "জাল ভিসার ভুল",
      "errors in fake visa"
    ]
  },
  {
    "id": 128,
    "category": "fraud-prevention",
    "qBn": "ভিসা চেক করার সময় কিউআর কোড কাজ না করলে কি বুঝবেন?",
    "qEn": "What does it mean if visa QR code does not work?",
    "ansLines": [
      "১. কিউআর কোড স্ক্যান করে যদি কোনো পেজ লোড না হয় বা 'Error 404' আসে, তবে কোডটি নকল বা নষ্ট।",
      "২. দালালরা সাধারণত ভুয়া ভিসা দেখতে সুন্দর লাগার জন্য অন্য কোথাও থেকে একটি অর্থহীন কিউআর কোড বসিয়ে দেয়।",
      "৩. সরকারি কিউআর কোড স্ক্যান করলে সরাসরি সংশ্লিষ্ট দেশের সার্ভারের সিকিউরড এইচটিটিপিএস (HTTPS) লিংক খোলে।",
      "৪. যদি কিউআর কোড কাজ না করে, তবে সরাসরি পাসপোর্ট নম্বর দিয়ে ম্যানুয়ালি সরকারি সাইটে সার্চ করুন।",
      "৫. ম্যানুয়ালি সার্চ করেও যদি কোনো তথ্য না পাওয়া যায়, তবে নিশ্চিত থাকুন ভিসাটি সম্পূর্ণরূপে ভুয়া।"
    ],
    "portalName": "QR Code Failure Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "কিউআর কোড কাজ না করলে",
      "qr code not working",
      "ভিসা কিউআর কোড এরর"
    ]
  },
  {
    "id": 129,
    "category": "fraud-prevention",
    "qBn": "ভিসার স্পন্সর নাম আসল কিনা কিভাবে যাচাই করব?",
    "qEn": "How to verify if visa sponsor name is real?",
    "ansLines": [
      "১. সৌদি আরব, কাতার বা উপসাগরীয় দেশের ভিসায় সবসময় কফিল বা কোম্পানির নাম ও ৭/১০ ডিজিটের স্পন্সর আইডি থাকে।",
      "২. সরকারি ইমিগ্রেশন পোর্টালে সার্চ দিলে স্পন্সরের নিবন্ধিত পূর্ণ বাণিজ্যিক নাম (Commercial Name) দেখতে পাবেন।",
      "৩. দালাল যে কোম্পানির কথা বলেছে তার সাথে অনলাইন স্পন্সর নাম মিলিয়ে দেখুন কোনো ফারাক আছে কিনা।",
      "৪. অনেক সময় ভুয়া দালালরা কোনো ব্যক্তির ব্যক্তিগত (আমেল মানজিল) ভিসাকে কোম্পানি ভিসা বলে চালিয়ে দেয়।",
      "৫. স্পন্সরের নাম ও পেশা অনলাইনে মিলিয়ে নিলে বিদেশে গিয়ে চুক্তিভঙ্গের কোনো বিপদে পড়তে হয় না।"
    ],
    "portalName": "Sponsor Verification Gateway",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "স্পন্সর নাম আসল কিনা",
      "sponsor name verify",
      "কফিলের নাম চেক"
    ]
  },
  {
    "id": 130,
    "category": "fraud-prevention",
    "qBn": "ভিসা চেক করতে গিয়ে ব্যক্তিগত তথ্য চুরি রোধ করবেন কিভাবে?",
    "qEn": "How to prevent personal data theft while checking visa?",
    "ansLines": [
      "১. কখনোই ফেসবুক পেজ, হোয়াটসঅ্যাপ গ্রুপ বা অপরিচিত ব্যক্তির ইনবক্সে পাসপোর্টের পরিষ্কার ছবি পাঠাবেন না।",
      "২. ভিসা চেক করার সময় ব্রাউজারের ইউআরএল বারে প্যাডলক (Lock) আইকন ও https:// সংযোগ নিশ্চিত করুন।",
      "৩. কোনো তৃতীয় পক্ষের ওয়েবসাইটে ভিসা দেখার জন্য ইমেইল পাসওয়ার্ড বা ব্যাংকিং ওটিপি (OTP) কোড দেবেন না।",
      "৪. আমাদের Visa Check App কোনো ব্যবহারকারীর ব্যক্তিগত তথ্য নিজের সার্ভারে সংরক্ষণ করে না, ফলে ঝুঁকি শূন্য।",
      "৫. সাইবার ক্যাফেতে চেক করলে ব্রাউজিং শেষে হিস্ট্রি ও ডাউনলোড করা ফাইল স্থায়ীভাবে ডিলিট করে দিন।"
    ],
    "portalName": "Cyber Security Advisory",
    "officialUrl": "https://visacheckapp.net/privacy",
    "tags": [
      "তথ্য চুরি রোধ",
      "data protection visa",
      "সাইবার নিরাপত্তা"
    ]
  },
  {
    "id": 131,
    "category": "fraud-prevention",
    "qBn": "জাল ভিসা দিয়ে এয়ারপোর্টে গেলে কি ধরনের শাস্তি হতে পারে?",
    "qEn": "What are the penalties for attempting to travel on a fake visa?",
    "ansLines": [
      "১. জাল ভিসা নিয়ে বিমানবন্দরে ইমিগ্রেশন পার হওয়ার চেষ্টা করা একটি শাস্তিযোগ্য জামিন-অযোগ্য ফৌজদারি অপরাধ।",
      "২. ইমিগ্রেশন পুলিশ তাৎক্ষণিকভাবে পাসপোর্ট জব্দ করে বিশেষ ক্ষমতা আইনে আটক বা গ্রেফতার করতে পারে।",
      "৩. সংশ্লিষ্ট ব্যক্তিকে ভবিষ্যতে বিদেশ ভ্রমণের জন্য কালো তালিকাভুক্ত (Blacklisted) করা হতে পারে।",
      "৪. বিদেশে পৌঁছানোর পর জাল ভিসা ধরা পড়লে সাথে সাথে জেলহাজতে রেখে পরবর্তী ফ্লাইটে পুশব্যাক বা ডিপোর্ট করা হয়।",
      "৫. তাই বিমানবন্দরে যাওয়ার আগেই অনলাইনে নিজে ভিসা যাচাই করে শতভাগ নিরাপদ হয়ে তবেই বাড়ি থেকে বের হোন।"
    ],
    "portalName": "Airport Immigration Warning",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "জাল ভিসা শাস্তি",
      "ভুয়া ভিসা এয়ারপোর্ট",
      "fake visa airport punishment"
    ]
  },
  {
    "id": 132,
    "category": "fraud-prevention",
    "qBn": "কোনো ভিসা এজেন্সির লাইসেন্স আসল কিনা কিভাবে চেক করব?",
    "qEn": "How to verify if a recruiting agency license is real?",
    "ansLines": [
      "১. বাংলাদেশ সরকার অনুমোদিত সব রিক্রুটিং এজেন্সির একটি নির্দিষ্ট আরএল (RL - Recruiting License) নম্বর থাকে।",
      "২. প্রবাসী কল্যাণ মন্ত্রণালয় ও BMET এর ওয়েবসাইট (bmet.gov.bd) এ অনুমোদিত এজেন্সির পূর্ণ তালিকা পাওয়া যায়।",
      "৩. বাংলাদেশ অ্যাসোসিয়েশন অফ ইন্টারন্যাশনাল রিক্রুটিং এজেন্সিজ (BAIRA)-এর পোর্টালে আরএল নম্বর সার্চ দিন।",
      "৪. যদি এজেন্সি কালো তালিকাভুক্ত বা বাতিল থাকে, তবে তাদের সাথে কোনো ধরণের আর্থিক চুক্তি করবেন না।",
      "৫. শুধুমাত্র সরকার নিবন্ধিত বৈধ এজেন্সির ব্যাংক অ্যাকাউন্টে মানি রিসিট নিয়ে টাকা জমা দেওয়া আইনসম্মত।"
    ],
    "portalName": "BMET Agency Verification",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "এজেন্সির লাইসেন্স চেক",
      "rl number check",
      "বায়রা এজেন্সি তালিকা"
    ]
  },
  {
    "id": 133,
    "category": "fraud-prevention",
    "qBn": "ভুয়া ভিসা শনাক্ত করতে দূতাবাস কি ধরনের সাহায্য করে?",
    "qEn": "How does an embassy help identify a fake visa?",
    "ansLines": [
      "১. ঢাকায় সংশ্লিষ্ট দেশের দূতাবাস বা তাদের অনুমোদিত কনস্যুলার সার্ভিস সেন্টারে ভিসা যাচাইয়ের আবেদন করা যায়।",
      "২. ভিসার কপি ও পাসপোর্ট নম্বর উল্লেখ করে দূতাবাসের অফিসিয়াল কনস্যুলার ইমেইলে সত্যতা জানতে চেয়ে মেইল করা যায়।",
      "৩. দূতাবাস কর্মকর্তারা তাদের অভ্যন্তরীণ সেন্ট্রাল ডাটাবেজে রেকর্ড মিলিয়ে ভিসাটি আসল নাকি ভুয়া তা জানিয়ে দেন।",
      "৪. অনেক দূতাবাস তাদের ওয়েবসাইটে জাল ভিসা প্রতিরোধ সেল ও প্রতারণা শনাক্তকরণ গাইডলাইন উন্মুক্ত রেখেছে।",
      "৫. বড় অঙ্কের আর্থিক লেনদেনের পূর্বে কোনো সন্দেহ থাকলে দূতাবাসের সাথে সরাসরি যোগাযোগ করাই সবচেয়ে নির্ভরযোগ্য।"
    ],
    "portalName": "Diplomatic Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "দূতাবাস ভিসা যাচাই",
      "embassy visa verification",
      "দূতাবাসে অভিযোগ"
    ]
  },
  {
    "id": 134,
    "category": "fraud-prevention",
    "qBn": "ফটোশপ করা এডিটেড ভিসা চেনার প্রযুক্তিগত উপায় কি?",
    "qEn": "What are technical ways to detect photoshopped visas?",
    "ansLines": [
      "১. পিডিএফ ফাইলটির প্রোপার্টিজ (Properties) চেক করলে এটি কোনো এডিটর সফটওয়্যার দিয়ে তৈরি কিনা দেখা যায়।",
      "২. ফটোশপ বা ক্যানভায় এডিট করা ফাইলে লেখার চারপাশে হালকা অসমান পিক্সেল বা রঙিন ছোপ দেখতে পাবেন।",
      "৩. ছবির মেটাডাটাতে (Metadata) যদি 'Adobe Photoshop' বা 'Edited' ট্যাগ থাকে তবে এটি স্পষ্টত ফেক।",
      "৪. আসল সরকারি পিডিএফ ফাইলে একটি ডিজিটাল ক্রিপ্টোগ্রাফিক সিগনেচার (Digital Signature) থাকে যা এডিটে মুছে যায়।",
      "৫. সবচেয়ে অকাট্য উপায় হলো পিডিএফের তথ্য সরকারি সার্ভারের সাথে সরাসরি মিলিয়ে নেওয়া।"
    ],
    "portalName": "Digital Forensics Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ফটোশপ করা ভিসা",
      "photoshopped visa check",
      "এডিটেড ভিসা চেনার উপায়"
    ]
  },
  {
    "id": 135,
    "category": "fraud-prevention",
    "qBn": "সরকারি ডোমেইন (.gov) ছাড়া অন্য কোনো লিংকে ভিসা দেখালে কি করবেন?",
    "qEn": "What to do if visa is shown on non-government (.gov) domain?",
    "ansLines": [
      "১. সরকারি ডোমেইন (যেমন .gov.bd, .gov.sa, .gov.ae, .gov.my) ছাড়া যেকোনো ডোমেইন দেখলেই সতর্ক হোন।",
      "২. প্রতারকরা প্রায়ই .com, .xyz, .online বা .net দিয়ে হুবহু সরকারি সাইটের মতো দেখতে ভুয়া ফিশিং সাইট বানায়।",
      "৩. এমন ভুয়া সাইটে যেকোনো নম্বর দিলেই আগে থেকে সাজিয়ে রাখা ভুয়া 'Approved' সার্টিফিকেট চলে আসে।",
      "৪. এই ধরনের লিংকে কোনো টাকা প্রদান করবেন না এবং সাইটের আসল ওয়েবহোস্টিং রেকর্ড যাচাই করুন।",
      "৫. Visa Check App শুধুমাত্র আন্তর্জাতিকভাবে স্বীকৃত বিশুদ্ধ সরকারি ডোমেইনে ব্রাউজ করায়, তাই এতে প্রতারণার সুযোগ নেই।"
    ],
    "portalName": "Phishing & Domain Warning",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভুয়া ওয়েবসাইট",
      "phishing visa website",
      "সরকারি ডোমেইন সতর্কতা"
    ]
  },
  {
    "id": 136,
    "category": "fraud-prevention",
    "qBn": "ভিসা চেক করার পর পাসপোর্ট নম্বরের সাথে স্পেলিং ভুল থাকলে কি করণীয়?",
    "qEn": "What to do if there is a spelling mistake on visa?",
    "ansLines": [
      "১. নামের একটি অক্ষর বা পাসপোর্ট নম্বরের কোনো ডিজিট ভুল থাকলে বিমানে বোর্ডিং পাস পাওয়া যাবে না।",
      "২. এই ধরণের ভুল হলে তাৎক্ষণিকভাবে আপনার রিক্রুটিং এজেন্সি বা ভিসা স্পন্সরকে বিষয়টি জানান।",
      "৩. স্পন্সর তাদের দেশের শ্রম ও ইমিগ্রেশন পোর্টাল থেকে সংশোধনের (Correction/Amendment) আবেদন করতে পারবে।",
      "৪. সংশোধন না করে সেই ত্রুটিপূর্ণ ভিসা দিয়ে ম্যানপাওয়ার বা টিকিট কাটলে এয়ারপোর্টে ফেরত পাঠানো হবে।",
      "৫. সংশোধন সম্পন্ন হওয়ার পর পুনরায় অনলাইনে চেক করে নামের বানান শতভাগ ঠিক হয়েছে কিনা নিশ্চিত হোন।"
    ],
    "portalName": "Correction Advisory",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসায় নামের বানান ভুল",
      "spelling mistake on visa",
      "ভিসা সংশোধন"
    ]
  },
  {
    "id": 137,
    "category": "fraud-prevention",
    "qBn": "দালাল যদি ভিসা অনলাইন চেক করতে না দেয় তাহলে কি করবেন?",
    "qEn": "What to do if agent refuses to let you check visa online?",
    "ansLines": [
      "১. দালাল যদি অজুহাত দেখায় যে 'ভিসা অনলাইনে শো করবে না বা এটা সিক্রেট ভিসা', তবে ৯৯% ক্ষেত্রে এটি একটি প্রতারণা।",
      "২. বর্তমান পৃথিবীতে যেকোনো দেশের ভিসা বাধ্যতামূলকভাবে কেন্দ্রীয় সরকারি ডিজিটাল সার্ভারে সংরক্ষিত থাকে।",
      "৩. অনলাইন চেক না করিয়ে কোনো অবস্থাতেই দালালকে কোনো অগ্রিম বা অবশিষ্ট টাকা প্রদান করবেন না।",
      "৪. শুধু আপনার পাসপোর্ট নম্বর ব্যবহার করে নিজেই Visa Check App দিয়ে গোপনে স্ট্যাটাস দেখে নিন।",
      "৫. দালাল তথ্য গোপন করার চেষ্টা করলে স্থানীয় জনপ্রতিনিধি বা প্রশাসনের সাহায্য নিয়ে সতর্ক অবস্থান নিন।"
    ],
    "portalName": "Agent Red Flags",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "দালাল ভিসা চেক করতে না দিলে",
      "agent red flags",
      "দালাল থেকে সাবধান"
    ]
  },
  {
    "id": 138,
    "category": "fraud-prevention",
    "qBn": "ট্রাভেল এজেন্সির ভুয়া অফার লেটার চেনার উপায় কি?",
    "qEn": "How to identify a fake job offer letter?",
    "ansLines": [
      "১. কোনো সরকারি অনুমোদন বা ওয়ার্ক পারমিট নম্বর ছাড়া সাধারণ কাগজের প্যাডে লেখা অফার লেটার ভুয়া হতে পারে।",
      "২. অবাস্তব উচ্চ বেতনের প্রলোভন (যেমন সাধারণ শ্রমিকে ৩-৪ লাখ টাকা বেতন) থাকলে তা পরিষ্কার স্ক্যাম।",
      "৩. কোম্পানিতে চাকরির জন্য জিমেইল বা ইয়াহু ইমেইল (যেমন company@gmail.com) ব্যবহার করা হলে তা ভুয়া।",
      "৪. প্রকৃত বিদেশি কোম্পানি কখনো কোনো প্রার্থীকে ভিসা প্রসেসিংয়ের আগে ব্যক্তিগত বিকাশ বা ব্যাংকে টাকা দিতে বলে না।",
      "৫. বিদেশি নিয়োগকর্তার আসল ওয়েবসাইট ও অফিশিয়াল ফোন নম্বরে যোগাযোগ করে অফার লেটারটির সত্যতা যাচাই করুন।"
    ],
    "portalName": "Offer Letter Verification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভুয়া অফার লেটার",
      "fake job offer letter",
      "অফার লেটার যাচাই"
    ]
  },
  {
    "id": 139,
    "category": "fraud-prevention",
    "qBn": "আসল কাজের ভিসা ও ভিজিট ভিসার কাগজপত্রের পার্থক্য কি?",
    "qEn": "Difference between real work visa and visit visa documents?",
    "ansLines": [
      "১. কাজের ভিসায় (Work Visa) কর্মীর নির্ধারিত পেশা, স্পন্সরের কোম্পানির নাম ও লেবার চুক্তি নম্বর লেখা থাকে।",
      "২. অন্যদিকে ভিজিট ভিসায় ক্যাটাগরি হিসেবে 'Tourist', 'Visit' বা 'Commercial' লেখা থাকবে এবং কোনো পেশা থাকে না।",
      "৩. ভিজিট ভিসার মেয়াদ ৩০ থেকে ৯০ দিন থাকে, কিন্তু কাজের ভিসার প্রবেশ মেয়াদ ৯০ দিন হলেও সেখানে ইকামা করার শর্ত থাকে।",
      "৪. দালালরা অনেক সময় ভিজিট ভিসাকে কাজের ভিসা বলে কর্মীদের বিদেশে পাঠিয়ে বিপদে ফেলে দেয়।",
      "৫. অনলাইন ভিসা পেপারের 'Visa Purpose' বা 'Type' কলামটি নিজে পড়ে নিশ্চিত হোন এটি আসলেই ওয়ার্ক ভিসা কিনা।"
    ],
    "portalName": "Visa Type Clarification",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "কাজের ভিসা বনাম ভিজিট ভিসা",
      "work visa vs visit visa",
      "ভিসার পার্থক্য"
    ]
  },
  {
    "id": 140,
    "category": "fraud-prevention",
    "qBn": "ভিসা প্রতারণা এড়াতে বিদেশগামী কর্মীদের সবচেয়ে বড় সতর্কতা কি?",
    "qEn": "Biggest precaution for migrant workers to avoid visa fraud?",
    "ansLines": [
      "১. সবচেয়ে বড় সতর্কতা হলো: ভিসা নিজে সরকারি সার্ভারে না দেখে কোনো ব্যক্তিকে কখনোই নগদ টাকা দেবেন না।",
      "২. সব ধরনের লেনদেনের ক্ষেত্রে অনুমোদিত রিক্রুটিং এজেন্সির অফিশিয়াল ব্যাংক একাউন্ট ও মানি রিসিট ব্যবহার করুন।",
      "৩. বিএমইটি (BMET) থেকে ফিঙ্গারপ্রিন্ট ও স্মার্ট কার্ড যাচাই না করে শুধু ভিসা পেপার নিয়ে এয়ারপোর্টে যাবেন না।",
      "৪. ভিসা চেক করার জন্য কারো ওপর অন্ধভাবে নির্ভর না করে স্মার্টফোনে Visa Check App দিয়ে নিজেই পরীক্ষা করুন।",
      "৫. সন্দেহজনক মনে হলে সরকারের প্রবাসী কল্যাণ হেল্পলাইনে (১৬১৩৫) কল করে তাৎক্ষণিক পরামর্শ গ্রহণ করুন।"
    ],
    "portalName": "Golden Precautions Guide",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ভিসা প্রতারণা এড়াতে সতর্কতা",
      "precaution against visa fraud",
      "প্রবাসী সুরক্ষা"
    ]
  },
  {
    "id": 141,
    "category": "bmet-manpower",
    "qBn": "বিএমইটি (BMET) ম্যানপাওয়ার কার্ড চেক করার নিয়ম কি?",
    "qEn": "How to check BMET Manpower Smart Card?",
    "ansLines": [
      "১. বিএমইটি ম্যানপাওয়ার ক্লিয়ারেন্স চেক করার অফিশিয়াল পোর্টাল হলো: bmet.gov.bd অথবা amiprobashi.com।",
      "২. পোর্টালে গিয়ে 'Immigration Clearance Status' অপশনে আপনার পাসপোর্ট নম্বরটি লিখুন।",
      "৩. যদি ম্যানপাওয়ার অনুমোদন হয়ে থাকে, তবে স্ক্রিনে প্রার্থীর নাম, স্মার্ট কার্ড নম্বর ও গন্তব্য দেশ দেখাবে।",
      "৪. এর সাথে বিএমইটির কিউআর কোডযুক্ত ডিজিটাল এমিগ্রেশন ছাড়পত্র ডাউনলোড করা যাবে।",
      "৫. এয়ারপোর্ট ইমিগ্রেশন সার্ভারের সাথে বিএমইটির ডাটা সরাসরি লিঙ্ক থাকে, তাই এটি আসল হওয়া বাধ্যতামূলক।"
    ],
    "portalName": "BMET Immigration Clearance",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "বিএমইটি ম্যানপাওয়ার চেক",
      "bmet smart card check",
      "ম্যানপাওয়ার কার্ড"
    ]
  },
  {
    "id": 142,
    "category": "bmet-manpower",
    "qBn": "আমি প্রবাসী অ্যাপ দিয়ে কি ভিসা ও ম্যানপাওয়ার ভেরিফাই করা যায়?",
    "qEn": "Can visa and manpower be verified with Ami Probashi app?",
    "ansLines": [
      "১. হ্যাঁ, 'আমি প্রবাসী' (Ami Probashi) অ্যাপের মাধ্যমে বাংলাদেশ সরকারের সব ধরনের অভিবাসন সেবা দেখা যায়।",
      "২. অ্যাপে পাসপোর্ট নম্বর দিয়ে বিএমইটি রেজিস্ট্রেশন, প্রি-ডিপার্চার ট্রেনিং ও ম্যানপাওয়ার আবেদন ট্র্যাক করা যায়।",
      "৩. ম্যানপাওয়ার কার্ড প্রস্তুত হলে অ্যাপ থেকেই কিউআর কোড সম্বলিত ডিজিটাল স্মার্ট কার্ড ডাউনলোড হয়।",
      "৪. তবে বিদেশি ভিসা আসল কিনা তা যাচাই করার জন্য সংশ্লিষ্ট দেশের সরকারি পোর্টালেই যেতে হয়।",
      "৫. ভিসা সঠিক হওয়ার পরই আমি প্রবাসী অ্যাপের মাধ্যমে ম্যানপাওয়ার ক্লিয়ারেন্সের চূড়ান্ত অনুমতি পাওয়া যায়।"
    ],
    "portalName": "Ami Probashi Platform",
    "officialUrl": "https://amiprobashi.com",
    "tags": [
      "আমি প্রবাসী অ্যাপ",
      "ami probashi verify",
      "ডিজিটাল ম্যানপাওয়ার"
    ]
  },
  {
    "id": 143,
    "category": "bmet-manpower",
    "qBn": "পাসপোর্ট নাম্বার দিয়ে ম্যানপাওয়ার হয়েছে কিনা কিভাবে বুঝব?",
    "qEn": "How to know if manpower clearance is done by passport?",
    "ansLines": [
      "১. বিএমইটির অফিশিয়াল সাইটে পাসপোর্ট সার্চ দিলে স্ট্যাটাসে 'Clearance Card Issued' লেখা দেখতে পাবেন।",
      "২. সাথে প্রার্থীর পাসপোর্ট নম্বর, রিক্রুটিং এজেন্সির আরএল নম্বর এবং নিয়োগকারী কোম্পানির নাম আসবে।",
      "৩. যদি আবেদন প্রক্রিয়াধীন থাকে, তবে 'Application Submitted' বা 'Under Scrutiny' বার্তা আসবে।",
      "৪. যদি কোনো তথ্য না আসে, তবে বুঝতে হবে আপনার নামে এখনো ম্যানপাওয়ারের আবেদন দাখিল করা হয়নি।",
      "৫. ম্যানপাওয়ার ইস্যু হলে একটি সুনির্দিষ্ট স্মার্ট কার্ড আইডি নম্বর (Smart Card ID) প্রদান করা হয়।"
    ],
    "portalName": "Manpower Verification Query",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "পাসপোর্ট দিয়ে ম্যানপাওয়ার",
      "manpower check by passport",
      "ক্লিয়ারেন্স হয়েছে কিনা"
    ]
  },
  {
    "id": 144,
    "category": "bmet-manpower",
    "qBn": "বিএমইটি স্মার্ট কার্ড স্ট্যাটাস অনলাইনে কিভাবে চেক করব?",
    "qEn": "How to check BMET Smart Card status online?",
    "ansLines": [
      "১. bmet.gov.bd ওয়েবসাইটে 'Online Services' মেনু থেকে 'Smart Card Download' অপশনে যান।",
      "২. আপনার পাসপোর্ট নম্বর লিখে সার্চ বাটনে চাপ দিলে প্রস্তুতকৃত স্মার্ট কার্ডের প্রিভিউ আসবে।",
      "৩. কার্ডে প্রার্থীর বায়োমেট্রিক ছবি, রক্ত ​​গ্রুপ, জরুরি যোগাযোগ ও বিমা পলিসির তথ্য থাকে।",
      "৪. স্মার্ট কার্ডের পেছনে থাকা কিউআর কোড স্ক্যান করে পুলিশ ও ইমিগ্রেশন তাৎক্ষণিক সত্যতা যাচাই করতে পারে।",
      "৫. স্ট্যাটাস এপ্রুভড হলে কার্ডটি মোবাইলে ডাউনলোড করে লেমিনেটিং প্রিন্ট করে সাথে রাখতে পারেন।"
    ],
    "portalName": "BMET Smart Card Portal",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "বিএমইটি স্মার্ট কার্ড",
      "bmet smart card status",
      "স্মার্ট কার্ড ডাউনলোড"
    ]
  },
  {
    "id": 145,
    "category": "bmet-manpower",
    "qBn": "ম্যানপাওয়ার ক্লিয়ারেন্স কার্ড পেতে কতদিন সময় লাগে?",
    "qEn": "How long does it take to get Manpower clearance card?",
    "ansLines": [
      "১. সমস্ত কাগজপত্র (ভিসা, মেডিকেল রিপোর্ট, চুক্তিপত্র ও প্রশিক্ষণ) সঠিক থাকলে সাধারণত ৩ থেকে ৫ কার্যদিবস লাগে।",
      "২. ডিজিটাল পদ্ধতির কারণে কাগজপত্র যাচাই শেষে ১ থেকে ২ কার্যদিবসের মধ্যেও অনেক সময় কার্ড ইস্যু হয়ে যায়।",
      "৩. তবে কোনো নথিতে গরমিল বা এজেন্সির কোটায় সমস্যা থাকলে অনুমোদন পেতে ৭ থেকে ১০ দিন পর্যন্ত লাগতে পারে।",
      "৪. বিএমইটি অনুমোদনের অগ্রগতি প্রতিদিন অনলাইনে পাসপোর্ট নম্বর দিয়ে ট্র্যাক করে নেওয়া যায়।",
      "৫. ফ্লাইট বুকিংয়ের তারিখের অন্তত এক সপ্তাহ আগেই ম্যানপাওয়ার প্রক্রিয়া সম্পন্ন করা সবচেয়ে নিরাপদ।"
    ],
    "portalName": "Processing Timeframe",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার হতে কতদিন লাগে",
      "manpower clearance time",
      "ক্লিয়ারেন্স সময়"
    ]
  },
  {
    "id": 146,
    "category": "bmet-manpower",
    "qBn": "ম্যানপাওয়ার কার্ড ছাড়া কি বিদেশে যাওয়া যায়?",
    "qEn": "Can anyone go abroad for work without Manpower card?",
    "ansLines": [
      "১. কাজের ভিসায় (Employment/Work Visa) বিদেশ যাওয়ার ক্ষেত্রে BMET ম্যানপাওয়ার কার্ড শতভাগ বাধ্যতামূলক।",
      "২. ম্যানপাওয়ার কার্ড ছাড়া কাজের ভিসায় কোনো কর্মীকে বাংলাদেশের কোনো আন্তর্জাতিক বিমানবন্দর ত্যাগ করতে দেওয়া হয় না।",
      "৩. তবে পর্যটক (Tourist), ট্রানজিট বা মেডিকেল ভিসার যাত্রীদের জন্য BMET ম্যানপাওয়ারের প্রয়োজন হয় না।",
      "৪. ম্যানপাওয়ার কার্ড থাকলে প্রবাসী কর্মী বাংলাদেশ সরকারের প্রবাসী কল্যাণ বোর্ডের সকল আর্থিক ও আইনি সুবিধা পান।",
      "৫. দালাল যদি ম্যানপাওয়ার ছাড়া বিমানে পাঠানোর আশ্বাস দেয়, তবে বুঝতে হবে এটি মানবপাচার বা অবৈধ প্রক্রিয়া।"
    ],
    "portalName": "Legal Mandate Notice",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার ছাড়া বিদেশে যাওয়া",
      "is manpower mandatory",
      "বাধ্যতামূলক ম্যানপাওয়ার"
    ]
  },
  {
    "id": 147,
    "category": "bmet-manpower",
    "qBn": "বিএমইটি বায়োমেট্রিক ফিঙ্গারপ্রিন্ট স্ট্যাটাস চেক কিভাবে করে?",
    "qEn": "How to check BMET biometric fingerprint status?",
    "ansLines": [
      "১. জেলা কর্মসংস্থান ও জনশক্তি অফিস (DEMO) বা টিটিসি (TTC) সেন্টারে ১০ আঙুলের বায়োমেট্রিক ছাপ দেওয়া হয়।",
      "২. ফিঙ্গারপ্রিন্ট দেওয়ার পর আমি প্রবাসী অ্যাপ বা বিএমইটি সাইটে পাসপোর্ট নম্বর দিলে 'Biometric Done' দেখাবে।",
      "৩. বায়োমেট্রিক সম্পন্ন না হলে কোনো এজেন্সির পক্ষেই প্রার্থীর ম্যানপাওয়ারের আবেদন সাবমিট করা সম্ভব নয়।",
      "৪. ফিঙ্গারপ্রিন্ট ডাটা সেন্ট্রাল সার্ভারে সিঙ্ক হতে সর্বোচ্চ কয়েক ঘণ্টা সময় লাগতে পারে।",
      "৫. ফিঙ্গারপ্রিন্ট সম্পন্ন হওয়ার পরই প্রার্থী প্রি-ডিপার্চার ওরিয়েন্টেশন ক্লাসে অংশগ্রহণের সুযোগ পান।"
    ],
    "portalName": "Biometric Enrollment Gateway",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ফিঙ্গারপ্রিন্ট চেক",
      "bmet fingerprint status",
      "বায়োমেট্রিক স্ট্যাটাস"
    ]
  },
  {
    "id": 148,
    "category": "bmet-manpower",
    "qBn": "বিএমইটি ডাটাবেজে নাম নিবন্ধন হয়েছে কিনা কিভাবে দেখব?",
    "qEn": "How to check if name is registered in BMET database?",
    "ansLines": [
      "১. বিএমইটি রেজিস্ট্রেশন যাচাই করতে bmet.gov.bd এর 'Jobseeker Search' অপশনে যেতে হবে।",
      "২. সেখানে আপনার পাসপোর্ট নম্বর বা রেজিস্ট্রেশন ট্র্যাকিং নম্বরটি প্রবেশ করান।",
      "৩. নিবন্ধিত থাকলে প্রার্থীর নাম, পিতার নাম, ঠিকানা ও ট্রেড দক্ষতার সম্পূর্ণ তালিকা দেখতে পাবেন।",
      "৪. ডাটাবেজে নাম অন্তর্ভুক্ত না থাকলে বিদেশগামী কর্মী হিসেবে কোনো সরকারি প্রক্রিয়া এগোনো যায় না।",
      "৫. ঘরে বসেই আমি প্রবাসী অ্যাপ থেকে যেকেউ মাত্র ৩০০ টাকা সরকারি ফি দিয়ে এই ডাটাবেজ রেজিস্ট্রেশন করতে পারেন।"
    ],
    "portalName": "BMET Registration Registry",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "বিএমইটি ডাটাবেজে নাম",
      "bmet registration check",
      "ডাটাবেজ নিবন্ধন"
    ]
  },
  {
    "id": 149,
    "category": "bmet-manpower",
    "qBn": "প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) সার্টিফিকেট চেক কিভাবে করব?",
    "qEn": "How to check Pre-Departure Orientation (PDO) certificate?",
    "ansLines": [
      "১. বিদেশযাত্রার পূর্বে কর্মীদের ৩ দিনের বাধ্যতামূলক পিডিও (PDO) ট্রেনিং সম্পন্ন করতে হয়।",
      "২. ট্রেনিং শেষে আমি প্রবাসী অ্যাপে বা বিএমইটি সাইটে আপনার পিডিও সার্টিফিকেট অনলাইনে তৈরি হয়ে যায়।",
      "৩. পাসপোর্ট নম্বর দিলে 'PDO Certificate Valid' স্ট্যাটাস এবং ডিজিটাল সার্টিফিকেট ডাউনলোড করার অপশন আসবে।",
      "৪. সার্টিফিকেটে একটি অফিশিয়াল বারকোড থাকে যা ম্যানপাওয়ার ক্লিয়ারেন্সের জন্য সিস্টেমে যুক্ত করতে হয়।",
      "৫. সফলভাবে পিডিও সম্পন্ন না করলে ম্যানপাওয়ারের আবেদন সরাসরি সফটওয়্যারে আটকে যায়।"
    ],
    "portalName": "PDO Training Certification",
    "officialUrl": "https://amiprobashi.com",
    "tags": [
      "পিডিও সার্টিফিকেট চেক",
      "pdo certificate online",
      "প্রি ডিপার্চার ট্রেনিং"
    ]
  },
  {
    "id": 150,
    "category": "bmet-manpower",
    "qBn": "ম্যানপাওয়ার কার্ড রিজেক্ট হলে কি করণীয়?",
    "qEn": "What to do if Manpower clearance is rejected?",
    "ansLines": [
      "১. ম্যানপাওয়ার রিজেক্ট হলে পোর্টালে সুনির্দিষ্ট কারণ (যেমন জাল ভিসা, মেডিকেল সনদ অমিল বা চুক্তিপত্র ত্রুটি) লেখা থাকে।",
      "২. ত্রুটিটি চিহ্নিত করে আপনার রিক্রুটিং এজেন্সির মাধ্যমে বিএমইটির সংশ্লিষ্ট ডেস্কে সংশোধিত নথি জমা দিন।",
      "৩. যদি ভিসা বা মেডিকেল সার্টিফিকেটের তথ্য ভুলবশত ভুল এন্ট্রি হয়, তবে পুনরায় আপলোড করে আবেদন করা যায়।",
      "৪. কিন্তু যদি ভিসাটি জালিয়াতিপূর্ণ হয়, তবে ম্যানপাওয়ার কখনোই হবে না এবং এজেন্সির বিরুদ্ধে ব্যবস্থা নেওয়া হবে।",
      "৫. কোনো বিভ্রান্তিতে না পড়ে বিএমইটি হেল্পডেস্কে সরাসরি যোগাযোগ করে সমাধানের পরামর্শ গ্রহণ করুন।"
    ],
    "portalName": "BMET Appeal & Correction",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার বাতিল হলে করণীয়",
      "manpower rejected reason",
      "ম্যানপাওয়ার সংশোধন"
    ]
  },
  {
    "id": 151,
    "category": "bmet-manpower",
    "qBn": "বোয়েসেল (BOESL) এর মাধ্যমে ভিসা ও ম্যানপাওয়ার চেক কিভাবে করে?",
    "qEn": "How to check visa and manpower through BOESL?",
    "ansLines": [
      "১. বাংলাদেশ ওভারসিজ এমপ্লয়মেন্ট অ্যান্ড সার্ভিসেস লিঃ (বোয়েসেল) হলো সরকারের একমাত্র রাষ্ট্রীয় অভিবাসন সংস্থা।",
      "২. বোয়েসেলের মাধ্যমে দক্ষিণ কোরিয়া, জর্ডান বা কুয়েতগামী কর্মীদের তালিকা boesl.gov.bd তে প্রকাশিত হয়।",
      "৩. বোয়েসেল নোটিশ বোর্ডে প্রার্থীর রোল নম্বর ও পাসপোর্ট নম্বর দিয়ে নির্বাচিত তালিকা মিলিয়ে দেখা যায়।",
      "৪. বোয়েসেলের কর্মীদের ম্যানপাওয়ার প্রক্রিয়া সরকারিভাবে সরাসরি বিএমইটি ডাটাবেজে সম্পন্ন হয়।",
      "৫. সম্পূর্ণ দুর্নীতিমুক্ত ও কম খরচে সরকারিভাবে বিদেশ যাওয়ার জন্য বোয়েসেল হলো সবচেয়ে নিরাপদ প্ল্যাটফর্ম।"
    ],
    "portalName": "BOESL Government Agency",
    "officialUrl": "https://www.boesl.gov.bd",
    "tags": [
      "বোয়েসেল ভিসা চেক",
      "boesl manpower check",
      "সরকারিভাবে বিদেশ"
    ]
  },
  {
    "id": 152,
    "category": "bmet-manpower",
    "qBn": "ম্যানপাওয়ার কার্ডে কোন দেশের নাম ও পেশা লেখা থাকে?",
    "qEn": "What country and profession are listed on Manpower card?",
    "ansLines": [
      "১. বিএমইটি স্মার্ট কার্ডে আপনার ভিসার মূল তথ্য অনুযায়ী গন্তব্য দেশের নাম পরিষ্কারভাবে লেখা থাকবে।",
      "২. পেশার ঘরে ভিসার সাথে মিল রেখে ট্রেড (যেমন: ইলেকট্রিশিয়ান, ড্রাইভার, রাজমিস্ত্রি বা ক্লিনার) উল্লেখ থাকে।",
      "৩. এছাড়া নিয়োগকারী কোম্পানির নাম, অনুমোদিত বেতন এবং বাংলাদেশের রিক্রুটিং এজেন্সির আরএল নম্বর থাকে।",
      "৪. কোনো অবস্থাতেই ভিসার পেশা আর ম্যানপাওয়ার কার্ডের পেশায় গরমিল থাকা গ্রহণযোগ্য নয়।",
      "৫. কার্ড হাতে পেলে এই তথ্যগুলো বিমানে ওঠার আগেই সতর্কতার সাথে মিলিয়ে দেখে নেওয়া উচিত।"
    ],
    "portalName": "Card Details Verification",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার কার্ডের তথ্য",
      "স্মার্ট কার্ডের পেশা",
      "details on manpower card"
    ]
  },
  {
    "id": 153,
    "category": "bmet-manpower",
    "qBn": "পাসপোর্ট পরিবর্তনের পর ম্যানপাওয়ার তথ্য কিভাবে আপডেট করব?",
    "qEn": "How to update Manpower data after changing passport?",
    "ansLines": [
      "১. নতুন পাসপোর্ট পেলে বিএমইটি অফিসে অথবা আমি প্রবাসী সাপোর্ট উইংয়ে পাসপোর্ট সংশোধনের আবেদন করতে হয়।",
      "২. পুরাতন ও নতুন উভয় পাসপোর্টের মূল পাতা এবং রিনিউয়ালের প্রমাণপত্র সাথে সংযুক্ত করতে হবে।",
      "৩. যাচাই শেষে সিস্টেম অপারেটর পূর্বের ম্যানপাওয়ার ডাটাবেজে নতুন পাসপোর্ট নম্বর লিঙ্ক করে দেবেন।",
      "৪. আপডেট সফল হলে অনলাইনে নতুন পাসপোর্ট নম্বর দিয়ে সার্চ দিলেই পূর্বের সকল ছাড়পত্রের ইতিহাস পাওয়া যাবে।",
      "৫. এই আপডেট না করলে ভবিষ্যতে পুনর্গমন বা প্রবাসী কল্যাণ সুবিধা পেতে আইনি জটিলতা তৈরি হতে পারে।"
    ],
    "portalName": "Record Amendment Desk",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার পাসপোর্ট আপডেট",
      "update passport in bmet",
      "পাসপোর্ট পরিবর্তন"
    ]
  },
  {
    "id": 154,
    "category": "bmet-manpower",
    "qBn": "সরকারি ফি ছাড়া কি ম্যানপাওয়ার কার্ড করা সম্ভব?",
    "qEn": "Is it possible to get Manpower card without government fee?",
    "ansLines": [
      "১. না, বিএমইটি স্মার্ট কার্ড ও প্রবাসী কল্যাণ তহবিলের জন্য সরকার নির্ধারিত আইনি ফি প্রদান করা বাধ্যতামূলক।",
      "২. এই ফির মধ্যে কল্যাণ ফি, জীবন বিমা প্রিমিয়াম ও স্মার্ট কার্ড চার্জ অন্তর্ভুক্ত থাকে (সাধারণত ৪-৫ হাজার টাকা)।",
      "৩. এই ফি সরাসরি ব্যাংক চালানের মাধ্যমে সোনালী ব্যাংক বা আমি প্রবাসী অনলাইন গেটওয়েতে পরিশোধ হয়।",
      "৪. সরকারি ফি ছাড়া কোনো দালাল যদি ম্যানপাওয়ার কার্ডের কাগজ দেয়, তবে তা ভুয়া কাগজ হিসেবে গণ্য হবে।",
      "৫. চালানের রিসিট সবসময় প্রার্থীর নিজের নামে সংরক্ষিত থাকা জরুরি যা পরবর্তীতে আইনি সুরক্ষা দেয়।"
    ],
    "portalName": "Government Fee Schedule",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার সরকারি ফি",
      "manpower fees bmet",
      "স্মার্ট কার্ডের খরচ"
    ]
  },
  {
    "id": 155,
    "category": "bmet-manpower",
    "qBn": "ম্যানপাওয়ার কার্ডের কিউআর কোড স্ক্যান করলে কি তথ্য পাওয়া যায়?",
    "qEn": "What information shows when scanning Manpower QR code?",
    "ansLines": [
      "১. স্মার্টফোনের ক্যামেরা দিয়ে স্মার্ট কার্ডের কিউআর কোড স্ক্যান করলে সরাসরি bmet.gov.bd এর ভেরিফিকেশন পেজ খোলে।",
      "২. সেখানে প্রার্থীর নাম, পাসপোর্ট নম্বর, ক্লিয়ারেন্স আইডি ও ইস্যুর তারিখ লাইভ ডাটাবেজ থেকে প্রদর্শিত হয়।",
      "৩. যদি স্ক্যান করে কোনো লিংক না আসে বা কোনো ভুয়া ওয়েবসাইটে যায়, তবে কার্ডটি নকল বলে প্রমাণিত হয়।",
      "৪. বিমানবন্দর ইমিগ্রেশন অফিসাররা স্পেশাল বারকোড রিডার দিয়ে এই কিউআর কোড দ্রুত যাচাই করে থাকেন।",
      "৫. কোনো এজেন্সি কার্ড দিলে আপনি নিজেই তাৎক্ষণিক কিউআর স্ক্যান করে এর আসল অবস্থা নিশ্চিত হতে পারবেন।"
    ],
    "portalName": "QR Code Digital Audit",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার কিউআর কোড",
      "manpower qr scan",
      "স্মার্ট কার্ড স্ক্যান"
    ]
  },
  {
    "id": 156,
    "category": "bmet-manpower",
    "qBn": "ইমিগ্রেশন সার্ভারে ম্যানপাওয়ার ডাটা পৌঁছাতে কতক্ষণ লাগে?",
    "qEn": "How long does it take for manpower data to reach airport server?",
    "ansLines": [
      "১. বিএমইটি হেড অফিসে ম্যানপাওয়ার অনুমোদন হওয়ার পর ডাটা তাৎক্ষণিকভাবে কেন্দ্রীয় ডাটাবেজে আপডেট হয়।",
      "২. হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরসহ সব ইমিগ্রেশন সার্ভারে সিঙ্ক হতে সর্বোচ্চ ১ থেকে ২ ঘণ্টা সময় লাগে।",
      "৩. তাই ম্যানপাওয়ার কার্ড ইস্যু হওয়ার দিনই কয়েক ঘণ্টা পর টিকিট থাকলে বিমানে ভ্রমণ করা সম্ভব।",
      "৪. তবে ভ্রমণের অন্তত ২৪ ঘণ্টা পূর্বে ম্যানপাওয়ার সম্পন্ন রাখা যেকোনো অনাকাঙ্ক্ষিত সার্ভার বিভ্রান্তি এড়ায়।",
      "৫. ফ্লাইট করার আগে নিজে bmet.gov.bd সাইটে গিয়ে ডাটা লাইভ দেখাচ্ছে কিনা তা একবার নিশ্চিত হয়ে নিন।"
    ],
    "portalName": "Immigration Server Sync",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ইমিগ্রেশন সার্ভার সিঙ্ক",
      "airport server sync",
      "ম্যানপাওয়ার ডাটা সময়"
    ]
  },
  {
    "id": 157,
    "category": "bmet-manpower",
    "qBn": "আমি প্রবাসী অ্যাপে পাসপোর্ট ভেরিফিকেশন ফেইল দেখালে কি করবেন?",
    "qEn": "What to do if passport verification fails on Ami Probashi?",
    "ansLines": [
      "১. পাসপোর্টের ছবি বা নাম টাইপ করার সময় কোনো একটি বর্ণ ভুল হলে ভেরিফিকেশন ফেইল হতে পারে।",
      "২. পাসপোর্ট ইনফরমেশন পেজটি দিনের আলোতে পরিষ্কারভাবে স্ক্যান করে পুনরায় আপলোড করার চেষ্টা করুন।",
      "৩. ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তরের (DIP) ডাটাবেজের সাথে যদি নামের বানান বা জন্মতারিখে অমিল থাকে তবে ফেইল হয়।",
      "৪. সমস্যাটি স্থায়ী হলে আমি প্রবাসী হেল্পলাইন নম্বরে কল করে বা নিকটস্থ জেলা কর্মসংস্থান অফিসে যোগাযোগ করুন।",
      "৫. ম্যানুয়ালি পাসপোর্ট যাচাই করিয়ে নিলে সমস্যা সমাধান হয়ে অ্যাপে ভেরিফাইড টিক চিহ্ন চলে আসবে।"
    ],
    "portalName": "Ami Probashi Troubleshooting",
    "officialUrl": "https://amiprobashi.com",
    "tags": [
      "পাসপোর্ট ভেরিফিকেশন ফেইল",
      "ami probashi verification failed",
      "পাসপোর্ট যাচাই সমস্যা"
    ]
  },
  {
    "id": 158,
    "category": "bmet-manpower",
    "qBn": "ম্যানপাওয়ার ক্লিয়ারেন্স কার্ড অনলাইনে ডাউনলোড করার নিয়ম কি?",
    "qEn": "How to download Manpower clearance card online?",
    "ansLines": [
      "১. আমি প্রবাসী অ্যাপে লগইন করে 'My Services' মেনু থেকে 'Smart Card' অপশনে যান।",
      "২. অথবা bmet.gov.bd এর স্মার্ট কার্ড সেকশনে আপনার পাসপোর্ট নম্বরটি ইনপুট দিন।",
      "৩. স্ক্রিনে সম্পূর্ণ কার্ডটি সামনে এলে নিচে থাকা 'Download Card (PDF)' বাটনে ট্যাপ করুন।",
      "৪. কার্ডটি হাই-রেজোলিউশন কালার পিডিএফ আকারে আপনার মোবাইল বা কম্পিউটারে সেভ হয়ে যাবে।",
      "৫. এটি প্রিন্ট করে প্লাস্টিক লেমিনেটিং করে মূল পাসপোর্টের সাথে সংরক্ষণ করে রাখুন।"
    ],
    "portalName": "Smart Card Download Center",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "ম্যানপাওয়ার ডাউনলোড",
      "download bmet card",
      "স্মার্ট কার্ড প্রিন্ট"
    ]
  },
  {
    "id": 159,
    "category": "bmet-manpower",
    "qBn": "নারী কর্মীদের জন্য BMET ম্যানপাওয়ার নিয়মে কি বিশেষ শর্ত আছে?",
    "qEn": "Are there special rules for female workers in BMET manpower?",
    "ansLines": [
      "১. নারী গৃহকর্মীদের ক্ষেত্রে সরকার নির্ধারিত ৩০ দিনের বাধ্যতামূলক হাউসকিপিং আবাসিক ট্রেনিং সনদ লাগে।",
      "২. আবেদনকারী নারী কর্মীর বয়স সাধারণত ২৫ বছরের উপরে এবং বৈধ পাসপোর্ট থাকতে হয়।",
      "৩. সৌদি আরবের ক্ষেত্রে মুসানাদ (Musaned) এর মাধ্যমে সরকারিভাবে নিবন্ধিত চুক্তিপত্র থাকা বাধ্যতামূলক।",
      "৪. কোনো বেসরকারি দালাল নয়, বরং সরকার অনুমোদিত নারী অভিবাসন এজেন্সির মাধ্যমে ক্লিয়ারেন্স নিতে হয়।",
      "৫. বিমানবন্দরে নারীদের সুরক্ষায় প্রবাসী কল্যাণ ডেস্ক থেকে কাগজপত্র বিশেষ যাচাই করে সহায়তা দেওয়া হয়।"
    ],
    "portalName": "Female Migrant Protection",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "নারী কর্মীদের ম্যানপাওয়ার",
      "female worker manpower",
      "মুসানাদ নারী ভিসা"
    ]
  },
  {
    "id": 160,
    "category": "bmet-manpower",
    "qBn": "এয়ারপোর্ট প্রবাসী কল্যাণ ডেস্ক এ ম্যানপাওয়ার কার্ড যাচাই কিভাবে হয়?",
    "qEn": "How is Manpower card verified at Airport Probashi Kallyan Desk?",
    "ansLines": [
      "১. বিমানবন্দরে বোর্ডিং পাসের পূর্বে প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান ডেস্কের কর্মকর্তাদের কাছে যেতে হয়।",
      "২. কর্মকর্তারা আপনার পাসপোর্ট ও স্মার্ট কার্ডের বারকোড স্ক্যানার মেশিনে পাঞ্চ করেন।",
      "৩. সার্ভারে আপনার ডাটা লাইভ ভেরিফাইড হলে পাসপোর্টে একটি অফিশিয়াল বহির্গমন ছাড়পত্র সিল দেওয়া হয়।",
      "৪. এই সিলটি দেখানোর পরই এয়ারলাইন্স কাউন্টার থেকে চূড়ান্ত বোর্ডিং পাস প্রদান করা হয়।",
      "৫. যদি কারো কার্ড ভুয়া হয়, তবে বিমানবন্দর থেকেই তৎক্ষণাৎ তাকে ফেরত পাঠানো হয় ও দালালকে চিহ্নিত করা হয়।"
    ],
    "portalName": "Airport Probashi Desk Operations",
    "officialUrl": "https://www.bmet.gov.bd",
    "tags": [
      "এয়ারপোর্ট প্রবাসী কল্যাণ ডেস্ক",
      "airport immigration clearance",
      "বহির্গমন সিল"
    ]
  },
  {
    "id": 161,
    "category": "gamca-medical",
    "qBn": "গামকা (GAMCA/Wafid) মেডিকেল রিপোর্ট অনলাইনে কিভাবে চেক করব?",
    "qEn": "How to check GAMCA/Wafid medical report online?",
    "ansLines": [
      "১. উপসাগরীয় (জিসিসি) দেশগুলোর মেডিকেল রিপোর্ট চেক করার একমাত্র অফিশিয়াল ওয়েবসাইট হলো: wafid.com।",
      "২. Wafid সাইটের মেনু থেকে 'View Medical Reports' অপশনে ক্লিক করুন।",
      "৩. প্রথম বক্সে 'By Passport Number' সিলেক্ট করে আপনার ৯ ডিজিটের পাসপোর্ট নম্বরটি লিখুন।",
      "৪. জাতীয়তা হিসেবে 'Bangladesh' নির্বাচন করে স্ক্রিনে দেখানো ক্যাপচা কোডটি দিয়ে সাবমিট করুন।",
      "৫. কয়েক সেকেন্ডেই আপনার মেডিকেল রেজাল্ট 'FIT' অথবা 'UNFIT' এবং মেডিকেল সেন্টারের নাম দেখা যাবে।"
    ],
    "portalName": "Wafid (GAMCA) Official Portal",
    "officialUrl": "https://wafid.com",
    "tags": [
      "গামকা মেডিকেল চেক",
      "wafid medical report",
      "gamca medical check"
    ]
  },
  {
    "id": 162,
    "category": "gamca-medical",
    "qBn": "পাসপোর্ট নম্বর দিয়ে মেডিকেল ফিট না আনফিট কিভাবে দেখব?",
    "qEn": "How to see medical fit or unfit status with passport number?",
    "ansLines": [
      "১. wafid.com সাইটে পাসপোর্ট নম্বর দিলে রেজাল্টের ঘরে বড় সবুজ অক্ষরে 'FIT' লেখা দেখতে পাবেন।",
      "২. যদি কোনো শারীরিক ত্রুটি বা সংক্রামক রোগের অস্তিত্ব পাওয়া যায়, তবে লাল অক্ষরে 'UNFIT' লেখা থাকবে।",
      "৩. রেজাল্ট যদি এখনো প্রক্রিয়াধীন থাকে, তবে স্ট্যাটাসে 'Under Process' বা 'Sample Testing' দেখাবে।",
      "৪. 'FIT' স্ট্যাটাস আসলেই কেবল সৌদি বা উপসাগরীয় দেশের এম্বাসিতে ভিসা স্ট্যাম্পিংয়ের জন্য পাসপোর্ট জমা দেওয়া যায়।",
      "৫. এই রিপোর্টটি সরাসরি পিডিএফ ডাউনলোড করে প্রিন্ট করে ভিসার ফাইল ও ম্যানপাওয়ারের সাথে জমা দিতে হয়।"
    ],
    "portalName": "Medical Status Inquirer",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল ফিট না আনফিট",
      "medical fit check",
      "পাসপোর্ট দিয়ে মেডিকেল"
    ]
  },
  {
    "id": 163,
    "category": "gamca-medical",
    "qBn": "গামকা মেডিকেল স্লিপ অনলাইনে কিভাবে বের করে?",
    "qEn": "How to generate GAMCA medical slip online?",
    "ansLines": [
      "১. জিসিসিভুক্ত দেশে যাওয়ার আগে মেডিকেল করার জন্য Wafid পোর্টালে অনলাইন স্লিপ (Appointment Slip) কাটতে হয়।",
      "২. wafid.com এর 'Book an Appointment' অপশনে গিয়ে পাসপোর্ট তথ্য, মোবাইল নম্বর ও জাতীয়তা দিন।",
      "৩. সরকার নির্ধারিত অনলাইন ফি (১০ ডলার সমপরিমাণ) ভিসা বা মাস্টারকার্ড দিয়ে পরিশোধ করতে হয়।",
      "৪. পেমেন্ট সফল হলে স্বয়ংক্রিয়ভাবে ঢাকার কোনো একটি নির্দিষ্ট অনুমোদিত মেডিকেল সেন্টারের নামসহ স্লিপ আসবে।",
      "৫. এই স্লিপটি প্রিন্ট করে মূল পাসপোর্ট ও ছবিসহ নির্দিষ্ট সেন্টারে গিয়ে মেডিকেল টেস্ট দিতে হয়।"
    ],
    "portalName": "Wafid Appointment Booking",
    "officialUrl": "https://wafid.com",
    "tags": [
      "গামকা মেডিকেল স্লিপ",
      "wafid slip generate",
      "মেডিকেল স্লিপ কাটার নিয়ম"
    ]
  },
  {
    "id": 164,
    "category": "gamca-medical",
    "qBn": "মেডিকেল টেস্ট করানোর পর রিপোর্ট অনলাইনে আসতে কতদিন লাগে?",
    "qEn": "How many days does it take for medical report to appear online?",
    "ansLines": [
      "১. গামকা অনুমোদিত সেন্টারে রক্ত ​​ও এক্স-রে টেস্ট দেওয়ার পর সাধারণত ২৪ থেকে ৭২ ঘণ্টার মধ্যে রিপোর্ট অনলাইনে আসে।",
      "২. ল্যাবরেটরি টেস্ট সম্পূর্ণ হলে মেডিকেল সেন্টার সরাসরি Wafid কেন্দ্রীয় সার্ভারে ডাটা আপলোড করে দেয়।",
      "৩. শুক্রবার বা সরকারি ছুটির দিনে পরীক্ষা দিলে কিছুটা অতিরিক্ত সময় লাগতে পারে।",
      "৪. যদি ৩ কার্যদিবসের পরেও রিপোর্ট অনলাইনে না আসে, তবে সরাসরি সংশ্লিষ্ট মেডিকেল সেন্টারে ফোন করে খোঁজ নিন।",
      "৫. অনলাইনে 'FIT' স্ট্যাটাস দৃশ্যমান হলেই বুঝতে হবে রিপোর্টটি আন্তর্জাতিকভাবে এম্বাসির জন্য উন্মুক্ত হয়েছে।"
    ],
    "portalName": "Report Delivery Timeframe",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল রিপোর্ট আসতে কতদিন লাগে",
      "gamca report delivery time",
      "মেডিকেল সময়সীমা"
    ]
  },
  {
    "id": 165,
    "category": "gamca-medical",
    "qBn": "মেডিকেল রিপোর্টে 'UNFIT' আসলে কি ভিসা পাওয়া সম্ভব?",
    "qEn": "Is it possible to get a visa if medical is 'UNFIT'?",
    "ansLines": [
      "১. জিসিসি দেশগুলোর নিয়মে Wafid রিপোর্টে 'UNFIT' আসলে সেই ভিসা প্রক্রিয়া তৎক্ষণাৎ বন্ধ হয়ে যায়।",
      "২. হেপাটাইটিস-বি, হেপাটাইটিস-সি, টিবি (যক্ষ্মা) বা ফুসফুসে দাগ থাকলে সাধারণত স্থায়ী আনফিট করা হয়।",
      "৩. তবে ছোটখাটো রক্তচাপ বা সুগারের সমস্যার ক্ষেত্রে সাময়িক আনফিট দিয়ে পুনরায় টেস্টের সুযোগ দেওয়া হয়।",
      "৪. স্থায়ী আনফিটের ক্ষেত্রে সাধারণত ২ বছর পর্যন্ত উপসাগরীয় দেশগুলোর সিস্টেমে মেডিকেল ব্লক থাকে।",
      "৫. ভুয়া দালালরা অনেক সময় টাকা নিয়ে আনফিট রিপোর্ট ফিট করার দাবি করে, যা সম্পূর্ণ মিথ্যা ও অসম্ভব।"
    ],
    "portalName": "Medical Unfit Advisory",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল আনফিট হলে করণীয়",
      "medical unfit rules",
      "আনফিট হলে ভিসা হয় কিনা"
    ]
  },
  {
    "id": 166,
    "category": "gamca-medical",
    "qBn": "মেডিকেল টেস্টের মেয়াদ কতদিন থাকে?",
    "qEn": "How long is GAMCA medical test valid?",
    "ansLines": [
      "১. গামকা বা Wafid মেডিকেল ফিট সার্টিফিকেটের কার্যকর মেয়াদ রিপোর্ট প্রকাশের দিন থেকে ঠিক ৬০ দিন (২ মাস)।",
      "২. এই ৬০ দিনের মধ্যে অবশ্যই এম্বাসিতে ভিসা স্ট্যাম্পিংয়ের কাজ সম্পন্ন করতে হয়।",
      "৩. যদি ৬০ দিন পার হয়ে যায় এবং ভিসা স্ট্যাম্প না হয়, তবে পুনরায় সম্পূর্ণ নতুন করে মেডিকেল টেস্ট দিতে হবে।",
      "৪. তাই ভিসা প্রসেসিংয়ের প্রস্তুতি শতভাগ নিশ্চিত হওয়ার পরেই মেডিকেল স্লিপ কেটে টেস্ট দেওয়া বুদ্ধিমানের কাজ।",
      "৫. মেডিকেল রিপোর্টে মেয়াদ শেষের তারিখ (Expiry Date) স্পষ্ট অক্ষরে উল্লেখ থাকে।"
    ],
    "portalName": "Validity Period Guide",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেলের মেয়াদ কতদিন",
      "gamca validity period",
      "মেডিকেল মেয়াদ শেষ"
    ]
  },
  {
    "id": 167,
    "category": "gamca-medical",
    "qBn": "ওয়াকিদ (Wafid) পোর্টালে মেডিকেল স্লিপ জেনারেট করার নিয়ম কি?",
    "qEn": "How to generate medical slip on Wafid portal?",
    "ansLines": [
      "১. ব্রাউজারে wafid.com এ প্রবেশ করে 'Book an Appointment' বোতামে ক্লিক করুন।",
      "২. আপনার দেশ বাংলাদেশ, পছন্দের শহর (ঢাকা, চট্টগ্রাম বা সিলেট) এবং গন্তব্য দেশ সিলেক্ট করুন।",
      "৩. প্রার্থীর নাম, জন্মতারিখ, লিঙ্গ, বৈবাহিক অবস্থা ও পাসপোর্ট নম্বর নির্ভুলভাবে টাইপ করুন।",
      "৪. আন্তর্জাতিক ডেবিট/ক্রেডিট কার্ড বা অনলাইন গেটওয়ে দিয়ে নির্ধারিত স্লিপ ফি পরিশোধ করুন।",
      "৫. পেমেন্ট নিশ্চিত হলেই কম্পিউটারের স্ক্রিনে পিডিএফ মেডিকেল অ্যাপয়েন্টমেন্ট স্লিপ চলে আসবে।"
    ],
    "portalName": "Wafid Slip Procedure",
    "officialUrl": "https://wafid.com",
    "tags": [
      "ওয়াকিদ মেডিকেল স্লিপ",
      "wafid slip online",
      "মেডিকেল স্লিপ নিয়ম"
    ]
  },
  {
    "id": 168,
    "category": "gamca-medical",
    "qBn": "মেডিকেল সেন্টারের নাম ও ঠিকানা অনলাইনে কিভাবে যাচাই করবেন?",
    "qEn": "How to verify medical center name and address online?",
    "ansLines": [
      "১. Wafid স্লিপের ওপর যে মেডিকেল সেন্টারের নাম ও কোড আসবে, তা wafid.com এর অনুমোদিত তালিকায় মেলাতে পারেন।",
      "২. স্লিপে মেডিকেল সেন্টারের পূর্ণ ঠিকানা, ল্যান্ডমার্ক এবং অফিশিয়াল ফোন নম্বর দেওয়া থাকে।",
      "৩. সেন্টারে যাওয়ার আগে ফোনে যোগাযোগ করে প্রয়োজনীয় দিকনির্দেশনা (যেমন খালি পেটে যাওয়া) জেনে নিতে পারেন।",
      "৪. কোনো দালাল যদি অন্য কোনো ভুয়া সেন্টারে মেডিকেল করানোর পরামর্শ দেয়, তবে কখনোই তাতে যাবেন না।",
      "৫. স্লিপে কম্পিউটারাইজডভাবে লটারির মতো স্বয়ংক্রিয় যে সেন্টার বরাদ্দ হয়, সেখানেই যাওয়া বাধ্যতামূলক।"
    ],
    "portalName": "Accredited Center Registry",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল সেন্টার যাচাই",
      "accredited medical centers",
      "গামকা সেন্টার ঠিকানা"
    ]
  },
  {
    "id": 169,
    "category": "gamca-medical",
    "qBn": "ভুয়া মেডিকেল রিপোর্ট চেনার উপায় কি?",
    "qEn": "How to identify a fake medical report?",
    "ansLines": [
      "১. ভুয়া মেডিকেল রিপোর্টে কোনো কিউআর কোড থাকে না অথবা স্ক্যান করলে কোনো সরকারি ডাটাবেজে যায় না।",
      "২. আসল মেডিকেল রিপোর্ট যাচাই করতে সরাসরি wafid.com সাইটে গিয়ে পাসপোর্ট নম্বর লিখলে ডাটা আসবে।",
      "৩. যদি হাতে থাকা কাগজের রিপোর্টের সাথে অনলাইন ওয়াকিদ পোর্টালে তথ্যের গরমিল থাকে তবে কাগজটি জাল।",
      "৪. জালিয়াতি চক্র সাধারণত সাধারণ ডায়াগনস্টিক সেন্টারের প্যাড বা এডিটেড সিল ব্যবহার করে ভুয়া ফিট রিপোর্ট বানায়।",
      "৫. এম্বাসি কোনো কাগুজে রিপোর্ট গ্রহণ করে না, তারা সরাসরি Wafid ডিজিটাল সার্ভারের ফিট স্ট্যাটাস দেখেই ভিসা দেয়।"
    ],
    "portalName": "Fake Medical Detection",
    "officialUrl": "https://wafid.com",
    "tags": [
      "ভুয়া মেডিকেল রিপোর্ট",
      "fake medical report check",
      "জাল মেডিকেল সনদ"
    ]
  },
  {
    "id": 170,
    "category": "gamca-medical",
    "qBn": "মেডিকেল ফিট সার্টিফিকেট অনলাইনে কিভাবে ডাউনলোড করব?",
    "qEn": "How to download medical fit certificate online?",
    "ansLines": [
      "১. wafid.com এর 'View Medical Reports' অপশনে পাসপোর্ট নম্বর ও জাতীয়তা দিয়ে রেজাল্ট বের করুন।",
      "২. স্ক্রিনে আপনার ছবিসহ সম্পূর্ণ মেডিকেল রিপোর্ট প্রদর্শিত হলে নিচে 'Print / Download' অপশন আসবে।",
      "৩. ক্লিক করলেই সম্পূর্ণ পেজটি সিকিউরিটি বারকোড সম্বলিত একটি অফিশিয়াল পিডিএফ হিসেবে ডাউনলোড হবে।",
      "৪. এই ডিজিটাল ফাইলটি আপনি সংরক্ষণ করে রাখতে পারেন এবং যে কাউকে যাচাইয়ের জন্য পাঠাতে পারেন।",
      "৫. এটি প্রিন্ট করে এজেন্সিতে জমা দিলে তারা এম্বাসি ড্রপবক্সে পাসপোর্ট জমা করতে পারে।"
    ],
    "portalName": "Fit Certificate Download",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল সার্টিফিকেট ডাউনলোড",
      "download medical fit certificate",
      "ফিট কার্ড ডাউনলোড"
    ]
  },
  {
    "id": 171,
    "category": "gamca-medical",
    "qBn": "এক দেশের মেডিকেল রিপোর্ট দিয়ে কি অন্য দেশে যাওয়া যায়?",
    "qEn": "Can one country's medical report be used for another country?",
    "ansLines": [
      "১. সাধারণ নিয়মে Wafid স্লিপ কাটার সময় নির্দিষ্ট একটি গন্তব্য দেশ (যেমন: সৌদি আরব) নির্বাচন করতে হয়।",
      "২. ওই দেশের দূতাবাসের জন্যই কেবল সিস্টেম থেকে মেডিকেল সার্টিফিকেট লিংক করা থাকে।",
      "৩. তবে অন্য কোনো উপসাগরীয় দেশে যেতে চাইলে নির্ধারিত মেয়াদের মধ্যে নতুন করে এনডোর্সমেন্টের প্রয়োজন হতে পারে।",
      "৪. ইউরোপ বা মালয়েশিয়ার ক্ষেত্রে জিসিসির এই গামকা মেডিকেল কার্যকর হয় না, তাদের জন্য আলাদা মেডিকেল ব্যবস্থা রয়েছে।",
      "৫. যেকোনো নতুন দেশে আবেদনের আগে নিশ্চিত হয়ে নিন সংশ্লিষ্ট দেশ পূর্বের রিপোর্ট গ্রহণ করবে কিনা।"
    ],
    "portalName": "Cross-Country Policy",
    "officialUrl": "https://wafid.com",
    "tags": [
      "এক দেশের মেডিকেল দিয়ে অন্য দেশ",
      "cross country medical",
      "মেডিকেল পরিবর্তন"
    ]
  },
  {
    "id": 172,
    "category": "gamca-medical",
    "qBn": "মেডিকেল রিপোর্ট রিচেক বা আপিল করার নিয়ম কি?",
    "qEn": "What is the procedure to appeal an unfit medical report?",
    "ansLines": [
      "১. যদি কোনো প্রার্থী মনে করেন তার আনফিট রেজাল্ট ভুলবশত এসেছে, তবে তিনি গামকা কর্তৃপক্ষের কাছে রিচেক চাইতে পারেন।",
      "২. ঢাকার গামকা অফিসে গিয়ে লিখিত আবেদন এবং বিশেষায়িত সরকারি হাসপাতালের সুস্থতার সনদ জমা দিতে হয়।",
      "৩. কর্তৃপক্ষ আবেদন বিবেচনা করলে অন্য একটি অনুমোদিত সেন্টারে পুনঃপরীক্ষার (Re-test) নির্দেশ দিতে পারে।",
      "৪. দ্বিতীয় পরীক্ষার ফলাফল যদি 'FIT' আসে, তবে পূর্বের আনফিট স্ট্যাটাস পরিবর্তন করে সিস্টেম আপডেট করা হয়।",
      "৫. তবে জটিল বা সংক্রামক রোগের ক্ষেত্রে সাধারণত কোনো রিচেক বা আপিল গ্রহণ করা হয় না।"
    ],
    "portalName": "Medical Appeal Tribunal",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল রিচেক নিয়ম",
      "appeal unfit medical",
      "মেডিকেল আপিল"
    ]
  },
  {
    "id": 173,
    "category": "gamca-medical",
    "qBn": "গামকা মেডিকেলে রক্ত বা এক্স-রে সমস্যা দেখা দিলে করণীয় কি?",
    "qEn": "What to do if blood or X-ray issues appear in GAMCA?",
    "ansLines": [
      "১. রক্তে সুগার বা উচ্চ রক্তচাপের সমস্যা থাকলে অভিজ্ঞ ডাক্তারের পরামর্শে নিয়মিত ওষুধ খেয়ে তা দ্রুত নিয়ন্ত্রণে আনুন।",
      "২. ফুসফুসে সাধারণ ঠান্ডা বা কাশির দাগ থাকলে বক্ষব্যাধি বিশেষজ্ঞ দেখিয়ে অ্যান্টিবায়োটিক চিকিৎসা নিন।",
      "৩. কোনো অবস্থাতেই অসুস্থ বা ইনফেকশন থাকা অবস্থায় গামকা মেডিকেল সেন্টারে টেস্ট দিতে যাবেন না।",
      "৪. আগে থেকেই বিশ্বস্ত কোনো স্থানীয় ডায়াগনস্টিক সেন্টার থেকে প্রি-মেডিকেল টেস্ট করে নিজের শারীরিক সুস্থতা যাচাই করে নিন।",
      "৫. শরীর শতভাগ ফিট থাকলেই কেবল গামকা স্লিপ কেটে মূল পরীক্ষা দেওয়া বুদ্ধিমানের কাজ।"
    ],
    "portalName": "Preventive Medical Advisory",
    "officialUrl": "https://wafid.com",
    "tags": [
      "রক্ত বা এক্সরে সমস্যা",
      "x-ray issue in medical",
      "মেডিকেল প্রস্তুতি"
    ]
  },
  {
    "id": 174,
    "category": "gamca-medical",
    "qBn": "মেডিকেল স্লিপে ভুল পাসপোর্ট নাম্বার থাকলে কি সংশোধন করা যায়?",
    "qEn": "Can a wrong passport number on medical slip be corrected?",
    "ansLines": [
      "১. টেস্ট দেওয়ার আগে যদি স্লিপে পাসপোর্ট নম্বর ভুল ধরা পড়ে, তবে সাথে সাথে সেন্টারে গিয়ে জানাতে হবে।",
      "২. মূল পাসপোর্ট দেখিয়ে মেডিকেল সেন্টারের ডাটা এন্ট্রি অপারেটরকে দিয়ে সিস্টেমে কারেকশন করানো যায়।",
      "৩. কিন্তু একবার যদি ভুল নম্বরের ওপর ভিত্তি করে আনফিট বা ফিট রিপোর্ট সাবমিট হয়ে যায়, তবে সংশোধন অত্যন্ত জটিল।",
      "৪. এই ক্ষেত্রে Wafid সাপোর্টে ইমেইল করে পাসপোর্ট কপি সংযুক্ত করে আবেদন করতে হয়।",
      "৫. তাই স্লিপ কাটার সময় প্রতিটি সংখ্যা অত্যন্ত সতর্কভাবে দুইবার মিলিয়ে নেওয়া উচিত।"
    ],
    "portalName": "Passport Slip Correction",
    "officialUrl": "https://wafid.com",
    "tags": [
      "স্লিপে ভুল পাসপোর্ট",
      "medical slip correction",
      "মেডিকেল ভুল সংশোধন"
    ]
  },
  {
    "id": 175,
    "category": "gamca-medical",
    "qBn": "কোন কোন দেশে যাওয়ার জন্য গামকা মেডিকেল বাধ্যতামূলক?",
    "qEn": "Which countries require mandatory GAMCA medical?",
    "ansLines": [
      "১. উপসাগরীয় সহযোগিতা পরিষদভুক্ত (GCC) ৬টি দেশে কাজের ভিসার জন্য গামকা মেডিকেল বাধ্যতামূলক।",
      "২. এই দেশগুলো হলো: সৌদি আরব, ওমান, কাতার, কুয়েত, বাহরাইন এবং সংযুক্ত আরব আমিরাত (নির্দিষ্ট ভিসায়)।",
      "৩. এই দেশগুলোতে কর্মসংস্থান ভিসা পেতে Wafid অনুমোদিত ল্যাব ছাড়া অন্য কোনো সাধারণ রিপোর্ট গ্রহণ করা হয় না।",
      "৪. তবে মালয়েশিয়া, সিঙ্গাপুর বা ইউরোপের দেশগুলোর জন্য সংশ্লিষ্ট দেশের নিজস্ব অনুমোদিত মেডিকেল প্যানেল থাকে।",
      "৫. কাজের উদ্দেশ্যে এই ৬টি দেশে যেতে চাইলে শুরুতেই গামকা মেডিকেলের জন্য মানসিক প্রস্তুতি রাখতে হয়।"
    ],
    "portalName": "GCC Mandatory Country List",
    "officialUrl": "https://wafid.com",
    "tags": [
      "গামকা মেডিকেল বাধ্যতামূলক কোন দেশে",
      "gamca countries list",
      "জিসিসি দেশসমূহ"
    ]
  },
  {
    "id": 176,
    "category": "gamca-medical",
    "qBn": "মালয়েশিয়ার জন্য ফোমেমা (FOMEMA) মেডিকেল চেক কিভাবে করে?",
    "qEn": "How to check FOMEMA medical report for Malaysia?",
    "ansLines": [
      "১. মালয়েশিয়ায় প্রবেশের পর কর্মীদের বাধ্যতামূলকভাবে ফোমেমা (fomema.com.my) মেডিকেল সম্পন্ন করতে হয়।",
      "২. এছাড়া বাংলাদেশ থেকে যাওয়ার আগে FWCMS পোর্টালে অনুমোদিত সেন্টারের প্রি-মেডিকেল টেস্ট হয়।",
      "৩. পাসপোর্ট নম্বর ও ফোমেমা এমপ্লয়ার কোড দিয়ে fomema.com.my তে রেজাল্ট দেখা যায়।",
      "৪. স্ট্যাটাসে 'SUITABLE' আসলে কর্মী কাজের ওয়ার্ক পারমিটের (PLKS) যোগ্য বলে গণ্য হন।",
      "৫. যদি রিপোর্ট 'UNSUITABLE' আসে, তবে কর্মীকে বাধ্যতামূলকভাবে নিজ দেশে ফেরত পাঠানো হয়।"
    ],
    "portalName": "FOMEMA Malaysia Medical",
    "officialUrl": "https://www.fomema.com.my",
    "tags": [
      "মালয়েশিয়া ফোমেমা মেডিকেল",
      "fomema check online",
      "মালয়েশিয়া মেডিকেল রেজাল্ট"
    ]
  },
  {
    "id": 177,
    "category": "gamca-medical",
    "qBn": "কাতার কিউভিসি মেডিকেল রিপোর্ট চেক করার নিয়ম কি?",
    "qEn": "How to check Qatar QVC medical report?",
    "ansLines": [
      "১. কাতার ভিসা সেন্টারের মেডিকেল ট্র্যাকিং পোর্টাল: qatarvisacenter.com এ প্রবেশ করুন।",
      "২. সেখানে আপনার পাসপোর্ট নম্বর ও কাতার ভিসা অ্যাপ্লিকেশন নম্বর দিয়ে লগইন করুন।",
      "৩. 'Medical Examination' ট্যাবে আপনার টেস্টের অগ্রগতি ও চূড়ান্ত ফলাফল দেখতে পাবেন।",
      "৪. কিউভিসির মেডিকেল সরাসরি কাতার সরকারের জনস্বাস্থ্য মন্ত্রণালয়ের (MOPH) সাথে সিঙ্ক থাকে।",
      "৫. মেডিকেল ফিট হলে পরবর্তী ধাপে ভিসা স্ট্যাম্পিংয়ের এসএমএস মোবাইলে চলে আসবে।"
    ],
    "portalName": "QVC Medical Services",
    "officialUrl": "https://www.qatarvisacenter.com",
    "tags": [
      "কাতার কিউভিসি মেডিকেল",
      "qvc medical check",
      "কাতার মেডিকেল ট্র্যাকিং"
    ]
  },
  {
    "id": 178,
    "category": "gamca-medical",
    "qBn": "ইউরোপের ভিসা পাওয়ার জন্য কি গামকা মেডিকেল লাগে?",
    "qEn": "Is GAMCA medical required for European visas?",
    "ansLines": [
      "১. না, ইউরোপ বা সেনজেনভুক্ত কোনো দেশে (যেমন ইতালি, রোমানিয়া, পর্তুগাল) গামকা মেডিকেল লাগে না।",
      "২. ইউরোপীয় দেশগুলোর ক্ষেত্রে সাধারণ সিভিল সার্জন বা তাদের নির্ধারিত নির্দিষ্ট প্যানেল ডক্টরের ফিটনেস সনদ দরকার হয়।",
      "৩. প্রধানত সংক্রামক রোগ ও যক্ষ্মামুক্ত কিনা তা নিশ্চিত করতে সাধারণ ব্লাড ও চেস্ট এক্স-রে চাওয়া হয়।",
      "৪. কিছু ইউরোপীয় দেশের জন্য কোনো পূর্ব-মেডিকেল লাগে না, সে দেশে পৌঁছানোর পর লোকাল হেলথ ইন্সুরেন্স করলেই চলে।",
      "৫. তাই ইউরোপের ভিসার জন্য অযথা কোনো দালালকে গামকা মেডিকেলের নামে অতিরিক্ত ফি দেবেন না।"
    ],
    "portalName": "European Medical Guidelines",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "ইউরোপে গামকা মেডিকেল",
      "europe visa medical",
      "ইতালি মেডিকেল লাগে কি"
    ]
  },
  {
    "id": 179,
    "category": "gamca-medical",
    "qBn": "মেডিকেল সেন্টারে যাওয়ার আগে কি কি প্রস্তুতি নেওয়া দরকার?",
    "qEn": "What preparations to take before visiting medical center?",
    "ansLines": [
      "১. টেস্টের দিন সকালে পর্যাপ্ত পানি পান করুন এবং তৈলাক্ত বা অতিরিক্ত মিষ্টি খাবার পরিহার করুন।",
      "২. কমপক্ষে ৮-১০ ঘণ্টা পর্যাপ্ত ঘুম নিশ্চিত করুন যাতে রক্তচাপ স্বাভাবিক থাকে।",
      "৩. সাথে মূল পাসপোর্ট, ৪ কপি ল্যাব সাইজের রঙিন ছবি এবং প্রিন্ট করা Wafid স্লিপ অবশ্যই সাথে নিন।",
      "৪. ধূমপান বা তামাক সেবন কয়েকদিন বন্ধ রাখুন যাতে ফুসফুস ও রক্তে কোনো অস্বাভাবিক উপাদান না থাকে।",
      "৫. চশমা ব্যবহার করলে অবশ্যই সাথে চশমা নিয়ে যান যাতে আই টেস্টে কোনো সমস্যা না হয়।"
    ],
    "portalName": "Medical Exam Preparation",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল সেন্টারে প্রস্তুতি",
      "preparation before medical",
      "মেডিকেল টিপস"
    ]
  },
  {
    "id": 180,
    "category": "gamca-medical",
    "qBn": "মেডিকেল স্ট্যাটাস 'UNDER PROCESS' দেখালে কতদিন অপেক্ষা করবেন?",
    "qEn": "How long to wait if medical status shows UNDER PROCESS?",
    "ansLines": [
      "১. 'Under Process' দেখালে বুঝতে হবে রক্তের কালচার বা কোনো টেস্টের নমুনা রি-টেস্ট করা হচ্ছে।",
      "২. এই ক্ষেত্রে সাধারণত আরও ২৪ থেকে ৪৮ ঘণ্টা সময় লাগতে পারে চূড়ান্ত রিপোর্ট আপডেট হতে।",
      "৩. অনেক সময় ব্লাড সুগার বা ইসিজি রিপোর্টের বিশেষজ্ঞ পর্যালোচনার কারণে সাময়িক বিলম্ব ঘটে।",
      "৪. তিন দিনের বেশি আন্ডার প্রসেস থাকলে সেন্টারে যোগাযোগ করে নতুন কোনো পরীক্ষা দেওয়া লাগবে কিনা জেনে নিন।",
      "৫. উদ্বিগ্ন না হয়ে পোর্টালটি দিনে ১-২ বার চেক করে সর্বশেষ স্ট্যাটাস পরিবর্তন খেয়াল করুন।"
    ],
    "portalName": "Under Process Tracking",
    "officialUrl": "https://wafid.com",
    "tags": [
      "মেডিকেল আন্ডার প্রসেস",
      "medical under process",
      "মেডিকেল লোডিং"
    ]
  },
  {
    "id": 181,
    "category": "global-visas",
    "qBn": "ভারত ভিসা স্ট্যাটাস চেক (IVAC) কিভাবে করব?",
    "qEn": "How to check Indian visa status (IVAC)?",
    "ansLines": [
      "১. ভারতীয় ভিসা অ্যাপ্লিকেশনের স্ট্যাটাস চেক করতে অফিসিয়াল পোর্টাল হলো: indianvisaonline.gov.in।",
      "২. অথবা বাংলাদেশে আইভ্যাকের সাইট (ivacbd.com) এ গিয়ে 'ভিসা ট্র্যাক' অপশনে ক্লিক করুন।",
      "৩. আপনার ওয়েব ফাইল নম্বর (Web File Number যেমন BGDD...) এবং পাসপোর্ট নম্বর ইনপুট দিন।",
      "৪. ক্যাপচা কোডটি দিয়ে সার্চ বাটনে ক্লিক করলে পাসপোর্টের বর্তমান অবস্থান ও স্ট্যাটাস দেখা যাবে।",
      "৫. স্ট্যাটাস যদি 'Passport ready for delivery' দেখায়, তবে আইভ্যাক সেন্টার থেকে পাসপোর্ট সংগ্রহ করতে পারবেন।"
    ],
    "portalName": "IVAC Bangladesh Official",
    "officialUrl": "https://www.ivacbd.com",
    "tags": [
      "ভারত ভিসা চেক",
      "ivac visa check",
      "indian visa status"
    ]
  },
  {
    "id": 182,
    "category": "global-visas",
    "qBn": "ইতালি স্পন্সর ভিসা (Nulla Osta) আসল কিনা কিভাবে বুঝব?",
    "qEn": "How to verify if Italy Nulla Osta sponsor visa is real?",
    "ansLines": [
      "১. ইতালির কাজের ভিসার পূর্বশর্ত হলো প্রিফেত্তুরা (Prefettura) কর্তৃক ইস্যুকৃত নুল্লা ওস্তা অনুমোদনপত্র।",
      "২. নুল্লা ওস্তার ওপরের কোডটি ইতালীয় স্বরাষ্ট্র মন্ত্রণালয়ের স্পোর্টেলো ইউনিকো (Sportello Unico) পোর্টালে যাচাই করা যায়।",
      "৩. আসল নুল্লা ওস্তায় কোম্পানির ভ্যাট কোড (Partita IVA), চুক্তির শর্ত ও শ্রমিকের নাম নির্ভুল থাকে।",
      "৪. জালিয়াতি চক্র সাধারণত মেয়াদোত্তীর্ণ বা অন্য ব্যক্তির নুল্লা ওস্তায় নাম পরিবর্তন করে ভুয়া পেপার দেয়।",
      "৫. নুল্লা ওস্তা সরকারি ডাটাবেজে সঠিক থাকলে ঢাকায় ইতালি দূতাবাস (VFS) এ ভিসা আবেদনের অ্যাপয়েন্টমেন্ট নেওয়া যায়।"
    ],
    "portalName": "Italy Sportello Unico Portal",
    "officialUrl": "https://nullaostalavoro.dlci.interno.it",
    "tags": [
      "ইতালি নুল্লা ওস্তা",
      "italy nulla osta check",
      "ইতালি ভিসা আসল নকল"
    ]
  },
  {
    "id": 183,
    "category": "global-visas",
    "qBn": "ভিএফএস গ্লোবাল (VFS Global) পাসপোর্ট ট্র্যাকিং কিভাবে করে?",
    "qEn": "How to track passport on VFS Global?",
    "ansLines": [
      "১. vfsglobal.com এ প্রবেশ করে আপনার আবেদনকৃত দেশ ও বাংলাদেশ সিলেক্ট করুন।",
      "২. 'Track your application' লিংকে ক্লিক করে রেফারেন্স নম্বর (রিসিপ্টে লেখা কোড) দিন।",
      "৩. পাসপোর্টে উল্লেখিত সঠিক শেষ নাম (Last Name) এবং নিরাপত্তা কোড পূরণ করে সাবমিট করুন।",
      "৪. পাসপোর্ট দূতাবাসে প্রক্রিয়াধীন আছে নাকি ভিসা সেন্টারে ফেরত এসেছে তা সরাসরি দেখা যাবে।",
      "৫. কুরিয়ার ডেলিভারি সিলেক্ট করে থাকলে কুরিয়ার ট্র্যাকিং কোড দিয়েও পার্সেলের অবস্থান জানা যায়।"
    ],
    "portalName": "VFS Global Tracking",
    "officialUrl": "https://www.vfsglobal.com",
    "tags": [
      "ভিএফএস গ্লোবাল ট্র্যাকিং",
      "vfs global passport tracking",
      "ভিএফএস পাসপোর্ট চেক"
    ]
  },
  {
    "id": 184,
    "category": "global-visas",
    "qBn": "সিঙ্গাপুর আইপিএ (IPA) ভিসা চেক কিভাবে করে?",
    "qEn": "How to check Singapore IPA visa?",
    "ansLines": [
      "১. সিঙ্গাপুরের ইন-প্রিন্সিপাল অ্যাপ্রুভাল (IPA) হলো ওয়ার্ক পারমিটের অফিশিয়াল প্রাথমিক ভিসা ছাড়পত্র।",
      "২. সিঙ্গাপুর মানবসম্পদ মন্ত্রণালয় (MOM) এর পোর্টাল: mom.gov.sg/eservices এ যান।",
      "৩. 'Work Permit Online (WPOL)' অপশনে গিয়ে প্রার্থীর নাম, পাসপোর্ট নম্বর ও জন্মতারিখ দিন।",
      "৪. অনুমোদিত থাকলে IPA পেপারের বৈধতা ও নিয়োগকারী কোম্পানির বিস্তারিত প্রোফাইল চলে আসবে।",
      "৫. এই IPA পেপার সাথে নিয়েই সিঙ্গাপুরের উদ্দেশ্যে ফ্লাইটে উঠতে হয় এবং এয়ারপোর্টে ওয়ার্ক পাস প্রদান করা হয়।"
    ],
    "portalName": "Singapore Ministry of Manpower (MOM)",
    "officialUrl": "https://www.mom.gov.sg",
    "tags": [
      "সিঙ্গাপুর আইপিএ ভিসা",
      "singapore ipa check",
      "singapore mom work permit"
    ]
  },
  {
    "id": 185,
    "category": "global-visas",
    "qBn": "ইউকে স্টুডেন্ট ভিসা ট্র্যাকিং কিভাবে করব?",
    "qEn": "How to track UK student visa application?",
    "ansLines": [
      "১. যুক্তরাজ্যের ভিসা আবেদনের পর ইউকেভিআই (UKVI) অ্যাকাউন্ট অথবা VFS Global পোর্টালে লগইন করতে হয়।",
      "২. বায়োমেট্রিক জমা দেওয়ার সময় প্রাপ্ত GWF রেফারেন্স নম্বর দিয়ে ট্র্যাকিং শুরু করুন।",
      "৩. ভিসার অগ্রগতি ধাপসমূহ (Application Received, Under Consideration, Decided) দেখতে পাবেন।",
      "৪. সিদ্ধান্ত গৃহীত হলে আপনার রেজিস্টার্ড ইমেইলে 'Decision Made' সংক্রান্ত অফিসিয়াল ইমেইল পাঠানো হয়।",
      "৫. পাসপোর্ট সংগ্রহের জন্য প্রস্তুত হলে ভিএফএস থেকে ইমেইল বা এসএমএস নোটিফিকেশন আসবে।"
    ],
    "portalName": "UK Visas and Immigration (UKVI)",
    "officialUrl": "https://www.gov.uk/check-uk-visa",
    "tags": [
      "ইউকে স্টুডেন্ট ভিসা",
      "uk student visa tracking",
      "ukvi visa status"
    ]
  },
  {
    "id": 186,
    "category": "global-visas",
    "qBn": "ইউএসএ ভিসা স্ট্যাটাস (CEAC) চেক করার নিয়ম কি?",
    "qEn": "How to check USA visa status on CEAC?",
    "ansLines": [
      "১. আমেরিকার নন-ইমিগ্রান্ট ও ইমিগ্রান্ট ভিসা চেক করার সরকারি ওয়েবসাইট হলো: ceac.state.gov।",
      "২. 'Check My Visa Application Status' এ গিয়ে ভিসার ধরন (Nonimmigrant / Immigrant) নির্বাচন করুন।",
      "৩. লোকেশন হিসেবে 'DHAKA, BANGLADESH' সিলেক্ট করে DS-160 বারকোড নম্বর অথবা কেস নম্বর দিন।",
      "৪. পাসপোর্ট নম্বর ও ক্যাপচা প্রদান করে সাবমিট করলে বর্তমান অবস্থা প্রদর্শিত হবে।",
      "৫. স্ট্যাটাসে 'Approved' বা 'Issued' দেখলে বুঝতে হবে আপনার ভিসা সফলভাবে ইস্যু হয়ে গেছে।"
    ],
    "portalName": "US Department of State CEAC",
    "officialUrl": "https://ceac.state.gov",
    "tags": [
      "আমেরিকা ভিসা চেক",
      "usa visa check ceac",
      "ceac visa status"
    ]
  },
  {
    "id": 187,
    "category": "global-visas",
    "qBn": "কানাডা ভিসা অ্যাপ্লিকেশন স্ট্যাটাস কিভাবে চেক করে?",
    "qEn": "How to check Canada visa application status?",
    "ansLines": [
      "১. কানাডার ভিসা ট্র্যাক করতে ইমিগ্রেশন, রিফিউজিস অ্যান্ড সিটিজেনশিপ কানাডা (IRCC) পোর্টালে যান।",
      "২. সরকারি সাইট canada.ca তে আপনার GCKey ইউজার আইডি ও পাসওয়ার্ড দিয়ে একাউন্টে লগইন করুন।",
      "৩. 'Check Application Status' এ গিয়ে আবেদন নম্বর (UCI বা Application No) দিয়ে সার্চ দিন।",
      "৪. বায়োমেট্রিক, মেডিকেল ক্লিয়ারেন্স এবং ব্যাকগ্রাউন্ড ভেরিফিকেশনের পূর্ণ অগ্রগতি লাইভ দেখা যাবে।",
      "৫. ভিসা অনুমোদিত হলে মূল পাসপোর্ট জমা দেওয়ার জন্য অফিশিয়াল 'Passport Request (PPR)' লেটার পাবেন।"
    ],
    "portalName": "IRCC Canada Portal",
    "officialUrl": "https://www.canada.ca",
    "tags": [
      "কানাডা ভিসা চেক",
      "canada visa tracking",
      "ircc application status"
    ]
  },
  {
    "id": 188,
    "category": "global-visas",
    "qBn": "সেনজেন ভিসা রিজেকশন লেটার কিভাবে চেক করব?",
    "qEn": "How to understand Schengen visa refusal letter?",
    "ansLines": [
      "১. ইউরোপের সেনজেন ভিসা প্রত্যাখ্যান হলে দূতাবাস কারণ উল্লেখ করে একটি অফিসিয়াল রিজেকশন লেটার দেয়।",
      "২. লেটারে সাধারণ কারণগুলো নম্বর হিসেবে চিহ্নিত থাকে (যেমন 1, 2, 3...)।",
      "৩. সর্বাধিক পরিচিত কারণ হলো পর্যাপ্ত আর্থিক সামর্থ্যের প্রমাণ না থাকা বা দেশে ফিরে আসার নির্ভরযোগ্য বন্ধন না দেখানো।",
      "৪. রিজেকশন লেটারে নির্দিষ্ট সময়সীমার (সাধারণত ৩০ দিন) মধ্যে আপিল করার আইনি অধিকার উল্লেখ থাকে।",
      "৫. পুনরায় আবেদনের পূর্বে লেটারের কারণগুলো পুঙ্খানুপুঙ্খ দূর করে নতুন ফাইল তৈরি করা বাঞ্ছনীয়।"
    ],
    "portalName": "Schengen Visa Advisory",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "সেনজেন ভিসা রিজেক্ট",
      "schengen visa refusal",
      "ইউরোপ ভিসা রিজেকশন"
    ]
  },
  {
    "id": 189,
    "category": "global-visas",
    "qBn": "জাপানের ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check Japan visa status?",
    "ansLines": [
      "১. জাপানের ভিসার আবেদন ঢাকায় জাপান দূতাবাসে বা নির্ধারিত ড্রপবক্সে জমা দিতে হয়।",
      "২. আবেদন জমা দেওয়ার পর প্রদত্ত রিসিট নম্বর দিয়ে VFS বা দূতাবাসের হেল্পলাইনে অগ্রগতি জানা যায়।",
      "৩. কাজের ভিসা বা স্টুডেন্ট ভিসার ক্ষেত্রে জাপান সরকারের সার্টিফিকেট অফ এলিজিবিলিটি (COE) বাধ্যতামূলক।",
      "৪. COE নম্বর সঠিক থাকলে ভিসা স্ট্যাম্পিংয়ের সম্ভাবনা ৯৯% নিশ্চিত থাকে।",
      "৫. পাসপোর্ট ডেলিভারির জন্য প্রস্তুত হলে ফোনে মেসেজ অথবা অনলাইনে স্ট্যাটাস আপডেট দেখা যায়।"
    ],
    "portalName": "Embassy of Japan in Bangladesh",
    "officialUrl": "https://www.bd.emb-japan.go.jp",
    "tags": [
      "জাপান ভিসা চেক",
      "japan visa status",
      "জাপান সিওই"
    ]
  },
  {
    "id": 190,
    "category": "global-visas",
    "qBn": "দক্ষিণ কোরিয়া ই-৯ (E-9) ভিসা চেক কিভাবে করে?",
    "qEn": "How to check South Korea E-9 visa?",
    "ansLines": [
      "১. ইপিএস (EPS) প্রক্রিয়ায় দক্ষিণ কোরিয়ার কর্মীদের ভিসা কোরিয়ান ইমিগ্রেশন পোর্টাল: visa.go.kr তে দেখা যায়।",
      "২. 'Check Application Status' এ গিয়ে পাসপোর্ট নম্বর, জন্মতারিখ ও আবেদনকারীর নাম ইংরেজি ক্যাপিটালে দিন।",
      "৩. অনুমোদন হলে কোরিয়ান শ্রম মন্ত্রণালয়ের লেবার কন্ট্রাক্ট এবং ভিসা কনফার্মেশন কোড আসবে।",
      "৪. বাংলাদেশে বোয়েসেল (BOESL) এর নোটিশ বোর্ডেও সফল কর্মীদের তালিকা ধারাবাহিকভাবে প্রকাশ করা হয়।",
      "৫. কোরিয়া ভিসা পোর্টালে 'Approved' হওয়ার পরই চূড়ান্ত টিকিট ও ফ্লাইটের শিডিউল নির্ধারিত হয়।"
    ],
    "portalName": "Korea Visa Portal",
    "officialUrl": "https://www.visa.go.kr",
    "tags": [
      "দক্ষিণ কোরিয়া ই৯ ভিসা",
      "korea e9 visa check",
      "ইপিএস কোরিয়া ভিসা"
    ]
  },
  {
    "id": 191,
    "category": "global-visas",
    "qBn": "রোমানিয়া কাজের ভিসা চেক করার লিংক কোনটি?",
    "qEn": "Which is the link to check Romania work visa?",
    "ansLines": [
      "১. রোমানিয়ার কাজের ভিসার অফিশিয়াল আবেদন ও ট্র্যাকিং পোর্টাল হলো: evisa.mae.ro।",
      "২. রোমানিয়া ইমিগ্রেশন থেকে ইস্যুকৃত এভিজ দে মুঙ্কা (Aviz de Munca) বা ওয়ার্ক পারমিটের কপি অনলাইনে যাচাই করা যায়।",
      "৩. ই-ভিসা পোর্টালে আপনার ফাইল নম্বর ও পাসওয়ার্ড দিয়ে লগইন করে দূতাবাস প্রক্রিয়ার ধাপ দেখা যায়।",
      "৪. স্ট্যাটাসে যখন 'Visa Valid' বা এপ্রুভ দেখাবে, তখন কনস্যুলার সেকশন থেকে পাসপোর্ট সংগ্রহ করতে হয়।",
      "৫. রোমানিয়া বর্তমানে সেনজেনভুক্ত হওয়ায় এর কাজের ভিসার আন্তর্জাতিক গ্রহণযোগ্যতা অত্যন্ত বৃদ্ধি পেয়েছে।"
    ],
    "portalName": "Romania Ministry of Foreign Affairs",
    "officialUrl": "https://evisa.mae.ro",
    "tags": [
      "রোমানিয়া কাজের ভিসা",
      "romania work visa check",
      "রোমানিয়া ইভিসা"
    ]
  },
  {
    "id": 192,
    "category": "global-visas",
    "qBn": "অস্ট্রেলিয়া ভিসা ভিভো (VEVO) চেক করার নিয়ম কি?",
    "qEn": "How to check Australian visa on VEVO?",
    "ansLines": [
      "১. অস্ট্রেলিয়ার সব ধরনের ভিসা যাচাইয়ের একমাত্র সরকারি সিস্টেম হলো VEVO (immi.homeaffairs.gov.au)।",
      "২. VEVO সাইটে গিয়ে 'Visa Grant Number' অথবা 'Transaction Reference Number (TRN)' সিলেক্ট করুন।",
      "৩. পাসপোর্ট নম্বর, জন্মতারিখ এবং জাতীয়তা বাংলাদেশ সিলেক্ট করে এগ্রি বাটনে চাপ দিন।",
      "৪. মুহূর্তের মধ্যে ভিসার নাম, সাবক্লাস, কাজের অনুমতি এবং মেয়াদের বিস্তারিত ডিজিটাল কপি চলে আসবে।",
      "৫. এই VEVO কপিটি ডাউনলোড করে আপনি অস্ট্রেলিয়ায় যেকোনো চাকরি বা স্টাডিতে বৈধতার প্রমাণ হিসেবে ব্যবহার করতে পারেন।"
    ],
    "portalName": "Australia VEVO System",
    "officialUrl": "https://immi.homeaffairs.gov.au",
    "tags": [
      "অস্ট্রেলিয়া ভিভো চেক",
      "australia vevo check",
      "অস্ট্রেলিয়ান ভিসা"
    ]
  },
  {
    "id": 193,
    "category": "global-visas",
    "qBn": "তুরস্ক ই-ভিসা ভ্যালিডিটি কিভাবে চেক করব?",
    "qEn": "How to check Turkey eVisa validity?",
    "ansLines": [
      "১. তুরস্কের ই-ভিসা চেক করার অফিশিয়াল পোর্টাল হলো: evisa.gov.tr।",
      "২. 'Check Status' ট্যাবে গিয়ে আপনার রেফারেন্স নম্বর ও পাসপোর্ট নম্বর ইনপুট দিন।",
      "৩. আবেদনটি ভেরিফাইড হলে তাৎক্ষণিকভাবে ই-ভিসার মূল পিডিএফ কপিটি ডাউনলোড করতে পারবেন।",
      "৪. বাংলাদেশি নাগরিকদের জন্য তুরস্কে ই-ভিসা পেতে সাধারণত বৈধ সেনজেন, ইউএসএ বা ইউকে ভিসা প্রয়োজন হয়।",
      "৫. তুরস্ক ভ্রমণের সময় এই ই-ভিসার রঙিন প্রিন্ট কপি ও সহায়ক ভিসা সাথে রাখা বাধ্যতামূলক।"
    ],
    "portalName": "Republic of Turkey eVisa",
    "officialUrl": "https://www.evisa.gov.tr",
    "tags": [
      "তুরস্ক ই-ভিসা চেক",
      "turkey evisa check",
      "টার্কি ভিসা স্ট্যাটাস"
    ]
  },
  {
    "id": 194,
    "category": "global-visas",
    "qBn": "থাইল্যান্ড ই-ভিসা ট্র্যাকিং কিভাবে করব?",
    "qEn": "How to track Thailand eVisa online?",
    "ansLines": [
      "১. থাই সরকারের অফিসিয়াল ভিসা ওয়েবসাইট হলো: thaievisa.go.th।",
      "২. পোর্টালে আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করে 'Track Status' সেকশনে যান।",
      "৩. আবেদনের অগ্রগতি ও রয়্যাল থাই এম্বাসির কনস্যুলার পর্যালোচনার অবস্থা দেখা যাবে।",
      "৪. ভিসা ইস্যু হলে সরাসরি সিস্টেম থেকে থাই ই-ভিসার অফিশিয়াল পেপার ডাউনলোড করা যায়।",
      "৫. থাইল্যান্ড ভ্রমণের জন্য কোনো পাসপোর্টে স্টিকার লাগে না, এই পেপারটিই সম্পূর্ণ বৈধ ভিসা হিসেবে কাজ করে।"
    ],
    "portalName": "Official Thai eVisa Gateway",
    "officialUrl": "https://www.thaievisa.go.th",
    "tags": [
      "থাইল্যান্ড ভিসা চেক",
      "thailand evisa check",
      "থাই ভিসা স্ট্যাটাস"
    ]
  },
  {
    "id": 195,
    "category": "global-visas",
    "qBn": "সিঙ্গাপুর কাজের পারমিট কার্ডের মেয়াদ চেক করার নিয়ম কি?",
    "qEn": "How to check Singapore work permit validity online?",
    "ansLines": [
      "১. সিঙ্গাপুরে থাকা কর্মীদের ওয়ার্ক পারমিটের মেয়াদ MOM এর SGWorkPass মোবাইল অ্যাপ দিয়ে সরাসরি স্ক্যান করা যায়।",
      "২. পারমিট কার্ডের পেছনের কিউআর কোড স্ক্যান করলে সাথে সাথে বৈধতা ও মেয়াদের তারিখ ভেসে ওঠে।",
      "৩. এছাড়াও MOM ওয়েবসাইটে FIN নম্বর ও প্রার্থীর নাম দিয়ে পাস স্ট্যাটাস যাচাই করা যায়।",
      "৪. কার্ডের মেয়াদ শেষ হওয়ার পূর্বে কোম্পানি লেভি ফি পরিশোধ করে রিনিউ সম্পন্ন করেছে কিনা তা জানা যায়।",
      "৫. বৈধ পারমিট ছাড়া সিঙ্গাপুরে অবস্থান সম্পূর্ণ বেআইনি, তাই নিয়মিত এই স্ট্যাটাস চেক করে নেওয়া ভালো।"
    ],
    "portalName": "SGWorkPass Verification",
    "officialUrl": "https://www.mom.gov.sg",
    "tags": [
      "সিঙ্গাপুর পারমিটের মেয়াদ",
      "singapore work permit validity",
      "এসজি ওয়ার্ক পাস"
    ]
  },
  {
    "id": 196,
    "category": "global-visas",
    "qBn": "পর্তুগাল কাজের ভিসা স্ট্যাটাস কিভাবে চেক করে?",
    "qEn": "How to check Portugal work visa status?",
    "ansLines": [
      "১. পর্তুগালের কাজের ভিসার আবেদন সাধারণত VFS Global অথবা পর্তুগিজ দূতাবাস পোর্টালে ট্র্যাক করা যায়।",
      "২. পর্তুগাল এআইএমএ (AIMA) থেকে কাজের চুক্তিপত্র ও সোশ্যাল সিকিউরিটি রেজিস্ট্রেশন যাচাই করা হয়।",
      "৩. ভিসার অগ্রগতি 'In Analysis' থেকে 'Concluded' হলে পাসপোর্ট সংগ্রহের নোটিশ আসে।",
      "৪. সেনজেন এন্ট্রি ভিসা নিয়ে পর্তুগালে প্রবেশ করে পরবর্তীতে রেসিডেন্স কার্ডের আবেদন করতে হয়।",
      "৫. ভিসা অনুমোদন হলে ইউরোপের অবাধ চলাচলের সুবিধার প্রথম ধাপ সম্পন্ন হয়।"
    ],
    "portalName": "Portugal AIMA Portal",
    "officialUrl": "https://aima.gov.pt",
    "tags": [
      "পর্তুগাল কাজের ভিসা",
      "portugal work visa check",
      "আইমা পর্তুগাল"
    ]
  },
  {
    "id": 197,
    "category": "global-visas",
    "qBn": "পোল্যান্ড ওয়ার্ক পারমিট আসল কিনা কিভাবে যাচাই করবেন?",
    "qEn": "How to verify if Poland work permit is genuine?",
    "ansLines": [
      "১. পোল্যান্ডের ওয়ার্ক পারমিটকে 'Zezwolenie na pracę' বলা হয়, যা স্থানীয় ভোইভোদা (Voivodeship) অফিস ইস্যু করে।",
      "২. পারমিট পেপারে একটি নির্দিষ্ট সরকারি রেজিস্ট্রি নম্বর ও অফিসিয়াল স্ট্যাম্প সিল থাকে।",
      "৩. পোল্যান্ড দূতাবাসের ইমেইলে স্ক্যান কপি পাঠিয়ে বা সরাসরি ইস্যুকারী সরকারি দপ্তরে ইমেইল করে সত্যতা নিশ্চিত করা যায়।",
      "৪. অনেক প্রতারক জাল ওয়ার্ক পারমিট দিয়ে লাখ লাখ টাকা দাবি করে, তাই দূতাবাসের ক্লিয়ারেন্স ছাড়া অর্থ দেবেন না।",
      "৫. আসল পারমিট পেলেই কেবল ঢাকার ভিএফএস বা দূতাবাসে জাতীয় ডি-টাইপ ভিসার আবেদন করা যায়।"
    ],
    "portalName": "Poland Voivodeship Registry",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পোল্যান্ড ওয়ার্ক পারমিট",
      "poland work permit check",
      "পোল্যান্ড ভিসা আসল"
    ]
  },
  {
    "id": 198,
    "category": "global-visas",
    "qBn": "রাশিয়ার কাজের ভিসা চেক করার নিয়ম কি?",
    "qEn": "How to check Russia work visa status?",
    "ansLines": [
      "১. রাশিয়ার কাজের ভিসার জন্য মস্কোর স্বরাষ্ট্র মন্ত্রণালয় (MVD) থেকে অফিশিয়াল ইনভাইটেশন লেটার লাগে।",
      "২. রাশিয়ান পররাষ্ট্র মন্ত্রণালয়ের ভিসা সাইটে ইনভাইটেশন নম্বর ও পাসপোর্ট দিয়ে সত্যতা মিলিয়ে নেওয়া যায়।",
      "৩. ইনভাইটেশন আসল হলে ঢাকায় রাশিয়ান দূতাবাস বা ভিসা সেন্টারে পাসপোর্ট জমা দিয়ে স্টিকার নেওয়া হয়।",
      "৪. ভিসা স্টিকার পাসপোর্টে লাগানোর পর কিউআর কোড দিয়ে রাশিয়ান বর্ডার সার্ভিসে ডাটা ম্যাচ করা যায়।",
      "৫. ভুয়া এজেন্সির ফাঁদে না পড়ে রাশিয়ান সরকারের অফিশিয়াল আমন্ত্রণপত্র নিশ্চিত হয়ে তবেই এগিয়ে যান।"
    ],
    "portalName": "Russia Ministry of Internal Affairs",
    "officialUrl": "https://visa.kdmid.ru",
    "tags": [
      "রাশিয়া কাজের ভিসা",
      "russia work visa check",
      "রাশিয়ান ভিসা ইনভাইটেশন"
    ]
  },
  {
    "id": 199,
    "category": "global-visas",
    "qBn": "সার্বিয়া ও মাল্টা কাজের ভিসা ট্র্যাকিং কিভাবে করবেন?",
    "qEn": "How to track Serbia and Malta work visas?",
    "ansLines": [
      "১. মাল্টার জন্য আইডেন্টিটি মাল্টা (Identita) পোর্টাল থেকে সিঙ্গেল পারমিট স্ট্যাটাস ট্র্যাক করতে হয়।",
      "২. সার্বিয়ার ক্ষেত্রে ন্যাশনাল এমপ্লয়মেন্ট সার্ভিস এবং পররাষ্ট্র মন্ত্রণালয়ের পোর্টালে পারমিট নম্বর চেক করা যায়।",
      "৩. অনুমোদন এলে উভয় দেশ থেকেই একটি প্রিন্টযোগ্য প্রি-এপ্রুভাল অথরাইজেশন লেটার ইস্যু করা হয়।",
      "৪. এই অথরাইজেশন লেটার নিয়ে এম্বাসিতে গিয়ে ফাইনাল এন্ট্রি ভিসা স্ট্যাম্পিং করাতে হয়।",
      "৫. অনলাইনের অফিসিয়াল রেকর্ড ছাড়া কোনো মধ্যস্বত্বভোগীর মুখের কথায় ইউরোপের ভিসার অর্থ পরিশোধ করবেন না।"
    ],
    "portalName": "Malta & Serbia Official Portals",
    "officialUrl": "https://identita.gov.mt",
    "tags": [
      "মাল্টা কাজের ভিসা",
      "সার্বিয়া ভিসা চেক",
      "malta work visa check"
    ]
  },
  {
    "id": 200,
    "category": "global-visas",
    "qBn": "ভিসা চেক অ্যাপ দিয়ে পরিবার বা বন্ধুদের ভিসা কিভাবে চেক করব?",
    "qEn": "How to check family or friends' visas using Visa Check App?",
    "ansLines": [
      "১. আপনার স্মার্টফোনে 'Visa Check App' ওপেন করে আত্মীয় বা বন্ধুর গন্তব্য দেশটি বেছে নিন।",
      "২. তাদের পাসপোর্টের পরিষ্কার ছবি থেকে নির্ভুল ৯ ডিজিটের পাসপোর্ট নম্বরটি লিখে দিন।",
      "৩. জন্মতারিখ বা জাতীয়তা সিলেক্ট করে এক ক্লিকেই কয়েক সেকেন্ডে তাদের লাইভ ভিসা রেজাল্ট বের করে ফেলুন।",
      "৪. প্রাপ্ত রেজাল্ট পেজটি অ্যাপের শেয়ার অপশন দিয়ে সরাসরি তাদের হোয়াটসঅ্যাপ বা ইমোতে পাঠিয়ে দিন।",
      "৫. এভাবে ঘরে বসেই আপনার পরিবার, বন্ধু বা পরিচিত প্রবাসীদের যেকোনো দেশের ভিসা বিনামূল্যে ভেরিফাই করে দিতে পারবেন।"
    ],
    "portalName": "Family & Friend Visa Utility",
    "officialUrl": "https://visacheckapp.net",
    "tags": [
      "পরিবারের ভিসা চেক",
      "বন্ধুদের ভিসা চেক",
      "check family visa"
    ]
  }
];
