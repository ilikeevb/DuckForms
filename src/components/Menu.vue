<template>
	<div class="text-center">
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn text v-bind="attrs" v-on="on">
					{{user}}
				</v-btn>
			</template>
			<v-list>
				<v-list-item>
					<v-btn text>
						Профиль
					</v-btn>
				</v-list-item>
				<v-list-item>
					<v-btn text>
						Настройки
					</v-btn>
				</v-list-item>
				<v-list-item>
					<v-btn @click="signOut" text color="error">
						Выйти
					</v-btn>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
	export default {
		name: 'Menu',
		props: ['user'],
		methods: {
			signOut() {
				this.$emit('signOut');
			}
		}
	}
</script>

<style scoped>

</style>