
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'py-3 blurred-background shadow-sm' : 'py-5 bg-transparent'
  }`;
  
  const linkClass = 'relative font-medium transition-all duration-200 hover:text-primary';
  const activeLinkClass = `${linkClass} text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:content-['']`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-display font-semibold tracking-tight transition-all">
            CryptoCompass
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={location.pathname === '/' ? activeLinkClass : linkClass}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? activeLinkClass : linkClass}>
              About
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden blurred-background animate-slide-down">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link to="/" className="block py-2 font-medium">
              Home
            </Link>
            <Link to="/about" className="block py-2 font-medium">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
