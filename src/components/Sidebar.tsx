import { Home, User, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: 'home', path: '/', icon: Home, label: 'Home' },
    { id: 'about', path: '/about', icon: User, label: 'About' },
    { id: 'portfolio', path: '/portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', path: '/contact', icon: Mail, label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/pradastikomyos', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prada-a-mufid-a40189332/', label: 'LinkedIn' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-sidebar border-r border-border z-50 flex flex-col items-center py-6">
      {/* Profile Avatar Removed */}

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative",
                isActive 
                  ? "bg-primary text-primary-foreground portfolio-glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
              title={item.label}
            >
              <Icon size={20} className={cn(
                "transition-transform duration-200",
                isActive ? "scale-110" : "group-hover:scale-110"
              )} />
              
              {/* Tooltip */}
              <div className="absolute left-16 bg-card text-card-foreground px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="mb-4">
        <ThemeToggle />
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-3">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 hover:scale-110"
              title={link.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </aside>
  );
};