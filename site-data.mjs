const bookingUrl = "https://yandex.com/maps/org/studiya_manikyura/237621079241/?booking%5Bpage%5D=resources&booking%5Bpermalink%5D=237621079241&ll=37.883007%2C55.710063&z=17";
const service = (name, price, time = "", description = "") => ({ name, price, time, description, url: bookingUrl });

const portfolioCount = 13;

export default {
  template: {
    profileType: "studio",
    serviceMode: "categories",
    portfolioPreviewCount: 5,
  },

  brand: {
    name: "Sally Nails",
    subtitle: "Nail studio",
    monogram: "S",
  },

  master: {
    name: "Sally Nails",
    dative: "Sally Nails",
    genitive: "Sally Nails",
    monogram: "S",
    profession: "маникюра и педикюра",
    heroTitle: "Sally Nails — студия маникюра и педикюра",
    heroCopy: "Маникюр, педикюр, наращивание, дизайн и уход рядом с метро Улица Дмитриевского.",
    experienceYears: "",
    experienceAria: "",
    aboutTitle: "Sally Nails — студия маникюра",
    aboutLead: "Студия ногтевого сервиса на улице Дмитриевского.",
    aboutParagraphs: [
      "В прайсе — маникюр и педикюр, наращивание и ремонт, дизайн, уход за руками и стопами, а также услуги для бровей и ресниц.",
      "Студия работает ежедневно с 10:00 до 21:00. Запись доступна заранее через онлайн-форму.",
    ],
    skills: ["Маникюр и педикюр", "Наращивание и ремонт", "Дизайн и уход"],
  },

  location: {
    city: "Москва",
    metro: "м. Улица Дмитриевского",
    cityMetro: "Москва · м. Улица Дмитриевского",
    address: "Москва, улица Дмитриевского, 3",
    mapCardAddress: "улица Дмитриевского, 3",
    schedule: "ежедневно 10:00–21:00",
    scheduleCapitalized: "Ежедневно 10:00–21:00",
    latitude: 55.710063,
    longitude: 37.883007,
  },

  contacts: {
    phoneDisplay: "+7 967 322-05-05",
    phoneHref: "tel:+79673220505",
    personalTelegramUrl: "",
    channelTelegramUrl: "",
  },

  links: {
    bookingUrl,
    bookingWidgetScriptUrl: "/noop.js",
    reviewsUrl: "https://yandex.com/maps/org/studiya_manikyura/237621079241/reviews/",
    mapUrl: "https://yandex.com/maps/org/studiya_manikyura/237621079241/?ll=37.883007%2C55.710063&z=17",
    routeUrl: "https://yandex.ru/maps/?mode=routes&rtext=~55.710063%2C37.883007&rtt=auto",
    mobileMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.883007%2C55.710063&mode=search&oid=237621079241&ol=biz&z=17",
    desktopMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.883007%2C55.710063&mode=search&oid=237621079241&ol=biz&z=17",
    yandexMapHrefMatch: "yandex.com/maps/org/studiya_manikyura/237621079241",
  },

  reputation: {
    rating: "",
    reviewCount: "",
  },

  images: {
    portrait: "/assets/client/master.png",
    about: "/assets/client/master.png",
    favicon: "/assets/client/master.png",
    beforeAfter: [],
    gallery: Array.from({ length: portfolioCount }, (_, index) => ({
      src: `/assets/client/portfolio/${String(index + 1).padStart(2, "0")}.png`,
      alt: `Работа Sally Nails — фото ${index + 1}`,
    })),
  },

  services: {
    manicure: [],
    pedicure: [],
  },

  serviceCategories: [
    {
      key: "manicure",
      label: "Маникюр",
      items: [
        service("Маникюр: аппаратный, классический или комбинированный", "1 200 ₽", "40 мин"),
        service("Маникюр классический женский", "1 200 ₽", "40 мин"),
        service("Маникюр мужской", "1 600 ₽", "40 мин"),
        service("Маникюр + покрытие гель-лаком", "2 500 ₽", "1 ч 30 мин"),
        service("Комплекс: маникюр + покрытие гель-лаком + снятие + выравнивание", "3 000 ₽", "2 ч"),
        service("Снятие гель-лака", "400 ₽", "15 мин"),
        service("Укрепление гелем", "600 ₽", "20 мин"),
        service("Укрепление базы", "400 ₽", "20 мин"),
        service("Укрепление акриловой пудрой", "500 ₽", "20 мин"),
        service("Маникюр с гель-лаком + SMART-педикюр с гель-лаком", "6 000 ₽", "4 ч"),
      ],
    },
    {
      key: "pedicure",
      label: "Педикюр",
      items: [
        service("Комбинированный педикюр", "2 600 ₽", "2 ч"),
        service("Классический педикюр", "2 400 ₽", "2 ч"),
        service("Мужской педикюр", "3 000 ₽", "2 ч"),
        service("Педикюр SMART + покрытие гель-лаком", "3 500 ₽", "2 ч"),
        service("Обработка ногтей пальцев ног", "1 500 ₽", "40 мин"),
        service("Обработка пяток", "1 300 ₽", "40 мин"),
        service("Обработка одной мозоли / натоптыша", "300 ₽", "30 мин"),
        service("Обработка вросшего ногтя, 1 ноготь", "500 ₽", "20 мин"),
        service("SPA-уход для ног: скраб, маска, массаж", "500 ₽", "20 мин"),
        service("Парафинотерапия для ног", "500 ₽", "20 мин"),
      ],
    },
    {
      key: "extensions",
      label: "Наращивание и ремонт",
      items: [
        service("Наращивание ногтей", "4 000 ₽", "2 ч 30 мин"),
        service("Наращивание одного ногтя", "380 ₽", "25 мин"),
        service("Ремонт ногтя", "400 ₽", "20 мин"),
        service("Ремонт 1 ногтя гелем", "400 ₽", "5 мин"),
        service("Снятие наращенных ногтей", "600 ₽", "30 мин"),
        service("Укрепление акриловой пудрой — ремонт ногтя", "400 ₽", "20 мин"),
      ],
    },
    {
      key: "design-care",
      label: "Дизайн и уход",
      items: [
        service("Дизайн ногтя", "от 150 ₽", "25 мин"),
        service("Аппликация, 1 ноготь: блёстки, стразы, наклейки", "от 100 ₽", "15 мин"),
        service("Художественная роспись, 1 ноготь", "150 ₽", "15 мин"),
        service("Покрытие лечебным лаком", "300 ₽", "15 мин"),
        service("Покрытие магнитным лаком — кошачий глаз", "300 ₽", "30 мин"),
        service("Покрытие ногтей гель-лаком — френч", "500 ₽", "40 мин"),
        service("Втирка — дизайн", "400 ₽", "30 мин"),
        service("Выравнивание ногтевой пластины", "400 ₽", "10 мин"),
        service("Нанесение светоотражающего гель-лака", "300 ₽", "5 мин"),
        service("SPA-уход для рук: скраб, маска, лосьон, массаж", "500 ₽", "25 мин"),
        service("Парафинотерапия для рук", "500 ₽", "20 мин"),
      ],
    },
    {
      key: "brows-lashes",
      label: "Брови и ресницы",
      items: [
        service("Архитектура бровей", "700 ₽", "25 мин"),
        service("Окрашивание бровей", "700 ₽", "25 мин"),
        service("Окрашивание ресниц", "700 ₽", "25 мин"),
      ],
    },
  ],

  reviews: [],

  promotions: [
    {
      title: "−50% на маникюр и педикюр",
      highlight: "от 1 150 ₽ по акции",
      description: "Маникюр и педикюр с покрытием гель-лаком по действующему предложению Sally Nails на Biglion.",
      period: "до 2 марта 2027",
      image: "/assets/client/portfolio/01.png",
      alt: "Акция Sally Nails",
    },
  ],

  amenities: [
    { title: "Рядом с метро", text: "Улица Дмитриевского — несколько минут пешком" },
    { title: "Ежедневно", text: "Студия работает с 10:00 до 21:00" },
    { title: "Полный прайс", text: "Маникюр, педикюр, дизайн, ремонт и уход" },
  ],

  seo: {
    title: "Sally Nails — маникюр и педикюр на Улице Дмитриевского",
    description: "Sally Nails — студия ногтевого сервиса в Москве, улица Дмитриевского, 3. Маникюр, педикюр, наращивание, дизайн и предварительная запись.",
    keywords: ["Sally Nails", "маникюр Улица Дмитриевского", "педикюр Улица Дмитриевского", "маникюр Кожухово", "ногтевая студия Дмитриевского"],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
