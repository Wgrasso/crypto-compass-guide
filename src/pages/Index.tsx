
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import CryptoComparison from '@/components/CryptoComparison';
import InvestmentGuidance from '@/components/InvestmentGuidance';
import TimeHorizon from '@/components/TimeHorizon';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

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
        <main>
          <Hero />
          <CryptoComparison />
          <InvestmentGuidance />
          <TimeHorizon />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
