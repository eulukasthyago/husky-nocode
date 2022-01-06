export default {
	appendTo: '#leftPanel',
	blocks: [
		{
			id: 'section', // id is mandatory
			label: '<b>Section</b>', // You can use HTML/SVG inside labels
			attributes: { class:'gjs-block-section' },
			content: `<section class="container mx-auto text-red">
			<h1>This is a simple title</h1>
			<div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
			</section>`,
		},
	]
}