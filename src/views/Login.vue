<template>
	<v-row align="center" id="background">
		<v-col align="center">
			<div id="form">
				<v-tabs id="tabs" v-model="tab" centered background-color="#1976D2" dark>
					<v-tab>
						Регистрация
					</v-tab>
					<v-tab>
						Войти
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-tab-item class="tab">
						<v-text-field dark v-model="email" label="Почта" required outlined></v-text-field>
						<v-text-field dark v-model="password" label="Пароль" type="password" required outlined></v-text-field>
						<v-btn color="success" large @click="createUser">Создать аккаунт</v-btn>
					</v-tab-item>
					<v-tab-item class="tab">
						<v-text-field dark v-model="email" label="Почта" required outlined></v-text-field>
						<v-text-field dark v-model="password" label="Пароль" type="password" required outlined></v-text-field>
						<v-btn color="success" large @click="loginUser">Войти</v-btn>
					</v-tab-item>
				</v-tabs-items>
			</div>
			<LoginSnackbar />
		</v-col>
		<v-col></v-col>
	</v-row>
</template>

<script>
	import { auth } from '../main';
	import LoginSnackbar from '@/components/LoginSnackbar.vue'

	export default {
		name: 'Login',
		components: {
			LoginSnackbar
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
					user;
					this.$router.replace('/admin');
				});
			}
		},
		created() {
			let vm = this;
			auth.onAuthStateChanged(function(user) {
				if (user) {
					vm.$router.push({ name: 'Admin' });
				}
			});
		}
	}
</script>

<style scoped>
#form {
	max-width: 400px;
	background-color: #1976D2;
	padding: 10px 15px 20px;
	border-radius: 10px;
}
#tabs{
	margin-bottom: 20px;
}
.tab {
	background-color: #1976D2;
}
#background {
	background-image: url("http://nibler.ru/uploads/users/5914/2013-07-18/odnoobraznosti-raznoobrazie-kartinki-smeshnye-kartinki-fotoprikoly_869397772.jpg");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	height: 100%;
	font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
}
</style>