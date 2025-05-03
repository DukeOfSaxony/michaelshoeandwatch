import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      id="navbar" 
      className={`fixed w-full ${isScrolled ? 'py-2 bg-[#f5f5f5] shadow-md' : 'py-3 md:py-4'} z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#aa1e1e] rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-heading font-bold text-lg md:text-xl">M</span>
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg md:text-xl text-[#1c1c1c]">Michael's</h1>
            <p className="text-xs md:text-sm text-gray-600 -mt-1">Shoe Repair</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors">About</a>
          <a href="#services" className="nav-link font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors">Services</a>
          <a href="#prices" className="nav-link font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors">Prices</a>
          <a href="#gallery" className="nav-link font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors">Gallery</a>
          <a href="#testimonials" className="nav-link font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors">Testimonials</a>
          <a href="#contact" className="bg-[#aa1e1e] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-button" 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div id="mobile-menu" className={`mobile-menu absolute top-full left-0 w-full bg-[#f5f5f5] shadow-md md:hidden ${isMenuOpen ? 'open' : ''}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a href="#about" className="font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors py-2" onClick={closeMenu}>About</a>
          <a href="#services" className="font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors py-2" onClick={closeMenu}>Services</a>
          <a href="#prices" className="font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors py-2" onClick={closeMenu}>Prices</a>
          <a href="#gallery" className="font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors py-2" onClick={closeMenu}>Gallery</a>
          <a href="#testimonials" className="font-body text-[#1c1c1c] hover:text-[#aa1e1e] transition-colors py-2" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" className="bg-[#aa1e1e] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors text-center" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
