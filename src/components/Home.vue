<template>

<form id="form-signin" class="login">

<div id="logo" class="text-center mb-4">
  <font-awesome-icon icon="smile"/>	
	<h1 class="mb-3 font-weight-normal">Smile</h1>
	<h4 id="greeting">Добро пожаловать</h4>
	</div>
	<div id="flipthis">
	    <div class="form-label-group">
			<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
			<label for="inputEmail">Телефон или Email</label>
		</div>
		<div class="form-label-group">
			<input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" maxlength="6">
			<label for="inputPassword">Пароль</label>
	     </div>

		<div class="text-center">
			<button class="btn btn-primary btn-lg btn-block" type="submit">Войти</button>
		</div>
	</div>
	<div class="text-center">
		<br />
		<a id="flipCard" class="" href="#">Забыли пароль?</a>
		<br />
		<a id="flipReg" class="" href="register.html">Регистрация</a>
	</div>
</form>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
export default {
  name: "login",
  components: {
    Login
  }
};
</script>


<style  src="./style.css"></style>
