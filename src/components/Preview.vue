<template>
	<div>
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
	</div>
</template>

<script>
	import Element from '@/components/Element.vue'

	export default {
		name: 'Preview',
		components: {
			Element
		},
		props: ["pages"],
		data() {
			return {

			}
		},
		methods: {
			
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