/* ===== Słownik tłumaczeń PL / EN ===== */
const translations = {
  pl: {
    meta_title: "Kamil — CV & Portfolio",
    meta_desc: "CV Kamila — inżyniera informatyki, web developera i specjalisty IT.",

    // Nawigacja
    nav_about: "O mnie",
    nav_experience: "Doświadczenie",
    nav_education: "Wykształcenie",
    nav_skills: "Umiejętności",
    nav_projects: "Projekty",
    nav_contact: "Kontakt",

    // Hero
    hero_eyebrow: "Inżynieria Oprogramowania &amp; IT Enterprise",
    hero_role: "Inżynier Informatyki · Full-Stack Web Developer · Specjalista IT",
    hero_lead: "Absolwent <strong>Politechniki Poznańskiej</strong>, obecnie student studiów magisterskich ze specjalizacją <em>Zaawansowane Technologie Internetowe</em>. Łączę rozwój akademicki z pracą w IT, a moją pasją jest tworzenie nowoczesnych aplikacji webowych.",
    hero_btn_contact: "Skontaktuj się",
    hero_social_email: "E-mail",
    hero_quick_loc: "📍 Wronki / Poznań",
    hero_quick_edu: "🎓 Politechnika Poznańska",
    hero_quick_drive: "🚗 Prawo jazdy kat. B",
    hero_fc_years: "lata w IT",
    hero_fc_deg: "Inż.",
    hero_fc_cs: "Informatyka",
    hero_fc_open: "Otwarty na nowe wyzwania",

    // O mnie
    about_label: "O mnie",
    about_title: "Inżynierska dyscyplina,<br /><em>pasja do nowoczesnego webu</em>",
    about_subtitle: "Młody, ambitny inżynier łączący studia magisterskie na Politechnice Poznańskiej z pracą w IT i tworzeniem aplikacji webowych.",
    ac_card_title: "Profil inżyniera",
    ac_edu_title: "Wykształcenie",
    ac_edu_desc: "Inżynier informatyki PP · Mgr w toku (ZTI)",
    ac_job_title: "Stanowisko",
    ac_job_desc: "Specjalista ds. Wsparcia IT (Mid) @ Amica S.A.",
    ac_loc_title: "Lokalizacja",
    ac_loc_desc: "Poznań / Wronki (Wielkopolska)",
    ac_goal_title: "Cel zawodowy",
    ac_goal_desc: "Web / Frontend / Full-Stack Developer",
    about_lead: "„Wysoka kultura osobista, naturalna łatwość przyswajania wiedzy oraz inżynierskie podejście do rozwiązywania problemów.”",
    about_p1: "Absolwent studiów inżynierskich na <strong>Politechnice Poznańskiej</strong>, w trakcie studiów magisterskich ze specjalizacją <strong>Zaawansowane Technologie Internetowe</strong>.",
    about_p2: "Na co dzień <strong>Specjalista ds. Wsparcia IT w Amica S.A.</strong> Ponad 4 lata doświadczenia w administracji IT, tożsamościach domenowych Active Directory i Entra ID, systemie Microsoft Intune oraz infrastrukturze sieciowej.",
    about_p3: "Pasjonat tworzenia aplikacji webowych w <strong>React i Node.js</strong> - stale rozwijam swoje umiejętności programistyczne i chętnie korzystam z nowoczesnych narzędzi, w tym AI.",

    // Filary
    pillar_1_title: "Ambicja &amp; Kultura",
    pillar_1_desc: "Młoda, dynamiczna postawa, wysoka kultura osobista oraz profesjonalizm w pracy zespołowej.",
    pillar_2_title: "Inżynierska precyzja",
    pillar_2_desc: "Dyplom Politechniki Poznańskiej — dogłębne zrozumienie architektury systemów i czystego kodu.",
    pillar_3_title: "Szybka adaptacja",
    pillar_3_desc: "Łatwość przyswajania wiedzy, natychmiastowe wdrażanie nowych frameworków i narzędzi.",
    pillar_4_title: "Warsztat + AI",
    pillar_4_desc: "Łączenie klasycznego web developmentu (React, Node) z nowoczesnym vibe codingiem (Antigravity).",

    // Doświadczenie
    exp_label: "Doświadczenie zawodowe",
    exp_title: "Moja <em>ścieżka zawodowa</em>",

    exp_mid_badge: "Awans · Poziom Mid",
    exp_mid_role: "Specjalista ds. Wsparcia IT Użytkownika Końcowego",
    exp_mid_b1: "Samodzielna obsługa zaawansowanych zgłoszeń oraz wsparcie użytkowników — lokalnie i w oddziałach zagranicznych.",
    exp_mid_b2: "Zarządzanie tożsamością i uprawnieniami w Active Directory oraz Azure Active Directory (Entra ID).",
    exp_mid_b3: "Utrzymanie i administracja flotą urządzeń mobilnych oraz stacji roboczych z wykorzystaniem Microsoft Intune.",
    exp_mid_b4: "Koordynacja współpracy z 2. i 3. linią wsparcia oraz firmami zewnętrznymi; mentoring i wdrażanie nowych pracowników.",

    exp_jr_badge: "Poziom Junior",
    exp_jr_role: "Młodszy Specjalista ds. Wsparcia IT Użytkownika Końcowego",
    exp_jr_b1: "Codzienna obsługa zgłoszeń helpdesk oraz wsparcie użytkowników końcowych.",
    exp_jr_b2: "Konfiguracja, instalacja i serwis stacji roboczych, urządzeń mobilnych oraz drukarek.",
    exp_jr_b3: "Prowadzenie ewidencji sprzętu komputerowego, oprogramowania oraz dokumentacji zgłoszeń.",
    exp_jr_b4: "Podstawowa administracja pocztą elektroniczną, bazami danych i intranetem korporacyjnym.",

    exp_izomet_role: "Informatyk",
    exp_izomet_b1: "Nauka programowania w języku C#.",
    exp_izomet_b2: "Zarządzanie stroną internetową opartą o system WordPress.",
    exp_izomet_b3: "Proste naprawy sprzętu komputerowego, nadzór nad komunikacją podczas pracy zdalnej.",
    exp_izomet_b4: "Doświadczenie jako początkujący automatyk przy przeglądzie linii bagażowej na lotnisku w Warszawie.",

    exp_workshop_role: "Uczestnik zajęć — „Czas zawodowców BIS”",
    exp_workshop_b1: "Zajęcia specjalistyczne dla zawodu technik informatyk, realizowane przez Samorząd Województwa Wielkopolskiego oraz Politechnikę Poznańską.",

    exp_intern_role: "Praktyka zawodowa",
    exp_intern_b1: "Pogłębianie wiedzy i umiejętności z przedmiotów zawodowych oraz zdobycie nowego doświadczenia informatycznego.",

    // Wykształcenie
    edu_label: "Wykształcenie",
    edu_title: "Edukacja i <em>ścieżka akademicka</em>",
    edu_msc_badge: "Studia magisterskie · W trakcie",
    edu_msc_school: "Politechnika Poznańska",
    edu_msc_degree: "Kierunek: Informatyka · Poziom: Magister",
    edu_msc_spec_label: "Specjalizacja:",
    edu_msc_spec_val: "Zaawansowane Technologie Internetowe",
    edu_msc_b1: "Pogłębianie wiedzy z zakresu zaawansowanych architektur internetowych, systemów rozproszonych i technologii chmurowych.",
    edu_msc_b2: "Studia niestacjonarne umożliwiające ciągłe łączenie teorii akademickiej z pełnoetatową pracą zawodową w IT.",
    edu_beng_badge: "Tytuł zawodowy inżyniera",
    edu_beng_school: "Politechnika Poznańska",
    edu_beng_degree: "Kierunek: Informatyka · Poziom: Inżynier",
    edu_beng_b1: "4-letnie studia inżynierskie uwieńczone obroną pracy dyplomowej i uzyskaniem tytułu inżyniera informatyki.",
    edu_beng_b2: "Solidne przygotowanie z algorytmiki i struktur danych, inżynierii oprogramowania, relacyjnych baz danych (SQL) oraz sieci komputerowych.",
    edu_tech_badge: "Tytuł technika informatyka",
    edu_tech_school: "Technikum nr 1 im. Powstańców Wielkopolskich we Wronkach",
    edu_tech_degree: "Specjalizacja: Technik informatyk · Wykształcenie średnie zawodowe",
    edu_tech_b1: "Zdanie państwowych egzaminów zawodowych potwierdzających kwalifikacje technika informatyka.",
    edu_tech_b2: "Montaż i eksploatacja systemów komputerowych, podstawy sieci LAN, relacyjne bazy danych i podstawy programowania.",

    // Umiejętności (Powypisywane od myślników)
    skills_label: "Umiejętności",
    skills_title: "Co <em>potrafię</em>",
    sk_banner_desc: "Przejrzyste zestawienie mojego stacku technologicznego, doświadczenia w administracji IT oraz narzędzi pracy.",

    sk_f_front_title: "Frontend Development",
    sk_f_front_sub: "Nowoczesny Web &amp; UI",
    sk_front_li1: "React 19",
    sk_front_li2: "JavaScript (ES6+)",
    sk_front_li3: "Tailwind CSS &amp; HTML5 / CSS3",
    sk_front_li4: "Vite &amp; Responsive Web Design",
    sk_front_li5: "Architektura komponentowa &amp; React Hooks",
    sk_front_li6: "Kurs: Scrimba Frontend Career Path",

    sk_f_back_title: "Backend &amp; Bazy Danych",
    sk_f_back_sub: "Architektura API &amp; Dane",
    sk_back_li1: "Node.js &amp; Express.js 5",
    sk_back_li2: "MongoDB &amp; Mongoose",
    sk_back_li3: "Relacyjne bazy danych (SQL)",
    sk_back_li4: "Projektowanie RESTful API &amp; Postman",
    sk_back_li5: "Certyfikacja: freeCodeCamp Back End &amp; APIs",

    sk_f_it_title: "Administracja IT Enterprise",
    sk_badge_it: "Amica S.A. · IT Support",
    sk_it_li1: "Active Directory &amp; Azure AD / Entra ID",
    sk_it_li2: "Microsoft Intune (MDM — zarządzanie flotą urządzeń)",
    sk_it_li3: "Polityki grupowe GPO &amp; system SAP",
    sk_it_li4: "Sieci komputerowe LAN &amp; diagnostyka sprzętu PC",
    sk_it_li5: "Wsparcie użytkowników lokalnych i zagranicznych",

    sk_f_ai_title: "AI Vibe Coding &amp; Narzędzia",
    sk_f_ai_sub: "Nowoczesny Workflow &amp; DevOps",
    sk_ai_li1: "Antigravity AI (Vibe Coding) &amp; Prompt Engineering",
    sk_ai_li2: "Git &amp; GitHub (kontrola wersji)",
    sk_ai_li3: "VS Code &amp; Linux CLI",
    sk_ai_li4: "Deployment: Vercel &amp; Netlify",
    sk_ai_li5: "Język angielski: poziom B1/B2",

    // Projekty (Prosty opis z ikonkami)
    projects_label: "Projekty",
    projects_title: "Główny <em>projekt</em>",
    iotlab_badge: "Praca Inżynierska · Politechnika Poznańska",
    iotlab_title: "IoTLab – System Zarządzania i Rezerwacji Sprzętu Laboratoryjnego",
    iotlab_desc: "Kompleksowa platforma webowa automatyzująca obieg sprzętu i rezerwacji pomiędzy studentami a opiekunami pracowni uczelnianej.",
    iotlab_f1: "Zaawansowany moduł koszyka z podziałem rezerwacji na osobne terminy oraz dynamicznym sprawdzaniem dostępności w magazynie.",
    iotlab_f2: "Bezpieczny, bezhasłowy podgląd statusu zamówienia dla gości (unikalne kody dostępu i linki UUID).",
    iotlab_f3: "Panel opiekuna/administratora: zarządzanie stanami magazynowymi, etapami realizacji (od wniosku do zwrotu) oraz eksport umów do formatu PDF.",
    iotlab_f4: "System automatycznych powiadomień e-mail (SMTP/Nodemailer) oraz audyt operacji.",
    iotlab_tech_label: "Technologie:",
    iotlab_tech_val: "React, Node.js, Express.js, MongoDB, Tailwind CSS, Nodemailer, jsPDF, REST API",
    iotlab_btn_code: "Zobacz kod IoTLab na GitHubie →",
    projects_all_btn: "Wszystkie repozytoria na GitHubie →",

    // Kontakt
    contact_label: "Kontakt",
    contact_title: "Porozmawiajmy o <em>współpracy</em>",
    contact_desc: "Masz ofertę pracy, ciekawy projekt lub pytanie? Chętnie odpowiem.",

    // Footer
    footer_text: "Wszelkie prawa zastrzeżone",
    built_with: "Zbudowano z pasją &amp; Antigravity",

    // Czas pracy
    date_present: "obecnie",
    date_1yr: "1 rok",
    date_years_pl: "lata",
    date_years_gen: "lat",
    date_mo_1: "1 mies.",
    date_mo_n: "mies."
  },

  en: {
    meta_title: "Kamil — CV & Portfolio",
    meta_desc: "Curriculum Vitae of Kamil — Computer Science Engineer, Web Developer & IT Specialist.",

    // Navigation
    nav_about: "About",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Hero
    hero_eyebrow: "Software Engineering &amp; Enterprise IT",
    hero_role: "Computer Science Engineer · Full-Stack Web Developer · IT Specialist",
    hero_lead: "Graduate of the <strong>Poznan University of Technology</strong>, currently pursuing my Master's degree in <em>Advanced Internet Technologies</em>. I balance academic growth with my enterprise IT role, with a true passion for modern web development.",
    hero_btn_contact: "Get in touch",
    hero_social_email: "E-mail",
    hero_quick_loc: "📍 Wronki / Poznan, Poland",
    hero_quick_edu: "🎓 Poznan University of Technology",
    hero_quick_drive: "🚗 Driving license cat. B",
    hero_fc_years: "years in IT",
    hero_fc_deg: "B.Eng.",
    hero_fc_cs: "Computer Science",
    hero_fc_open: "Open to new opportunities",

    // About
    about_label: "About me",
    about_title: "Engineering discipline,<br /><em>passion for modern web</em>",
    about_subtitle: "Driven Computer Science Engineer balancing Master's studies at Poznan University of Technology with enterprise IT and modern web engineering.",
    ac_card_title: "Engineer Profile",
    ac_edu_title: "Education",
    ac_edu_desc: "B.Eng. in CS · MSc in progress (AIT)",
    ac_job_title: "Current Role",
    ac_job_desc: "IT Support Specialist (Mid) @ Amica S.A.",
    ac_loc_title: "Location",
    ac_loc_desc: "Poznan / Wronki, Poland",
    ac_goal_title: "Career Goal",
    ac_goal_desc: "Web / Frontend / Full-Stack Developer",
    about_lead: "“High personal work ethic, fast learning curve, and an engineering-first mindset for software and systems.”",
    about_p1: "Graduate of the <strong>Poznan University of Technology</strong> with a Computer Science degree, currently pursuing a Master's in <em>Advanced Internet Technologies</em>.",
    about_p2: "Currently an <strong>IT Support Specialist at Amica S.A.</strong> Over 4 years of hands-on experience in IT administration, domain identity with Active Directory and Entra ID, Microsoft Intune, and network infrastructure.",
    about_p3: "Passionate about building web applications with <strong>React and Node.js</strong> - constantly expanding my development skills and utilizing modern tools, including AI.",

    // Pillars
    pillar_1_title: "Ambition &amp; Culture",
    pillar_1_desc: "Young, proactive mindset, high interpersonal culture, and collaborative professionalism.",
    pillar_2_title: "Engineering Rigor",
    pillar_2_desc: "Poznan University of Technology foundation — architectural thinking, clean code, and solid algorithms.",
    pillar_3_title: "Fast Learner",
    pillar_3_desc: "Rapid assimilation of emerging frameworks, tools, and technical documentation.",
    pillar_4_title: "Full-Stack + AI",
    pillar_4_desc: "Combining core web development (React, Node) with agile prompt-driven AI workflows (Antigravity).",

    // Experience
    exp_label: "Work Experience",
    exp_title: "My <em>career path</em>",

    exp_mid_badge: "Promotion · Mid Level",
    exp_mid_role: "End User IT Support Specialist (Mid)",
    exp_mid_b1: "Autonomous resolution of complex IT incidents and daily user support — locally and across international branches.",
    exp_mid_b2: "Identity and access management across on-prem Active Directory and Azure Active Directory (Entra ID).",
    exp_mid_b3: "Fleet administration and security management for workstations and mobile devices via Microsoft Intune (MDM).",
    exp_mid_b4: "Tier 2/3 and external vendor collaboration; documentation, knowledge sharing, and onboarding new IT team members.",

    exp_jr_badge: "Junior Level",
    exp_jr_role: "Junior End User IT Support Specialist",
    exp_jr_b1: "Daily helpdesk ticket handling, incident triage, and hands-on end-user workstation support.",
    exp_jr_b2: "Hardware setup, OS deployment, workstation upgrades, and maintenance of mobile devices and printing equipment.",
    exp_jr_b3: "IT inventory management, hardware asset tracking, license auditing, and detailed ticketing documentation.",
    exp_jr_b4: "Basic administration of corporate email systems, relational databases, and company intranet.",

    exp_izomet_role: "IT Specialist",
    exp_izomet_b1: "Learning C# programming and object-oriented software development.",
    exp_izomet_b2: "Managing and updating the corporate website powered by WordPress CMS.",
    exp_izomet_b3: "PC hardware repairs, workstation maintenance, and remote collaboration tools supervision.",
    exp_izomet_b4: "Field experience as a junior automation technician during baggage handling line maintenance at Warsaw Airport.",

    exp_workshop_role: "Specialist Workshop Participant — 'Czas zawodowców BIS'",
    exp_workshop_b1: "Advanced IT technical training for IT technicians, organized by the Wielkopolska Regional Government and Poznan University of Technology.",

    exp_intern_role: "IT Internship",
    exp_intern_b1: "Practical consolidation of technical vocational curriculum and initial commercial IT industry experience.",

    // Education
    edu_label: "Education",
    edu_title: "Academic &amp; <em>Educational Path</em>",
    edu_msc_badge: "Master's Degree · In Progress",
    edu_msc_school: "Poznan University of Technology",
    edu_msc_degree: "Field: Computer Science · Degree: Master of Science (M.Sc.)",
    edu_msc_spec_label: "Specialization:",
    edu_msc_spec_val: "Advanced Internet Technologies",
    edu_msc_b1: "Deepening expertise in advanced web architectures, distributed systems, and modern cloud technologies.",
    edu_msc_b2: "Part-time academic schedule allowing seamless integration of university research with full-time professional IT responsibilities.",
    edu_beng_badge: "Bachelor of Engineering (B.Eng.)",
    edu_beng_school: "Poznan University of Technology",
    edu_beng_degree: "Field: Computer Science · Degree: Engineer (B.Eng.)",
    edu_beng_b1: "4-year rigorous engineering program completed with a diploma defense and the degree of Computer Science Engineer.",
    edu_beng_b2: "Strong foundations in algorithms, data structures, software engineering, relational databases (SQL), and computer networks.",
    edu_tech_badge: "Vocational IT Diploma",
    edu_tech_school: "Technical High School No. 1 in Wronki",
    edu_tech_degree: "Specialization: IT Technician · Secondary Technical Education",
    edu_tech_b1: "Successful completion of state vocational exams awarding official IT Technician credentials.",
    edu_tech_b2: "Hardware diagnostics, local area network (LAN) administration, database essentials, and software basics.",

    // Technical Skills (Listed with bullet dashes)
    skills_label: "Technical Skills",
    skills_title: "Skills &amp; <em>Capabilities</em>",
    sk_banner_desc: "A clear overview of my development stack, enterprise IT administration experience, and workflow tools.",

    sk_f_front_title: "Frontend Development",
    sk_f_front_sub: "Modern Web &amp; UI",
    sk_front_li1: "React 19",
    sk_front_li2: "JavaScript (ES6+)",
    sk_front_li3: "Tailwind CSS &amp; HTML5 / CSS3",
    sk_front_li4: "Vite &amp; Responsive Web Design",
    sk_front_li5: "Component Architecture &amp; React Hooks",
    sk_front_li6: "Course: Scrimba Frontend Career Path",

    sk_f_back_title: "Backend &amp; Databases",
    sk_f_back_sub: "API Architecture &amp; Data Layer",
    sk_back_li1: "Node.js &amp; Express.js 5",
    sk_back_li2: "MongoDB &amp; Mongoose",
    sk_back_li3: "Relational Databases (SQL)",
    sk_back_li4: "RESTful API Design &amp; Postman",
    sk_back_li5: "Certification: freeCodeCamp Back End &amp; APIs",

    sk_f_it_title: "Enterprise IT Administration",
    sk_badge_it: "Amica S.A. · IT Support",
    sk_it_li1: "Active Directory &amp; Azure AD / Entra ID",
    sk_it_li2: "Microsoft Intune (MDM device fleet management)",
    sk_it_li3: "GPO Group Policies &amp; SAP ERP system",
    sk_it_li4: "LAN Networks &amp; PC hardware diagnostics",
    sk_it_li5: "End-user support for domestic and international branches",

    sk_f_ai_title: "AI Vibe Coding &amp; Toolchain",
    sk_f_ai_sub: "Modern Workflow &amp; DevOps",
    sk_ai_li1: "Antigravity AI (Vibe Coding) &amp; Prompt Engineering",
    sk_ai_li2: "Git &amp; GitHub (version control)",
    sk_ai_li3: "VS Code &amp; Linux CLI",
    sk_ai_li4: "Deployment: Vercel &amp; Netlify",
    sk_ai_li5: "English language: B1/B2 level",

    // Projects (Simple presentation with icons)
    projects_label: "Projects",
    projects_title: "Featured <em>Project</em>",
    iotlab_badge: "Engineering Thesis · Poznan University of Technology",
    iotlab_title: "IoTLab – Laboratory Equipment Management &amp; Reservation System",
    iotlab_desc: "A comprehensive web platform automating the workflow of equipment and reservations between students and university lab supervisors.",
    iotlab_f1: "Advanced cart module with reservation splitting by distinct time slots and real-time inventory validation.",
    iotlab_f2: "Secure, passwordless order status tracking for guests (unique access codes and UUID links).",
    iotlab_f3: "Supervisor/Administrator dashboard: inventory management, lifecycle tracking (from request to return), and PDF contract export.",
    iotlab_f4: "Automated email notification system (SMTP/Nodemailer) and audit logging.",
    iotlab_tech_label: "Technologies:",
    iotlab_tech_val: "React, Node.js, Express.js, MongoDB, Tailwind CSS, Nodemailer, jsPDF, REST API",
    iotlab_btn_code: "View IoTLab Code on GitHub →",
    projects_all_btn: "View all repositories on GitHub →",

    // Contact
    contact_label: "Contact",
    contact_title: "Let's build something <em>great</em>",
    contact_desc: "Have a job opportunity, interesting project, or question? Feel free to reach out.",

    // Footer
    footer_text: "All rights reserved",
    built_with: "Crafted with passion &amp; Antigravity",

    // Dynamic dates
    date_present: "present",
    date_1yr: "1 yr",
    date_years_pl: "yrs",
    date_years_gen: "yrs",
    date_mo_1: "1 mo.",
    date_mo_n: "mos."
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = translations;
}
