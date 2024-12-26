import React, { useState, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import type { Song } from '../../types';

interface Props {
  currentSong: Song | null;
  onNext: () => void;
  onPrevious: () => void;
}

export function MusicPlayer({ currentSong, onNext, onPrevious }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const width = bounds.width;
      const percentage = x / width;
      const newTime = percentage * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  if (!currentSong) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNext}
      />
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{currentSong.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{currentSong.artist}</p>
        </div>
        <Volume2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>

      <div
        className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-purple-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={onPrevious}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <SkipBack className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 text-white"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>

        <button
          onClick={onNext}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <SkipForward className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
}