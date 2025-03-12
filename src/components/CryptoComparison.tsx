
import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Mock data for demonstration
const cryptoData = [
  { name: 'Jan', Bitcoin: 42000, Ethereum: 3200, Solana: 140 },
  { name: 'Feb', Bitcoin: 44500, Ethereum: 3100, Solana: 135 },
  { name: 'Mar', Bitcoin: 47000, Ethereum: 3300, Solana: 150 },
  { name: 'Apr', Bitcoin: 45000, Ethereum: 3250, Solana: 145 },
  { name: 'May', Bitcoin: 48000, Ethereum: 3500, Solana: 160 },
  { name: 'Jun', Bitcoin: 50000, Ethereum: 3700, Solana: 180 },
];

const cryptoList = [
  { 
    id: 'bitcoin', 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    price: '$52,304.16', 
    change: '+2.34%',
    positive: true,
    description: 'The original cryptocurrency and largest by market capitalization. Known for its first-mover advantage and limited supply.',
    recommendation: 'Long-term investment (3-5 years)',
    risk: 'Medium'
  },
  { 
    id: 'ethereum', 
    name: 'Ethereum', 
    symbol: 'ETH', 
    price: '$3,821.44', 
    change: '+4.72%',
    positive: true,
    description: 'Smart contract platform enabling decentralized applications (dApps) and the foundation of DeFi.',
    recommendation: 'Medium to long-term (1-3 years)',
    risk: 'Medium'
  },
  { 
    id: 'solana', 
    name: 'Solana', 
    symbol: 'SOL', 
    price: '$185.67', 
    change: '-1.22%',
    positive: false,
    description: 'High-performance blockchain focused on speed and low transaction costs.',
    recommendation: 'Medium-term (1-2 years)',
    risk: 'High'
  },
];

const CryptoComparison = () => {
  const [selectedCoins, setSelectedCoins] = useState(['Bitcoin', 'Ethereum']);
  const [isChartVisible, setIsChartVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsChartVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('chart-container');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleCoinToggle = (coin: string) => {
    setSelectedCoins(prev => 
      prev.includes(coin) 
        ? prev.filter(c => c !== coin) 
        : [...prev, coin]
    );
  };

  const colors = {
    Bitcoin: '#F7931A',
    Ethereum: '#627EEA',
    Solana: '#00FFA3'
  };

  return (
    <section id="crypto-comparison" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Market Trends
          </span>
          <h2 className="mb-4">Compare Cryptocurrency Performance</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Track the performance of major cryptocurrencies and identify patterns to inform your investment decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cryptoList.map((crypto) => (
            <div 
              key={crypto.id}
              className="relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{crypto.name}</h3>
                  <span className="text-sm text-muted-foreground">{crypto.symbol}</span>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={selectedCoins.includes(crypto.name)}
                    onChange={() => handleCoinToggle(crypto.name)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-baseline mb-5">
                <span className="text-2xl font-bold">{crypto.price}</span>
                <span className={`ml-2 flex items-center text-sm ${crypto.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {crypto.change}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{crypto.description}</p>
              
              <div className="border-t border-border pt-4 mt-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="block text-muted-foreground">Recommended For:</span>
                    <span className="font-medium">{crypto.recommendation}</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">Risk Level:</span>
                    <span className="font-medium">{crypto.risk}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          id="chart-container" 
          className={`p-6 rounded-xl border border-border bg-card/50 transition-all duration-700 ${
            isChartVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">Price Comparison (6 Months)</h3>
          
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cryptoData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '0.5rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
                <Legend />
                {Object.keys(colors).map(coin => (
                  selectedCoins.includes(coin) && (
                    <Line 
                      key={coin}
                      type="monotone" 
                      dataKey={coin} 
                      stroke={colors[coin as keyof typeof colors]} 
                      strokeWidth={2}
                      dot={{ stroke: colors[coin as keyof typeof colors], strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                      animationDuration={1500}
                    />
                  )
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoComparison;
