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
			<br>
			<div v-if="element.id==1 || element.id==2">
				<Question v-model="label" label="Вопрос" />
				<Question v-model="text" label="Комментарий" />
			</div>
			<div v-if="element.id==3">
				<Question v-model="label" label="Заголовок" />
				<TextArea v-model="text" label="Текст"/>
			</div>
			<div v-if="element.id==4">
				<Question v-model="label" label="Вопрос" />
				<RadioButtons :values="values" />
			</div>
			<div v-if="element.id==5">
				<CheckBox />
			</div>
			<v-card-actions>
				<v-btn @click="close" text outlined>Отмена</v-btn>
				<v-btn @click="save" elevation="0" color="yellow">Сохранить</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import Question from '@/components/CreateElementsFolder/Question.vue'
	import TextArea from '@/components/CreateElementsFolder/TextArea.vue'
	import RadioButtons from '@/components/CreateElementsFolder/RadioButtons.vue'
	import CheckBox from '@/components/CreateElementsFolder/CheckBox.vue'

	export default {
		name: 'CreateElement',
		components: {
			Question, TextArea, RadioButtons, CheckBox
		},
		props: ['dialog', 'element'],
		data() {
			return {
				label: "",
				text: "",
				type: "",
				values: []
			}
		},
		methods: {
			close() {
				this.$emit('close');
			},
			save(){
				let element = { label: this.label, text: this.text, type: this.typer(), values: this.values };

				this.label = "";
				this.text = "";
				this.type = "";
				this.values = [];
				
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
					case 4:
					type = "radio"
					break;
					case 5:
					type = "checkbox"
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