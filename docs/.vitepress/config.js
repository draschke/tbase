let ogprefix = "og: http://ogp.me/ns#";
let title = "TBase - a medical clinical research platform build with SAP HANA XSA";
let description = "TBase - a medical clinical research platform build with SAP HANA XSA";
let color = "#f42525";
let author = "Dirk Raschke";
let email = "draschke@googlemail.com";

module.exports = {
  lang: "en-US",
  title: "TBase a clinical platform build with SAP HANA",
  description:
    "TBase - a medical clinical research platform build with SAP HANA XSA",
  // base: "/tbase/",
  head: [
    // ["link", { rel: "icon", href: `/assets/favicon.ico` }],
    ["meta", { name: "theme-color", content: color }],
    ["meta", { prefix: ogprefix, property: "og:title", content: title }],
    ["meta", { prefix: ogprefix, property: "og:type", content: "article" }],
    ["meta", { prefix: ogprefix, property: "og:url", content: "https://draschke.github.io/tbase/" }],
    ["meta", { prefix: ogprefix, property: "og:description", content: description }],
    ["meta", { prefix: ogprefix, property: "og:article:author", content: author }],
    ["meta", { prefix: ogprefix, property: "og:site_name", content: title }],
    ["meta", { prefix: ogprefix, property: "og:locale", content: "en_US" }],
    ["meta", { prefix: ogprefix, property: "og:locale:alternate", content: "en_GB" }],
    // means there are 3 images on this page, the first image is 300x300, the middle one has unspecified dimensions, and the last one is 1000px tall.
    // 1 1200X627
    ["meta", { prefix: ogprefix, property: "og:image", content: "https://draschke.github.io/tbase/tbase-clinic-1200_627.jpg" }],    
    ["meta", { prefix: ogprefix, property: "og:image:width", content: "1200" }],
    ["meta", { prefix: ogprefix, property: "og:image:height", content: "627" }],    
    // 2 600x314
    ["meta", { prefix: ogprefix, property: "og:image", content: "https://draschke.github.io/tbase/tbase-clinic-600_314.jpg" }],
    ["meta", { prefix: ogprefix, property: "og:image:width", content: "600" }],
    ["meta", { prefix: ogprefix, property: "og:image:height", content: "314" }],  
    // 3 unspecified
    ["meta", { prefix: ogprefix, property: "og:image", content: "https://draschke.github.io/tbase/tbase-clinic-1200_627.jpg" }],    
    ["meta", { prefix: ogprefix, property: "og:image:alt", content: title }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:creator", content: author }],
    ["meta", { name: "twitter:site", content: email }],
    ["meta", { name: "twitter:image:alt", content: title }],
    ["meta", { name: "twitter:image", content: "https://draschke.github.io/tbase/tbase-clinic-1200_627.jpg" }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "keywords", content: "tbase berlin uni charite, tbase berlin charite, tbase clinical platform, tbase sap hana xsa application, tbase sap hana clinical platform, tbase berlin clinical platform, tbase berlin clinical app, tbase berlin app, tbase sap hana clinical app, tbase sap clinical app, tbase sap xsa clinical app, tbase klinische Plattform, tbase digitale app, tbase sap hana xsa-Anwendung, tbase sap hana klinische Plattform, tbase berlin klinische Plattform, tbase berlin klinik app, tbase berlin app, tbase sap hana klinische App, tbase sap klinische App, tbase sap xsa klinische App, tbase sapui5, tbase sap, tbase fiori, tbase hospital" }],
    ["meta", { name: "author", content: author }],
    ["meta", { name: "google-site-verification", content: "fIcc0ZHuxODrjX67vMWV1Bm0JM-eGz04Fm4Fy6jAez0" }],

],  
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "draschke/tbase",
    docsDir: "docs",

    editLinks: false,
    // editLinkText: "Edit this page on GitHub",
    // lastUpdated: "Last Updated",

    nav: [
      { text: "Home", link: "/" }
      // {
      //   text: "Release Notes",
      //   link: "https://github.com/draschke/tbase/releases",
      // },
    ],

  },
};

