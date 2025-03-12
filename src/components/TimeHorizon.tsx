
import { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Mock data
const timeHorizonData = [
  {
    name: 'Bitcoin',
    shortTerm: 2,
    midTerm: 7,
    longTerm: 9,
  },
  {
    name: 'Ethereum',
    shortTerm: 3,
    midTerm: 8,
    longTerm: 8,
  },
  {
    name: 'Solana',
    shortTerm: 5,
    midTerm: 7,
    longTerm: 6,
  },
  {
    name: 'Cardano',
    shortTerm: 2,
    midTerm: 6,
    longTerm: 7,
  },
  {
    name: 'Polkadot',
    shortTerm: 4,
    midTerm: 7,
    longTerm: 7,
  },
];

const timeHorizons = [
  {
    id: 'short-term',
    name: 'Short-Term',
    period: '0-6 months',
    description: 'Short-term investment is highly volatile and speculative. Only suitable for active traders who can monitor the market closely.',
    riskLevel: 'High',
    suitableFor: 'Experienced traders, technical analysts, high-risk tolerance investors',
  },
  {
    id: 'mid-term',
    name: 'Mid-Term',
    period: '6-24 months',
    description: 'Mid-term investment captures market cycles and major price movements while avoiding daily noise.',
    riskLevel: 'Medium',
    suitableFor: 'Semi-active investors, those looking to capitalize on market trends',
  },
  {
    id: 'long-term',
    name: 'Long-Term',
    period: '2+ years',
    description: 'Long-term investment focuses on fundamental value and adoption potential, ignoring short-term volatility.',
    riskLevel: 'Medium-Low',
    suitableFor: 'Passive investors, technology believers, retirement portfolios',
  },
];

const TimeHorizon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeHorizon, setActiveTimeHorizon] = useState('mid-term');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('time-horizon-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="time-horizon-section" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Investment Periods
          </span>
          <h2 className="mb-4">Optimal Time Horizons</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Different cryptocurrencies perform best over different time periods. Find the right investment horizon for your goals.
          </p>
        </div>
        
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Investment Period Suitability Score (1-10)</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={timeHorizonData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip 
                    formatter={(value) => [`${value}/10`, 'Score']}
                    contentStyle={{ 
                      borderRadius: '0.5rem', 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
                    }}
                  />
                  <Legend />
                  <Bar dataKey="shortTerm" name="Short-Term (0-6 months)" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="midTerm" name="Mid-Term (6-24 months)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="longTerm" name="Long-Term (2+ years)" fill="#1E40AF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Select an Investment Timeframe</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {timeHorizons.map((horizon) => (
              <button
                key={horizon.id}
                onClick={() => setActiveTimeHorizon(horizon.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTimeHorizon === horizon.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {horizon.name} ({horizon.period})
              </button>
            ))}
          </div>
          
          {timeHorizons.map((horizon) => (
            <div
              key={horizon.id}
              className={`transition-all duration-500 ${
                activeTimeHorizon === horizon.id
                  ? 'opacity-100 max-h-[500px]'
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">{horizon.name} Investment Strategy</h3>
                  <p className="text-muted-foreground mb-4">{horizon.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium mb-1">Risk Level</h4>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {horizon.riskLevel}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Suitable For</h4>
                      <p className="text-sm text-muted-foreground">{horizon.suitableFor}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Key Considerations</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {horizon.id === 'short-term' && (
                        <>
                          <li>• Requires active management and technical analysis skills</li>
                          <li>• Higher trading fees and potential tax consequences</li>
                          <li>• Best during periods of high volatility or clear trends</li>
                        </>
                      )}
                      {horizon.id === 'mid-term' && (
                        <>
                          <li>• Balances short-term volatility with long-term potential</li>
                          <li>• Can capitalize on market cycles and major upgrades</li>
                          <li>• Allows for position adjustments as fundamentals change</li>
                        </>
                      )}
                      {horizon.id === 'long-term' && (
                        <>
                          <li>• Historically outperformed most active trading strategies</li>
                          <li>• Lower stress, time commitment, and trading fees</li>
                          <li>• Potential tax advantages through long-term capital gains</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Best Cryptocurrencies for {horizon.name}</h3>
                  
                  {horizon.id === 'short-term' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Solana (SOL)</h4>
                        <p className="text-sm text-muted-foreground mb-2">High processing speed and low fees make it responsive to market trends and developer activity.</p>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-2">Suitability:</span>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-xs ml-2">7.5/10</span>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Polkadot (DOT)</h4>
                        <p className="text-sm text-muted-foreground mb-2">Parachain auctions and ecosystem developments create short-term catalysts.</p>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-2">Suitability:</span>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <span className="text-xs ml-2">6/10</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {horizon.id === 'mid-term' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Ethereum (ETH)</h4>
                        <p className="text-sm text-muted-foreground mb-2">Ongoing network upgrades and expanding ecosystem create mid-term growth catalysts.</p>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-2">Suitability:</span>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                          <span className="text-xs ml-2">8/10</span>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Cardano (ADA)</h4>
                        <p className="text-sm text-muted-foreground mb-2">Methodical development approach with planned upgrades that unfold over months to years.</p>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-2">Suitability:</span>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-xs ml-2">7.5/10</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {horizon.id === 'long-term' && (
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Bitcoin (BTC)</h4>
                        <p className="text-sm text-muted-foreground mb-2">Limited supply, institutional adoption, and first-mover advantage create long-term value proposition.</p>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-2">Suitability:</span>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                          <span className="text-xs ml-2">9/10</span>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="font-medium mb-2">Ethereum (ETH)</h4>
                        <p className="text-sm text-muted-foreground mb-2">Smart contract platform that forms the foundation of the decentralized finance ecosystem.</p>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-2">Suitability:</span>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-xs ml-2">8.5/10</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeHorizon;
