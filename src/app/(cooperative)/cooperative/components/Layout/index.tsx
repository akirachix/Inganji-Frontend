"use client";
import React from 'react';
import Sidebar from '../Sidebar'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
         <Sidebar/>
    </div>

  );
}