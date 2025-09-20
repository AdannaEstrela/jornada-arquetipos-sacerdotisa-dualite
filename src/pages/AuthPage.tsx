import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabaseClient';
import { BookHeart } from 'lucide-react';

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
            <BookHeart className="w-16 h-16 mx-auto text-brand-purple dark:text-brand-gold" />
            <h2 className="mt-6 text-3xl font-bold font-serif text-gray-900 dark:text-white">
                Jornada da Sacerdotisa
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Acesse sua conta para continuar sua jornada.
            </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <Auth
                supabaseClient={supabase}
                appearance={{ 
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#4A2F6C',
                                brandAccent: '#A48ABF',
                            },
                        },
                    },
                }}
                theme="dark"
                providers={[]}
                localization={{
                    variables: {
                        sign_in: {
                            email_label: 'Seu email',
                            password_label: 'Sua senha',
                            button_label: 'Entrar',
                            social_provider_text: 'Entrar com {{provider}}',
                            link_text: 'Já tem uma conta? Entre',
                        },
                        sign_up: {
                            email_label: 'Seu email',
                            password_label: 'Sua senha',
                            button_label: 'Criar conta',
                            social_provider_text: 'Criar conta com {{provider}}',
                            link_text: 'Não tem uma conta? Crie uma',
                        },
                        forgotten_password: {
                            email_label: 'Seu email',
                            button_label: 'Enviar instruções',
                            link_text: 'Esqueceu sua senha?',
                        },
                        update_password: {
                            password_label: "Nova senha",
                            button_label: "Atualizar senha",
                            loading_button_label: "Atualizando..."
                        }
                    },
                }}
            />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
