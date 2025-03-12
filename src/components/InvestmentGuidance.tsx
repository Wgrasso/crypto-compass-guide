
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, TrendingDown, Zap, Clock, Shield } from 'lucide-react';

const investmentStrategies = [
  {
    id: 'long-term',
    title: 'Long-Term HODLing',
    description: 'Buy and hold quality cryptocurrencies for 3-5+ years, ignoring short-term market fluctuations.',
    benefits: ['Reduced impact from market volatility', 'Tax advantages in many jurisdictions', 'Lower time commitment'],
    bestFor: ['Bitcoin', 'Ethereum'],
    icon: <Clock className="h-10 w-10 text-primary" />,
  },
  {
    id: 'mid-term',
    title: 'Strategic Accumulation',
    description: 'Gradually build positions in selected cryptocurrencies over 1-3 years, taking advantage of market cycles.',
    benefits: ['Better average entry prices', 'Flexibility to adjust strategy', 'Moderate risk exposure'],
    bestFor: ['Ethereum', 'Solana', 'Polkadot'],
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
  },
  {
    id: 'short-term',
    title: 'Tactical Trading',
    description: 'Short-term positions (days to months) based on technical analysis, market sentiment, and news catalysts.',
    benefits: ['Capitalize on market inefficiencies', 'Quicker profit realization', 'Higher potential returns'],
    bestFor: ['Altcoins with strong momentum', 'Market-driven tokens'],
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
  {
    id: 'conservative',
    title: 'Defensive Position',
    description: 'Focus on established cryptocurrencies with lower risk profiles, staking, and yield-generating strategies.',
    benefits: ['Capital preservation', 'Passive income generation', 'Lower volatility'],
    bestFor: ['Bitcoin', 'Stablecoins (USDC, DAI)'],
    icon: <Shield className="h-10 w-10 text-primary" />,
  }
];

const InvestmentGuidance = () => {
  const [activeStrategy, setActiveStrategy] = useState(investmentStrategies[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Investment Strategies
          </span>
          <h2 className="mb-4">Why and When to Invest</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Understanding the right investment strategy and timing is crucial for success in cryptocurrency markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div 
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
              }`}
            >
              {investmentStrategies.map((strategy, index) => (
                <button
                  key={strategy.id}
                  onClick={() => setActiveStrategy(strategy.id)}
                  className={`w-full text-left p-5 rounded-lg transition-all duration-300 ${
                    activeStrategy === strategy.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-card hover:bg-card/80 border border-border'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: isVisible ? `fadeIn 500ms ${index * 100}ms forwards` : 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{strategy.title}</h3>
                    <ArrowRight size={18} className={activeStrategy === strategy.id ? 'opacity-100' : 'opacity-0'} />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8">
            {investmentStrategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`h-full p-6 rounded-xl bg-card border border-border transition-all duration-500 ${
                  activeStrategy === strategy.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 hidden'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                    {strategy.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{strategy.title}</h3>
                    <p className="text-muted-foreground">{strategy.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {strategy.bestFor.map((coin, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {coin}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Why This Strategy Works</h4>
                  <p className="text-muted-foreground">
                    {strategy.id === 'long-term' && "Long-term investing works well with established cryptocurrencies because it allows you to benefit from the overall market growth while avoiding the stress of short-term volatility. Historical data shows that despite major corrections, Bitcoin and Ethereum have consistently reached new all-time highs over longer time horizons."}
                    {strategy.id === 'mid-term' && "Strategic accumulation takes advantage of cryptocurrency market cycles, which typically run 2-4 years from peak to peak. By gradually building positions, you can capture value at various price points and potentially outperform simple lump-sum investments, especially in emerging but established projects with strong fundamentals."}
                    {strategy.id === 'short-term' && "Cryptocurrency markets are still relatively inefficient and can be driven by sentiment, news, and momentum. Tactical trading allows you to capitalize on these inefficiencies, but requires more active management, technical analysis skills, and strict risk management protocols to be successful."}
                    {strategy.id === 'conservative' && "A defensive approach prioritizes capital preservation while still maintaining exposure to cryptocurrency upside. This strategy is ideal during uncertain market conditions or for investors who want to limit drawdowns while generating yield through staking, lending, or other passive income mechanisms."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuidance;
