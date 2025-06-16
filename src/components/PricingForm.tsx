import React from 'react';
import { HelpCircle, Calendar } from 'lucide-react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

interface PricingFormProps {
  formData: any;
  onFormDataChange: (data: any) => void;
}

const PricingForm: React.FC<PricingFormProps> = ({
  formData,
  onFormDataChange
}) => {
  const handleChange = (field: string, value: string | boolean) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  const unitOptions = [
    { value: 'pieces', label: 'Pieces' },
    { value: 'kg', label: 'Kilograms' },
    { value: 'liters', label: 'Liters' },
    { value: 'meters', label: 'Meters' }
  ];

  const discountOptions = [
    { value: 'percentage', label: 'Percentage (%)' },
    { value: 'fixed', label: 'Fixed Amount' }
  ];

  const taxOptions = [
    { value: 'gst-18', label: 'GST 18%' },
    { value: 'gst-12', label: 'GST 12%' },
    { value: 'gst-5', label: 'GST 5%' }
  ];

  const hsnOptions = [
    { value: '8517', label: '8517 - Telephone Sets' },
    { value: '8528', label: '8528 - Monitors & Projectors' },
    { value: '8471', label: '8471 - Computers' }
  ];

  const gstOptions = [
    { value: '0', label: '0%' },
    { value: '5', label: '5%' },
    { value: '12', label: '12%' },
    { value: '18', label: '18%' },
    { value: '28', label: '28%' }
  ];

  return (
    <div className="space-y-6">
      {/* Purchase Price and Selling Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Purchase Price"
          placeholder="Enter New Product Name"
          value={formData.purchasePrice}
          onChange={(value) => handleChange('purchasePrice', value)}
          type="number"
        />
        <FormInput
          label="Selling Price"
          placeholder="Enter SKU"
          value={formData.sellingPrice}
          onChange={(value) => handleChange('sellingPrice', value)}
          type="number"
        />
      </div>

      {/* Wholesale Price */}
      <FormSelect
        label="Wholesale Price / Bulk Price"
        value={formData.wholesalePrice}
        onChange={(value) => handleChange('wholesalePrice', value)}
        options={discountOptions}
        placeholder="Select Category"
      />

      {/* Quantity and Unit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Quantity"
          placeholder="In No."
          value={formData.quantity}
          onChange={(value) => handleChange('quantity', value)}
          type="number"
        />
        <FormSelect
          label="Unit"
          value={formData.unit}
          onChange={(value) => handleChange('unit', value)}
          options={unitOptions}
          placeholder="Select Category"
        />
      </div>

      {/* Discount Price and Period */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Discount Price
            <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
          </label>
          <FormSelect
            label=""
            value={formData.discountPrice}
            onChange={(value) => handleChange('discountPrice', value)}
            options={discountOptions}
            placeholder="Select Category"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Discount Period
            <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <input
                type="date"
                value={formData.discountFrom}
                onChange={(e) => handleChange('discountFrom', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <span className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none">From</span>
            </div>
            <div className="relative">
              <input
                type="date"
                value={formData.discountTo}
                onChange={(e) => handleChange('discountTo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <span className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none">To</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Rate */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tax Rate
          <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
        </label>
        <FormSelect
          label=""
          value={formData.taxRate}
          onChange={(value) => handleChange('taxRate', value)}
          options={taxOptions}
          placeholder="Select Category"
        />
      </div>

      {/* HSN / SAC */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          HSN / SAC
          <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
        </label>
        <FormSelect
          label=""
          value={formData.hsn}
          onChange={(value) => handleChange('hsn', value)}
          options={hsnOptions}
          placeholder="HSN Code"
        />
      </div>

      {/* Price Include GST Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Price Include GST</span>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.priceIncludeGst}
              onChange={(e) => handleChange('priceIncludeGst', e.target.checked)}
              className="sr-only"
            />
            <div className={`w-10 h-6 rounded-full ${formData.priceIncludeGst ? 'bg-blue-600' : 'bg-gray-300'} transition-colors`}>
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${formData.priceIncludeGst ? 'translate-x-5' : 'translate-x-1'}`} />
            </div>
          </div>
        </label>
      </div>

      {/* GST Rate (if Price Include GST is enabled) */}
      {formData.priceIncludeGst && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GST Rate
            <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
          </label>
          <FormSelect
            label=""
            value={formData.gstRate}
            onChange={(value) => handleChange('gstRate', value)}
            options={gstOptions}
            placeholder="0%"
          />
        </div>
      )}
    </div>
  );
};

export default PricingForm;