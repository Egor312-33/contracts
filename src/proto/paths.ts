import { join } from "path";

const ROOT_PATH = join(__dirname, "../../../contracts/proto");

export const PROTO_PATHS = {
  AUTH: join(ROOT_PATH, "auth.proto"),
  ACCOUNT: join(ROOT_PATH, "account.proto"),
  USERS: join(ROOT_PATH, "users.proto"),
} as const;
