import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

const AddToHomeScreenPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Check if the prompt has been dismissed before
      if (!localStorage.getItem('pwaInstallDismissed')) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pwaInstallDismissed', 'true');
  };

  if (!isVisible || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center gap-4 animate-fade-in-up">
      <Download className="w-8 h-8 text-brand-purple dark:text-brand-gold" />
      <div>
        <p className="font-semibold">Instale o App!</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Tenha a jornada na sua tela inicial.</p>
      </div>
      <button onClick={handleInstallClick} className="ml-4 px-4 py-2 bg-brand-purple text-white rounded-md font-semibold">
        Instalar
      </button>
      <button onClick={handleDismiss} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <X size={20} />
      </button>
    </div>
  );
};

export default AddToHomeScreenPrompt;
