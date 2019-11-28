const initState = {
  posts: [
    {id: 1, title: 'Squirtle Laid an Egg', body: 'Lorem Ipsum, dolor is sit amet'},
    {id: 2, title: 'Charmander Laid an Egg', body: 'Lorem Ipsum, dolor is sit amet'},
    {id: 3, title: 'a Helix Fossil was Found', body: 'Lorem Ipsum, dolor is sit amet'},
  ]
};
const rootState = (state = initState, action) => {
  if(action.type === 'DELETE_POST') {
    const newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootState;
