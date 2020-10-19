<template>
	<v-container>
		<v-row>
			<v-col>
				<v-btn text @click="goAdmin"><v-icon>mdi-chevron-left</v-icon>К списку форм</v-btn>
			</v-col>
			<v-col align="right">
				<v-btn text outlined class="menubtn" @click="openPreview"><v-icon left>mdi-eye</v-icon>Предпосмотр</v-btn>
				<v-btn color="yellow" class="menubtn" elevation="0"><v-icon left>mdi-share-variant</v-icon>Поделиться</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="3">
				<v-card elevation="0">
					<v-hover v-slot:default="{ hover }" v-for="element in elements" :key="element.id">
						<v-card class="card" :elevation="hover ? 3 : 0" @click="addElement(element)">
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
								<div v-if="page.elements.length">
									<div v-for="element in page.elements" :key="element.id">
										<LightElement :element="element" />
									</div>
								</div>
								<div v-else>
									<div class="start">
										<p>Добваьте вопросы в форму</p>
									</div>
								</div>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</div>
				<v-btn block x-large @click="addPage">Добавить страницу</v-btn>
			</v-col>
		</v-row>
		<Preview :dialog="dialogPreview" :pages="pages" @close="closePreview" />
		<CreateElement :dialog="dialogCreateElement" :element="element" @close="closeCreateElement" @save="saveCreateElement" />
	</v-container>
</template>

<script>
	import Preview from '@/components/Preview.vue'
	import LightElement from '@/components/LightElement.vue'
	import CreateElement from '@/components/CreateElement.vue'

	export default {
		name: 'Create',
		components: {
			LightElement, Preview, CreateElement
		},
		data() {
			return {
				dialogPreview: false,
				dialogCreateElement: false,
				element: null,
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
				},
				{
					id: 4,
					title: 'Один вариант',
					icon: 'mdi-radiobox-marked'
				},
				{
					id: 5,
					title: 'Несколько вариантов',
					icon: 'mdi-check-box-outline'
				}
				],
				pages: [
				{
					id: 1,
					elements: []
				}
				]
			}
		},
		methods: {
			openCreateElement(){
				this.dialogCreateElement = true;
			},
			closeCreateElement(){
				this.dialogCreateElement = false;
			},
			saveCreateElement(element){
				this.pages[this.pages.length - 1].elements.push(element);
				this.closeCreateElement();
			},
			openPreview(){
				this.dialogPreview = true;
			},
			closePreview(){
				this.dialogPreview = false;
			},
			goAdmin() {
				this.$router.push({ name: 'Admin' });
			},
			addPage() {
				this.pages.push({ id:2, elements: [] });
			},
			addElement(element) {
				this.element = element;
				this.openCreateElement();
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
.start {
	border: 3px dashed grey;
	height: 150px;
	line-height: 150px;
}
.start p {
	font-size: 18px;
	color: grey;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
}
</style>