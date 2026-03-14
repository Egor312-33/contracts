export interface NotificationLoginEvent {
  userId: string;
  chatId: string;
  messageId: string;
  content: string;
  authTag: string;
  iv: string;
}
