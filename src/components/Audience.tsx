
import { useState } from 'react';
import { Briefcase, Building, Heart } from 'lucide-react';

const Audience = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const audiences = [
    {
      id: 1,
      icon: Briefcase,
      label: 'High-Earning Professionals',
      description: 'Elevate your fitness routine without compromising your busy schedule with our time-efficient solutions.'
    },
    {
      id: 2,
      icon: Building,
      label: 'Busy Urbanites',
      description: 'Transform any urban living space into a complete gym with our space-saving, stylish equipment.'
    },
    {
      id: 3,
      icon: Heart,
      label: 'Fitness Enthusiasts',
      description: 'Challenge yourself with professional-grade equipment designed for serious fitness results.'
    }
  ];

  const handleIconClick = (id: number) => {
    if (activeIcon === id) {
      setActiveIcon(null);
    } else {
      setActiveIcon(id);
    }
  };

  return (
    <section id="audience" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-fitBlack text-center mb-12 fade-on-scroll visible">
            Who Is FitAnywhere For?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-on-scroll visible">
            {audiences.map((item) => (
              <div 
                key={item.id} 
                className="text-center"
              >
                <div 
                  className={`
                    mx-auto w-20 h-20 flex items-center justify-center rounded-full 
                    transition-all duration-300 cursor-pointer 
                    ${activeIcon === item.id 
                      ? 'bg-fitYellow text-fitBlack shadow-lg shadow-yellow-300/30' 
                      : 'bg-white text-fitBlack border border-gray-200 hover:border-fitYellow'
                    }
                  `}
                  onClick={() => handleIconClick(item.id)}
                >
                  <item.icon size={32} />
                </div>
                
                <h3 className="font-semibold text-lg mt-4 mb-2">{item.label}</h3>
                
                <div 
                  className={`
                    overflow-hidden transition-all duration-300
                    ${activeIcon === item.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <p className="text-sm text-fitBlack/70 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
