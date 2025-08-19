import { HttpsProxyAgent } from "https-proxy-agent";
import dotenv from "dotenv";
dotenv.config();
export const proxyAgent = new HttpsProxyAgent(
  `http://${process.env.DECODE_PROXY_USERNAME}:${process.env.DECODE_PROXY_PASSWORD}@in.decodo.com:10001`
);
