const bookingUrl = "https://yandex.com/maps/org/studiya_manikyura/237621079241/?booking%5Bpage%5D=resources&booking%5Bpermalink%5D=237621079241&ll=37.883007%2C55.710063&z=17";
const service = (name, price = "по записи", time = "", description = "") => ({ name, price, time, description, url: bookingUrl });

const portfolioCount = 13;

export default {
  template: {
    profileType: "studio",
    serviceMode: "simple",
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
    heroCopy: "Маникюр и педикюр рядом с метро Улица Дмитриевского. Покрытие гель-лаком и предварительная запись на удобное время.",
    experienceYears: "",
    experienceAria: "",
    aboutTitle: "Sally Nails — студия маникюра",
    aboutLead: "Студия маникюра и педикюра на улице Дмитриевского.",
    aboutParagraphs: [
      "Основные направления — маникюр и педикюр с покрытием гель-лаком. В действующем предложении студии указаны материалы Uno, Gresa и Ega.",
      "Студия работает ежедневно с 10:00 до 21:00. Запись доступна заранее через онлайн-форму.",
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

  // The supplied Yandex card could not be read reliably by the build agent, so no Yandex score is invented.
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
    manicure: [
      service("Маникюр"),
      service("Маникюр с покрытием гель-лаком"),
      service("Аппаратный маникюр"),
    ],
    pedicure: [
      service("Педикюр"),
      service("Педикюр с покрытием гель-лаком"),
      service("Уход за стопами"),
    ],
  },

  serviceCategories: [],

  // We do not mix Biglion reviews with an unverified Yandex rating block.
  reviews: [],

  promotions: [
    {
      title: "−50% на маникюр и педикюр",
      highlight: "от 1 150 ₽ по акции",
      description: "Маникюр и педикюр с покрытием гель-лаком по действующему предложению Sally Nails на Biglion.",
      period: "до 2 марта 2027",
      image: "/assets/client/portfolio/01.png",
      alt: "Работа Sally Nails",
    },
  ],

  amenities: [
    { title: "Рядом с метро", text: "Улица Дмитриевского — несколько минут пешком" },
    { title: "Ежедневно", text: "Студия работает с 10:00 до 21:00" },
    { title: "Гель-лаки", text: "Uno, Gresa и Ega указаны в действующей акции" },
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
