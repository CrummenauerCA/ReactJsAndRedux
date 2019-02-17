const initState = {
  posts: [
    { id: 0, title: 'A simple post...', body: 'The body of the firt post'},
    { id: 1, title: 'Another simple post...', body: 'The body of the second post'}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);

  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id != post.id;
    });
    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
}

export default rootReducer;