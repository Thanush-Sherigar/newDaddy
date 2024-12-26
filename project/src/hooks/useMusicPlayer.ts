import { useState } from 'react';
import type { Song } from '../types';

const sampleSongs: Song[] = [
  {
    id: '1',
    title: 'Purring in the Rain',
    artist: 'The Whiskers',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 213
  },
  {
    id: '2',
    title: 'Meow Mix',
    artist: 'DJ Paws',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 187
  },
  {
    id: '3',
    title: 'Catnip Dreams',
    artist: 'Feline Beats',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 245
  }
];

export function useMusicPlayer() {
  const [songs] = useState<Song[]>(sampleSongs);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleSongSelect = (song: Song) => {
    const index = songs.findIndex(s => s.id === song.id);
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex <= 0 ? songs.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setCurrentSong(songs[prevIndex]);
  };

  return {
    currentSong,
    songs,
    handleNext,
    handlePrevious,
    handleSongSelect
  };
}