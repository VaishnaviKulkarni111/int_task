import './filter.css'
import { useState } from 'react';
import Options from './Options';

const Filter =() =>{
    const [showDropdn, setShowDropdn] = useState(false);

  const toggleDropdown = () => {
    setShowDropdn(!showDropdn);
  };
   

    return(
        <>
        <Options showDropdn={showDropdn} toggleDropdn={toggleDropdown}/>
        
        </>
    )

}

export default Filter;