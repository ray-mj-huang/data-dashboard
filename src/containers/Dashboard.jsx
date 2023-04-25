/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../style.css';
// import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

export default function Dashboard() {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      {/* <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      /> */}
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      />
    </div>
  );
}
