<template>
	<v-row align="center">
		<v-col align="center">
			<div id="description">
				<h1>Простой способ <br> создать форму</h1>
				<p>
					Собирайте обратную связь и заявки от клиентов, регистрируйте на мероприятия и проводите опросы. Сконструировать форму может любой — специальных знаний не нужно и это бесплатно.
				</p>
				<v-btn color="yellow" large @click="goLogin">Попробовать</v-btn>
			</div>
		</v-col>
		<v-col>
			<img width="800" height="600" src="../assets/illustration/character.svg">
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: 'Home',
		components: {
		},
		methods: {
			goLogin() {
				this.$router.push({ name: 'Login' });
			}
		}
	}
</script>

<style scoped>
	#description {
		text-align: left;
		max-width: 400px;
	}
	#description h1 {
		font-size: 40px;
	}
	#description p {
		font-size: 20px;
	}
</style>