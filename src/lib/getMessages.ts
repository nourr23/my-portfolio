import fs from "fs";
import path from "path";

export async function getMessages(locale: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    `${locale}.json`
  );
  const messages = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return messages;
}
