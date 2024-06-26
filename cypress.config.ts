import { defineConfig } from "cypress";

export default defineConfig({
  retries: 3,
  e2e: {
    baseUrl: "http://172.17.32.1:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
