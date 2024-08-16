
import './options.css'

const Options =({ showDropdn, toggleDropdn }) =>{

    return(
    <>
     <button onClick={toggleDropdn}>
        Filters
      </button>
    {showDropdn &&  <select>

        <option>Refine by</option> 
        <option>Date of Registration</option>
        <option>Vendor Score</option>
        <option>Rating </option>
        <option>Status</option>
        <option>Type of Business</option>
        <option>Location</option>
        <option>Assign to</option>
    </select> }
    </>
    )
}

export default Options