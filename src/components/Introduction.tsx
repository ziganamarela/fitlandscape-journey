
import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const Introduction = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const features = [
    { id: 1, name: 'Minimalist, Premium Design' },
    { id: 2, name: 'Instant, Tool-Free Setup' },
    { id: 3, name: 'Lifetime Investment – No Monthly Fees' },
    { id: 4, name: 'Professional Grade Workouts' },
  ];

  return (
    <section id="introduction" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 fade-on-scroll visible">
            <h2 className="text-3xl md:text-4xl font-bold text-fitBlack">
              Introducing PowerTower: The Centerpiece of Your Premium Home Gym
            </h2>
            <p className="text-lg text-fitBlack/70 max-w-2xl mx-auto">
              Crowded gyms and subscription fatigue are over. PowerTower is your sleek, portable home gym, designed for high-performing urban minimalists.
            </p>
            
            <button 
              onClick={toggleExpanded} 
              className="expand-button mx-auto mt-6"
            >
              <span>Expand for Details</span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            
            <div className={`feature-reveal-content ${isExpanded ? 'active' : ''} mt-8`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg animate-fade-in">
                    <div className="flex-shrink-0 bg-fitYellow rounded-full p-1">
                      <Check size={16} className="text-fitBlack" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fitBlack">{feature.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
