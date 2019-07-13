<template> 
	<div class="container">
		<div class="row">
			<div class="col-md-2 ml-auto">
				<img :src="image" class="img-responsive minImg">
			</div>
			<div class="col-md-10 ml-auto">
				<h5> {{this.$store.state.user.username}}</h5>
				<p>{{post.body}}</p>
				<div class="ml-auto">
					<button class="btn btn-sm btn-outline-danger like" :class="{ 'btn btn-act ': active }" @click="liked"><i v-bind:class="className"></i>{{ active ? likedText : buttonText }}</button>
				</div>				
			</div>
			
		</div>        
	</div>
</template>

<script>
	export default {
		name: 'app',
		props: {
			post: Object
		},
		data(){
			return {
				image: this.$store.state.image,
				active: false,
				buttonText: 'Like this',
				likedText: 'You like this',
				className: 'glyphicon glyphicon-thumbs-up'
			}
		},
		methods: {
			liked: function() {
				this.active = !this.active;
				if(this.active == true){
					this.className = 'glyphicon glyphicon-thumbs-down';
				}
				else{
					this.className = 'glyphicon glyphicon-thumbs-up';
				}
			}
		}
	}
</script>
