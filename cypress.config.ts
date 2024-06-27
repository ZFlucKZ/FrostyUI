import { defineConfig } from "cypress";

export default defineConfig({
  retries: 3,
  e2e: {
    baseUrl: "http://192.168.192.3:3001/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
