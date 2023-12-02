import React, { useState } from 'react';

const Tabs = () => {
    const tabs = [
        { id: 'tab1', title: 'Tab 1', content: 'Content for Tab 1' },
        { id: 'tab2', title: 'Tab 2', content: 'Content for Tab 2' },
        { id: 'tab3', title: 'Tab 3', content: 'Content for Tab 3' },
      ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="tabs text-center justify-content-center m-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active ' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content px-10">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tabs;