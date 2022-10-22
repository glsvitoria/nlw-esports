import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/** Dicas pro próximo nível da aplicação:
 * Responsividade
 * Ter um carrossel nos games (keen slider)
 * Select com o radix
 * Validação de envio do formulário (react-hook-form)
 * Autenticação com discord ou twitch
 */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
