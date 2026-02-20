import { Folder } from "../../gen/ts/media";

export interface AvatarRequestedEvent {
  identifier: string;
  folder: Folder;
  url: string;
  updatedAt: string;
}
