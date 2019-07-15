<template>
	<form id="form-signin" class="register">
		<div id="logo" class="text-center mb-4">
			<h4 id="greeting">Заполните все поля ниже</h4>
		</div>
		<div id="flipthis">

			<div class="form-label-group">
				<input v-model="name" type="name" id="inputName" class="form-control" placeholder="Имя" required="" autofocus="">
				<label for="inputName">Имя</label>
			</div>
			<div class="form-label-group">
				<input v-model="surname" type="Surname" id="inputSurname" class="form-control" placeholder="Фамилия" required="" autofocus="">
				<label for="inputSurname">Фамилия</label>
			</div>

			<div class="form-label-group">
				<input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
				<label for="inputEmail">Email</label>
			</div>
			<div class="form-label-group">
				<input v-model="phoneNumber" type="Number" id="inputNumber" class="form-control" placeholder="Number" required="" autofocus="">
				<label for="inputNumber">Телефон</label>
			</div>
			<div class="form-label-group">
				<input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="" maxlength="6">
				<label for="inputPassword">Пароль</label>
			</div>

			<div class="text-center">
				<button @click="register" class="btn btn-primary btn-lg btn-block" type="submit">Регистрация</button>
			</div>
		</div>
	</form>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Register",
		data(){
			return{
				name:"",
				surname:"",
				email:"",
				phoneNumber:"",
				password:"",
				error:[]
			}
		},
		methods:{
			async register(){
				let data = {
					name: this.name,
					surname: this.surname,
					email: this.email,
					phoneNumber:this.phoneNumber,
					password: this.password,
				}
				try{
					const url='http://cfu.ru/api/register';
					const response=await axios.post(url,data);
					if(response.data.token)
					{
						this.$store.dispatch('setToken',response.data.token);
						this.$router.replace('/userPage');
					}	
				}
				catch(error){
					this.errors=[];
					this.errors.push(error.message)
				}
			}
		}		
	}
</script>