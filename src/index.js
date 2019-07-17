import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export default new Vuex.Store({
	state:{
		posts:[],
		image:'/img/ava.jpg',
		id:1,
		user:null,
		searchQuery: ''
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
		setImage(context,image){
			contex.commit('setImage',image)
		},
		setUser(context,user){
			context.commit('setUser',user)
		},
		setSearchQuery({commit}, searchQuery) {
			commit(SET_SEARCH_QUERY, searchQuery);
		},	
		async search({commit, state}) {
			
			try {
				const {data} = await axios.get('https://jsonplaceholder.typicode.com/users?username='+state.searchQuery);
				commit('setUser', data[0]);
			} 
			catch (error) {
				console.log(error);
			}
			
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
		setImage(state,image){
			sate.image=image;
		},
		setUser(state,user)
		{
			state.user=user;
		},
		[SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
		
	},

	getters:{
		getUser(state){
			return state.user
		}
	}
})