<template >
	<div class="container header">
		<div class="row">
			<div class="col-lg-4 ml-auto">	
				<input class="search" v-model="query"  placeholder="Поиск пользователя" />
				<button class="btn btn-light searchB" @click="Search">Найти</button>
			</div>
			<div class="col-lg-6 ml-auto">
				<nav>
					<ul class="menu d-flex justify-content-center">
						<li class="menu__item">
							<h3>  {{likes}} лайков</h3>
						</li>
						<li class="menu__item">
							<h3> {{posts}} постов</h3>
						</li>
						
					</ul>
				</nav>
			</div>	
			<div class="col-lg-2 ml-auto">	
				<button @click="exit" class="btn btn-primary btn-lg  exit">Выход</button>  
			</div>	
		</div>
	</div>	
</template>

<script>	
	export default {
		name: "Header",
		data: function () {
			return {
				likes:0
			}
		},
		methods:{
			exit()
			{
				this.$router.replace("/login");
			},
			Search()
			{this.$store.dispatch('search');} 
		},
		computed:{
			posts(){
				return this.$store.state.posts.length
			},
			query:
			{
				get(){
					return this.$store.state.searchQuery;
				},
				set(val)
				{
					return this.$store.dispatch('setSearchQuery',val);
				}
				
			}
		}
	};
</script>

<style>


.container
{
	padding-top: 50px;
	width:100%;
}

.logo
{
	font-size: 40px;

}

ul,li{
	display:block;
	padding:0;
	margin:0;
	margin-top: 10px;
}


.menu__item h3{
	font-size: 22px;
	font-weight: bold;
	margin:0 57px;

}
.exit{
	margin-top:0px;
	padding: 0px;
}
.search{
	border-style: solid;
	border-color: lightblue;
}
.searchB{
	margin-left: 5px;
}
</style>