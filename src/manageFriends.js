const initialState = { friends: [] };

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      state.friends.push(action.payload)
      return { friends: state.friends};
    case "friends/remove":
      console.log("this is the action payload", action.payload)
     state.friends = state.friends.filter((friend)=> friend.id !== action.payload)
      return { friends: state.friends };
    default:
      return state;
  }
}
