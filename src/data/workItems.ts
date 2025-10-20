export interface WorkItem {
  title: string;
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  url?: string;
  urlArray?: string[];
  details: string;
  role: string;
  tags: string[];
  id: string;
}

export const workItems: WorkItem[] = [
  {
    title: "XPEL",
    videoUrl: "/video/xpel-home.mp4",
    imageSrc: "/images/xpel-thumbnail.jpg",
    url: "https://xpel.com",
    details: "A headless e-commerce platform powered by Vue.js and Nuxt.js. Integrated with BigCommerce and Contentstack for robust product management and content delivery.",
    role: "Lead UI Developer, Technical Director",
    tags: ["Vue", "Nuxt", "Headless", "Animation"],
    id: "xpel"
  },
  {
    title: "Torus",
    imageSrc: "/images/torus-desktop.jpg",
    imageAlt: "Torus Homepage on a Laptop",
    url: "https://torus.co",
    details: "An expansive modular design system with a flexible library of components that adapts to evolving content needs. Built on a headless architecture using Vue.js, Nuxt.js and Dato CMS.",
    role: "Lead UI Developer, Technical Director",
    tags: ["Vue", "Nuxt", "Headless", "Animation"],
    id: "torus"
  },
  {
    title: "Yeti Cycles",
    videoUrl: "/video/yeti-desktop.mp4",
    imageSrc: "/images/yeti-thumbnail.jpg",
    urlArray: [
      "https://yeticycles.com/technology/sixfinity",
      "https://yeticycles.com/technology/switch-infinity"
    ],
    details: "An immersive web experience featuring rich GSAP and Vue animations, including scroll-driven video. Built on a headless architecture using Vue.js, Nuxt.js, BigCommerce and Prismic CMS.",
    role: "Component + Animation UI Development",
    tags: ["Vue", "Nuxt", "Headless", "Animation", "GSAP"],
    id: "yeti-cycles"
  },
  {
    title: "Great Lakes Wellness",
    imageSrc: "/images/glw-home.jpg",
    imageAlt: "Great Lakes Wellness Homepage on a Laptop",
    url: "https://greatlakeswellness.com",
    details: "A custom theme with a versatile design system and a rich component library built on Shopify 2.0.",
    role: "Lead UI Developer, Technical Director",
    tags: ["Shopify Plus"],
    id: "great-lakes-wellness"
  },
  {
    title: "MATCH Pewter",
    videoUrl: "/video/Match.mp4",
    imageSrc: "/images/match-thumbnail.jpg",
    url: "https://match1995.com",
    details: "An elevated e-commerce experience with a composable design system built on Shopify 2.0, resulting in a 58% year-over-year revenue growth and a 48% increase in conversion rates.",
    role: "Lead UI Developer, Technical Director",
    tags: ["Shopify Plus"],
    id: "match"
  },
  {
    title: "Howler Brothers",
    videoUrl: "/video/Howler.mp4",
    imageSrc: "/images/howler-thumbnail.jpg",
    url: "https://howlerbros.com",
    details: "A vibrant Shopify 2.0 e-commerce experience showcasing the brand's unique artwork. A custom, composable design system, powered by CSS variables, ensures brand adaptability.",
    role: "Lead UI Developer",
    tags: ["Shopify Plus"],
    id: "howler-brothers"
  },
  {
    title: "WS Development",
    imageSrc: "/images/ws-development_garden-city-center-home.jpg",
    imageAlt: "Garden City Center Homepage on a Laptop and iPhone screen",
    urlArray: [
      "https://gardencitycenter.com",
      "https://thestreetchestnuthill.com",
      "https://theshopsatfarmingtonvalley.com",
      "https://highlandvillagejxn.com",
      "https://hilldale.com",
      "https://bradleyfair.com"
    ],
    details: "WordPress multisite network of 8 websites built on a robust design system with shared components, unique branding and animations.",
    role: "Lead UI Developer, Technical Director",
    tags: ["Wordpress", "Animation", "GSAP"],
    id: "ws-development"
  },
  {
    title: "Charming Group",
    imageSrc: "/images/charming-group.jpg",
    imageAlt: "Charming Group Homepage on a Laptop",
    url: "https://charminggroup.com",
    details: "A headless web application built with Vue.js and Nuxt.js, featuring engaging animations powered by GSAP.",
    role: "Lead UI Developer",
    tags: ["Vue", "Nuxt", "Headless", "Animation", "GSAP"],
    id: "charming-group"
  }
];

