<template>
	<v-dialog v-model="dialog" max-width="800px" persistent>
		<v-card class="window">
			<v-card-title>
				<v-icon large left color="blue">mdi-duck</v-icon>
				<span class="title font-weight-light"><b class="logo">Duck</b>Forms</span>
				<v-spacer></v-spacer>
				<v-icon large left @click="close">mdi-close</v-icon>
			</v-card-title>
			<Preview :pages="pages" />
		</v-card>
	</v-dialog>
</template>

<script>
	import Preview from '@/components/Preview.vue'

	export default {
		name: 'DialogPreview',
		components: {
			Preview
		},
		props: ['dialog', "pages"],
		data() {
			return {

			}
		},
		methods: {
			close() {
				this.$emit('close');
			},
		}
	}
</script>

<style scoped>
.logo {
	color: #2196F3;
}
.window {
	padding: 0px 15px 15px;
}
.page {
	margin-bottom: 20px;
}
</style>