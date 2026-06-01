/* =========================================================================
   KHA MARINE — DATA
   ------------------------------------------------------------------------
   Editable content. Updating an image or copy here changes the site
   without touching markup. KHA namespace is retained for backwards-compat
   with templates; SEVEN77 is an alias.
   ========================================================================= */

window.KHA = window.KHA || {};
window.SEVEN77 = window.SEVEN77 || window.KHA;

/* ---------- Boat models -------------------------------------------------
   Each model carries an Arabic-rooted name reflecting Gulf maritime
   heritage, alongside a clean English class descriptor and full spec.
   Categories: patrol | leisure | fishing | utility | passenger | commercial
   ----------------------------------------------------------------------- */
window.KHA.models = [
  {
    id: "Catamaran",
    name: "Catamaran",
    // subtitle: "Patrol · Rapid Response",
    arabic: "شاهين",
    meaning: "The Arabian falcon — speed, precision, command of the sky.",
    category: "patrol",
    // categoryLabel: "Patrol / Security",
    size: "45ft | 50ft | 55ft | 60ft",
    use: "Coast guard, security, rapid response",
    description:
      "High-strength fiberglass patrol hull engineered for sustained Gulf operations. Deep-V planing geometry, hardened deck, and command-grade systems integration.",
    image: "assets/images/catamaran 40ft.png",
  },
  {
    id: "Navigator Monohull",
    name: "Navigator Monohull",
    // subtitle: "Patrol · Offshore Command",
    arabic: "صقر",
    meaning: "The hunting falcon — endurance, range, unwavering focus.",
    category: "patrol",
    // categoryLabel: "Patrol / Security",
    size: "40ft | 45ft | 50ft | 55ft | 60ft",
    use: "Government deployment, offshore patrol",
    description:
      "Reinforced composite construction with a long-range patrol configuration. FLIR-ready electrical bay, navigation suite integration, and operational endurance for extended Gulf missions.",
    image: "assets/images/Navigator Monohull .png",
  },
  {
    id: "Falcon Monohull",
    name: "Falcon Monohull",
    // subtitle: "Leisure · Day Cruiser",
    // arabic: "لؤلؤة",
    meaning: "Pearl — the original treasure of the Gulf, refined and rare.",
    category: "leisure",
    // categoryLabel: "Leisure",
    size: "34ft | 36ft | 38ft",
    use: "Private day cruising, coastal touring",
    description:
      "Refined fiberglass day cruiser with marine-grade finishes, a clean owner-driven layout, and a hull tuned for stable Gulf cruising and quiet running.",
    image: "assets/images/Falcon Monohull.png",
  },
  {
    id: "Predator",
    name: "Predator",
    // subtitle: "Leisure · Premium Cruiser",
    arabic: "الدبران",
    meaning:
      "The Pleiades-companion star — guidance for Arab navigators since antiquity.",
    category: "leisure",
    // categoryLabel: "Leisure",
    size: "40ft | 45ft | 50ft | 55ft | 60ft",
    use: "Premium leisure, charter, hospitality",
    description:
      "Custom interior fit-out with quilted upholstery, teak detailing, and generous beam. The composite hull is tuned for stable Gulf cruising and overnight capability.",
    image: "assets/images/pradator.png",
  },
];

window.KHA.modelCategories = [{ id: "all", label: "Speciality" }];

/* ---------- Services ---------------------------------------------------- */
window.KHA.services = [
  {
    num: "01",
    title: "Custom Boat Manufacturing",
    body: "Fiberglass boats built to client specification — patrol, leisure, fishing, commercial, government.",
  },
  {
    num: "02",
    title: "Fiberglass Fabrication",
    body: "Marine-grade composite layup, hand-finished hulls, structural reinforcement, and quality-controlled molds.",
  },
  {
    num: "03",
    title: "Boat Maintenance",
    body: "Scheduled and emergency maintenance programs that keep your fleet operational across Gulf conditions.",
  },
  {
    num: "04",
    title: "Boat Fit-Out",
    body: "Encompasses installing structural bulkheads, interior cabinetry, plumbing, electrical systems, and navigation hardware.",
  },
  {
    num: "05",
    title: "Refits & Upgrades",
    body: "Hull refinishing, deck rework, electrical re-commissioning, layout reconfiguration, and full re-fit-out.",
  },
  {
    num: "05",
    title: "Hull Repair",
    body: "Structural fiberglass and gelcoat repair, impact damage assessment, lamination correction, and water-ingress recovery.",
  },
  {
    num: "07",
    title: "Marine Electrical",
    body: "Wiring inspections, navigation electronics, lighting, communications, and 12/24V system support.",
  },
  {
    num: "08",
    title: "Mechanical Coordination",
    body: "Engine, drive, steering, and fuel-system coordination with trusted mechanical partners.",
  },
  {
    num: "09",
    title: "Fleet Support",
    body: "Multi-vessel maintenance and uptime programs for government, commercial, and operational fleets.",
  },
  {
    num: "10",
    title: "Marine Consultation",
    body: "Hull selection, design review, build planning, and long-term operational guidance for marine programs.",
  },
  {
    num: "11 · Upon Request",
    title: "Steel Vessel Production",
    body: "Regional coastal and offshore projects continue to drive demand for steel vessels such as landing crafts, barges, and support craft. A production-focused model enables scalable delivery of durable, project-ready marine assets for infrastructure and logistics operations.",
  },
];

/* ---------- Maintenance items ------------------------------------------ */
window.KHA.maintenance = [
  {
    title: "Preventive Maintenance",
    body: "Scheduled inspection and service plans calibrated to your operational cycle.",
  },
  {
    title: "Hull Inspection",
    body: "Above and below the waterline assessment of fiberglass integrity, stress points, and finish condition.",
  },
  {
    title: "Fiberglass Repair",
    body: "Composite repair, lamination correction, and reinforcement where loads concentrate.",
  },
  {
    title: "Gelcoat Repair",
    body: "Surface restoration to original finish standard — colour, gloss, and protection.",
  },
  {
    title: "Detailing",
    body: "Hull, deck, and interior detailing for owner-grade presentation and protective finish.",
  },
  {
    title: "Electrical Systems",
    body: "Inspection and recommissioning of 12/24V systems, lighting, navigation, and communications.",
  },
  {
    title: "Mechanical Coordination",
    body: "Engine, drive, and steering checks coordinated with mechanical partners.",
  },
  {
    title: "Annual Service Plans",
    body: "Year-long programs covering scheduled service, inspections, and priority response.",
  },
  {
    title: "Emergency Response",
    body: "Rapid assessment and response for unscheduled marine events and damage.",
  },
  {
    title: "Fleet Maintenance",
    body: "Operational uptime programs for government, commercial, and patrol fleets.",
  },
];

/* ---------- Stats ------------------------------------------------------- */
window.KHA.stats = [
  { num: "20+", label: "Years on Gulf Waters" },
  { num: "300+", label: "Vessels Delivered" },
  { num: "7", label: "Emirates Served" },
  { num: "24/7", label: "Marine Support" },
];

/* ---------- Elite client logos ----------------------------------------- */
window.KHA.clients = [
  {
    name: "Dubai Police",
    file: "assets/logos/clients/dubai-police-logo-black.png",
  },
  {
    name: "UAE Civil Defense",
    file: "assets/logos/clients/Dubai-civil-defense-logo-black.png",
  },
  { name: "ADNOC", file: "assets/logos/clients/adnoc-logo-black.png" },
  {
    name: "Government of Dubai",
    file: "assets/logos/clients/dubai-government-logo-black.png",
  },
  {
    name: "UAE Coast Guard",
    file: "assets/logos/clients/coast-guards-logo-black.png",
  },
  {
    name: "Abu Dhabi Ports",
    file: "assets/logos/clients/abudhabi-ports-logo-black.png",
  },
];

/* ---------- Projects / case studies ------------------------------------ */
window.KHA.projects = [
  {
    title: "Government Patrol Fleet Build",
    tag: "Patrol",
    body: "Multi-vessel fiberglass patrol program for sustained Gulf operations — switch panels, FLIR-ready electrical, hardened decks.",
    image: "assets/images/boats/patrol-switch-panel.jpg",
  },
  {
    title: "Premium Leisure Build",
    tag: "Leisure",
    body: "Custom-spec fiberglass leisure vessel with quilted upholstery, teak deck, and Gulf-tuned hull profile.",
    image: "assets/images/boats/showcase-evening-bow.jpg",
  },
  {
    title: "Manufacturing — Hull Programme",
    tag: "Manufacturing",
    body: "Composite hull build from molded layup through scaffold-finishing, mold release, and surface preparation.",
    image: "assets/images/boats/manufacturing-hull-construction.jpg",
  },
  {
    title: "Interior & Fit-Out",
    tag: "Refit",
    body: "Full interior fit-out: custom cabinetry, refrigeration, teak flooring, and electrical recommissioning.",
    image: "assets/images/boats/manufacturing-cabin-fitout.jpg",
  },
  {
    title: "Cockpit & Helm Integration",
    tag: "Systems",
    body: "Triple-display Garmin navigation, Mercury engine controls, and command-grade cockpit layout for offshore use.",
    image: "assets/images/boats/showcase-cockpit-garmin.jpg",
  },
  {
    title: "Fleet Delivery & Sea Trial",
    tag: "Delivery",
    body: "Quad-engine commercial platform delivered with full sea-trial, owner training, and ongoing service plan.",
    image: "assets/images/boats/power-mercury-wake.jpg",
  },
];

/* ---------- FAQs (used on Contact / Maintenance) ----------------------- */
window.KHA.faqs = [
  {
    q: "Where is KHA Marine based?",
    a: "Our facilities are located in the United Arab Emirates, serving clients across the Gulf and beyond.",
  },
  {
    q: "Do you build custom boats?",
    a: "Yes — every KHA Marine project starts with a consultation and is engineered to operational and aesthetic specification.",
  },
  {
    q: "What materials do you use?",
    a: "Marine-grade fiberglass and composite materials selected for Gulf temperature, salinity, and load conditions.",
  },
  {
    q: "Do you support government and commercial fleets?",
    a: "Yes — patrol, security, port, and commercial fleets are a core focus of our work.",
  },
  {
    q: "Can you maintain boats not built by KHA Marine?",
    a: "Yes — our maintenance, fiberglass repair, and refit services are open to vessels of all manufacturers.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the contact form, WhatsApp us directly, or call. We respond to inquiries within one working day.",
  },
];

/* ---------- Divisions (Corporate Capability) --------------------------- */
window.KHA.divisions = [
  {
    id: "fiberglass",
    roman: "I",
    name: "Advanced Fiberglass",
    summary:
      "Elite vacuum-infusion composite vessels engineered for leisure and rapid intervention.",
    products: [
      {
        title: "Sport Fishing Boats",
        body: "Bespoke deep-sea platforms merging naval architecture with tactical sonar suites and modular deck layouts.",
        tag: "Naval architecture · Modular",
      },
      {
        title: "Search & Rescue",
        body: "Mission-critical assets with self-righting hull capabilities and reinforced composite impact zones.",
        tag: "High-speed · FLIR-ready",
      },
    ],
  },
  {
    id: "steel",
    roman: "II",
    name: "Steel Vessel Engineering",
    summary:
      "Heavy-duty marine steel for offshore personnel transport and industrial logistics.",
    products: [
      {
        title: "Crew Boats",
        body: "Grade-A steel hulls with triple/quad inboard propulsion — rapid personnel rotations for offshore O&G.",
        tag: "30+ knot · 40–60 pax",
      },
      {
        title: "Landing Crafts",
        body: "Hydraulic RoRo ramps engineered for 40T trucks and heavy machinery in undeveloped coastal zones.",
        tag: "Shallow draft · RoRo",
      },
    ],
  },
  {
    id: "water-transport",
    roman: "III",
    name: "Integrated Water Transport",
    summary:
      "High-capacity ferry networks, urban water taxis, and rapid marine medical services.",
    products: [
      {
        title: "Mass Transit Ferries",
        body: "Scalable ferries for 50–250+ passengers — IMO-certified, fuel-optimized hulls.",
        tag: "IMO-certified · 250+ pax",
      },
      {
        title: "Urban Water Taxis",
        body: "RTA-compliant shuttles for narrow canals — VIP hospitality and public transit standards.",
        tag: "RTA-compliant · Urban",
      },
      {
        title: "Marine Ambulance",
        body: "Rapid aquatic ICU units with shock-mitigated bays for riverine and coastal life-saving transit.",
        tag: "ICU bay · Rapid response",
      },
    ],
  },
];

/* ---------- Operational Assurance ------------------------------------- */
window.KHA.operationalAssurance = [
  {
    title: "Predictive Maintenance",
    body: "Condition-based monitoring and scheduled servicing to maximize vessel uptime.",
  },
  {
    title: "Dry-Docking & Refits",
    body: "Full shipyard services for structural repair, engine overhaul, and hull maintenance.",
  },
  {
    title: "Spare Parts Logistics",
    body: "Global OEM inventory with 24-hour dispatch to minimize operational downtime.",
  },
  {
    title: "24/7 Rapid Response",
    body: "Mobile technical teams ready for immediate dispatch — troubleshooting and urgent intervention.",
  },
];

/* ---------- Group of Companies ---------------------------------------- */
window.KHA.groupCompanies = [
  {
    slug: "mana-advisory",
    name: "MANA Advisory",
    discipline: "Advisory",
    descriptor:
      "Strategic advisory and capital guidance for regional infrastructure and maritime ventures.",
    bio: "MANA Advisory provides senior-level counsel on regional infrastructure programs, maritime project structuring, and capital deployment — bringing institutional rigour to complex, multi-stakeholder mandates across the UAE.",
    logo: "assets/logos/group/mana-advisory.png",
    url: null,
  },
  {
    slug: "kha-marine",
    name: "KHA Marine",
    discipline: "Marine Engineering",
    descriptor:
      "UAE-based marine engineering — fiberglass, steel, and water transport across three divisions.",
    bio: "KHA Marine designs, builds, and maintains advanced fiberglass and steel vessels alongside integrated water-transport systems — engineered in the UAE for Gulf operations and regional deployment.",
    logo: "assets/logos/group/kha-marine.png",
    url: "/",
  },
  {
    slug: "montaigne-design",
    name: "Montaigne Design",
    discipline: "Interior Architecture",
    descriptor:
      "High-end interior architecture and bespoke design for residential, marine, and hospitality projects.",
    bio: "Montaigne Design (MID) delivers premium interior architecture across residential, marine, and hospitality projects — bespoke material specification, custom millwork, and finish-grade execution.",
    /* TODO: client to supply final Montaigne Design / MID logo; render text-only placeholder until then */
    logo: null,
    url: null,
  },
  {
    slug: "serva",
    name: "SERVA",
    discipline: "Facility Management",
    descriptor:
      "Facility management and serviced operations for built environments and large-scale developments.",
    bio: "SERVA operates integrated facility management programs across residential, commercial, and mixed-use developments — combining technical maintenance, soft services, and operational reporting under one accountable provider.",
    logo: "assets/logos/group/serva.jpeg",
    url: null,
  },
  {
    slug: "suofeiya",
    name: "Suofeiya",
    discipline: "Cabinetry & Interiors",
    descriptor:
      "Premium custom cabinetry and home interior solutions — partner of the global Suofeiya brand.",
    bio: "Suofeiya brings the global brand's precision-manufactured custom cabinetry and full-home interior solutions to the UAE — wardrobes, kitchens, and integrated storage produced to specification.",
    logo: "assets/logos/group/suofeiya.png",
    url: null,
  },
  {
    slug: "dnake",
    name: "DNAKE",
    discipline: "Smart Building",
    descriptor:
      "Smart building, intercom, and IoT-enabled access systems for modern developments.",
    bio: "DNAKE supplies smart-building infrastructure — video intercom, IoT access control, and integrated building management systems — for residential towers, mixed-use developments, and commercial properties.",
    logo: "assets/logos/group/dnake.webp",
    url: null,
  },
  {
    slug: "buildtech-pro",
    name: "Build-Tech Pro",
    discipline: "Construction Tech",
    descriptor:
      "Specialist building technology products and integrated construction systems.",
    bio: "Build-Tech Pro distributes specialist building-technology products and integrated construction systems — supporting contractors and developers with engineered solutions for performance-critical builds.",
    logo: "assets/logos/group/buildtech-pro.svg",
    url: null,
  },
  /* TODO: confirm whether Jupiter belongs in this public listing — logo file received but absent from boss's "Part of Our Group" reference image. */
];

/* ---------- Arabic mirror copy for Divisions / Group ------------------- */
window.KHA.divisionsAr = [
  {
    id: "fiberglass",
    roman: "I",
    name: "الفايبر جلاس المتقدم",
    summary:
      "قوارب مركّبة من النخبة بتقنية التشريب بالتفريغ، مُهندَسة للترفيه والاستجابة السريعة.",
    products: [
      {
        title: "قوارب الصيد الرياضية",
        body: "منصات أعماق مخصصة تجمع الهندسة البحرية مع أنظمة السونار التكتيكية وتخطيطات السطح القابلة للتخصيص.",
        tag: "هندسة بحرية · تخصيص معياري",
      },
      {
        title: "البحث والإنقاذ",
        body: "أصول حرجة للمهام بقدرات هيكل ذاتي التصحيح ومناطق صدمات مركّبة معزَّزة.",
        tag: "سرعة عالية · جاهز للـ FLIR",
      },
    ],
  },
  {
    id: "steel",
    roman: "II",
    name: "هندسة القوارب الفولاذية",
    summary:
      "فولاذ بحري شاق لنقل الكوادر البحرية والخدمات اللوجستية الصناعية في عرض البحر.",
    products: [
      {
        title: "قوارب الطواقم",
        body: "هياكل فولاذية من الدرجة A بدفع داخلي ثلاثي/رباعي — تناوب سريع للكوادر لعمليات النفط والغاز البحرية.",
        tag: "+30 عقدة · 40–60 شخصًا",
      },
      {
        title: "قوارب الإنزال",
        body: "منحدرات RoRo هيدروليكية مُهندَسة لشاحنات 40 طنًا والمعدات الثقيلة في المناطق الساحلية غير المطورة.",
        tag: "غاطس ضحل · RoRo",
      },
    ],
  },
  {
    id: "water-transport",
    roman: "III",
    name: "النقل المائي المتكامل",
    summary:
      "شبكات عبّارات عالية السعة، تاكسي مائي حضري، وخدمات إسعاف بحري سريعة.",
    products: [
      {
        title: "عبّارات النقل الجماعي",
        body: "عبّارات قابلة للتوسعة بسعة 50 إلى أكثر من 250 راكبًا — معتمدة من IMO بهياكل محسَّنة للوقود.",
        tag: "معتمد IMO · +250 راكبًا",
      },
      {
        title: "التاكسي المائي الحضري",
        body: "خدمات نقل متوافقة مع RTA للقنوات الضيقة — معايير ضيافة كبار الشخصيات والنقل العام.",
        tag: "متوافق RTA · حضري",
      },
      {
        title: "الإسعاف البحري",
        body: "وحدات ICU مائية سريعة بحجرات ممتصة للصدمات لإنقاذ الأرواح في المناطق النهرية والساحلية.",
        tag: "ICU · استجابة سريعة",
      },
    ],
  },
];

window.KHA.operationalAssuranceAr = [
  {
    title: "الصيانة التنبؤية",
    body: "مراقبة قائمة على الحالة وخدمة مجدولة لتعظيم وقت تشغيل القارب.",
  },
  {
    title: "الأحواض الجافة وعمليات التجديد",
    body: "خدمات حوض بناء كاملة للإصلاحات الهيكلية ومراجعة المحركات وصيانة الهياكل.",
  },
  {
    title: "لوجستيات قطع الغيار",
    body: "مخزون OEM عالمي مع شحن خلال 24 ساعة لتقليل وقت التعطل التشغيلي.",
  },
  {
    title: "استجابة سريعة 24/7",
    body: "فِرَق فنية متنقلة جاهزة للإرسال الفوري — استكشاف الأعطال والتدخل العاجل.",
  },
];

window.KHA.groupCompaniesAr = [
  {
    slug: "mana-advisory",
    name: "مانا للاستشارات",
    discipline: "استشارات",
    descriptor:
      "استشارات استراتيجية وتوجيه لرأس المال للبنية التحتية الإقليمية والمشاريع البحرية.",
    bio: "تقدّم مانا للاستشارات مشورة بمستوى كبار التنفيذيين لبرامج البنية التحتية الإقليمية، وهيكلة المشاريع البحرية، ونشر رأس المال — مع جلب الانضباط المؤسسي للولايات المعقدة متعددة الأطراف في الإمارات.",
    logo: "assets/logos/group/mana-advisory.png",
    url: null,
  },
  {
    slug: "kha-marine",
    name: "كي إتش إيه مارين",
    discipline: "الهندسة البحرية",
    descriptor:
      "هندسة بحرية إماراتية — فايبر جلاس وفولاذ ونقل مائي عبر ثلاثة أقسام.",
    bio: "تُصمم كي إتش إيه مارين وتبني وتصون قوارب الفايبر جلاس والفولاذ المتقدمة إلى جانب أنظمة النقل المائي المتكاملة — مُهندَسة في الإمارات لعمليات الخليج والنشر الإقليمي.",
    logo: "assets/logos/group/kha-marine.png",
    url: "/",
  },
  {
    slug: "montaigne-design",
    name: "مونتاني للتصميم",
    discipline: "العمارة الداخلية",
    descriptor:
      "عمارة داخلية راقية وتصميم مخصص للمشاريع السكنية والبحرية والضيافة.",
    bio: "تقدّم مونتاني للتصميم (MID) عمارة داخلية متميزة عبر المشاريع السكنية والبحرية والضيافة — مواصفات مواد مخصصة وأعمال نجارة مخصصة وتنفيذ بدرجة لمسة نهائية.",
    logo: null,
    url: null,
  },
  {
    slug: "serva",
    name: "سيرفا",
    discipline: "إدارة المرافق",
    descriptor:
      "إدارة المرافق والعمليات المخدومة للبيئات المبنية والمشاريع الكبيرة.",
    bio: "تُشغل سيرفا برامج إدارة مرافق متكاملة عبر المشاريع السكنية والتجارية ومتعددة الاستخدامات — تجمع بين الصيانة التقنية والخدمات الناعمة والتقارير التشغيلية تحت مزود واحد مسؤول.",
    logo: "assets/logos/group/serva.jpeg",
    url: null,
  },
  {
    slug: "suofeiya",
    name: "سوفيا",
    discipline: "الخزائن والديكور",
    descriptor:
      "خزائن مخصصة فاخرة وحلول ديكور منزلية — شريك العلامة العالمية سوفيا.",
    bio: "تجلب سوفيا للإمارات خزائنها العالمية المُصنَّعة بدقة وحلول الديكور المنزلي الكاملة — خزائن الملابس والمطابخ والتخزين المتكامل، مُنتَجة بحسب المواصفات.",
    logo: "assets/logos/group/suofeiya.png",
    url: null,
  },
  {
    slug: "dnake",
    name: "دناك",
    discipline: "المباني الذكية",
    descriptor:
      "المباني الذكية والاتصال الداخلي وأنظمة الوصول بتقنية IoT للمشاريع الحديثة.",
    bio: "توفر دناك بنية تحتية للمباني الذكية — اتصال داخلي بالفيديو والتحكم في الوصول بـ IoT وأنظمة إدارة المباني المتكاملة — للأبراج السكنية والمشاريع متعددة الاستخدامات والعقارات التجارية.",
    logo: "assets/logos/group/dnake.webp",
    url: null,
  },
  {
    slug: "buildtech-pro",
    name: "بيلد-تك برو",
    discipline: "تقنية البناء",
    descriptor: "منتجات تقنية بناء متخصصة وأنظمة إنشاءات متكاملة.",
    bio: "توزع بيلد-تك برو منتجات تقنية البناء المتخصصة وأنظمة الإنشاءات المتكاملة — دعم المقاولين والمطورين بحلول مُهندَسة للإنشاءات الحرجة الأداء.",
    logo: "assets/logos/group/buildtech-pro.svg",
    url: null,
  },
];

/* ---------- Process timeline ------------------------------------------- */
window.KHA.process = [
  {
    num: "01",
    title: "Consultation",
    body: "We begin with operational, aesthetic, and budget alignment — establishing what the vessel must do.",
  },
  {
    num: "02",
    title: "Design & Hull Planning",
    body: "Hull selection, layout planning, and engineering review tailored to mission profile.",
  },
  {
    num: "03",
    title: "Mold & Fiberglass Prep",
    body: "Mold preparation, surface readiness, and gelcoat application under controlled conditions.",
  },
  {
    num: "04",
    title: "Composite Layup",
    body: "Hand-finished fiberglass layup with marine-grade resin systems and quality control at every layer.",
  },
  {
    num: "05",
    title: "Structural Reinforcement",
    body: "Reinforcement at stress points, stringers, transom, and load-bearing bulkheads.",
  },
  {
    num: "06",
    title: "Systems & Fit-Out",
    body: "Electrical, mechanical, deck hardware, interior, and finish work.",
  },
  {
    num: "07",
    title: "Finishing",
    body: "Surface fairing, paint, gelcoat finish, and presentation-grade detailing.",
  },
  {
    num: "08",
    title: "Quality Inspection",
    body: "Multi-stage inspection — hull integrity, systems function, sea trial.",
  },
  {
    num: "09",
    title: "Delivery & Support",
    body: "Hand-over, owner training, and continuing maintenance and service support.",
  },
];
