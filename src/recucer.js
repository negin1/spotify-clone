export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
 token: null 
 /*  token: "BQA3p2F-IxH-8vFeQTBWFYu2WtqeX2zQ7OTWIGgHj7gbjgpuVN…vNsX32z04Y7NOSel0RYxfyO5U9Ftcf2DzghuQX3wsrCTBbJwF" */
};
 
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

      case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      
    
     case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
   default:
      return state;
  }
};

/*
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

   

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
*/
   

 /*    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      }; */

   /*  
  
  } */


export default reducer;