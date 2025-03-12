
import { useState } from 'react';
import { Check, InfoIcon } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const PricingBundle = () => {
  const [showSavings, setShowSavings] = useState(false);

  const toggleSavings = () => {
    setShowSavings(!showSavings);
  };

  const bundleItems = [
    { 
      id: 1, 
      name: 'PowerTower Portable Gym', 
      price: '€1299.99', 
      description: 'The complete portable gym system' 
    },
    { 
      id: 2, 
      name: 'BoxFun Boxing Cap Attachment', 
      price: '€69.99', 
      description: 'Pro-level boxing attachment' 
    },
    { 
      id: 3, 
      name: 'Premium Elastic Resistance Set', 
      price: '€69.99', 
      description: 'Set of resistance bands for all fitness levels' 
    },
    { 
      id: 4, 
      name: 'Exclusive Video Tutorial Library', 
      price: 'Value: €240/year', 
      description: 'Comprehensive workout library' 
    },
    { 
      id: 5, 
      name: 'Free Shipping', 
      price: 'Value: €30', 
      description: 'Worldwide shipping included' 
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 fade-on-scroll visible">
            <h2 className="text-3xl md:text-4xl font-bold text-fitBlack">
              Why the FitAnywhere Bundle is Your Ultimate Fitness Solution
            </h2>
            <p className="text-lg text-fitBlack/70">
              Everything you need for a complete home gym experience, bundled at an exclusive price.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden fade-on-scroll visible">
            <div className="p-6 md:p-8">
              <div className="space-y-6">
                {bundleItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row justify-between md:items-center py-4 border-b border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 bg-fitYellow rounded-full p-1 mt-1">
                        <Check size={16} className="text-fitBlack" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-fitBlack">{item.name}</h3>
                        <p className="text-sm text-fitBlack/60">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span className="font-semibold text-fitBlack">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-bold text-fitBlack">Total Retail Value:</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon size={16} className="ml-2 text-fitBlack/60" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">Combined value of all components if purchased separately</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="text-2xl font-bold text-fitBlack mt-1">€1,709.97</p>
                </div>
                
                <button 
                  onClick={toggleSavings}
                  className="mt-4 md:mt-0 button-secondary flex items-center gap-2 text-sm"
                >
                  {showSavings ? 'Hide Savings' : 'See Savings'}
                </button>
              </div>

              <div className={`feature-reveal-content ${showSavings ? 'active' : ''} mt-8`}>
                <div className="bg-gray-50 rounded-xl p-6 animate-fade-in">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold text-fitBlack">Your Savings:</h4>
                      <p className="text-2xl font-bold text-fitYellow mt-1">€710.97</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="text-sm text-fitBlack/60">That's over 40% off retail value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-fitBlack p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Exclusive Bundle Price</h3>
                  <p className="text-white/60 text-sm md:text-base">Limited time offer for Spring 2025 launch</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-3xl md:text-4xl font-bold text-fitYellow">€999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBundle;
