import Link from 'next/link';

export default function Sucesso() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 p-8 bg-black border border-gray-800 rounded-xl shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Cadastro Realizado com Sucesso!</h2>
          <p className="text-gray-300 text-center mb-8">
            Seus dados foram enviados e processados com sucesso.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-black border border-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
} 