const initState = {
  posts: [
    { id: 0, title: 'A simple post...', body: 'The body of the firt post'},
    { id: 1, title: 'Another simple post...', body: 'The body of the second post'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;