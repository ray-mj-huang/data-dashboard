/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { faker } from '@faker-js/faker';

export default function Content() {
  return (
    <div className="flex w-full">
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
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
