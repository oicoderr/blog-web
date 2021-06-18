module.exports = {
  server: {
    port: "80",
    host: "0.0.0.0"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Headers of the page
   */
  head: {
    title: "Pydw",
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "cleartype", content: "on" },
      { "http-equiv": "Cache-Control" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: "Pydw, 前端开发, blog"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "前端开发，JavaScript, Python, Vue，nuxt"
      },
      { name: "author", content: "849656290@qq.com" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js" },
      { src: "https://cdn.bootcss.com/highlight.js/9.12.0/highlight.min.js" }
    ]
  },
  css: ["~assets/css/init.css", "~assets/css/codeStyle.css"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios"],
    analyze: true, // 开启打包分析
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  cache: true
};
