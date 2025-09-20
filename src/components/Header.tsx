import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun, BookHeart, LogOut } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { supabase } from '../lib/supabaseClient';

const Header = () => {
  const { theme, toggleTheme, session } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-sm bg-stone-50/80 dark:bg-gray-900/80 border-stone-200 dark:border-gray-700">
      <div className="container flex items-center justify-between h-16 max-w-7xl mx-auto px-4">
        <Link to="/" className="flex items-center gap-2">
          <BookHeart className="w-8 h-8 text-brand-purple dark:text-brand-gold" />
          <h1 className="hidden sm:block text-xl font-bold font-serif text-brand-purple dark:text-brand-gold">
            Jornada da Sacerdotisa
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
          {session && (
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-gray-800"
              aria-label="Sair"
            >
              <LogOut className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
