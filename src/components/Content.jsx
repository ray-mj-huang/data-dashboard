/* eslint-disable react/prop-types */
import React from 'react';
import MoodCard from './MoodCard';
import fakeData from '../data/fakeData';

const { infoData } = fakeData;

export default function Content() {
  return (
    <div className="flex w-full">
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        {infoData.map(
          ({
            id,
            name,
            imgId,
            mood,
            job,
          }) => (
            <MoodCard
              key={id}
              id={id}
              name={name}
              imgId={imgId}
              mood={mood}
              job={job}
            />
          ),
        )}
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card flex justify-between p-3 h-32">
            .
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card flex justify-between p-3 h-32">
            .
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card flex justify-between p-3 h-32">
            .
          </div>
        </div>

        <div className="w-full p-2 lg:w-2/3">
          <div className="rounded-lg bg-card sm:h-80 h-60">
            .
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            .
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            .
          </div>
        </div>

      </div>
    </div>
  );
}
