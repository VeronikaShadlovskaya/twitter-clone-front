<template>
	<div class="userPage"> 
		<div class="header">
			<Header />
		</div>		
		<div class="container">
			<div class="row">
				<div class="col-lg-4 ">
					<UserCard/>
				</div>
				<div class="col-lg-8 ">
					<Posts class="posts" />  
				</div> 	
			</div>
		</div>  

	</div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";
import Header from "@/components/Header.vue";
import UserCard from "@/components/UserCard.vue";

export default {
	name: "userPage",
	components: {
		Posts,
		Header,
		UserCard
	}
};
</script>

<style>
.userPage{
	background: lightgrey;
	margin: 0px;
	padding: 0px;
}
.header{
	background-color: white;
}
#add-blog *{
	box-sizing: border-box;
}
#add-blog{
	margin: 20px auto;
	max-width: 600px;
	height: 100%
}
label{
	display: block;
	margin: 20px 0 10px;
}

button{
	display:block;
}
textarea{
	width:100%;
	border-radius: 4px;
	border: none;
	margin: 15px 0;
	padding: 16px 40px;
	outline: none;
	transition: all .2s;
	background: #efefef;
	font-size: 14px;
	transition: all 0.2s;
}
textarea:focus{
	background-color: white;
}


#single-post{
	min-height: 100px;
	padding:30px 20px;
	border:1px dotted #ccc;
	margin: 30px 0;
	background-color: white; 
}

h3{
	margin-top:10px;
	padding-bottom: 40px;
}
.minImg{
	width:60px;
	border-radius: 100px; /* Радиус скругления */   
}

.userCard{
	max-width: 300px;
	height: 600px;
	border:1px dotted #ccc;
	text-align: center;
}

.mainImg{
	width:200px;
	height: 230px;
	padding-top: 20px;
}
</style>

