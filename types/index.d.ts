type User = {
  userId: string,
  name: string,
  image?: string,
};

type Message = {
  _id?: string,
  chatId: string,
  partnerId: string,
  partnerName: string,
  senderId: string,
  senderName: string,
  message: string,
  timestamps: string,
};
