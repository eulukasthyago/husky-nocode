export default {
	defaults: [
		{
			id: 'topbar',
			el: '#topbar',
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