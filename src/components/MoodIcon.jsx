/* eslint-disable react/prop-types */
import React from 'react';
import {
  BsEmojiLaughingFill, BsEmojiSmileFill, BsEmojiNeutralFill, BsEmojiFrownFill, BsEmojiDizzyFill,
} from 'react-icons/bs';

const moodIcons = {
  1: { icon: BsEmojiDizzyFill, color: '#1a66ff', text: 'Awful' },
  2: { icon: BsEmojiFrownFill, color: '#1a66ff', text: 'Bad' },
  3: { icon: BsEmojiNeutralFill, color: '#676767', text: 'Neutral' },
  4: { icon: BsEmojiSmileFill, color: '#ffff4d', text: 'Nice' },
  5: { icon: BsEmojiLaughingFill, color: '#ffff4d', text: 'Damn good' },
};

export default function MoodIcon({ mood = 5, className = 'w-4 h-4' }) {
  const Icon = moodIcons[mood].icon ?? BsEmojiLaughingFill;
  const iconColor = moodIcons[mood].color;
  const iconText = moodIcons[mood].text;

  return (
    <div className="flex flex-col items-center ml-3 pt-1 flex-shrink-0" style={{ minWidth: 100 }}>
      <Icon className={className} color={iconColor} />
      <div className="text-sm mt-2 text-center">
        {iconText}
      </div>
    </div>
  );
}
