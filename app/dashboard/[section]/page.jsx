"use client";
import Firstpage from "@/app/components/firstPage/FirstPage";
import CallHistoryCard from "@/app/UI/features/CallHistorycard/CallHistoryCard";
import ChatHistoryCard from "@/app/UI/features/ChatHistoryCard/ChatHistoryCard";
import EarningDashCard from "@/app/UI/features/EarningDash/EarningDashCard";
import LiveEvents from "@/app/UI/features/liveEvent/LiveEvent";
import Followers from "@/app/UI/features/MyFollowe/Follower";
import Review from "@/app/UI/features/myReview/Review";
import Offers from "@/app/UI/features/Offer/OfferPage";
import Remedy from "@/app/UI/features/Remedies/Remedies";
import Settings from "@/app/UI/features/SettingPages/SettingFirstPage";
import StoreHistoryCard from "@/app/UI/features/StoreHistoryCard/StoreHistoryCard";
import Waitlist from "@/app/UI/features/Waitlist/Waitlist";
import TransactionTable from "@/app/UI/features/Walletcard/Wallet";

import { useParams } from "next/navigation";

export default function DashboardSection() {
  const params = useParams(); 
  const { section } = params;

  // Define different components for each section
  const sectionComponents = {
    firstpage: <Firstpage />,
    callhistory: <CallHistoryCard />,
    storehistory: <StoreHistoryCard />,
    chathistory: <ChatHistoryCard />,
    earningdash: <EarningDashCard />,
    wallet: <TransactionTable />,
    offer: <Offers />,
    remedy: <Remedy />,
    waitlist: <Waitlist />,
    myreview: <Review />,
    liveevent: <LiveEvents />,
    myfollower: <Followers />,
    support: <Firstpage />,
    setting: <Settings />,
    
  };

  return (
    <div>
      {/* <h1>Dashboard - {section}</h1> */}
      {sectionComponents[section] || <p className="flex justify-center items-center">Section Not Found</p>}
    </div>
  );
}


