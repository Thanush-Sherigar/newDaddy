export interface Cat {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
}

export interface ChatRoom {
  id: string;
  name: string;
  isPrivate: boolean;
  type: 'public' | 'unrestricted' | 'chill' | 'music';
  participants: Cat[];
  messages: Message[];
  description: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: number;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: number;
}