import React from 'react';
import type { Cat } from '../types';

interface Props {
  participants: Cat[];
}

export function ParticipantList({ participants }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Participants</h3>
      <div className="space-y-3">
        {participants.map((cat) => (
          <div key={cat.id} className="flex items-center gap-3">
            <div className="relative">
              <img
                src={cat.avatar}
                alt={cat.name}
                className="w-10 h-10 rounded-full"
              />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                  cat.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{cat.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{cat.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}