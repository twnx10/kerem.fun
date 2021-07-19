const description =
  "Young developer from Turkey, interested in languages, gaming, and programming, trying to improve his Javascript skills!"

export default {
  title: "kerem.fun",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@Twn",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@Twn",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "kerem.fun",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: "/icon.png",
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "kerem.fun",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://kerem.fun/icon.png",
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#111827",
    },
  ].map((i) => {
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://kerem.fun/favicon.ico",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Kerem's Blog",
      href: "https://kerem.fun/opensearch.xml",
    },
  ],
}
