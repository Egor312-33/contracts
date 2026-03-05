import { join } from "path";

const ROOT_PATH = join(__dirname, "../../../contracts/proto");

export const PROTO_PATHS = {
  AUTH: join(ROOT_PATH, "auth.proto"),
  ACCOUNT: join(ROOT_PATH, "account.proto"),
  USERS: join(ROOT_PATH, "users.proto"),
  MEDIA: join(ROOT_PATH, "media.proto"),
  VIDEO: join(ROOT_PATH, "video.proto"),
  CATEGORY: join(ROOT_PATH, "category.proto"),
} as const;
