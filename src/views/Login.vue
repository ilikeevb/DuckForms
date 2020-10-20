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
							<v-text-field v-model="email" label="Почта" required outlined></v-text-field>
							<v-text-field v-model="password" label="Пароль" type="password" required outlined></v-text-field>
							<v-btn color="success" large @click="createUser">Создать аккаунт</v-btn>
						</v-form>
					</v-tab-item>
					<v-tab-item>
						<v-form>
							<v-text-field v-model="email" label="Почта" required outlined></v-text-field>
							<v-text-field v-model="password" label="Пароль" type="password" required outlined></v-text-field>
							<v-btn color="success" large @click="loginUser">Войти</v-btn>
						</v-form>
					</v-tab-item>
				</v-tabs-items>
			</div>
		</v-col>
	</v-row>
</template>

<script>
	import { auth } from '../main';
	export default {
		name: 'Login',
		components: {
		},
		data() {
			return { 
				tab: null,
				email: '',
				password: ''
			}
		},
		methods: {
			createUser() {
				auth.createUserWithEmailAndPassword(this.email, this.password).then((user) => {
					user;
					this.$router.replace('/admin');
				});
			},
			loginUser() {
				auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
					console.log(user);
					this.$router.push('/admin');
				});
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