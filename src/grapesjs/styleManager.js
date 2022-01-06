export default {
	appendTo: '#stylemanager',
	sectors: [
		{
			name: 'Dimenção',
			open: true,
			buildProps: ['width', 'height', 'max-width', 'max-height', 'padding', 'margin']
		},
		{
			name: 'Posição',
			open: false,
			buildProps: ['position', 'top', 'right', 'bottom', 'left']
		},
		{
			name: 'Exibição',
			open: false,
			buildProps: ['display']
		},
		{
			name: 'Flex',
			open: false,
			buildProps: ['flex-direction', 'flex-wrap', 'flex-basis', 'flex-grow', 'flex-shrink', 'justify-content', 'justify-self', 'align-items', 'align-content', 'align-self', 'order']
		},
		{
			name: 'Extras',
			open: false,
			buildProps: ['background-color', 'box-shadow']
		}
	]
}