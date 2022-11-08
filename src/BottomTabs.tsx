import React from "react";

const TABS = [
  {
    icon: "/images/ic_home.png",
    isNotify: false,
  },
  {
    icon: "/images/ic_bell.png",
    isNotify: true,
  },
  {
    icon: "/images/ic_card.png",
    isNotify: false,
  },
  {
    icon: "/images/ic_user.png",
    isNotify: false,
  },
];

const BottomTabs: React.FC = () => {
  return (
    <div className="bottom-tabs-container">
      {TABS.map((tab, index) => (
        <div className="tab-item" key={`bottom_tab_${index}`}>
          <img src={tab.icon} alt="" />
          {tab.isNotify ? <div className="red-dot" /> : null}
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
