<template>
	<v-container v-if="form">
		<v-row>
			<v-col align="center">
				Form: {{$route.params.id}}
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<Preview :pages="form.pages" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { db } from '../main';
	import Preview from '@/components/Preview.vue'

	export default {
		name: 'Form',
		components: {
			Preview
		},
		firestore() {
			return {
				form: db.collection('form').doc(this.$route.params.id)
			}
		},
		data() {
			return { 
				form: null
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>