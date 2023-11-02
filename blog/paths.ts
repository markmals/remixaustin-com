import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const POSTS_SOURCE_DIR = path.join(__dirname, ".", "posts");
export const POSTS_BUILD_DIR = path.join(__dirname, "..", "public", "posts");
export const FRONT_MATTER_CACHE_FILENAME = "front-matter-cache.json";
export const PUBLIC_DIR = path.join(__dirname, "..", "public");
export const FRONT_MATTER_CACHE_FILEPATH = path.join(
  PUBLIC_DIR,
  FRONT_MATTER_CACHE_FILENAME
);
