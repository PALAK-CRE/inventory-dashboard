import React from 'react';
import { BarChart, HelpCircle } from 'lucide-react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

interface GeneralInformationFormProps {
  formData: any;
  onFormDataChange: (data: any) => void;
}

const GeneralInformationForm: React.FC<GeneralInformationFormProps> = ({
  formData,
  onFormDataChange
}) => {
  const handleChange = (field: string, value: string) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  const generateBarcode = () => {
    const barcode = Math.random().toString(36).substring(2, 14).toUpperCase();
    handleChange('barcode', barcode);
  };

  const categoryOptions = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'books', label: 'Books' },
    { value: 'home', label: 'Home & Garden' }
  ];

  const subCategoryOptions = [
    { value: 'phones', label: 'Phones' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'tablets', label: 'Tablets' }
  ];

  const brandOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'google', label: 'Google' }
  ];

  const supplierOptions = [
    { value: 'supplier1', label: 'Tech Distributors Inc.' },
    { value: 'supplier2', label: 'Global Electronics' },
    { value: 'supplier3', label: 'Prime Suppliers' }
  ];

  const warehouseOptions = [
    { value: 'warehouse1', label: 'Main Warehouse' },
    { value: 'warehouse2', label: 'Secondary Storage' },
    { value: 'warehouse3', label: 'Regional Center' }
  ];

  return (
    <div className="space-y-6">
      {/* Item Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Item Type
          <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
        </label>
        <div className="flex space-x-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="itemType"
              value="goods"
              checked={formData.itemType === 'goods'}
              onChange={(e) => handleChange('itemType', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Goods</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="itemType"
              value="services"
              checked={formData.itemType === 'services'}
              onChange={(e) => handleChange('itemType', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Services</span>
          </label>
        </div>
      </div>

      {/* Product Name and SKU */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Product Name"
          placeholder="Enter New Product Name"
          value={formData.productName}
          onChange={(value) => handleChange('productName', value)}
          required
        />
        <FormInput
          label="SKU"
          placeholder="Enter SKU"
          value={formData.sku}
          onChange={(value) => handleChange('sku', value)}
          required
        />
      </div>

      {/* Barcode and EAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Barcode
          </label>
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={formData.barcode}
                onChange={(e) => handleChange('barcode', e.target.value)}
                placeholder="Enter 12 Digit Code"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
              <span className="absolute left-3 top-2 text-xs text-gray-500">UPC</span>
            </div>
            <button
              type="button"
              onClick={generateBarcode}
              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <BarChart className="w-4 h-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={generateBarcode}
            className="text-xs text-blue-600 hover:text-blue-700 mt-1"
          >
            Generate Barcode
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            EAN
          </label>
          <div className="flex space-x-2">
            <div className="flex-1">
              <input
                type="text"
                value={formData.ean}
                onChange={(e) => handleChange('ean', e.target.value)}
                placeholder="Enter 12 Digit Code"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
            <button
              type="button"
              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <BarChart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category and Sub-Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Category"
          value={formData.category}
          onChange={(value) => handleChange('category', value)}
          options={categoryOptions}
          placeholder="Select Category"
        />
        <FormSelect
          label="Sub-Category"
          value={formData.subCategory}
          onChange={(value) => handleChange('subCategory', value)}
          options={subCategoryOptions}
          placeholder="Select Category"
        />
      </div>

      {/* Brand/Manufacturer */}
      <FormSelect
        label="Brand/Manufacturer"
        value={formData.brand}
        onChange={(value) => handleChange('brand', value)}
        options={brandOptions}
        placeholder="Select Category"
      />

      {/* Product Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Product Type
          <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
        </label>
        <div className="flex space-x-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="productType"
              value="simple"
              checked={formData.productType === 'simple'}
              onChange={(e) => handleChange('productType', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Simple</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="productType"
              value="variant"
              checked={formData.productType === 'variant'}
              onChange={(e) => handleChange('productType', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Variant</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="productType"
              value="bundle"
              checked={formData.productType === 'bundle'}
              onChange={(e) => handleChange('productType', e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Bundle</span>
          </label>
        </div>
      </div>

      {/* Supplier Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Select Supplier"
          value={formData.supplier}
          onChange={(value) => handleChange('supplier', value)}
          options={supplierOptions}
          placeholder="Select Category"
        />
        <FormSelect
          label="Supplier SKU"
          value={formData.supplierSku}
          onChange={(value) => handleChange('supplierSku', value)}
          options={supplierOptions}
          placeholder="Select Category"
        />
      </div>

      {/* Warehouse/Location */}
      <FormSelect
        label="Warehouse/Location"
        value={formData.warehouse}
        onChange={(value) => handleChange('warehouse', value)}
        options={warehouseOptions}
        placeholder="Select Category"
      />

      {/* Advanced Toggle */}
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.advanced}
              onChange={(e) => handleChange('advanced', e.target.checked)}
              className="sr-only"
            />
            <div className={`w-10 h-6 rounded-full ${formData.advanced ? 'bg-blue-600' : 'bg-gray-300'} transition-colors`}>
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${formData.advanced ? 'translate-x-5' : 'translate-x-1'}`} />
            </div>
          </div>
          <span className="ml-3 text-gray-700">Advance</span>
        </label>
      </div>

      {/* Advanced Fields */}
      {formData.advanced && (
        <div className="space-y-6 border-t pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lead Time
                <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
              </label>
              <FormSelect
                label=""
                value={formData.leadTime}
                onChange={(value) => handleChange('leadTime', value)}
                options={[
                  { value: '1-week', label: '1 Week' },
                  { value: '2-weeks', label: '2 Weeks' },
                  { value: '1-month', label: '1 Month' }
                ]}
                placeholder="Select Category"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reorder Level
                <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
              </label>
              <FormSelect
                label=""
                value={formData.reorderLevel}
                onChange={(value) => handleChange('reorderLevel', value)}
                options={[
                  { value: '10', label: '10 units' },
                  { value: '25', label: '25 units' },
                  { value: '50', label: '50 units' }
                ]}
                placeholder="Select Category"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Stock Quantity
                <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
              </label>
              <input
                type="number"
                value={formData.initialStock}
                onChange={(e) => handleChange('initialStock', e.target.value)}
                placeholder="In No."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Track
                <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="track"
                    value="serial"
                    checked={formData.track === 'serial'}
                    onChange={(e) => handleChange('track', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Serial No.</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="track"
                    value="batch"
                    checked={formData.track === 'batch'}
                    onChange={(e) => handleChange('track', e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Batch No.</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
                <HelpCircle className="inline w-4 h-4 ml-1 text-gray-400" />
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="returnable"
                  checked={formData.status === 'returnable'}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Returnable</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralInformationForm;