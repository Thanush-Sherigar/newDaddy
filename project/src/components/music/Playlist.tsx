import React from 'react';
import { Music } from 'lucide-react';
import type { Song } from '../../types';

interface Props {
  songs: Song[];
  currentSong: Song | null;
  onSongSelect: (song: Song) => void;
}

export function Playlist({ songs, currentSong, onSongSelect }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Playlist</h3>
      <div className="space-y-2">
        {songs.map((song) => (
          <button
            key={song.id}
            onClick={() => onSongSelect(song)}
            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
              currentSong?.id === song.id
                ? 'bg-purple-100 dark:bg-purple-900'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Music className="w-5 h-5 text-purple-500" />
            <div className="text-left">
              <p className="font-medium text-gray-900 dark:text-white">{song.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{song.artist}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}