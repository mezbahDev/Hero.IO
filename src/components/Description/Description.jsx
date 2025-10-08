import React from "react";

const Description = () => {
  return (
    <div>
      <h2 className="text-[24px] font-semibold text-[#001931] mt-[80px]">
        Descriptions
      </h2>
      <div className="mt-[20px] text-[20px] text-[#627382] flex flex-col gap-[30px]">
        <p>
          BudgetBuddy turns complex budgeting into a simple daily habit. It’s
          designed for anyone who wants to manage expenses, plan savings, and
          understand financial flow in a clear, structured way. The app
          automatically categorizes your transactions, helping you see exactly
          where your money goes each month.
        </p>
        <p>
          Unlike traditional finance apps, BudgetBuddy brings visual clarity
          through clean charts and graphs. You can set goals, like “Save $200
          this month,” and get progress notifications as you move closer to your
          target. The system adapts to your habits, offering smart insights —
          for example, identifying unnecessary subscriptions or high-spending
          areas.
        </p>
        <p>
          With built-in data encryption, your financial information stays safe.
          And for small business owners, the app can generate quick reports to
          analyze profit versus expense. BudgetBuddy is not just about saving
          money — it’s about building a mindset of financial control and
          long-term growth.
        </p>
      </div>
    </div>
  );
};

export default Description;
