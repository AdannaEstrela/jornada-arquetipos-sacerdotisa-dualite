import React from 'react';
import { chapters } from '../data/content';
import { useAppContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import { CheckCircle, Lock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const { progress } = useAppContext();
  const completedCount = progress.completedDays.length;
  const totalChapters = chapters.length;
  const progressPercentage = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-serif text-brand-purple dark:text-brand-gold">Bem-vinda, Buscadora</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Sua jornada sagrada de 22 dias começa aqui.</p>
      </div>

      <div className="mb-10">
        <div className="flex justify-between mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          <span>Progresso da Jornada</span>
          <span>Dia {completedCount} de {totalChapters}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-gradient-to-r from-brand-purple to-brand-gold h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter, index) => {
          const isCompleted = progress.completedDays.includes(chapter.day);
          const isFavorite = progress.favorites.includes(chapter.day);
          const isUnlocked = index === 0 || progress.completedDays.includes(chapters[index - 1]?.day);

          return (
            <motion.div
              key={chapter.day}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link to={isUnlocked ? `/dia/${chapter.day}` : '#'} className={`block ${!isUnlocked ? 'cursor-not-allowed' : ''}`}>
                <div className={`relative h-full p-6 transition-all duration-300 border-2 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                    isUnlocked 
                    ? 'bg-white dark:bg-gray-800 border-transparent' 
                    : 'bg-gray-100 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                }`}>
                  {!isUnlocked && <div className="absolute inset-0 z-10 bg-black/30 rounded-lg"></div>}
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-purple dark:text-brand-gold">Dia {chapter.day}</p>
                      <h3 className="text-xl font-bold font-serif mt-1">{chapter.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{chapter.divinity}</p>
                    </div>
                    <div className="flex items-center gap-2 text-brand-gold">
                      {isFavorite && <Star size={20} fill="currentColor" />}
                      {isCompleted ? <CheckCircle size={24} className="text-green-500" /> : (isUnlocked ? null : <Lock size={24} className="z-20 text-white" />)}
                    </div>
                  </div>
                  
                  {isUnlocked && <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    {chapter.arcano.keywords.join(' • ')}
                  </p>}

                  <div className="mt-6 text-right">
                    <span className={`font-semibold ${isUnlocked ? 'text-brand-purple dark:text-brand-gold' : 'text-gray-400 dark:text-gray-500'}`}>
                      {isUnlocked ? "Começar o dia" : "Bloqueado"}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HomePage;
