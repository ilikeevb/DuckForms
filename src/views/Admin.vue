<template>
	<v-container>
		<v-row>
			<v-col align="center">
				<div id="description">
					<h1>Создайте форму. Это просто</h1>
					<p>
						Выберите шаблон или создайте форму с чистого листа. Настройки шаблонов очень гибкие, в любой момент форму можно будет изменить.
					</p>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col v-for="item in selects" :key="item.id">
				<v-card outlined height="175" v-bind:class="{ 'select': item.status }" @click="select(item.id)">
					<v-card-title>{{ item.title }}</v-card-title>
					<v-card-text class="text">{{ item.description }}</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<h2>Как выглядит шаблон</h2>
			</v-col>
			<v-col align="right">
				<v-btn @click="goCreate" color="yellow">Создать по шаблону</v-btn>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row>
			<v-col>
				<v-img src="../assets/illustration/form.png"></v-img>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'Admin',
		components: {
		},
		data() {
			return { 
				tab: 1,
				selects: [
				{ id: 1, title: "С чистого листа", description: "Пустая форма", status: true },
				{ id: 2, title: "Анкета", description: "Форма для проведения опросов", status: false },
				{ id: 3, title: "Форма обратной связи", description: "Простая форма для сообщений", status: false },
				{ id: 4, title: "Заявка", description: "Форма, где можно оставить запрос на услугу", status: false }
				]
			}
		},
		methods: {
			select(id){
				this.tab = id;
				this.selects.forEach(function(select){
					if(select.id == id){
						select.status = true;
					} else {
						select.status = false;
					}
				});
			},
			goCreate() {
				this.$router.push({ name: 'Create' });
			}
		}
	}
</script>

<style scoped>
#description {
	max-width: 600px;
}
.text {
	font-size: 16px;
	color: black;
}
.select{ 
	border-color: orange;
}
</style>