// MyComponent.js

import React from "react";
import { Notifications } from "./Notification";

export const PollsNotification = ({setNotify}) => {
  return (
    <div className="hidden lg:block w-[40%] py-10 px-6 bg-[#fff]">
      {/* CREATE POLL ACTION */}
      <div className="flex items-center gap-6 mt-4 border px-4 py-2 rounded-[10px] cursor-pointer">
        <img src="images/create.png" alt="create-icon" width={25} />
        <p className="text-[13px] font-[500] mt-3">Create poll</p>
      </div>

      {/* MY POLLS ACTION */}
      <div className="flex items-center gap-6 mt-4 border px-4 py-2 rounded-[10px] cursor-pointer">
        <img src="images/create.png" alt="create-icon" width={25} />
        <p className="text-[13px] font-[500] mt-3">My polls</p>
      </div>

      {/* NOTIFICATION */}
      <Notifications setNotify={setNotify} />
    </div>
  );
};