<template>
	<v-snackbar timeout="4000" v-model="active" absolute color="deep-purple accent-4" elevation="24">
		Lorem ipsum dolor sit amet consectetur.
	</v-snackbar>
</template>

<script>
	export default {
		name: 'LoginSnackbar',
		props: ['text'],
		data() {
			return{
				active: true
			}
		},
		methods: {
		}
	}
</script>

<style scoped>

</style>