import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  const [input, setinput] = useState('')
  function submit(e) {
    setinput(e.target.value);   
    dispatch(getSearch(input));
  }
  return (
    <nav>
      <div className="navbar">
        <input className='bar' type="search" onKeyUp={e => (e.key === 'Enter') ? submit(e): null} onChange={e => setinput(e.target.value)} id="header-search" placeholder="  Search Videogames" />
        <input className='bar' type="submit" value="Search" onClick={submit}/>       
      </div>
      
    </nav>
  );
}