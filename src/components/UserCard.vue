<template>
	<div class="userCard">
		<img :src="imageUrl" class="mainImg">
		<div v-if="!editP">
			<button class="btn btn-secondary btn-sm edit" @click="edit">Редактировать профиль </button>
			<h3   class="userName"> {{this.$store.state.user.username}}</h3>
		</div>
		

		<div v-if="editP">
			<div class="userCardEdit">
				<input style="display:none" type="file" @change="selectPhoto" ref="fileInput" accept="image/*">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<button @click="$refs.fileInput.click()" class=" btn btn-secondary btn-sm ">Выбрать фото</button>
						</div>
						<div class="col-md-6"> 
							<button @click="onUpload" class="btn btn-secondary btn-sm ">Загрузить фото</button>
						</div>
						<div class="col-md-12 ml-auto">
							<input   type="text" name="username"  :placeholder="this.$store.state.user.username">
						</div>
						
						<div class="col-md-6"> 
							<button class="btn btn-secondary btn-sm" @click="save">Сохранить</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-secondary btn-sm" @click="notSave">Не сохранять</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'

	export default {
		name: "UserCard",
		data(){
			return{
				user:null,
				editP:false,
				selectedFile:null,
				imageUrl:this.$store.state.image
			}
		},
		mounted()
		{
			try{
				axios.get("https://jsonplaceholder.typicode.com/users?id=1")
				.then(response =>{this.$store.dispatch('setUsers',response.data[0]);
			})
			}
			catch(error){
				console.log(error)
			}      
		},
		methods:{
			edit(){
				this.editP=true;
			},
			save()
			{
				this.editP=false;
			},
			notSave(){
				this.imageUrl=this.$store.state.image;
				this.editP=false;
			},
			selectPhoto(event){
				this.selectedFile=event.target.files[0]
				if(this.selectedFile)
				{
					let filename=this.selectedFile.name
					const fileReader= new FileReader()
					fileReader.addEventListener('load',()=> this.imageUrl=fileReader.result)
					fileReader.readAsDataURL(this.selectedFile)
				}

			},
			onUpload(){
				try{

				}
				catch(error){

				}      
			}		
		}
	}
</script>

<style>
.userName{
	padding-top: 30px;
}

.btn{
	margin-top: 10px;
	margin-bottom: 10px;
	min-width:130px;
}
</style>





