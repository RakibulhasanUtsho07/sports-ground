import { auth } from "@/lib/auth"; // আপনার সার্ভার সাইড auth.js এর পাথ
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);