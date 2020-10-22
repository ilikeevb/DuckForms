<template>
	<v-container v-if="forms">
		<v-row>
			<v-col align="center">
				MyForms
				<div v-for="form in forms" :key="form.id">
					{{form}}
					<br><br>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { db } from '../main';

	export default {
		name: 'MyForms',
		components: {
		},
		data() {
			return { 
				forms: null
			}
		},
		firestore() {
			return {
				forms: db.collection('form')
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>