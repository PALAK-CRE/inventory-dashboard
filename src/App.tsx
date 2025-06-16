import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SlidingTabBar from './components/SlidingTabBar';
import FormContainer from './components/FormContainer';
import GeneralInformationForm from './components/GeneralInformationForm';
import PricingForm from './components/PricingForm';
import DescriptionForm from './components/DescriptionForm';
import TabActionButtons from './components/TabActionButtons';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    // General Information
    itemType: 'goods',
    productName: '',
    sku: '',
    barcode: '',
    ean: '',
    category: '',
    subCategory: '',
    brand: '',
    productType: 'simple',
    supplier: '',
    supplierSku: '',
    warehouse: '',
    advanced: false,
    leadTime: '',
    reorderLevel: '',
    initialStock: '',
    track: 'serial',
    status: 'returnable',
    
    // Pricing
    purchasePrice: '',
    sellingPrice: '',
    wholesalePrice: '',
    quantity: '',
    unit: '',
    discountPrice: '',
    discountFrom: '',
    discountTo: '',
    taxRate: '',
    hsn: '',
    priceIncludeGst: false,
    gstRate: '',
    
    // Description
    description: '',
    seoTitle: '',
    seoDescription: '',
    keywords: ['Hinges']
  });

  const tabs = [
    {
      id: 1,
      title: 'General Information',
      active: activeTab === 1
    },
    {
      id: 2,
      title: 'Pricing & Tax',
      active: activeTab === 2
    },
    {
      id: 3,
      title: 'Description & Media',
      active: activeTab === 3
    },
    {
      id: 4,
      title: 'Final Review',
      active: activeTab === 4
    }
  ];

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const handleNext = () => {
    if (activeTab < tabs.length) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSaveAsDraft = () => {
    console.log('Saving as draft:', formData);
    // Implement save as draft logic
  };

  const handleSave = () => {
    console.log('Saving product:', formData);
    // Implement save logic
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 1:
        return 'Add New Products';
      case 2:
        return 'Pricing & Tax Information';
      case 3:
        return 'Description & Media';
      case 4:
        return 'Final Review';
      default:
        return 'Add New Products';
    }
  };

  const renderFinalReview = () => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Your Product</h3>
        <p className="text-gray-600">Please review all the information before saving the product.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">General Information</h4>
          <div className="space-y-2 text-sm">
            <div><span className="text-gray-600">Product Name:</span> <span className="font-medium">{formData.productName || 'Not specified'}</span></div>
            <div><span className="text-gray-600">SKU:</span> <span className="font-medium">{formData.sku || 'Not specified'}</span></div>
            <div><span className="text-gray-600">Category:</span> <span className="font-medium">{formData.category || 'Not specified'}</span></div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Pricing</h4>
          <div className="space-y-2 text-sm">
            <div><span className="text-gray-600">Purchase Price:</span> <span className="font-medium">{formData.purchasePrice || 'Not specified'}</span></div>
            <div><span className="text-gray-600">Selling Price:</span> <span className="font-medium">{formData.sellingPrice || 'Not specified'}</span></div>
            <div><span className="text-gray-600">Tax Rate:</span> <span className="font-medium">{formData.taxRate || 'Not specified'}</span></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        {/* Header */}
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {getPageTitle()}
            </h1>
          </div>
        </div>

        {/* Sliding Tab Bar */}
        <SlidingTabBar 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-6">
          <FormContainer activeTab={activeTab} totalTabs={tabs.length}>
            <GeneralInformationForm
              formData={formData}
              onFormDataChange={setFormData}
            />
            <PricingForm
              formData={formData}
              onFormDataChange={setFormData}
            />
            <DescriptionForm
              formData={formData}
              onFormDataChange={setFormData}
            />
            {renderFinalReview()}
          </FormContainer>
        </div>

        {/* Action Buttons */}
        <TabActionButtons
          currentTab={activeTab}
          totalTabs={tabs.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSaveAsDraft={handleSaveAsDraft}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;