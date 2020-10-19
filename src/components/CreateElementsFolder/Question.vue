<template>
	<div>
		<span class="label">{{ label }}</span>
		<input @input="$emit('input', $event.target.value)">
	</div>
</template>

<script>
	export default {
		name: 'Question',
		props: ['label']
	}
</script>

<style scoped>
.label {
	font-size: 18px;
}
div{
	overflow:hidden;
}
input {
	width: 100%;
	border: 1px solid grey;
	border-radius: 4px;
	padding: 10px 10px 10px;
	margin-bottom: 20px;
}
</style>