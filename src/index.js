import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_LOADING = 'SET_LOADING';
const SET_USER = 'SET_USER';
const RESET_USER = 'RESET_USER';

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
		setImage(){},
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
				commit(RESET_USER);
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
		setImage(){},
		setUser(state,user)
		{
			state.user=user;
		},
		[SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
		[RESET_USER]: state => state.user = null
	},

	getters:{
		getUser(state){
			return state.user
		}
	}
})