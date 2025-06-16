import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  completed: boolean;
  active: boolean;
}

interface ProgressStepperProps {
  steps: Step[];
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ steps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 -z-10">
          <div 
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${(steps.filter(s => s.completed).length / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
              ${step.completed 
                ? 'bg-blue-600 text-white' 
                : step.active 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-400'
              }
            `}>
              {step.completed ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="text-sm font-medium">{step.id}</span>
              )}
            </div>
            <div className="mt-2 text-center">
              <div className={`text-sm font-medium ${step.active ? 'text-blue-600' : 'text-gray-900'}`}>
                {step.title}
              </div>
              <div className="text-xs text-gray-500 mt-1 max-w-24 leading-tight">
                {step.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;