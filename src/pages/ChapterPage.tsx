import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { chapters } from '../data/content';
import { useAppContext } from '../contexts/AppContext';
import { ArrowLeft, Star, Type, Music, CheckCircle, BookHeart, LoaderCircle, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ChapterPage = () => {
  const { day } = useParams();
  const { 
    progress, 
    updateProgress, 
    toggleFavorite, 
    setFontSize,
    fontSize,
    updateNote, 
    updateQuizAnswer, 
    loading
  } = useAppContext();
  
  const chapter = chapters.find(c => c.day.toString() === day);

  React.useEffect(() => {
    if (chapter && !progress.completedDays.includes(chapter.day)) {
      updateProgress(chapter.day);
    }
  }, [chapter, progress.completedDays, updateProgress]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><LoaderCircle className="animate-spin h-12 w-12 text-brand-purple" /></div>;
  }

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const isFavorite = progress.favorites.includes(chapter.day);
  const fontSizes = ['sm', 'base', 'lg', 'xl'];
  const currentFontSizeIndex = fontSizes.indexOf(fontSize);

  const increaseFontSize = () => {
    if (currentFontSizeIndex < fontSizes.length - 1) {
      setFontSize(fontSizes[currentFontSizeIndex + 1] as any);
    }
  };

  const decreaseFontSize = () => {
    if (currentFontSizeIndex > 0) {
      setFontSize(fontSizes[currentFontSizeIndex - 1] as any);
    }
  };
  
  const Section = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="p-6 my-8 bg-white rounded-lg shadow-md dark:bg-gray-800/50"
    >
      <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold font-serif text-brand-purple dark:text-brand-gold">
        {icon}
        {title}
      </h3>
      <div className="prose prose-lg dark:prose-dark max-w-none">{children}</div>
    </motion.div>
  );

  const quizAnswersForDay = progress.quizAnswers?.[chapter.day] || {};
  const noteForDay = progress.notes?.[chapter.day] || '';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="sticky top-16 z-30 bg-stone-50/90 dark:bg-gray-900/90 backdrop-blur-sm -mx-4 px-4 py-3 border-b border-stone-200 dark:border-gray-700">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-gray-800">
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Voltar à Jornada</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={decreaseFontSize} disabled={currentFontSizeIndex === 0} className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-gray-800 disabled:opacity-50"><Type size={16} /></button>
            <button onClick={increaseFontSize} disabled={currentFontSizeIndex === fontSizes.length - 1} className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-gray-800 disabled:opacity-50"><Type size={22} /></button>
            <button onClick={() => toggleFavorite(chapter.day)} className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-gray-800">
              <Star size={20} className={`transition-colors ${isFavorite ? 'text-brand-gold fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto mt-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-lg font-semibold text-brand-purple dark:text-brand-gold">Dia {chapter.day}</p>
          <h1 className="mt-1 text-4xl md:text-5xl font-extrabold font-serif text-gray-900 dark:text-white">{chapter.title}</h1>
          <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400">{chapter.divinity}</h2>
        </motion.div>

        <motion.img 
          src={chapter.imageUrl} 
          alt={chapter.title} 
          className="w-full h-64 md:h-96 object-cover rounded-xl my-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <Section title={chapter.arcano.title} icon={<BookHeart size={24} />}>
          <p><strong>Mito:</strong> {chapter.arcano.myth}</p>
          <p className="mt-4"><strong>Significado:</strong> {chapter.arcano.meaning}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chapter.arcano.keywords.map(kw => <span key={kw} className="px-3 py-1 text-sm rounded-full bg-brand-gold-light text-brand-purple-dark dark:bg-brand-purple-dark dark:text-brand-gold-light">{kw}</span>)}
          </div>
        </Section>
        
        <Section title="Quiz Interativo" icon={<CheckCircle size={24} />}>
          {chapter.quiz.map((q, i) => (
            <div key={i} className="mt-4">
              <p className="font-semibold">{q}</p>
              <textarea
                className="w-full p-2 mt-2 bg-stone-100 dark:bg-gray-700 rounded-md border border-stone-300 dark:border-gray-600 focus:ring-2 focus:ring-brand-purple"
                rows={3}
                placeholder="Sua reflexão..."
                value={quizAnswersForDay[i] || ''}
                onChange={(e) => updateQuizAnswer(chapter.day, i, e.target.value)}
              />
            </div>
          ))}
        </Section>
        
        <Section title="Prática Ritualística" icon={<BookHeart size={24} />}>
          <h4 className="font-bold">{chapter.ritual.title}</h4>
          <p>{chapter.ritual.description}</p>
        </Section>

        <Section title="Desenvolvimento da Intuição" icon={<BookHeart size={24} />}>
          <p>{chapter.intuitionTip}</p>
        </Section>

        <Section title="Mensagem & Afirmação" icon={<BookHeart size={24} />}>
          <p className="italic">"{chapter.affirmation}"</p>
        </Section>

        <Section title="Metáfora Terapêutica" icon={<BookHeart size={24} />}>
          <p>{chapter.metaphor}</p>
        </Section>
        
        <Section title="Aromaterapia" icon={<BookHeart size={24} />}>
          <h4 className="font-bold">{chapter.aromatherapy.oil}</h4>
          <p><strong>Modo de uso:</strong> {chapter.aromatherapy.usage}</p>
          <p><strong>Benefícios:</strong> {chapter.aromatherapy.benefits}</p>
        </Section>

        <Section title="Fitoterapia" icon={<BookHeart size={24} />}>
          <h4 className="font-bold">{chapter.phytotherapy.herb}</h4>
          <p><strong>Propriedades:</strong> {chapter.phytotherapy.properties}</p>
          {chapter.phytotherapy.recipes.map((recipe, index) => (
            <div key={index} className="mt-2">
              <p><strong>{recipe.title}:</strong> {recipe.description}</p>
            </div>
          ))}
          <p className="mt-2 text-sm text-gray-500"><strong>Contraindicações:</strong> {chapter.phytotherapy.contraindications}</p>
        </Section>

        <Section title="Calendário Lunar e Reflexão" icon={<Moon size={24} />}>
          <p><strong>Conexão:</strong> {chapter.lunar.connection}</p>
          <p className="mt-2 italic"><strong>Reflexão:</strong> "{chapter.lunar.reflection}"</p>
        </Section>

        <Section title="Diário da Sacerdotisa" icon={<BookHeart size={24} />}>
          <p>Anote aqui seus sonhos, insights, emoções e sincronicidades do dia.</p>
          <textarea 
            className="w-full p-2 mt-2 bg-stone-100 dark:bg-gray-700 rounded-md border border-stone-300 dark:border-gray-600 focus:ring-2 focus:ring-brand-purple"
            rows={5}
            placeholder="Suas anotações pessoais..."
            value={noteForDay}
            onChange={(e) => updateNote(chapter.day, e.target.value)}
          />
        </Section>

        <Section title="Conexão Musical" icon={<Music size={24} />}>
          <p>Ouça a playlist durante seu ritual ou ao final do dia, para integrar as energias.</p>
          <a href={chapter.musicLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-6 py-3 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors">
            Ouvir no Spotify
          </a>
        </Section>
        
        <div className="my-12 text-center">
          <p className="text-2xl font-serif text-green-600 dark:text-green-400">Dia concluído!</p>
          <p className="text-gray-600 dark:text-gray-400">"Shall we go together?"</p>
        </div>

      </article>
    </motion.div>
  );
};

export default ChapterPage;
