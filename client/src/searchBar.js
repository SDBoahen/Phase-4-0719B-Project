const SearchBar =({ snackWeAreSearchingFor, typingInSearchBar, renderFilteredSnacks })=>{
    // const SearchBar =(props)=>{


    return(<>

    {/* <h1>YURT</h1> */}

     <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     </>

      {/* <form> */}

        {/* <input value={snackWeAreSearchingFor} onChange={(se)=> typingInSearchBar(se)}/> */}

        <input value={snackWeAreSearchingFor} onChange={typingInSearchBar}/>

        {renderFilteredSnacks()}



        {/* <input value={props.snackWeAreSearchingFor} onChange={props.typingInSearchBar}/>

        {props.renderFilteredSnacks()} */}


      {/* </form> */}


      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </>)


}
export default SearchBar