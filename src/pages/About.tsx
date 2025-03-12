
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Trigger animations after loading
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preload">
          <div className="preload-logo">
            <h2 className="text-3xl font-display font-bold">CryptoCompass</h2>
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <NavBar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div 
              className={`mb-16 text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">
                Our Mission
              </span>
              <h1 className="mb-6">About CryptoCompass</h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Guiding investors through the complex world of cryptocurrency with clarity and insight.
              </p>
            </div>
            
            <div 
              className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-700 delay-100 ease-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
                <p className="text-muted-foreground mb-4">
                  CryptoCompass was created to demystify cryptocurrency investments and provide clear, 
                  actionable insights for investors at all experience levels.
                </p>
                <p className="text-muted-foreground">
                  In a market characterized by volatility and complexity, we believe that data-driven 
                  analysis and strategic guidance can help investors make more informed decisions about 
                  when, where, and how to invest in digital assets.
                </p>
              </div>
              
              <div className="bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-0.5">
                      1
                    </span>
                    <span>Comprehensive cryptocurrency trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-0.5">
                      2
                    </span>
                    <span>Strategic investment recommendations based on time horizons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-0.5">
                      3
                    </span>
                    <span>Educational resources on blockchain technology and markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-0.5">
                      4
                    </span>
                    <span>Unbiased comparisons of leading cryptocurrencies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              className={`mb-20 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">Our Approach</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-semibold">01</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
                  <p className="text-muted-foreground">
                    Our analyses are based on comprehensive market data, on-chain metrics, and technical indicators.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-semibold">02</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Educational</h3>
                  <p className="text-muted-foreground">
                    We believe in empowering investors through education, not just providing recommendations.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-semibold">03</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparent</h3>
                  <p className="text-muted-foreground">
                    All our methodologies and reasoning are clearly explained, with no hidden agendas.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className={`bg-card border border-border rounded-xl p-8 mb-12 transition-all duration-700 delay-300 ease-out ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">Important Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                CryptoCompass provides educational content and analysis for informational purposes only. 
                We are not financial advisors, and our content should not be construed as financial advice.
              </p>
              <p className="text-muted-foreground">
                Cryptocurrency investments carry significant risks, including the possible loss of principal. 
                Past performance is not indicative of future results. Always conduct your own research and 
                consider consulting with a qualified financial professional before making investment decisions.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
