<template>
	<v-dialog v-model="dialog" max-width="800px" persistent>
		<v-card class="window" v-if="element">
			<v-card-title>
				Редактирование вопроса
			</v-card-title>
			<v-card-subtitle>
				<v-icon left>{{element.icon}}</v-icon>{{element.title}}
			</v-card-subtitle>
			<v-divider></v-divider>
			<div v-if="element.id==1 || element.id==2">
				<p class="label">Вопрос</p>
				<v-text-field v-model="label" outlined></v-text-field>
				<p class="label">Коментарий</p>
				<v-text-field v-model="text" outlined></v-text-field>
			</div>
			<div v-if="element.id==3">
				<p class="label">Заголовок</p>
				<v-text-field v-model="label" outlined></v-text-field>
				<p class="label">Текст</p>
				<v-textarea v-model="text" outlined></v-textarea>
			</div>
			<v-divider style="padding-bottom: 20px;"></v-divider>
			<div>
				<Element :element="{label: label, text: text, type: typer()}" />
			</div>
			<v-card-actions>
				<v-btn @click="close" text outlined>Отмена</v-btn>
				<v-btn @click="save" elevation="0" color="yellow">Сохранить</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import Element from '@/components/Element.vue'

	export default {
		name: 'CreateElement',
		components: {
			Element
		},
		props: ['dialog', 'element'],
		data() {
			return {
				label: "",
				text: "",
				type: ""
			}
		},
		methods: {
			close() {
				this.$emit('close');
			},
			save(){
				let element = { label: this.label, text: this.text, type: this.typer() };
				this.$emit('save', element);
			},
			typer(){
				let type = null;
				switch (this.element.id) {
					case 1:
					type = "text-field";
					break;
					case 2:
					type = "textarea"
					break;
					case 3:
					type = "text"
					break;
					default:
					type = "text-field"
				}
				return type;
			}
		}
	}
</script>

<style scoped>
.window {
	padding: 0px 15px 15px;
}
.page {
	margin-bottom: 20px;
}
.label {
	font-size: 18px;
}
</style>