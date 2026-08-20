const bookingUrl = "https://yandex.com/maps/org/studiya_manikyura/237621079241/?booking%5Bpage%5D=resources&booking%5Bpermalink%5D=237621079241&ll=37.883007%2C55.710063&z=17";
const service = (name, price = "по записи", time = "", description = "") => ({ name, price, time, description, url: bookingUrl });

const portfolioCount = 13;

export default {
  template: {
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
    heroCopy: "Маникюр, педикюр и уход за ногтями рядом с метро Улица Дмитриевского. Аппаратные техники, покрытие гель-лаком и запись на удобное время.",
    experienceYears: "10+",
    experienceAria: "Более десяти лет работы студии",
    aboutTitle: "Sally Nails — студия маникюра",
    aboutLead: "Sally Nails — студия маникюра и педикюра на улице Дмитриевского.",
    aboutParagraphs: [
      "Студия работает в Кожухово и специализируется на маникюре, педикюре и покрытии гель-лаком. В открытых источниках также указаны мужской маникюр и аппаратные техники.",
      "Запись доступна заранее. Студия работает ежедневно, а до метро Улица Дмитриевского можно дойти за несколько минут.",
    ],
    skills: ["Маникюр", "Педикюр", "Покрытие гель-лаком"],
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
    portrait: "/assets/client/master.jpg",
    about: "/assets/client/master.jpg",
    favicon: "/assets/client/master.jpg",
    beforeAfter: [],
    gallery: Array.from({ length: portfolioCount }, (_, index) => ({
      src: `/assets/client/portfolio/${String(index + 1).padStart(2, "0")}.jpg`,
      alt: `Работа Sally Nails — фото ${index + 1}`,
    })),
  },

  services: {
    manicure: [
      service("Аппаратный маникюр"),
      service("Маникюр с покрытием гель-лаком"),
      service("Мужской маникюр"),
    ],
    pedicure: [
      service("Женский педикюр"),
      service("Педикюр с покрытием гель-лаком"),
      service("Аппаратный педикюр"),
    ],
  },

  serviceCategories: [
    {
      key: "manicure",
      label: "Маникюр",
      items: [
        service("Аппаратный маникюр"),
        service("Маникюр с покрытием гель-лаком"),
        service("Мужской маникюр"),
      ],
    },
    {
      key: "pedicure",
      label: "Педикюр",
      items: [
        service("Женский педикюр"),
        service("Педикюр с покрытием гель-лаком"),
        service("Аппаратный педикюр"),
      ],
    },
    {
      key: "brows",
      label: "Брови",
      items: [
        service("Коррекция бровей"),
        service("Окрашивание бровей"),
      ],
    },
  ],

  reviews: [
    {
      text: "Клиент отметила удобное расположение рядом с метро и аккуратный аппаратный маникюр.",
      author: "Дина Т.",
    },
  ],

  promotions: [
    {
      title: "−50% на маникюр и педикюр",
      highlight: "от 1 150 ₽ по акции",
      description: "Маникюр и педикюр с покрытием гель-лаком по действующему предложению партнёра Biglion.",
      period: "актуальность уточняйте при записи",
      image: "/assets/client/portfolio/01.jpg",
      alt: "Работа Sally Nails",
    },
  ],

  amenities: [
    { title: "Рядом с метро", text: "Улица Дмитриевского — несколько минут пешком" },
    { title: "Ежедневно", text: "Студия работает с 10:00 до 21:00" },
    { title: "Гель-лаки", text: "Маникюр и педикюр с покрытием" },
  ],

  seo: {
    title: "Sally Nails — маникюр и педикюр на Улице Дмитриевского",
    description: "Sally Nails — студия маникюра и педикюра в Москве, улица Дмитриевского, 3. Маникюр, педикюр, гель-лак и предварительная запись.",
    keywords: ["Sally Nails", "маникюр Улица Дмитриевского", "педикюр Улица Дмитриевского", "маникюр Кожухово", "ногтевая студия Дмитриевского"],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
