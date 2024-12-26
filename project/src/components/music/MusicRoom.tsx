import React from 'react';
import { MusicPlayer } from './MusicPlayer';
import { Playlist } from './Playlist';
import { useMusicPlayer } from '../../hooks/useMusicPlayer';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';
import { ParticipantList } from '../ParticipantList';
import type { ChatRoom } from '../../types';

interface Props {
  room: ChatRoom;
  onSendMessage: (content: string) => void;
}

export function MusicRoom({ room, onSendMessage }: Props) {
  const {
    currentSong,
    songs,
    handleNext,
    handlePrevious,
    handleSongSelect
  } = useMusicPlayer();

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col">
        <div className="bg-white dark:bg-gray-800 p-4 shadow">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{room.name}</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">{room.description}</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <MusicPlayer
              currentSong={currentSong}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>
          <div className="mb-6">
            <Playlist
              songs={songs}
              currentSong={currentSong}
              onSongSelect={handleSongSelect}
            />
          </div>
          <MessageList messages={room.messages} />
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <MessageInput onSend={onSendMessage} />
        </div>
      </div>

      <div className="w-64 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 p-4">
        <ParticipantList participants={room.participants} />
      </div>
    </div>
  );
}