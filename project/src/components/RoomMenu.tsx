import React from 'react';
import { Menu } from 'lucide-react';
import type { ChatRoom } from '../types';

interface Props {
  rooms: ChatRoom[];
  currentRoom: ChatRoom;
  onRoomChange: (room: ChatRoom) => void;
}

export function RoomMenu({ rooms, currentRoom, onRoomChange }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Open room menu"
      >
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-2">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => {
                  onRoomChange(room);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  currentRoom.id === room.id
                    ? 'bg-purple-100 dark:bg-purple-900'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="font-medium text-gray-900 dark:text-white">{room.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{room.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}