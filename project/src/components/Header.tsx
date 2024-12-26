import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { RoomMenu } from './RoomMenu';
import type { ChatRoom } from '../types';

interface Props {
  rooms: ChatRoom[];
  currentRoom: ChatRoom;
  onRoomChange: (room: ChatRoom) => void;
}

export function Header({ rooms, currentRoom, onRoomChange }: Props) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <RoomMenu 
              rooms={rooms}
              currentRoom={currentRoom}
              onRoomChange={onRoomChange}
            />
            <div className="flex items-center gap-2">
              <MessageCircle className="w-8 h-8 text-purple-500" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PussyWhisper</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Private Cat Conversations</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}