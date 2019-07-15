<template>
	<form id="form-signin" class="form-signin">


		<div id="flipthis">
			<div class="form-label-group">
				<input required v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address"  autofocus="">
				<label for="inputEmail">Телефон или Email</label>
			</div>

			<div class="form-label-group">
				<input required v-model="password" id="inputPassword" class="form-control" placeholder="Password"  maxlength="6">
				<label for="inputPassword">Пароль</label>
			</div>

			<div class="text-center">
				<button  @click="login" class="btn btn-primary btn-lg btn-block" type="submit">Войти</button>
			</div>
		</div>
		<div class="text-center">
			<br />
			<router-link to="/password_reset" id="flipCard" class="" href="#">Забыли пароль?</router-link>
			<br />
			<router-link to="/register" id="flipReg" class="" href="register.html">Регистрация</router-link>
		</div>
	</form>
</template>

<script>
	import axios from 'axios'

	export default {
		name: "Login",
		data(){
			return {
				email : "",
				password : "" ,
				error:[]
			}
		},
		
		methods: {
			async login() {
				try{
					const url='http://cfu.ru/api/login';
					const response=await axios.post(url,{email: this.email, password: this.password
					});
					const userId=response.data.id;
					if(response.data.token)
					{
						this.$store.dispatch('setToken',response.data.token);
						this.$router.replace({ name: 'user', params: { userId } });
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





