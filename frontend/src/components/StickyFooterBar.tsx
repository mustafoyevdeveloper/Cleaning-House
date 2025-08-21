import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { getSettings } from '@/lib/api';
import { Link, useLocation } from 'react-router-dom';

export default function StickyFooterBar() {
  const { data } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Admin panelda ko'rsatma
  if (location.pathname === '/admin') {
    return null;
  }

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 300;
      
      // Footer ga yetganda sticky bar ni yo'qolish
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Footer ga yetganda sticky bar ni ko'rsatma
        if (scrollPosition >= footerTop - 100) {
          setVisible(false);
          return;
        }
      }
      
      if (shouldShow !== visible) {
        setIsAnimating(true);
        setVisible(shouldShow);
        
        // Reset animation state after animation completes
        setTimeout(() => setIsAnimating(false), 500);
      }
    };
    
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  // Animate opening when becoming visible
  useEffect(() => {
    if (visible && !isOpen) {
      // Small delay before opening animation
      setTimeout(() => setIsOpen(true), 100);
    } else if (!visible) {
      setIsOpen(false);
    }
  }, [visible, isOpen]);

  // Footer bar is always visible when scrolling
  if (!visible && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-in-out ${
        visible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-full opacity-0 scale-95'
      }`}
    >
      <div className={`w-full px-4 py-3 bg-brand-navy text-white shadow-2xl transform transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm sm:text-base">
            {data?.bottomBar?.message || 'Ready to get started?'}
          </p>
          <Link to={data?.bottomBar?.buttonLink || '/contact'}>
            <Button 
              variant="white-on-dark" 
              size="lg"
            >
              {data?.bottomBar?.buttonText || 'Get Free Quote'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


