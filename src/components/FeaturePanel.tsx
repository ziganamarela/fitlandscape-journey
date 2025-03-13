import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
const FeaturePanel = () => {
  const [activeBoxFun, setActiveBoxFun] = useState(false);
  const [activeResistance, setActiveResistance] = useState(false);
  const boxFunFeatures = [{
    id: 1,
    text: 'Portable & Powerful'
  }, {
    id: 2,
    text: 'Pro-Level Boxing Workouts'
  }, {
    id: 3,
    text: 'Sleek, Minimalist Design'
  }, {
    id: 4,
    text: 'Zero Installation, Instant Action'
  }];
  const resistanceFeatures = [{
    id: 1,
    text: 'Enhanced Strength & Mobility'
  }, {
    id: 2,
    text: 'Ultra-Portable & Convenient'
  }, {
    id: 3,
    text: 'Suitable for All Fitness Levels'
  }];
  const toggleBoxFun = () => {
    setActiveBoxFun(!activeBoxFun);
  };
  const toggleResistance = () => {
    setActiveResistance(!activeResistance);
  };
  return <section id="features" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-fitBlack text-center mb-12 fade-on-scroll visible">
            Dynamic Features
          </h2>

          <div className="md:hidden">
            <Tabs defaultValue="boxfun" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="boxfun">BoxFun</TabsTrigger>
                <TabsTrigger value="resistance">Resistance Bands</TabsTrigger>
              </TabsList>
              <TabsContent value="boxfun" className="mt-6">
                <div className="feature-panel">
                  <h3 className="text-xl font-bold text-fitBlack mb-3">Experience BoxFun</h3>
                  <p className="text-fitBlack/70 mb-4">Turn movement into fun while stressing less and sweating more.</p>
                  <button onClick={toggleBoxFun} className="expand-button mt-2">
                    <span>{activeBoxFun ? 'Hide Details' : 'Show Details'}</span>
                    {activeBoxFun ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <div className={`feature-reveal-content ${activeBoxFun ? 'active' : ''} mt-4`}>
                    <div className="space-y-3">
                      {boxFunFeatures.map(feature => <div key={feature.id} className="flex items-center space-x-2">
                          <Check size={16} className="text-fitYellow" />
                          <span className="text-sm text-fitBlack">{feature.text}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resistance" className="mt-6">
                <div className="feature-panel">
                  <h3 className="text-xl font-bold text-fitBlack mb-3">Resistance Bands</h3>
                  <p className="text-fitBlack/70 mb-4">Compatible with portable tower</p>
                  <button onClick={toggleResistance} className="expand-button mt-2">
                    <span>{activeResistance ? 'Hide Details' : 'Show Details'}</span>
                    {activeResistance ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <div className={`feature-reveal-content ${activeResistance ? 'active' : ''} mt-4`}>
                    <div className="space-y-3">
                      {resistanceFeatures.map(feature => <div key={feature.id} className="flex items-center space-x-2">
                          <Check size={16} className="text-fitYellow" />
                          <span className="text-sm text-fitBlack">{feature.text}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-panel fade-on-scroll visible panel-hover group" onClick={toggleBoxFun}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-fitBlack mb-3 group-hover:text-fitYellow transition-colors">Experience BoxFun</h3>
                  <p className="text-fitBlack/70">
                    Box Anytime, Anywhere. Unleash your inner fighter with portable, pro-level boxing workouts.
                  </p>
                </div>
                <div className="bg-fitYellow rounded-full p-2 transform transition-transform group-hover:rotate-180">
                  {activeBoxFun ? <ChevronUp size={18} className="text-fitBlack" /> : <ChevronDown size={18} className="text-fitBlack" />}
                </div>
              </div>
              <div className={`feature-reveal-content ${activeBoxFun ? 'active' : ''} mt-6`}>
                <div className="space-y-4">
                  {boxFunFeatures.map(feature => <div key={feature.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm animate-fade-in">
                      <Check size={18} className="text-fitYellow" />
                      <span className="text-fitBlack">{feature.text}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="feature-panel fade-on-scroll visible panel-hover group" onClick={toggleResistance}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-fitBlack mb-3 group-hover:text-fitYellow transition-colors">Resistance Bands: The Finishing Touch</h3>
                  <p className="text-fitBlack/70">
                    Enhance your PowerTower workouts with premium resistance bands for added strength and mobility.
                  </p>
                </div>
                <div className="bg-fitYellow rounded-full p-2 transform transition-transform group-hover:rotate-180">
                  {activeResistance ? <ChevronUp size={18} className="text-fitBlack" /> : <ChevronDown size={18} className="text-fitBlack" />}
                </div>
              </div>
              <div className={`feature-reveal-content ${activeResistance ? 'active' : ''} mt-6`}>
                <div className="space-y-4">
                  {resistanceFeatures.map(feature => <div key={feature.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm animate-fade-in">
                      <Check size={18} className="text-fitYellow" />
                      <span className="text-fitBlack">{feature.text}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturePanel;