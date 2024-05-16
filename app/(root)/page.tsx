import React from "react";
import HeaderBox from "@/components/ui/HeaderBox";
import { TotalBalanceBox } from "@/components/ui/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Hanan" };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250}
        />
      </div>
    </section>
  );
};

export default Home;
