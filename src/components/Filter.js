import './filter.css'


const Filter =(props) =>{
    function Open(props){
    
     console.log('button is working')
    }


    return(
        <>
        <button onClick={Open}>Filters</button>
        </>
    )

}

export default Filter;