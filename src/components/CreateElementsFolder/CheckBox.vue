<template>
	<div>
		<div v-for="(checkbox, index) in checkGroup" :key="index">
			<input v-model="checkbox.label">
		</div>
		<v-btn text color="primary" @click="addCheckbox"><v-icon left>mdi-plus</v-icon>Добавить</v-btn>
	</div>
</template>

<script>
	export default {
		name: 'CheckBox',
		props: ['label'],
		data() {
			return {
				index: 1,
				checkGroup: [
				{
					label: "Вариант 1",
					check: false
				}
				]
			}
		},
		methods: {
			addCheckbox() {
				this.index += 1;
				let label = "Вариант " + String(this.index);
				this.checkGroup.push({label: label, check: false})
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