import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActionButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveAsDraft: () => void;
  onSave: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSaveAsDraft,
  onSave
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:justify-center sm:space-x-4 pt-6 border-t border-gray-200">
      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={`
          flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-all
          ${currentStep === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }
        `}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </button>

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
        Save
      </button>

      <button
        onClick={onNext}
        disabled={currentStep === totalSteps}
        className={`
          flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-all
          ${currentStep === totalSteps 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
          }
        `}
      >
        Next
        <ChevronRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default ActionButtons;