import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const slogan =
  "Your Solana wallet agent is a butler for your money: it watches, warns, and only moves when you say.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, slogan, "utf8");
