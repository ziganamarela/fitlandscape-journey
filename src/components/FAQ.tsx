
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: 'installation',
      question: 'How easy is the PowerTower to set up?',
      answer: 'The PowerTower features a tool-free setup that takes less than 2 minutes. Simply unfold, lock the main components, and you're ready to begin your workout. No screws, no bolts, no hassle.'
    },
    {
      id: 'boxing',
      question: 'Is the BoxFun attachment really effective for boxing training?',
      answer: 'Absolutely. The BoxFun attachment was designed in collaboration with professional boxing coaches to deliver an authentic boxing experience. The height-adjustable design and responsive impact surface provide realistic feedback for proper technique development.'
    },
    {
      id: 'delivery',
      question: 'When will my FitAnywhere Bundle be delivered?',
      answer: 'For the Spring 2025 launch, we're taking pre-orders now with expected delivery in March-April 2025. Each order is fulfilled in the sequence received, and you'll receive detailed tracking information once your bundle ships.'
    },
    {
      id: 'resistance',
      question: 'Are the resistance bands suitable for all fitness levels?',
      answer: 'Yes, our premium resistance band set includes five different resistance levels, from 5kg to 25kg, making them suitable for beginners through advanced users. Each band is color-coded and labeled with its resistance level for easy identification.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-fitBlack text-center mb-12 fade-on-scroll visible">
            Frequently Asked Questions
          </h2>

          <div className="fade-on-scroll visible">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline text-left">
                    <span className="font-semibold text-base md:text-lg text-fitBlack">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-fitBlack/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
