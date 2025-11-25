import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

createChat({
	webhookUrl: 'https://n8ncurso2025-n8n.mos4xj.easypanel.host/webhook/48d92f19-907d-4db8-8b3d-dd1205283b46/chat',
	initialMessages: [
		'Hola',
		'estoy aqui para ayudarte'
	],
	i18n: {
		en: {
			title: '¡Hola, soy el asistente virtual de Forza Ingenieria! 👋',
			subtitle: 'Inicia un chat. Estamos aquí para ayudarte 24/7.',
			getStarted: 'Nueva Conversación',
			inputPlaceholder: 'Escribe tu pregunta...',
		},
	},
});
