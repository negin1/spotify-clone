	import React, {useEffect, useState} from 'react'	
import './App.css';	
import Login from './Login';	
import { getTokenFromUrl} from './spotify';	
import SpotifyWebbApi from 'spotify-web-api-js'	
import Player from './Player'	
import {useDataLayerValue} from '././DataLayer'	
const spotify = new SpotifyWebbApi();	
function App() {	
const [{user, token}, dispatch] = useDataLayerValue();	
  //Run code based on a given condition 	
  useEffect(() =>{	
    const hash  = getTokenFromUrl();	
    window.location.hash ="";	
    const _token = hash.access_token;	
    if(_token){	
      dispatch({	
        type: "SET_TOKEN",	
        token: _token,	
      })	
       spotify.setAccessToken(_token);	
       spotify.getMe().then(user =>{	
          dispatch({	
            type: 'SET_USER',	
            user: user	
          });	
        });	
      spotify.getUserPlaylists().then((playlists) => {	
        dispatch({	
          type: "SET_PLAYLISTS",	
          playlists,	
        });	
      });	
    }	
  }, []);	
  	
  return (	
    <div className="App">	
    {	
      token ? (	
        <Player />	
      ) :(	
         <Login />	
      )	
    }	
    	
    </div>	
  );	
}	
export default App;