
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "PowerTower and BoxFun completely transformed my routine. It's beautifully designed and incredibly effective.",
      name: "Jasper",
      title: "Tech Executive",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "A minimalist dream for busy professionals. The quality is exceptional and the workouts are challenging yet accessible.",
      name: "Eva",
      title: "Design Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "Resistance bands add the perfect challenge to my workouts. The entire system feels premium and worth every penny.",
      name: "Lucas",
      title: "Finance Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2087&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-fitBlack text-center mb-12 fade-on-scroll visible">
            What Our Users Say
          </h2>

          <div className="relative overflow-hidden fade-on-scroll visible">
            <div className={`testimonial-carousel ${isAnimating ? '' : 'active'}`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-fitYellow mb-2 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-lg text-fitBlack italic">{testimonials[activeIndex].quote}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-fitBlack text-xl">{testimonials[activeIndex].name}</h3>
                      <p className="text-fitBlack/60">{testimonials[activeIndex].title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-fitYellow scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-fitYellow transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-fitYellow transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
