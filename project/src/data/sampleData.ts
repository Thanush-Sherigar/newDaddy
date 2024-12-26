import type { Cat, ChatRoom } from '../types';

export const currentCat: Cat = {
  id: '1',
  name: 'Whiskers',
  avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=100&h=100',
  status: 'online'
};

export const rooms: ChatRoom[] = [
  {
    id: '1',
    name: 'Secret Whispers',
    isPrivate: true,
    type: 'public',
    description: 'Private conversations for mysterious cats',
    participants: [currentCat],
    messages: []
  },
  {
    id: '2',
    name: 'Unrestricted Meows',
    isPrivate: false,
    type: 'unrestricted',
    description: 'Raw and unfiltered cat conversations',
    participants: [currentCat],
    messages: []
  },
  {
    id: '3',
    name: 'Chill Corner',
    isPrivate: false,
    type: 'chill',
    description: 'Relaxed vibes for laid-back cats',
    participants: [currentCat],
    messages: []
  },
  {
    id: '4',
    name: 'Purr & Play',
    isPrivate: false,
    type: 'music',
    description: 'Share and enjoy music with fellow cats',
    participants: [currentCat],
    messages: []
  }
];

export const sampleData = {
  currentCat,
  rooms
};