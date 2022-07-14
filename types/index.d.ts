type User = {
  userId: string,
  name: string,
  image?: string,
};

type Message = {
  chatId: string,
  partnerId: string,
  partnerName: string,
  senderId: string,
  senderName: string,
  message: string,
  timestamps: string,
};
