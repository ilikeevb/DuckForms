<template>
	<div>
		<span class="label">{{ label }}</span>
		<p><textarea rows="5" @input="$emit('input', $event.target.value)"></textarea></p>
	</div>
</template>

<script>
	export default {
		name: 'TextArea',
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
textarea {
	width: 100%;
	border: 1px solid grey;
	border-radius: 4px;
	padding: 10px 10px 10px;
}
</style>