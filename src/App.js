import React, {useEffect, useState} from 'react'
import './App.css';
import Login from './Login';
import { getTokenFromUrl} from './spotify';
import SpotifyWebbApi from 'spotify-web-api-js'
import Player from './Player'

const spotify = new SpotifyWebbApi();

function App() {

  const [token, setToken] = useState();

  //Run code based on a given condition 
  useEffect(() =>{
    const hash  = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if(_token){
       setToken(_token);

       spotify.setAccessToken(_token);

       spotify.getMe().then(user =>
        console.log('x', user))
    }
    

  console.log("hej", token);
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
