import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useAppContext } from './contexts/AppContext';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import AuthPage from './pages/AuthPage';
import { supabase } from './lib/supabaseClient';
import { BookHeart } from 'lucide-react';

const AppContent = () => {
  const { session, loading } = useAppContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-50 dark:bg-gray-900">
        <BookHeart className="w-16 h-16 text-brand-purple dark:text-brand-gold animate-pulse" />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      {session ? (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dia/:day" element={<ChapterPage />} />
          </Routes>
        </Layout>
      ) : (
        <AuthPage />
      )}
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
