import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  region?: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr', region: 'Global / UAE' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', dir: 'rtl', region: 'UAE & GCC (اللغة الرسمية)' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', dir: 'rtl', region: 'Pakistan & UAE Community' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr', region: 'India & UAE Community' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', dir: 'ltr', region: 'Russia & CIS Clients' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr', region: 'France & Europe' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', dir: 'ltr', region: 'China & Investors' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', dir: 'rtl', region: 'Iran & Middle East' },
  { code: 'tl', name: 'Filipino / Tagalog', nativeName: 'Tagalog', flag: '🇵🇭', dir: 'ltr', region: 'Philippines' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr', region: 'Germany & DACH' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr', region: 'Italy' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr', region: 'Spain & Latin America' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr', region: 'Turkey' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', dir: 'ltr', region: 'Bangladesh' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', dir: 'ltr', region: 'Kerala & Gulf' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', dir: 'ltr', region: 'India & Singapore' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', dir: 'ltr', region: 'Punjab & UAE' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr', region: 'Indonesia' },
];

// Core UI translation strings for instant instant client-side rendering
const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_windows: 'Windows',
    nav_majlis: 'Majlis',
    nav_tents: 'Tents (خيام)',
    nav_railings: 'Railings',
    nav_projects: 'Projects',
    nav_why_us: 'Why Us',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    btn_free_quote: 'Get a Free Quote',
    btn_chat_whatsapp: 'Chat on WhatsApp',
    btn_call_engineer: 'Call Engineer',
    hero_badge: 'ISO Certified Architectural Fabrication • Abu Dhabi & Dubai',
    hero_title_1: 'Master Craftsmanship in',
    hero_title_highlight: 'Aluminium & Glass',
    hero_desc: 'Specializing in Kuwaiti steel winter tents, Tabuk Majlis with Spanish Qarmeed, 10cm/10.5cm acoustic windows, multi-slide doors, and curtain wall facades across the UAE.',
    lang_modal_title: 'Select Your Preferred Language',
    lang_modal_subtitle: 'Choose your language to browse all services, technical specs, and estimates seamlessly.',
    lang_search_placeholder: 'Search language / ابحث عن لغة...',
    active_language: 'Current Language',
    instant_switch: 'Instant Switch',
    switch_lang_btn: 'Language'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'الخدمات',
    nav_windows: 'النوافذ',
    nav_majlis: 'المجالس',
    nav_tents: 'الخيام الشتوية',
    nav_railings: 'الدرابزين',
    nav_projects: 'المشاريع',
    nav_why_us: 'لماذا سيلفر شيد',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا',
    btn_free_quote: 'طلب عرض سعر مجاني',
    btn_chat_whatsapp: 'محادثة واتساب مباشرة',
    btn_call_engineer: 'اتصل بالمهندس',
    hero_badge: 'مصنع معتمد لأعمال الألمنيوم والزجاج • أبوظبي ودبي',
    hero_title_1: 'قمة الإتقان الهندسي في',
    hero_title_highlight: 'الألمنيوم والزجاج المعماري',
    hero_desc: 'متخصصون في خيام الشتاء سيف حديد كويتي، مجالس طابوق وقرميد اسباني، نوافذ عازلة 10 و 10.5 سم، أبواب سلايدنج، وواجهات كرتن وول في كافة الإمارات.',
    lang_modal_title: 'اختر لغتك المفضلة',
    lang_modal_subtitle: 'تصفح جميع الخدمات والمواصفات الهندسية وحاسبة التكلفة بلغتك الأم بسهولة.',
    lang_search_placeholder: 'ابحث عن لغة / Search language...',
    active_language: 'اللغة الحالية',
    instant_switch: 'تبديل فوري',
    switch_lang_btn: 'اللغة'
  },
  ur: {
    nav_home: 'ہوم',
    nav_about: 'ہمارے بارے میں',
    nav_services: 'خدمات',
    nav_windows: 'کھڑکیاں (ونڈوز)',
    nav_majlis: 'مجلس طابوق',
    nav_tents: 'کویتی خیمے',
    nav_railings: 'ریلنگز',
    nav_projects: 'منصوبے (پروجیکٹس)',
    nav_why_us: 'ہم کیوں؟',
    nav_faq: 'عام سوالات',
    nav_contact: 'رابطہ کریں',
    btn_free_quote: 'مفت کوٹیشن حاصل کریں',
    btn_chat_whatsapp: 'واٹس ایپ پر رابطہ کریں',
    btn_call_engineer: 'انجینئر سے بات کریں',
    hero_badge: 'سرٹیفائیڈ ایلومینیم اور گلاس فیکٹری • ابوظبی اور دبئی',
    hero_title_1: 'بہترین اور پائیدار کوالٹی میں',
    hero_title_highlight: 'ایلومینیم اور گلاس ورکس',
    hero_desc: 'کویتی اسٹائل سرمائی خیمے، طابوق مجلس اور ہسپانوی قرمید، 10 اور 10.5 سینٹی میٹر سلائیڈنگ ونڈوز، کرٹن وال اور گلاس کیبنٹس یو اے ای بھر میں۔',
    lang_modal_title: 'اپنی پسندیدہ زبان منتخب کریں',
    lang_modal_subtitle: 'تمام خدمات، تکنیکی تفصیلات اور قیمتوں کا تخمینہ آسانی سے اپنی زبان میں دیکھیں۔',
    lang_search_placeholder: 'زبان تلاش کریں...',
    active_language: 'موجودہ زبان',
    instant_switch: 'فوری تبدیلی',
    switch_lang_btn: 'زبان'
  },
  hi: {
    nav_home: 'होम',
    nav_about: 'हमारे बारे में',
    nav_services: 'सेवाएं',
    nav_windows: 'खिड़कियां (Windows)',
    nav_majlis: 'मजलिस (Majlis)',
    nav_tents: 'कुवैती टेंट (Tents)',
    nav_railings: 'रेलिंग्स',
    nav_projects: 'प्रोजेक्ट्स',
    nav_why_us: 'हमें क्यों चुनें',
    nav_faq: 'अक्सर पूछे जाने वाले सवाल',
    nav_contact: 'संपर्क करें',
    btn_free_quote: 'फ्री कोटेशन प्राप्त करें',
    btn_chat_whatsapp: 'व्हाट्सएप पर चैट करें',
    btn_call_engineer: 'इंजीनियर से बात करें',
    hero_badge: 'प्रमाणित एल्युमिनियम और ग्लास निर्माण • अबू धाबी और दुबई',
    hero_title_1: 'सर्वश्रेष्ठ गुणवत्ता और शिल्प कौशल',
    hero_title_highlight: 'एल्युमिनियम और ग्लास वर्क्स',
    hero_desc: 'कुवैती विंटर टेंट, ताबूक मजलिस और स्पैनिश कारमीद, 10 सेमी / 10.5 सेमी साउंडप्रूफ खिड़कियां, स्लाइडिंग दरवाजे और कर्टन वॉल यूएई भर में।',
    lang_modal_title: 'अपनी पसंदीदा भाषा चुनें',
    lang_modal_subtitle: 'सभी सेवाओं और तकनीकी विशिष्टताओं को अपनी भाषा में आसानी से देखें।',
    lang_search_placeholder: 'भाषा खोजें...',
    active_language: 'वर्तमान भाषा',
    instant_switch: 'तुरंत बदलें',
    switch_lang_btn: 'भाषा'
  },
  ru: {
    nav_home: 'Главная',
    nav_about: 'О компании',
    nav_services: 'Услуги',
    nav_windows: 'Окна',
    nav_majlis: 'Маджлис',
    nav_tents: 'Шатры',
    nav_railings: 'Перила',
    nav_projects: 'Проекты',
    nav_why_us: 'Преимущества',
    nav_faq: 'Вопросы и ответы',
    nav_contact: 'Контакты',
    btn_free_quote: 'Получить расчет стоимости',
    btn_chat_whatsapp: 'Написать в WhatsApp',
    btn_call_engineer: 'Позвонить инженеру',
    hero_badge: 'Сертифицированное производство алюминия и стекла • Абу-Даби и Дубай',
    hero_title_1: 'Безупречное мастерство в сфере',
    hero_title_highlight: 'Алюминия и Стекла',
    hero_desc: 'Кувейтские зимние шатры, традиционные маджлисы с черепицей, 10см раздвижные окна, стеклянные перегородки и фасады по всему ОАЭ.',
    lang_modal_title: 'Выберите ваш язык',
    lang_modal_subtitle: 'Просматривайте каталог, технические параметры и расчет стоимости на родном языке.',
    lang_search_placeholder: 'Поиск языка...',
    active_language: 'Текущий язык',
    instant_switch: 'Мгновенный выбор',
    switch_lang_btn: 'Язык'
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_services: 'Services',
    nav_windows: 'Fenêtres',
    nav_majlis: 'Majlis',
    nav_tents: 'Tentes d’hiver',
    nav_railings: 'Garde-corps',
    nav_projects: 'Projets',
    nav_why_us: 'Pourquoi nous',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    btn_free_quote: 'Demander un devis gratuit',
    btn_chat_whatsapp: 'Discuter sur WhatsApp',
    btn_call_engineer: 'Appeler l’ingénieur',
    hero_badge: 'Fabrication certifiée en aluminium et verre • Abu Dhabi et Dubaï',
    hero_title_1: 'Artisanat et ingénierie de précision en',
    hero_title_highlight: 'Aluminium et Verre',
    hero_desc: 'Tentes d’hiver koweïtiennes, majlis traditionnels Tabuk avec tuiles espagnoles, fenêtres coulissantes 10cm, portes et façades en verre aux EAU.',
    lang_modal_title: 'Choisissez votre langue',
    lang_modal_subtitle: 'Consultez les spécifications techniques et calculez vos devis dans votre langue.',
    lang_search_placeholder: 'Rechercher une langue...',
    active_language: 'Langue actuelle',
    instant_switch: 'Changement direct',
    switch_lang_btn: 'Langue'
  },
  'zh-CN': {
    nav_home: '首页',
    nav_about: '关于我们',
    nav_services: '服务项目',
    nav_windows: '铝合金门窗',
    nav_majlis: '传统凉亭',
    nav_tents: '科威特冬季帐篷',
    nav_railings: '玻璃栏杆',
    nav_projects: '工程案例',
    nav_why_us: '核心优势',
    nav_faq: '常见问题',
    nav_contact: '联系我们',
    btn_free_quote: '获取免费报价',
    btn_chat_whatsapp: 'WhatsApp 咨询',
    btn_call_engineer: '拨打工程师电话',
    hero_badge: '阿布扎比与迪拜认证铝合金及玻璃工程制造厂',
    hero_title_1: '卓越工程品质与精湛工艺',
    hero_title_highlight: '铝合金与建筑玻璃系统',
    hero_desc: '专注于科威特钢构玻璃冬季帐篷、西班牙瓦传统凉亭、10cm/10.5cm隔音推拉窗、幕墙系统及全铝橱柜。',
    lang_modal_title: '选择您的首选语言',
    lang_modal_subtitle: '以您的母语浏览所有工程服务、技术规格与价格计算器。',
    lang_search_placeholder: '搜索语言...',
    active_language: '当前语言',
    instant_switch: '即时切换',
    switch_lang_btn: '语言'
  }
};

interface LanguageContextType {
  currentLanguage: LanguageOption;
  setLanguage: (langCode: string) => void;
  isRtl: boolean;
  t: (key: string, fallback?: string) => string;
  isLanguageModalOpen: boolean;
  openLanguageModal: () => void;
  closeLanguageModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLangCode, setCurrentLangCode] = useState<string>('en');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);

  // Initialize language on mount
  useEffect(() => {
    // 1. Check local storage
    const savedLang = localStorage.getItem('silver_shade_lang');
    if (savedLang && SUPPORTED_LANGUAGES.some(l => l.code === savedLang)) {
      applyLanguage(savedLang, false);
      return;
    }

    // 2. Check browser preference
    const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
    const primaryCode = browserLang.split('-')[0].toLowerCase();
    
    // Check exact or primary match
    const match = SUPPORTED_LANGUAGES.find(l => l.code === browserLang || l.code === primaryCode);
    if (match) {
      applyLanguage(match.code, false);
    } else {
      applyLanguage('en', false);
    }
  }, []);

  const triggerGoogleTranslate = (langCode: string) => {
    try {
      // Set cookie for Google Translate
      const domain = window.location.hostname;
      const cookieVal = `/en/${langCode}`;
      
      // Standard googtrans cookies
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${domain};`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${domain};`;

      // Trigger select combo if available
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change'));
      }
    } catch (e) {
      console.warn('Google translate trigger caught:', e);
    }
  };

  const applyLanguage = useCallback((langCode: string, triggerTranslate = true) => {
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === langCode) || SUPPORTED_LANGUAGES[0];
    setCurrentLangCode(langObj.code);
    localStorage.setItem('silver_shade_lang', langObj.code);

    // Apply RTL / LTR dynamically to HTML root
    const root = document.documentElement;
    root.setAttribute('lang', langObj.code);
    root.setAttribute('dir', langObj.dir);

    // Arabic / Urdu specific class for font pairing
    if (langObj.dir === 'rtl') {
      root.classList.add('rtl-layout');
    } else {
      root.classList.remove('rtl-layout');
    }

    if (triggerTranslate) {
      triggerGoogleTranslate(langObj.code);
    }
  }, []);

  const setLanguage = (langCode: string) => {
    applyLanguage(langCode, true);
  };

  const currentLanguage = SUPPORTED_LANGUAGES.find(l => l.code === currentLangCode) || SUPPORTED_LANGUAGES[0];
  const isRtl = currentLanguage.dir === 'rtl';

  const t = (key: string, fallback?: string): string => {
    const langDict = TRANSLATIONS[currentLangCode] || TRANSLATIONS.en;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
      return TRANSLATIONS.en[key];
    }
    return fallback || key;
  };

  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        isRtl,
        t,
        isLanguageModalOpen,
        openLanguageModal,
        closeLanguageModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
