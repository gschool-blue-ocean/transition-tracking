export default {
  root: "src",
  build: {
    outDir: "../dist",
  },
  server: {
    proxy: {
      "/api": process.env.API_URL,
    },
    port: process.env.PORT,
  },
  test: {
    environment: "jsdom",
    watch: false,
  },
};
