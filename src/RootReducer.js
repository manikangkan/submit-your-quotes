const initState = {
  quotes: [
    {
      id: 1,
      quote:
        "When I was a boy of fourteen, my father was so ignorant I could hardly stand to have the old man around. But when I got to be twenty-one, I was astonished at how much he had learned in seven years.",
      author: "Mark Twain",
    },
  ],
};

export default function RootReducer(state = initState, action) {
  if (action.type === "DELETE_POST") {
    const newPost = state.quotes.filter((post) => post.id !== action.id);
    // console.log("newPost->", newPost);
    return {
      ...state,
      quotes: newPost,
    };
  } else if (action.type === "CREATE_POST") {
    // console.log(action.cp);
    return {
      ...state,
      quotes: [...state.quotes, action.cp],
    };
  }
  return state;
}
