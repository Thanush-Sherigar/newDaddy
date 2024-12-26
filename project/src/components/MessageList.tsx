import React from 'react';
import type { Message } from '../types';

interface Props {
  messages: Message[];
}

export function MessageList({ messages }: Props) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow">
              <p className="text-sm text-gray-800 dark:text-gray-200">{message.content}</p>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}