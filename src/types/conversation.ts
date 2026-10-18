export type MessageStatus = "sent" | "delivered" | "read";
export type MessageSender = "me" | "them";

export type DateItem = {
  id: string;
  type: "date";
  text: string;
};

export type ConversationMessage = {
  id: string;
  from: MessageSender;
  type: "text" | "voice" | "image";
  text: string;
  time: string;
  status: MessageStatus;
  duration?: string;
  src?: string;
  caption?: string;
  layout?: "receipt" | "sticker";
};

export type ConversationItem = DateItem | ConversationMessage;

export type Conversation = {
  contact: {
    name: string;
    phone: string;
    about: string;
    avatar: string;
    statusText: string;
  };
  messages: ConversationItem[];
};
