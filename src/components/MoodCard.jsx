/* eslint-disable react/prop-types */
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import MoodIcon from './MoodIcon';

export default function MoodCard({
  name,
  imgId,
  mood,
  job,
}) {
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="rounded-lg bg-card flex justify-between p-3 h-32 items-center">
        <div className="w-2/3" style={{ minWidth: '60%' }}>
          <div className="flex items-center">
            <img src={imgId} alt="" className="w-10 h-10 rounded-full" />
            <div className="ml-2 truncate">
              <div className="flex items-center">
                <div className="mr-2 font-bold text-white truncate">{name}</div>
                <BsFillCheckCircleFill color="#79d17c" />
              </div>
              <div className="mr-2 truncate">{job}</div>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-sm">Today&apos;s mood: </div>
            <div className="ml-2 mr-2 font-bold text-white">{mood}</div>
          </div>
          <div
            className="w-44 mt-2 flex justify-between rounded-full overflow-hidden"
          >
            <div className="w-8 h-1" style={mood > 0 ? { background: '#ffff4d' } : { background: 'gray' }} />
            <div className="w-8 h-1" style={mood > 1 ? { background: '#ffff4d' } : { background: 'gray' }} />
            <div className="w-8 h-1" style={mood > 2 ? { background: '#ffff4d' } : { background: 'gray' }} />
            <div className="w-8 h-1" style={mood > 3 ? { background: '#ffff4d' } : { background: 'gray' }} />
            <div className="w-8 h-1" style={mood > 4 ? { background: '#ffff4d' } : { background: 'gray' }} />
          </div>
        </div>
        <MoodIcon mood={mood} className="w-8 h-8" />
      </div>
    </div>
  );
}
