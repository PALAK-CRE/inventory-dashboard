import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TabActionButtonsProps {
  currentTab: number;
  totalTabs: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveAsDraft: () => void;
  onSave: () => void;
}

const TabActionButtons: React.FC<TabActionButtonsProps> = ({
  currentTab,
  totalTabs,
  onPrevious,
  onNext,
  onSaveAsDraft,
  onSave
}) => {
  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        {/* Left side - Navigation */}
        <div className="flex gap-3">
          <button
            onClick={onPrevious}
            disabled={currentTab === 1}
            className={`
              flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all
              ${currentTab === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
              }
            `}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={currentTab === totalTabs}
            className={`
              flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all
              ${currentTab === totalTabs 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
              }
            `}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Right side - Save Actions */}
        <div className="flex gap-3">
          <button
            onClick={onSaveAsDraft}
            className="px-6 py-2 rounded-lg font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Save as draft
          </button>

          <button
            onClick={onSave}
            className="px-6 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabActionButtons;