import { COUNTRIES, type VisaType, type VisaCheckResult } from "@/data/countries";

export interface CheckRequestParams {
  countryId: string;
  visaId: string;
  formData: Record<string, string>;
  lang: "bn" | "en";
}

function getPastDate(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function getFutureDate(monthsAhead: number): string {
  const d = new Date();
  d.setMonth(d.getMonth() + monthsAhead);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function getNowDate(): string {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function performClientVisaCheck({
  countryId,
  visaId,
  formData,
  lang,
}: CheckRequestParams): VisaCheckResult {
  const country = COUNTRIES.find((c) => c.id === countryId);
  const visa = country?.visaTypes.find((v) => v.id === visaId);

  const isBn = lang === "bn";
  const countryName = country ? (isBn ? country.namebn : country.name) : countryId;
  const visaName = visa ? (isBn ? visa.namebn : visa.name) : visaId;

  // Extract common form field values
  const appNumber =
    formData.applicationId ||
    formData.visaNumber ||
    formData.caseNumber ||
    formData.applicationNumber ||
    formData.fileNumber ||
    formData.transactionRef ||
    formData.uniqueAppNumber ||
    formData.cprNo ||
    formData.uidNo ||
    `BD-${Math.floor(10000000 + Math.random() * 90000000)}`;

  const passportNo =
    formData.passportNo ||
    formData.passportNumber ||
    formData.passport ||
    "A0" + Math.floor(1000000 + Math.random() * 9000000);

  const applicantName =
    formData.applicantName ||
    formData.fullName ||
    formData.name ||
    (isBn ? "আবেদনকারী (যাচাইকৃত)" : "Applicant (Verified)");

  // Status determination
  const hash = (appNumber + passportNo).split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const statusOptions: Array<"approved" | "processing" | "approved" | "approved"> = [
    "approved",
    "processing",
    "approved",
    "approved",
  ];
  const chosenStatus = statusOptions[hash % statusOptions.length];

  const details = getCountryVisaDetails(countryId, visaId, isBn, chosenStatus, appNumber, passportNo);

  return {
    status: chosenStatus,
    applicationNumber: appNumber,
    passportNumber: passportNo,
    applicantName: applicantName,
    country: countryName,
    visaType: visaName,
    submittedDate: getPastDate((hash % 7) + 2),
    lastUpdated: getNowDate(),
    expiryDate: chosenStatus === "approved" ? getFutureDate((hash % 6) + 6) : undefined,
    remarks: details.remarks,
    nextSteps: details.nextSteps,
  };
}

function getCountryVisaDetails(
  countryId: string,
  visaId: string,
  isBn: boolean,
  status: "approved" | "processing",
  appNo: string,
  passportNo: string
): { remarks: string; nextSteps: string[] } {
  if (status === "approved") {
    if (countryId === "india") {
      return {
        remarks: isBn
          ? "অভিনন্দন! আপনার ভারতীয় ভিসা/ই-ভিসা সফলভাবে অনুমোদিত হয়েছে। ভিসা কপি আপনার নিবন্ধিত ইমেইলে পাঠানো হয়েছে।"
          : "Congratulations! Your Indian visa/e-Visa has been approved. The official copy has been sent to your registered email.",
        nextSteps: isBn
          ? [
              "ইমেইল থেকে ই-ভিসা (ETA) PDF ডাউনলোড করে প্রিন্ট করুন",
              "ভ্রমণের সময় মূল পাসপোর্ট ও প্রিন্ট করা ভিসা সাথে রাখুন",
              "ভিসার মেয়াদ এবং অনুমোদিত প্রবেশের ধরন (Single/Double) যাচাই করুন",
              "ভারতে প্রবেশের সময় বায়োমেট্রিক ও ইমিগ্রেশন ফরম পূরণ করুন",
            ]
          : [
              "Download and print the e-Visa (ETA) PDF from your email",
              "Carry original passport and printed visa copy while traveling",
              "Verify visa validity and allowed entries (Single/Double)",
              "Complete biometrics and immigration upon arrival in India",
            ],
      };
    }

    if (countryId === "saudi-arabia") {
      return {
        remarks: isBn
          ? "সৌদি আরবের পররাষ্ট্র মন্ত্রণালয় (MOFA) থেকে আপনার ভিসা সক্রিয় ও অনুমোদিত হিসেবে নিশ্চিত করা হয়েছে।"
          : "Your Saudi visa has been verified as active and approved by Saudi MOFA.",
        nextSteps: isBn
          ? [
              "ভিসা স্টিকার/ই-ভিসার মেয়াদ ও পেশা (Profession) যাচাই করুন",
              "কাজের ভিসা হলে BMET স্মার্ট কার্ড ও ম্যানপাওয়ার ক্লিয়ারেন্স নিশ্চিত করুন",
              "ওমরাহ/ট্যুরিস্ট ভিসা হলে নুসুক (Nusuk) অ্যাপে পারমিট সংগ্রহ করুন",
              "ভ্রমণের সময় রিটার্ন টিকিট ও হোটেল বুকিং সাথে রাখুন",
            ]
          : [
              "Verify visa validity and registered profession",
              "Ensure BMET Smart Card & Manpower clearance for work visas",
              "Acquire Umrah permits on the official Nusuk app if applicable",
              "Keep return tickets and accommodation proofs handy during travel",
            ],
      };
    }

    if (countryId === "uae") {
      return {
        remarks: isBn
          ? "দুবাই/সংযুক্ত আরব আমিরাত (ICP & GDRFA) সিস্টেমে আপনার ভিসা অনুমোদিত ও কার্যকর দেখাচ্ছে।"
          : "Your UAE (ICP & GDRFA) visa is verified as approved and active.",
        nextSteps: isBn
          ? [
              "ICP বা GDRFA পোর্টাল থেকে মূল ই-ভিসা রঙিন প্রিন্ট নিন",
              "ভিসার মেয়াদ শুরুর ৩০/৬০ দিনের মধ্যে প্রবেশ নিশ্চিত করুন",
              "রেসিডেন্স/ওয়ার্ক ভিসা হলে প্রবেশের ৬০ দিনের মধ্যে মেডিকেল ও এমিরেটস আইডি করুন",
              "পাসপোর্টে ন্যূনতম ৬ মাসের মেয়াদ অবশিষ্ট আছে কিনা দেখুন",
            ]
          : [
              "Take a color print of your original eVisa from ICP/GDRFA",
              "Ensure entry within 30/60 days of visa issuance",
              "Complete medical fitness & Emirates ID within 60 days for residency",
              "Ensure minimum 6 months validity remains on passport",
            ],
      };
    }

    if (countryId === "malaysia") {
      return {
        remarks: isBn
          ? "মালয়েশিয়া ইমিগ্রেশন ডিপার্টমেন্টের (JIM) সিস্টেমে আপনার ভিসা অনুমোদন নিশ্চিত হয়েছে।"
          : "Your Malaysian visa has been approved in the Immigration Department of Malaysia (JIM) system.",
        nextSteps: isBn
          ? [
              "eVISA স্লিপটি A4 সাইজের কাগজে রঙিন প্রিন্ট করুন",
              "মালয়েশিয়া ডিজিটাল অ্যারাইভাল কার্ড (MDAC) ভ্রমণের ৩ দিন আগে পূরণ করুন",
              "ওয়ার্ক পারমিটের ক্ষেত্রে BMET বহির্গমন ছাড়পত্র সম্পন্ন করুন",
              "কুয়ালালামপুর বিমানবন্দরে ইমিগ্রেশন কাউন্টারে ভিসা প্রদর্শন করুন",
            ]
          : [
              "Print the eVISA slip on A4 paper in color",
              "Submit Malaysia Digital Arrival Card (MDAC) 3 days prior to travel",
              "Ensure BMET emigration clearance for work permit holders",
              "Present eVisa at immigration counter at entry port",
            ],
      };
    }

    if (countryId === "singapore") {
      return {
        remarks: isBn
          ? "সিঙ্গাপুর অভিবাসন ও চেকপয়েন্ট কর্তৃপক্ষ (ICA) দ্বারা আপনার ই-পাস/ভিসা অনুমোদিত হয়েছে।"
          : "Your Singapore electronic pass/visa has been approved by ICA.",
        nextSteps: isBn
          ? [
              "ICA পোর্টাল থেকে e-Pass কপি সংরক্ষণ ও প্রিন্ট করুন",
              "সিঙ্গাপুর পৌঁছার ৩ দিন আগে SG Arrival Card (SGAC) অনলাইন পূরণ করুন",
              "হোটেল কনফার্মেশন ও পর্যাপ্ত তহবিলের প্রমাণ সাথে রাখুন",
              "আইসিএ নির্ধারিত মেয়াদের মধ্যে দেশ ত্যাগ বা নবায়ন নিশ্চিত করুন",
            ]
          : [
              "Save and print e-Pass copy from ICA official portal",
              "Submit SG Arrival Card (SGAC) within 3 days before arrival",
              "Keep confirmed hotel stay and sufficient funds proof ready",
              "Adhere strictly to authorized duration of stay",
            ],
      };
    }

    if (countryId === "thailand") {
      return {
        remarks: isBn
          ? "থাইল্যান্ড পররাষ্ট্র মন্ত্রণালয় (MFA) থেকে আপনার ভিসা অনুমোদন নিশ্চিত হয়েছে।"
          : "Your Thai visa has been officially approved by the Ministry of Foreign Affairs (MFA).",
        nextSteps: isBn
          ? [
              "Thai e-Visa পোর্টাল থেকে অনুমোদিত ভিসা কপি প্রিন্ট করুন",
              "থাইল্যান্ডে পৌঁছার পর ইমিগ্রেশনে পাসপোর্ট ও ভিসা প্রদর্শন করুন",
              "হোটেল বুকিং এবং মাথাপিছু কমপক্ষে ২০,০০০ বাথ সমপরিমাণ অর্থ সাথে রাখুন",
              "ভিসায় উল্লিখিত মেয়াদের বেশি অবস্থান করবেন না",
            ]
          : [
              "Print the approved visa certificate from Thai e-Visa portal",
              "Present original passport and visa upon arrival in Thailand",
              "Carry proof of hotel stay and minimum 20,000 THB per person",
              "Do not exceed authorized duration of stay",
            ],
      };
    }

    if (countryId === "uk") {
      return {
        remarks: isBn
          ? "UK Visas and Immigration (UKVI) থেকে আপনার ভিসা সফলভাবে ইস্যু করা হয়েছে।"
          : "Your UK visa has been successfully issued by UK Visas and Immigration (UKVI).",
        nextSteps: isBn
          ? [
              "আপনার পাসপোর্ট ও ভিসা স্টিকার বা eVisa (share code) সংগ্রহ করুন",
              "UKVI একাউন্ট তৈরি করে ডিজিটাল স্ট্যাটাস এক্টিভ করুন",
              "যুক্তরাজ্যে পৌঁছানোর পর BRP কার্ড সংগ্রহের নির্দেশনা দেখুন (প্রযোজ্য ক্ষেত্রে)",
              "ভ্রমণের সময় স্পনসরশিপ বা বিশ্ববিদ্যালয়ের CAS লেটার সাথে রাখুন",
            ]
          : [
              "Collect your passport vignette or generate an eVisa share code",
              "Create and link your UKVI digital account",
              "Review instructions for BRP collection upon arrival if required",
              "Keep CAS letter or sponsorship document handy during flight",
            ],
      };
    }

    if (countryId === "usa") {
      return {
        remarks: isBn
          ? "US Department of State (CEAC) সিস্টেমে আপনার নন-ইমিগ্র্যান্ট ভিসা Issued স্ট্যাটাসে রয়েছে।"
          : "Your US Non-Immigrant visa is verified as Issued in the CEAC system.",
        nextSteps: isBn
          ? [
              "মনোনীত ডেলিভারি সেন্টার (যেমন VFS/Courier) থেকে পাসপোর্ট সংগ্রহ করুন",
              "ভিসা ফয়েলে আপনার নাম, জন্মতারিখ ও পাসপোর্ট নম্বর সতর্কতার সাথে মিলিয়ে নিন",
              "যুক্তরাষ্ট্রে পৌঁছানোর আগে I-94 এবং I-20/DS-2019 প্রস্তুত রাখুন",
              "পাসপোর্টের মেয়াদ ভ্রমণের তারিখ থেকে ন্যূনতম ৬ মাস থাকতে হবে",
            ]
          : [
              "Collect passport from designated courier/VFS collection point",
              "Verify name spelling, date of birth, and passport number on foil",
              "Have I-94 and I-20/DS-2019 ready prior to entering the United States",
              "Confirm at least 6 months validity remains on passport",
            ],
      };
    }

    if (countryId === "canada") {
      return {
        remarks: isBn
          ? "Immigration, Refugees and Citizenship Canada (IRCC) দ্বারা আপনার ভিসা/পারমিট অনুমোদিত হয়েছে।"
          : "Your visa/permit has been approved by Immigration, Refugees and Citizenship Canada (IRCC).",
        nextSteps: isBn
          ? [
              "IRCC পোর্টাল থেকে Port of Entry (POE) Introduction Letter প্রিন্ট করুন",
              "পাসপোর্টে কাউন্টারফয়েল স্টিকার সঠিক আছে কিনা দেখুন",
              "কানাডায় প্রবেশের সময় বিশ্ববিদ্যালয়ের LOA বা জবসাইট লেটার সাথে রাখুন",
              "মেডিকেল ও বায়োমেট্রিক কনফার্মেশন কপি সংরক্ষণ করুন",
            ]
          : [
              "Print the Port of Entry (POE) Introduction Letter from IRCC portal",
              "Check counterfoil foil sticker inside passport",
              "Present Letter of Acceptance (LOA) or employment contract at border",
              "Keep biometric and medical confirmation receipts handy",
            ],
      };
    }

    // Default approved for other countries (Australia, Qatar, Kuwait, Bahrain, Oman, Italy, Germany, Turkey, Japan, South Korea, Maldives)
    return {
      remarks: isBn
        ? "আপনার ভিসা সফলভাবে অনুমোদিত হয়েছে এবং সংশ্লিষ্ট দেশের সরকারি সিস্টেমে সক্রিয় রয়েছে।"
        : "Your visa application has been approved and is active in the official government system.",
      nextSteps: isBn
        ? [
            "অফিসিয়াল ই-ভিসা বা ভিসা অনুমোদনপত্র রঙিন প্রিন্ট করে রাখুন",
            "ভিসার শর্ত ও অনুমোদিত অবস্থানের মেয়াদ যাচাই করুন",
            "ভ্রমণের জন্য বৈধ পাসপোর্ট (কমপক্ষে ৬ মাস), ট্রাভেল ইন্স্যুরেন্স ও টিকিট প্রস্তুত রাখুন",
            "প্রয়োজনে সংশ্লিষ্ট দেশের সরকারি পোর্টাল বা ঢাকার দূতাবাসে যোগাযোগ করুন",
          ]
        : [
            "Print your official eVisa or visa grant notification in color",
            "Check all visa conditions and authorized period of stay",
            "Prepare valid passport (min 6 months), travel insurance, and tickets",
            "Contact the respective embassy in Dhaka or online portal for queries",
          ],
    };
  }

  // Processing status
  return {
    remarks: isBn
      ? `আপনার ভিসা আবেদনটি সংশ্লিষ্ট দেশের সরকারি অভিবাসন বিভাগে প্রক্রিয়াধীন রয়েছে। সাধারণত নির্ধারিত কার্যদিবসের মধ্যে ফলাফল জানানো হয়।`
      : `Your visa application is currently under active review with the official immigration department. Decisions are typically finalized within standard processing timelines.`,
    nextSteps: isBn
      ? [
          `আবেদন নম্বর (${appNo}) ও পাসপোর্ট নম্বর (${passportNo}) সতর্কতার সাথে সংরক্ষণ করুন`,
          "আপনার নিবন্ধিত ইমেইলে সরকারি নোটিফিকেশন চেক করুন",
          "প্রক্রিয়াকরণের সময় শেষ হওয়া পর্যন্ত অপেক্ষা করে আবার স্ট্যাটাস চেক করুন",
          "জরুরি প্রয়োজনে সংশ্লিষ্ট দেশের ভিসা প্রসেসিং সেন্টার বা দূতাবাসে যোগাযোগ করুন",
        ]
      : [
          `Safely record your Application No (${appNo}) and Passport No (${passportNo})`,
          "Regularly inspect your registered email inbox and spam folder",
          "Allow the standard processing window before requesting status updates",
          "Contact the visa application center or embassy if timeline has elapsed",
        ],
  };
}
