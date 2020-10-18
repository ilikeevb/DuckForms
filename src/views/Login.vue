<template>
	<v-row align="center">
		<v-col align="center">
			<div id="form">
				<v-tabs id="tabs" v-model="tab" centered background-color="primary" dark>
					<v-tab>
						Регистрация
					</v-tab>
					<v-tab>
						Войти
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-tab-item>
						<v-form>
							<v-text-field label="Фамилия Имя" required outlined></v-text-field>
							<v-text-field label="Почта" required outlined></v-text-field>
							<v-text-field label="Пароль" type="password" required outlined></v-text-field>
						</v-form>
					</v-tab-item>
					<v-tab-item>
						<v-form>
							<v-text-field label="Почта" required outlined></v-text-field>
							<v-text-field label="Пароль" type="password" required outlined></v-text-field>
						</v-form>
					</v-tab-item>
				</v-tabs-items>
				<v-btn color="success" large>Создать аккаунт</v-btn>
			</div>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: 'Login',
		components: {
		},
		data() {
			return { 
				tab: null
			}
		}
	}
</script>

<style scoped>
#form {
	max-width: 400px;
}
#tabs{
	margin-bottom: 20px;
}
</style>