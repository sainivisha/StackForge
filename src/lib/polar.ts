import { Polar } from "@polar-sh/sdk";

export const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESSS_TOKEN,
  server: "sandbox", //TODO: change to production when ready
});