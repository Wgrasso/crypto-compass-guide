
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('crypto-comparison');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-50/40 dark:bg-blue-900/10 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/30 dark:bg-blue-900/5 blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Intelligent Cryptocurrency Insights
          </span>
          <h1 className="mb-6 font-display">
            Navigate the Future of 
            <span className="relative ml-2">
              <span className="relative z-10">Investment</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground">
            Discover data-driven insights on cryptocurrency trends, optimal investment periods, 
            and strategic recommendations tailored to your financial goals.
          </p>
          
          <button
            onClick={scrollToContent}
            className="inline-flex items-center px-6 py-3 font-medium text-white bg-primary rounded-lg shadow-sm hover:bg-primary/90 transition-all"
          >
            Explore Trends
            <ArrowDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          aria-label="Scroll down"
        >
          <span className="mb-2">Scroll to explore</span>
          <ArrowDown className="animate-bounce" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
