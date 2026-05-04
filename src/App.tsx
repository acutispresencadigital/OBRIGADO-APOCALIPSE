import { CheckCircle2, Mail, ShieldAlert, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-brand-red selection:text-white">
      {/* Main Container */}
      <main className="flex-grow w-full max-w-3xl px-6 py-12 md:py-20 flex flex-col items-center text-center animate-fade-in">
        
        {/* 2. Seção Principal */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <CheckCircle2 size={80} className="text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
        </motion.div>

        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
          OBRIGADO PELA <span className="text-brand-red">SUA COMPRA!</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 md:px-10 leading-relaxed max-w-2xl">
          Sua jornada rumo à compreensão profunda das profecias começou. 
          Agradecemos pela confiança. Os 3 ebooks estão a caminho e preparamos 
          tudo para que você tenha uma ótima e edificante leitura.
        </p>

        {/* 3. Próximos Passos */}
        <div className="mt-16 w-full space-y-6 text-left max-w-md mx-auto">
          <h3 className="font-display text-xl uppercase text-brand-red/80 tracking-widest mb-4 border-b border-brand-red/20 pb-2">
            Próximos Passos:
          </h3>
          
          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mt-1 p-2 bg-brand-red/10 rounded-lg">
              <Mail className="text-brand-red" size={20} />
            </div>
            <div>
              <p className="text-white font-medium">Seu acesso será entregue no seu e-mail em instantes.</p>
              <p className="text-sm text-gray-500">Acabamos de enviar o link de download.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="mt-1 p-2 bg-brand-red/10 rounded-lg">
              <ShieldAlert className="text-brand-red" size={20} />
            </div>
            <div>
              <p className="text-white font-medium">Não encontrou? Verifique a caixa de spam.</p>
              <p className="text-sm text-gray-500">Às vezes os e-mails se escondem no lixo eletrônico.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="mt-1 p-2 bg-brand-red/10 rounded-lg">
              <BookOpen className="text-brand-red" size={20} />
            </div>
            <div>
              <p className="text-white font-medium">Prepare seu coração para o entendimento.</p>
              <p className="text-sm text-gray-500">Recomendamos ler na ordem sugerida no guia.</p>
            </div>
          </div>
        </div>

        {/* 4. Frase Final */}
        <div className="mt-20 py-8 border-t border-white/5 w-full">
          <p className="italic text-gray-400 text-lg font-serif">
            "Bem-aventurado aquele que lê, e os que ouvem as palavras desta profecia..."
          </p>
          <p className="text-xs text-brand-red/60 mt-2 uppercase tracking-widest">— Apocalipse 1:3</p>
        </div>
      </main>

      {/* 5. Footer */}
      <footer className="w-full py-8 px-6 text-center border-t border-white/5 text-gray-600 text-sm">
        <p>© 2025 Acutis - Estratégia e presença digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
