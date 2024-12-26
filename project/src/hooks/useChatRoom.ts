import { useState } from 'react';
import { sampleData } from '../data/sampleData';
import type { ChatRoom } from '../types';

export function useChatRoom() {
  const [currentRoom, setCurrentRoom] = useState<ChatRoom>(sampleData.rooms[0]);
  const [rooms] = useState<ChatRoom[]>(sampleData.rooms);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      senderId: sampleData.currentCat.id,
      content,
      timestamp: Date.now()
    };
    
    currentRoom.messages.push(newMessage);
  };

  return { 
    room: currentRoom, 
    rooms,
    handleSendMessage,
    setCurrentRoom
  };
}