"use client"; // ✅ Ensure this is a Client Component

import ProfileSettings from "@/app/UI/features/SettingPages/Profile";
import { useParams } from "next/navigation";

export default function SettingPage() {
  const params = useParams();
  const { subpages } = params; // ✅ Dynamic route parameter
//   console.log(params.subpages); 

  const settingComponents = {
    profilesetting:<ProfileSettings/>,
    security: <h2>Security Settings</h2>,
    notifications: <h2>Notification Settings</h2>,
  };

  return (
    <div>
      {/* <h1>Settings - {subpage}</h1> */}
      {settingComponents[subpages] || <p className="flex justify-center items-center">Page Not Found</p>}
    </div>
  );
}
