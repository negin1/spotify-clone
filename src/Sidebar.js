import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue} from './DataLayer' 

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


const Sidebar = () => {

    const [{ playlists } ] = useDataLayerValue();

  return (
    <div className="sidebar">
       <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
   <SidebarOption title="Home" Icon={HomeIcon} option="Home" />
      <SidebarOption  title="Search" Icon={SearchIcon} option="Search" />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

    {/*      <SidebarOption title="Rock"  />
      <SidebarOption  title="JAzz"/>
      <SidebarOption title="RnB"  /> */}

     {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}  
    </div>
  );
}

export default Sidebar;