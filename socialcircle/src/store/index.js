import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebaseConfig.js'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({



/*/////////////////////////////////////////////////////////////////////////////////////////*/
  state: {
    userProfile: {},
    posts: []
  },
/*/////////////////////////////////////////////////////////////////////////////////////////*/



/*/////////////////////////////////////////////////////////////////////////////////////////*/
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPosts(state, val) {
      state.posts = val
    }
  },

/*/////////////////////////////////////////////////////////////////////////////////////////*/



/*/////////////////////////////////////////////////////////////////////////////////////////*/
  actions: {
    
    
    
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    
    
    
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()
    
      // set user profile in state
      commit('setUserProfile', userProfile.data())
    
      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },



    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
      })
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },


    
    async logout({ commit }) {
      await fb.auth.signOut()
    
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/login')
    },



    async createPost({ state }, post) {
      await fb.postsCollection.add({
        createdOn: new Date(),
        content: post.content,
        attachment: post.attachment,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        userActivity: state.userProfile.activity,
      })
    },

    


  },
/*/////////////////////////////////////////////////////////////////////////////////////////*/



/*/////////////////////////////////////////////////////////////////////////////////////////*/
  modules: {
  }
  
/*/////////////////////////////////////////////////////////////////////////////////////////*/



})

fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []

  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id

    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})



/*
PreviewImage(){
  const inputfile = document.getElementById('userimg');
  const file = inputfile.files[0];
  //console.log(URL.createObjectURL(file))
  this.localuserimg = URL.createObjectURL(file)
}

UploadImageLogic(){
  const inputfile = document.getElementById('userimg');
  const file = inputfile.files[0];
  let selectedFile = ref.child('ProfilePics/'+file.name)

  selectedFile.put(file).then(response =>{
    response.ref.getDownloadURL().then((downloadURL) => {
        this.userimg = downloadURL
        //console.log("uploaded img url :" + this.userimg)
    })

  }).catch(err => 
    console.log(err)
  );
}
*/

export default store