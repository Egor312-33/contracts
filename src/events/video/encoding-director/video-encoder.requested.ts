import { EncodingContainer, EncodingId } from "../../messages";

export interface VideoEncodingRequestedEvent {
  videoId: string;
  location: string;
  videoContainer: string;
  encoding: EncodingArtifact;
}

export interface EncodingArtifact {
  id: EncodingId;
  container: EncodingContainer;
  width: number;
  height: number;
  bitrate?: number;
  fps?: number;
}
