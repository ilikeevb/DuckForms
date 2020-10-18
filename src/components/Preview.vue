<template>
	<v-dialog v-model="dialog" max-width="800px" persistent>
		<v-card class="window">
			<v-card-title>
				<v-icon large left color="blue">mdi-duck</v-icon>
				<span class="title font-weight-light"><b class="logo">Duck</b>Forms</span>
				<v-spacer></v-spacer>
				<v-icon large left @click="close">mdi-close</v-icon>
			</v-card-title>
			<div v-for="page in pages" :key="page.id">
				<v-card elevation="3" class="page">
					<v-list-item>
						<v-list-item-content>
							<div class="overline mb-4">
								Страница {{page.id}} из {{pages.length}}
							</div>
							<div v-for="element in page.elements" :key="element.id">
								<Element :element="element" />
							</div>
						</v-list-item-content>
					</v-list-item>
				</v-card>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	import Element from '@/components/Element.vue'

	export default {
		name: 'Preview',
		components: {
			Element
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