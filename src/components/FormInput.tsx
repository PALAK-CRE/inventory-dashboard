import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'number' | 'email';
  required?: boolean;
  icon?: LucideIcon;
  onIconClick?: () => void;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  icon: Icon,
  onIconClick,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        />
        {Icon && (
          <button
            type="button"
            onClick={onIconClick}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Icon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;