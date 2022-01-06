<template>
	<div id="topbar">
		<div class="topbar_container">
			<div class="topbar_left">topbar</div>
			<div class="topbar_center">topbar</div>
			<div class="topbar_right">topbar</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopPanel'
	}
</script>

<style lang="scss" scoped>
	#topbar{
		@apply relative w-full bg-gray-700 p-2 flex items-center text-gray-200;
		height: 50px;

		.topbar_container{
			@apply w-full flex items-center justify-between;
		}
	}
</style>