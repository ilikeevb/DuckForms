<template>
	<v-container>
		<v-row>
			<v-col>
				<v-btn text @click="goAdmin"><v-icon>mdi-chevron-left</v-icon>К списку форм</v-btn>
			</v-col>
			<v-col align="right">
				<v-btn text outlined class="menubtn"><v-icon left>mdi-eye</v-icon>Предпосмотр</v-btn>
				<v-btn color="yellow" class="menubtn" elevation="0"><v-icon left>mdi-share-variant</v-icon>Поделиться</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="3">
				<v-card elevation="0">
					<v-hover v-slot:default="{ hover }" v-for="element in elements" :key="element.id">
						<v-card class="card" :elevation="hover ? 3 : 0" @click="addElement(element.id)">
							<v-icon left>{{element.icon}}</v-icon>{{element.title}}
						</v-card>
					</v-hover>
				</v-card>
			</v-col>
			<v-col cols="9">
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
				<v-btn block x-large @click="addPage">Добавить страницу</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Element from '@/components/Element.vue'

	export default {
		name: 'Create',
		components: {
			Element
		},
		data() {
			return { 
				elements: [
				{
					id: 1,
					title: 'Короткий текст',
					icon: 'mdi-form-textbox'	
				},
				{
					id: 2,
					title: 'Длинный текст',
					icon: 'mdi-form-textarea'	
				},
				{
					id: 3,
					title: 'Текст без вопроса',
					icon: 'mdi-text'	
				}],
				pages: [
				{
					id: 1,
					elements: [
					{
						type: 'text-field',
						label: '',
						text: ''
					},
					{
						type: 'textarea',
						label: '',
						text: ''
					}
					]
				}
				]
			}
		},
		methods: {
			goAdmin() {
				this.$router.push({ name: 'Admin' });
			},
			addPage() {
				this.pages.push({ id:2, elements: [] });
			},
			addElement(elementId) {
				let type = null;
				
				if (elementId == 1) { type = 'text-field'; }
				else if (elementId == 2) { type = 'textarea'; }
				else { type = 'text'; }

				this.pages[this.pages.length - 1].elements.push({ type: type, label: '', text: '' });
				elementId;
			}
		}
	}
</script>

<style scoped>
.card {
	margin: 5px;
	padding: 5px;
	padding-left: 20px;
}
.page {
	margin-bottom: 20px;
}
.menubtn {
	margin-left: 10px;
}
</style>