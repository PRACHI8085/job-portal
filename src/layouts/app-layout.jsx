import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="px-10">
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 rounded-t-xl border">
        Made with :) by Prachi
      </div>
    </div>
  );
};

export default AppLayout;
