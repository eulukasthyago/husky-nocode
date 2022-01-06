import tailwindComponets from './plugins/tailwind';
import html_blocks from './plugins/html';

export default{
	plugins: [tailwindComponets, html_blocks],
	pluginOpts: {
		tailwindComponets: {},
		html_blocks: {}
	} 
}