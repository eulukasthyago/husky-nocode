export default {
	defaults: [
		{
			id: 'switcher-configs',
			el: '.switcher-configs',
			buttons: [
				{
					id: 'stylesmanager',
					active: true,
					label: 'Styles',
					command: 'show-styles',
					togglable: false,
				},
				{
					id: 'layermanager',
					active: false,
					label: 'Layers',
					command: 'show-layer',
					togglable: false,
				},
				{
					id: 'configs',
					active: false,
					label: 'Configurações',
					command: 'show-configs',
					togglable: false,
				}
			]
		},
		{
			id: 'leftPanel',
			el: '#leftPanel',
			resizable: {
				maxDim: 250,
				minDim: 200,
				tc: 0,
				cl: 0,
				cr: 1,
				bc: 0
			}
		},
		{
			id: 'rightPanel',
			el: '#rightPanel',
			resizable: {
				maxDim: 300,
				minDim: 250,
				tc: 0,
				cl: 1,
				cr: 0,
				bc: 0
			}
		}
	] 
}