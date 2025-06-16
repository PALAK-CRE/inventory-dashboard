import React from 'react';

interface Tab {
  id: number;
  title: string;
  active: boolean;
}

interface SlidingTabBarProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (tabId: number) => void;
}

const SlidingTabBar: React.FC<SlidingTabBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 py-4">
        <div className="relative">
          {/* Tab Container */}
          <div className="flex overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    flex-1 min-w-0 px-6 py-3 rounded-xl text-center transition-all duration-300 whitespace-nowrap font-medium
                    ${tab.active 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingTabBar;