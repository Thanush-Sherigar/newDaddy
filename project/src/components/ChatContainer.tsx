import React from 'react';
import { MusicRoom } from './music/MusicRoom';
import { ChatRoom } from './ChatRoom';
import type { ChatRoom as ChatRoomType } from '../types';

interface Props {
  room: ChatRoomType;
  onSendMessage: (content: string) => void;
}

export function ChatContainer({ room, onSendMessage }: Props) {
  if (room.type === 'music') {
    return <MusicRoom room={room} onSendMessage={onSendMessage} />;
  }

  return <ChatRoom room={room} onSendMessage={onSendMessage} />;
}