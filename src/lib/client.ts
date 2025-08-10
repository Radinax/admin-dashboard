import ky from "ky";
import { env } from "@/lib/env";

export const api = ky.extend({
  prefixUrl: env.API_URL,
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
  hooks: {
    afterResponse: [
      (request, _, response) => {
        if (!response.ok) {
          console.warn(`API request failed: ${request.url}`, response.status);
        }
      },
    ],
  },
});
