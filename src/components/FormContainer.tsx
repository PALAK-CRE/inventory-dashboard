import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  activeTab: number;
  totalTabs: number;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, activeTab, totalTabs }) => {
  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${((activeTab - 1) / totalTabs) * 100}%)`,
          width: `${totalTabs * 100}%`
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0 p-6 lg:p-8"
            style={{ width: `${100 / totalTabs}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormContainer;