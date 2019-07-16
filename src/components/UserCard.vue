<template>
	<div class="userCard">
		<img :src="imageUrl" class="mainImg">
		<div v-if="!editP">
			<button  v-if="user.id==this.$store.state.id" class="btn btn-secondary btn-sm btnU" @click="edit">Редактировать профиль </button>
			<h4  class="userName"> {{user.username}}</h4>
			<h6 v-if="user.birth"> День рождения: {{user.birth}}</h6>
			<h6 v-if="user.address.city"> Город: {{user.address.city}}</h6>
			<h6 v-if="user.website"> Сайт: {{user.website}}</h6>
		</div>
		

		<div v-if="editP">
			<div class="userCardEdit">
				<input style="display:none" type="file" @change="selectPhoto" ref="fileInput" accept="image/*">
				<div class="container edit">
					<div class="row">
						<div class="col-md-12 ml-auto">
							<button @click="$refs.fileInput.click()" class=" btn btn-secondary btn-sm btnU">Изменить фото</button>
						</div>

						<div class="col-md-12 ml-auto">
							<h5>Имя: <input  type="text" v-model="user.username" ></h5>		
						</div>
						<div class="col-md-12 ml-auto">					
							<h5>Дата рождения:<date-picker v-model="date" :config="options"></date-picker></h5>
						</div>
						<div class="col-md-12 ml-auto">
							<h5>Город: <input  type="text" v-model="user.address.city" ></h5>		
						</div>
						<div class="col-md-12 ml-auto">
							<h5>Веб-сайт: <input  type="url" v-model="user.website"></h5>		
						</div>

						<div class="col-md-6"> 
							<button class="btn btn-secondary btn-sm btnU" @click="save">Сохранить</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-secondary btn-sm btnU" @click="notSave">Не сохранять</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
	import axios from 'axios'
	import datePicker from 'vue-bootstrap-datetimepicker'
	import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
	

	export default {
		name: "UserCard",
		components:{
			datePicker
		},
		data(){
			return{
				editP:false,
				selectedFile:null,
				imageUrl:this.$store.state.image,
				
				date: new Date(),
				options: {
					format: 'DD/MM/YYYY',
					useCurrent: false
				}
			}
		},
		
		mounted()
		{
			try{
				const url='https://jsonplaceholder.typicode.com/users/'+this.$store.state.id
				axios.get(url)
				.then(response =>{this.$store.dispatch('setUser',response.data);
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
			
			async save()
			{
				const url='https://jsonplaceholder.typicode.com/users/'+this.$store.state.id
				await axios.put(url,this.user);
				
				
				if(this.selectedFile)
				{
					const fd= new FormData();
					fd.append('image',this.selectedFile,this.selectedFile.name)
					const response= await axios.put('https://jsonplaceholder.typicode.com/photos/'+this.$store.state.id,fd)
					console.log(response);
				}
				
				(this.editP=false);
				
			},
			notSave(){
				this.imageUrl=this.$store.state.image;
				const url='https://jsonplaceholder.typicode.com/users/'+this.$store.state.id
				axios.get(url)
				.then(response =>{
					this.$store.dispatch('setUser',response.data);
					this.editP=false
				})
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

			}
		},
		computed: {
			user(){ return this.$store.getters.getUser;}
		}

	}
</script>

<style>
.userName{
	padding-top: 30px;
}

.btnU{
	margin-top: 10px;
	margin-bottom: 10px;
	min-width:130px;
}


input {
	width: 266px;
	height:35px;
	border-radius: 4px;
	border: none;
	margin: 15px 0;
	padding: 16px 40px;
	transition: all .2s;
	background: white;
	font-size: 12px;
}

.edit{
	padding-top: 0px;
}
</style>





