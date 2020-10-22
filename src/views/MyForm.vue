<template>
	<v-container>
		<v-row>
			<v-col align="center">
				MyForm: {{$route.params.id}}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'MyForm',
		components: {
		},
		data() {
			return { 
				
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>