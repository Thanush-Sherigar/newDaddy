import React from 'react';
import { Header } from './components/Header';
import { ChatContainer } from './components/ChatContainer';
import { useChatRoom } from './hooks/useChatRoom';

export default function App() {
  const { room, rooms, handleSendMessage, setCurrentRoom } = useChatRoom();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Header 
        rooms={rooms}
        currentRoom={room}
        onRoomChange={setCurrentRoom}
      />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow h-[600px] overflow-hidden">
          <ChatContainer room={room} onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}