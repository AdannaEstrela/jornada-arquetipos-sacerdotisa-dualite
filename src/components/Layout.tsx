import React, { ReactNode } from 'react';
import Header from './Header';
import AddToHomeScreenPrompt from './AddToHomeScreenPrompt';
import { useAppContext } from '../contexts/AppContext';

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme, fontSize } = useAppContext();

  return (
    <div className={`${theme} font-sans`}>
      <div className={`min-h-screen text-gray-800 transition-colors duration-300 bg-stone-50 dark:bg-gray-900 dark:text-gray-200 font-size-${fontSize}`}>
        <Header />
        <main className="container px-4 py-8 mx-auto max-w-7xl">
          {children}
        </main>
        <footer className="py-6 text-center text-gray-500 border-t border-gray-200 dark:border-gray-700">
          <p>&copy; 2025 Jornada Arquetípica da Sacerdotisa. Criado com 💜.</p>
        </footer>
        <AddToHomeScreenPrompt />
      </div>
    </div>
  );
};

export default Layout;
