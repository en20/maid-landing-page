import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold sm:text-5xl text-[#4c4c4c]">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-[#6a6a6a]">Find answers to your most common questions about our cleaning services and how we can help keep your home spotless.</p>
      </div>

      <div className="space-y-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-pink-200">
          <div
            className="flex justify-between items-center p-6 bg-pink-50 cursor-pointer hover:bg-pink-100 transition-all duration-200 ease-in-out"
            onClick={() => toggleAnswer(0)}
          >
            <h3 className="text-2xl font-semibold text-pink-700">What services do you offer?</h3>
            <span className="text-2xl text-pink-500">{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="p-6 text-pink-600 border-t border-pink-200">
              <p>
                We offer a range of cleaning services to meet your needs, from residential cleaning to office cleaning, deep cleaning, and more. Each service is customizable to ensure we meet your specific requirements.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-pink-200">
          <div
            className="flex justify-between items-center p-6 bg-pink-50 cursor-pointer hover:bg-pink-100 transition-all duration-200 ease-in-out"
            onClick={() => toggleAnswer(1)}
          >
            <h3 className="text-2xl font-semibold text-pink-700">How do I schedule a cleaning?</h3>
            <span className="text-2xl text-pink-500">{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="p-6 text-pink-600 border-t border-pink-200">
              <p>
                Scheduling a cleaning is simple. You can either fill out the contact form on our website or give us a call to choose the best time for your cleaning. We work with your schedule to ensure convenience.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-pink-200">
          <div
            className="flex justify-between items-center p-6 bg-pink-50 cursor-pointer hover:bg-pink-100 transition-all duration-200 ease-in-out"
            onClick={() => toggleAnswer(2)}
          >
            <h3 className="text-2xl font-semibold text-pink-700">What areas do you serve?</h3>
            <span className="text-2xl text-pink-500">{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="p-6 text-pink-600 border-t border-pink-200">
              <p>
                We proudly serve Pinellas County and the greater Tampa Bay area. If you’re unsure whether we cover your location, don’t hesitate to reach out to us for clarification.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-pink-200">
          <div
            className="flex justify-between items-center p-6 bg-pink-50 cursor-pointer hover:bg-pink-100 transition-all duration-200 ease-in-out"
            onClick={() => toggleAnswer(3)}
          >
            <h3 className="text-2xl font-semibold text-pink-700">Are your cleaning products safe?</h3>
            <span className="text-2xl text-pink-500">{activeIndex === 3 ? '-' : '+'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="p-6 text-pink-600 border-t border-pink-200">
              <p>
                Absolutely! We only use eco-friendly and non-toxic cleaning products to ensure the safety of both your family and pets while delivering top-notch results.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
