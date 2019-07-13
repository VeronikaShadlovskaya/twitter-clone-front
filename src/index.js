import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({

	state:{
		posts:[],
		image:'/img/ava.jpg',
		user:null
	},
	actions:{
		setPosts(context,posts)
		{			
			context.commit('setPosts',posts)
		},
		addPost(context,post)
		{
			context.commit('addPost',post)
		},
		setImage(){},
		setUsers(context,user){
			context.commit('setUsers',user)
		}		
	},
	mutations:{
		setPosts(state,posts)
		{
			state.posts=posts.reverse();
		},
		addPost(state,post)
		{
			state.posts.unshift(post)
		},
		setImage(){},
		setUsers(state,user)
		{
			state.user=user;
		}

	}
})