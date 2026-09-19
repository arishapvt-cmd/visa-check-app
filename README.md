# 🌐 Visa Check App (ভিসা চেক করার অ্যাপ)

বাংলাদেশি পাসপোর্টধারীদের জন্য বিশ্বের শীর্ষ ২০টি দেশের ৮৮টি অফিসিয়াল ভিসা চেক পোর্টাল ও সম্পূর্ণ গাইডলাইন সংবলিত হাইব্রিড নেক্সট-জেএস (Next.js) ও নেটিভ অ্যান্ড্রয়েড (Native Android) মোবাইল অ্যাপ্লিকেশন।

---

## ✨ ফিচারসমূহ (Features)

- **২০টি গুরুত্বপূর্ণ দেশ**: সৌদি আরব, সংযুক্ত আরব আমিরাত (দুবাই), মালয়েশিয়া, কাতার, ওমান, কুয়েত, বাহরাইন, সিঙ্গাপুর, ভারত, থাইল্যান্ড, যুক্তরাজ্য (UK), যুক্তরাষ্ট্র (USA), কানাডা, অস্ট্রেলিয়া, ইতালি, জার্মানি, তুরস্ক, জাপান, দক্ষিণ কোরিয়া এবং মালদ্বীপ।
- **৮৮টি সরকারি পোর্টাল সার্ভিস**: ১০০% অফিসিয়াল সরকারি ডেটাবেস এবং রিয়েল-টাইম ট্র্যাকিং।
- **ফুল-স্ক্রিন আধুনিক কার্ড UI**: রেসপন্সিভ গ্রিড, এম্বিয়েন্ট ক্যানভাস ব্যাকগ্রাউন্ড, ফ্ল্যাগ গ্লো এবং গ্লাস-মরফিজম।
- **পপ-আপ ব্যাক বাটন**: ফ্লোটিং অ্যাকশন বাটন যা পেজের যে কোনো অবস্থানে ভাসমান থাকে।
- **নেটিভ অ্যান্ড্রয়েড ব্রাউজার র্যাপার (`PortalActivity`)**: সরকারি বট-প্রটেক্টেড (Cloudflare/Akamai) পোর্টালগুলো অ্যাপের ভেতরেই সিকিউর সেশন সহ লোড হয়।
- **ডার্ক/লাইট মোড এবং বাংলা/ইংরেজি ডুয়াল ল্যাঙ্গুয়েজ সাপোর্ট**।

---

## 🚀 লোকাল রান করার নিয়ম (Running Locally)

### ১. ওয়েব অ্যাপ (Next.js)
```bash
cd visacheckapp
npm install
npm run dev
# ব্রাউজারে http://localhost:3000 ওপেন করুন
```

### ২. ডকার (Docker & Docker Compose)
```bash
# প্রোজেক্টের রুট ডিরেক্টরি থেকে
docker compose up -d --build
# ব্রাউজারে http://localhost:3000 এ অ্যাপ্লিকেশনটি লাইভ হবে
```

---

## 📱 অ্যান্ড্রয়েড অ্যাপ বিল্ড ও ডিভাইসে ইন্সটল (Android Build & Deploy)

এক ক্লিকে Next.js স্ট্যাটিক ফাইল বিল্ড করে অ্যান্ড্রয়েড অ্যাসেটসে ইনজেক্ট করা এবং কানেক্টেড ডিভাইসে রান করার স্ক্রিপ্ট:

```bash
# ডিবাগ বিল্ড ও অটো ইন্সটল
./build-and-deploy.sh debug

# গুগল প্লে স্টোর রিলিজ বান্ডেল (.aab) বিল্ড
./build-and-deploy.sh release
```

---

## ☁️ ক্লাউড ডিপ্লয়মেন্ট (Google Cloud Run / Cloud Build)

```bash
gcloud builds submit --config=cloudbuild.yaml
```

---

## 📁 প্রোজেক্ট স্ট্রাকচার (Directory Structure)

```
.
├── visacheckapp/              # Next.js 16 + React 19 + TailwindCSS ফ্রন্টএন্ড
│   ├── src/
│   │   ├── app/               # App Router পেজসমূহ (হোম, দেশ, ভিসা ডিটেইলস)
│   │   ├── components/        # GlassyBackButton, Navbar, AmbientCards
│   │   └── data/countries.ts  # ২০টি দেশের ৮৮টি ভিসা ও পোর্টাল কনফিগারেশন
│   ├── Dockerfile
│   └── nginx.conf
├── VisaCheckAndroid/          # নেটিভ অ্যান্ড্রয়েড অ্যাপ (Kotlin, Gradle, WebView)
│   └── app/
│       ├── src/main/assets/   # Next.js থেকে বিল্ডকৃত এইচটিএমএল/জেএস অ্যাসেটস
│       └── src/main/java/     # MainActivity.kt & PortalActivity.kt
├── build-and-deploy.sh        # এন্ড-টু-এন্ড বিল্ড ও অটোমেশন স্ক্রিপ্ট
├── Dockerfile                 # রুট ডকার ফাইল
├── docker-compose.yml         # রুট ডকার কম্পোজ কনফিগ
└── cloudbuild.yaml            # গুগল ক্লাউড বিল্ড পাইপলাইন
```

---

## 👨‍💻 লেখক ও কপিরাইট
- ডেভেলপার: Md Abul Kalam Azad (Arisha PVT)
- ইমেইল: arishapvt@gmail.com
- গিটহাব: [arishapvt-cmd](https://github.com/arishapvt-cmd)
