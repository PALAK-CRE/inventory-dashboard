import React, { useCallback } from 'react';
import { HelpCircle, Upload, X } from 'lucide-react';

interface DescriptionFormProps {
  formData: any;
  onFormDataChange: (data: any) => void;
}

const DescriptionForm: React.FC<DescriptionFormProps> = ({
  formData,
  onFormDataChange
}) => {
  const handleChange = (field: string, value: string) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  const handleImageDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    // Handle file drop logic here
    console.log('Files dropped:', e.dataTransfer.files);
  }, []);

  const handleImageDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const removeKeyword = (keyword: string) => {
    const updatedKeywords = formData.keywords.filter((k: string) => k !== keyword);
    handleChange('keywords', updatedKeywords);
  };

  const addKeyword = (keyword: string) => {
    if (keyword && !formData.keywords.includes(keyword)) {
      handleChange('keywords', [...formData.keywords, keyword]);
    }
  };

  const suggestedKeywords = [
    'Fittings',
    'Hinges',
    'Construction hardware materials',
    'Door and Windows',
    'Building'
  ];

  return (
    <div className="space-y-6">
      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
          <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Write Description about the product..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
        />
      </div>

      {/* Image Upload */}
      <div>
        <div
          onDrop={handleImageDrop}
          onDragOver={handleImageDragOver}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
        >
          <Upload className="w-8 h-8 text-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            Drag your image here, or{' '}
            <span className="text-blue-600 font-medium">browse</span>
          </p>
          <p className="text-sm text-gray-500">Supports JPEG, PNG, JPG</p>
        </div>
      </div>

      {/* SEO Meta Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SEO Meta Title
            <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
          </label>
          <input
            type="text"
            value={formData.seoTitle}
            onChange={(e) => handleChange('seoTitle', e.target.value)}
            placeholder="Add Title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SEO Meta Description
            <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
          </label>
          <input
            type="text"
            value={formData.seoDescription}
            onChange={(e) => handleChange('seoDescription', e.target.value)}
            placeholder="Write Description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        </div>
      </div>

      {/* AI Keywords */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center mb-3">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-2">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
          <span className="font-medium text-blue-900">AI Keywords</span>
        </div>
        <p className="text-sm text-blue-700 mb-3">
          Based on your input data, we've identified{' '}
          <span className="font-medium">{suggestedKeywords.length} keywords</span>{' '}
          that may be a good fit for your product.
        </p>
        
        {/* Selected Keywords */}
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.keywords.map((keyword: string) => (
            <span
              key={keyword}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              {keyword}
              <button
                onClick={() => removeKeyword(keyword)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>

        {/* Suggested Keywords */}
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestedKeywords
            .filter(keyword => !formData.keywords.includes(keyword))
            .map((keyword) => (
            <button
              key={keyword}
              onClick={() => addKeyword(keyword)}
              className="px-3 py-1 rounded-full text-sm border border-blue-300 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              {keyword}
            </button>
          ))}
        </div>

        {/* Add Custom Keyword */}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type keyword"
            className="flex-1 px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addKeyword(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionForm;