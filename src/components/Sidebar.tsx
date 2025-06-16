import React from 'react';
import { 
  LayoutDashboard, 
  Package2, 
  TrendingUp, 
  FileBarChart, 
  RotateCcw, 
  BarChart4, 
  ChevronDown,
  ChevronRight,
  X,
  ShoppingCart,
  Warehouse,
  Users,
  Settings
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [inventoryOpen, setInventoryOpen] = React.useState(true);
  const [salesOpen, setSalesOpen] = React.useState(false);

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/dashboard',
      color: 'text-blue-600'
    },
    { 
      icon: Package2, 
      label: 'Inventory', 
      path: '/inventory',
      hasSubmenu: true,
      isOpen: inventoryOpen,
      color: 'text-green-600',
      submenu: [
        { label: 'Add Product', path: '/inventory/add-product', active: true },
        { label: 'Product List', path: '/inventory/products' },
        { label: 'Categories', path: '/inventory/categories' },
        { label: 'Stock Alerts', path: '/inventory/alerts' }
      ]
    },
    { 
      icon: Warehouse, 
      label: 'Warehouse', 
      path: '/warehouse',
      color: 'text-purple-600'
    },
    { 
      icon: ShoppingCart, 
      label: 'Sales', 
      path: '/sales',
      hasSubmenu: true,
      isOpen: salesOpen,
      color: 'text-orange-600',
      submenu: [
        { label: 'Orders', path: '/sales/orders' },
        { label: 'Invoices', path: '/sales/invoices' },
        { label: 'Customers', path: '/sales/customers' }
      ]
    },
    { 
      icon: TrendingUp, 
      label: 'Analytics', 
      path: '/analytics',
      color: 'text-indigo-600'
    },
    { 
      icon: FileBarChart, 
      label: 'Reports', 
      path: '/reports',
      color: 'text-teal-600'
    },
    { 
      icon: RotateCcw, 
      label: 'Returns', 
      path: '/returns',
      color: 'text-red-600'
    },
    { 
      icon: Users, 
      label: 'Suppliers', 
      path: '/suppliers',
      color: 'text-yellow-600'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/settings',
      color: 'text-gray-600'
    }
  ];

  const toggleSubmenu = (label: string) => {
    if (label === 'Inventory') {
      setInventoryOpen(!inventoryOpen);
    } else if (label === 'Sales') {
      setSalesOpen(!salesOpen);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-50 h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out shadow-xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 lg:translate-x-0 lg:static lg:z-auto lg:shadow-none
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-lg">M</span>
            </div>
            <div>
              <span className="font-bold text-xl text-white">MUN-C</span>
              <div className="text-blue-100 text-xs">Inventory System</div>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 hover:bg-blue-500 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-full pb-20">
          {menuItems.map((item) => (
            <div key={item.label}>
              <div 
                className={`
                  flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group
                  ${item.label === 'Inventory' 
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm border border-blue-200' 
                    : 'hover:bg-gray-50 text-gray-700 hover:shadow-sm'
                  }
                `}
                onClick={() => item.hasSubmenu && toggleSubmenu(item.label)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${item.label === 'Inventory' ? 'bg-blue-200' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors`}>
                    <item.icon className={`w-5 h-5 ${item.label === 'Inventory' ? 'text-blue-700' : item.color}`} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.hasSubmenu && (
                  <button className="p-1 hover:bg-white hover:bg-opacity-50 rounded-md transition-colors">
                    {item.isOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
              
              {/* Submenu */}
              {item.hasSubmenu && item.isOpen && (
                <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {item.submenu?.map((subItem) => (
                    <div
                      key={subItem.label}
                      className={`
                        px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-sm border-l-2
                        ${subItem.active 
                          ? 'bg-blue-50 text-blue-700 font-medium border-blue-400 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent hover:border-gray-200'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${subItem.active ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        <span>{subItem.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">Admin User</div>
              <div className="text-xs text-gray-500">admin@mun-c.com</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;