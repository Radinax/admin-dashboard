import { env } from "@/lib/env";
import ky from "ky";

export const api = ky.extend({
  prefixUrl: env.API_URL,
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // TO-DO handle error response via afterResponse
});
