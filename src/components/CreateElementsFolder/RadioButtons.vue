<template>
	<div>
		<div v-for="(radio, index) in values" :key="index">
			<input v-model="radio.label">
		</div>
		<v-btn text color="primary" @click="addRadio"><v-icon left>mdi-plus</v-icon>Добавить</v-btn>
	</div>
</template>

<script>
	export default {
		name: 'RadioButtons',
		props: ['values'],
		data() {
			return {
				index: 0
			}
		},
		methods: {
			addRadio() {
				this.index += 1;
				let label = "Вариант " + String(this.index);
				this.values.push({label: label})
			}
		}
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
	margin-bottom: 10px;
}
</style>