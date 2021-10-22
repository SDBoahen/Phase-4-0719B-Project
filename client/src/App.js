import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react'

import SearchBar from './searchBar';




function App() {


    const [allUsersEVENTHOUGHWESHOULDNEVER, setAllUsers] = useState( [] )
    console.log("State of Our allUsersEVENTHOUGHWESHOULDNEVER: ", allUsersEVENTHOUGHWESHOULDNEVER)


    const [currentUser, setCurrentUser] = useState( {} )
    console.log("Who is Our CurrentUser?? : ", currentUser)
    const [anyUserActive, setActiveUserState] = useState( false )
    console.log("Is Anyone Logged In?? : ", anyUserActive)


    const [allTheWooblies, setAllTheWooblies] = useState( [] )
      console.log("State of Our allTheWooblies: ", allTheWooblies)  //
    const [allTheSnacks, setAllTheSnacks] = useState( [] )
      console.log("State of Our allTheSnacks: ", allTheSnacks)  //



    useEffect( ()=>{

    
      fetch("http://localhost:3000/users")
      .then(r => r.json())
      .then(console.log)




      fetch("http://localhost:3000/wooblies")
      .then(r => r.json())
      .then( (fetchedWooblies)=>{ console.log(fetchedWooblies)
      
        setAllTheWooblies(fetchedWooblies)
      
      })
      // .then(console.log)


      fetch("http://localhost:3000/snacks")
      .then(r => r.json())
      .then( (fetchedSnacks)=>{ console.log(fetchedSnacks)
      
        setAllTheSnacks(fetchedSnacks)
      
      })
      // .then(console.log)


    } , [] )
    // useEffect( ()=>{} , [] )
    // useEffect()








    //// User - NEW User Form (Signup) UseState Info
    const [username, setUsername] = useState( "" )
    console.log("In Form - username: ", username)
      const typingUsername =(sythEvent)=>{

        setUsername(sythEvent.target.value)

      }
    //// User - NEW User Form (Signup) UseState Info

    const handleUserSignup =(sythEvent)=>{ 
      sythEvent.preventDefault()
        // console.log(sythEvent)
      console.log("In handleUserSignup")
      // console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")


        const userObj = {

          username: username,
            // username: "NewUser",
          password: "123"

        } 
        console.log("USER WE WILL CREATE: ", userObj)

      fetch("http://localhost:3000/signup", {

        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( userObj )

      })
      .then(r => r.json())
      .then(console.log)


    }








    //// User - NEW Session for a User Form (Login) UseState Info
    const [usernameForLogin, setUsernameForLogin] = useState( "" )
    console.log("In Form - usernameForLogin: ", usernameForLogin)
      const typingUsernameForLogin =(sythEvent)=>{

        setUsernameForLogin(sythEvent.target.value)

      }
    //// User - NEW Session for a User Form (Login) UseState Info


    const handleUserLogin =(sythEvent)=>{ 
      sythEvent.preventDefault()
        // console.log(sythEvent)
      // console.log("In handleUserLogin")
      console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")


          const userObj = {

          //   username: username
          //   // password: "123"

          } 

        console.log("USER username to CHECK: ", usernameForLogin)

      fetch("http://localhost:3000/login", {

        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameForLogin })

      })
      .then(r => r.json())
      .then(loggedInUser =>{  console.log("YAY! We Loggined In  >>  ", loggedInUser)  //

        setCurrentUser(loggedInUser)
        if(!loggedInUser.errors) //// !!!! FIX THIS 
        {

          setActiveUserState(true)

        }
        // Saying Now Someone is Logged In

      })


    } //// END OF handleUserLogin


    const handleUserLogout =(sythEvent)=>{ 
      sythEvent.preventDefault()
      // console.log(sythEvent)
      // console.log("In handleUserLogin")
      console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")


      fetch("http://localhost:3000/logout", {

        method: "DELETE"

      })
      .then(r => r.json())
      .then(loggedOutUser =>{  console.log("Until Next Time!! :)  >>  ", loggedOutUser)  //

        setCurrentUser( {} )
        setActiveUserState(false)
        // Saying Now NO-ONE is Logged In

      })
    

    }











    //// User - CRUD Methods: (DELETE) + (UPDATE)


      //////  User - (DELETE)
      const handleDeleteUserAccount =(sythEvent)=> { 
        sythEvent.preventDefault()
        // console.log(sythEvent)
        // console.log("In handleUserLogin")
        console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")


        fetch(`http://localhost:3000/users/${currentUser.id}`, {

          method: "DELETE"

        })
        .then(r => r.json())
        .then(whoDeletedTheirAccount =>{  console.log("BYEFELICA  >>  ", whoDeletedTheirAccount)  //

          setCurrentUser( {} )
          setActiveUserState(false)
          // Saying Now NO-ONE is Logged In

        })      

      }


      //////  User - (UPDATE)

        const [usernameBeingEdited, setUsernameBeingEdited] = useState( "" )
        console.log("In Form - usernameBeingEdited: ", usernameBeingEdited)
          const typingUsernameBeingEdited =(sythEvent)=>{

            setUsernameBeingEdited(sythEvent.target.value)

          }

      const handleEditUserAccount =(sythEvent)=> { 
        sythEvent.preventDefault()
        // console.log(sythEvent)
        // console.log("In handleUserLogin")
        console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")


        fetch(`http://localhost:3000/users/${currentUser.id}`, {

          method: "PATCH",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: usernameBeingEdited })

        })
        .then(r => r.json())
        .then(editedUser =>{  console.log("WOW✨  >>  ", editedUser)  //

          setCurrentUser(editedUser)
          // Saying Now NO-ONE is Logged In

        })      

      }


    //// User - CRUD Methods: (DELETE) + (UPDATE)










    ////////  renderSignupAndLogin


      //// Responsible for Rendering a Logout Button
      const isThereACurrentUser =()=>{ console.log("In isThereACurrentUser") 

          //  TERNARY-CONCERN ?  TRUE : FALSE
          return anyUserActive ?
          (<><br></br>
            <button onClick={handleUserLogout}>LOGOUT</button>
              <br></br>
            <button onClick={handleDeleteUserAccount}>DELETE YOUR ACCOUNT :(</button>
              <br></br>

              <h3>Edit Your Deets (Details)!✨</h3>

              <form onSubmit={handleEditUserAccount}>
                <label>Username: </label>
                <input type="text" value={usernameBeingEdited} onChange={typingUsernameBeingEdited}/>
                <input type="submit" value="Edit Yo' Deets!! :)" />
              </form>

          <br></br></>)
          :
          (<></>)
    
      }


    const renderSignupAndLogin =()=>{

      return(<>

        <h2>Signup!✨</h2>

        <form onSubmit={handleUserSignup}>
          <label>Username: </label>
          <input type="text" value={username} onChange={typingUsername}/>
          <label>Password: </label>
          <input type="password" />
          <input type="submit" value="Signup!" />
        </form>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h2>Login!✨</h2>

        <form onSubmit={handleUserLogin}>
          <label>Username: </label>
          <input type="text" value={usernameForLogin} onChange={typingUsernameForLogin}/>
          <label>Password: </label>
          <input type="password" />
          <input type="submit" value="Login!" />
        </form>

        {isThereACurrentUser()}
        {/* Will See or Not See a Logout Button */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>


      </>)

    }








    //// Responsible for WooblySnack Creation

    const [wooblyForWooblySnack, setWooblyForWooblySnack] = useState( 0 )  // woobly's  :id
      console.log("wooblyForWooblySnack ->  ", wooblyForWooblySnack)  //
    const [snackForWooblySnack, setSnackForWooblySnack] = useState( 0 )  // woobly's  :id
      console.log("snackForWooblySnack ->  ", snackForWooblySnack)


      const updateWooblyForWooblySnackDropDown =(sythEvent)=>{
        console.log("In updateWooblyForWooblySnackDropDown")

        setWooblyForWooblySnack(sythEvent.target.value)

      }
      const updateSnackForWooblySnackDropDown =(sythEvent)=>{
        console.log("In updateSnackForWooblySnackDropDown")

        setSnackForWooblySnack(sythEvent.target.value)

      }


      const handleSubmitForWooblySnackCREATE =(sythEvent)=>{ 
        sythEvent.preventDefault()
          // console.log(sythEvent)  //
        console.log("In handleSubmitForWooblySnackCREATE")
          console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")  //
  
  
          const wooblySnackObj = {
  
            woobly_id: wooblyForWooblySnack,
            snack_id: snackForWooblySnack
  
          } 
          console.log("WOOBLYSNACK WE WILL CREATE: ", wooblySnackObj)  //
  
        fetch("http://localhost:3000/woobly_snacks", {
  
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( wooblySnackObj )
  
        })
        .then(r => r.json())
        .then(console.log)
  

      }


    const renderWooblySnackNEWForm =()=>{ 

      return(<>
      

        <form onSubmit={handleSubmitForWooblySnackCREATE}>


          <h2>Match a Woobly & a Snack </h2> 

          {/* DROP DOWNS FOR WOOBLIES - WooblySnack */}

            <select onChange={updateWooblyForWooblySnackDropDown}>

              <option value={0} >Choose a Woobly :)</option>
              {/* Default Dropdown Choice */}

              {allTheWooblies.map(eachWoobly =>{

                return(<option value={eachWoobly.id} >{eachWoobly.name}</option>)

              })}
                
            </select> 


            {/* DROP DOWNS FOR SNACKS - WooblySnack */}

            <select onChange={updateSnackForWooblySnackDropDown}>

              <option value={0} >Choose a Snack :)</option>
              {/* Default Dropdown Choice */}

              {allTheSnacks.map(eachSnack =>{

                return(<option value={eachSnack.id} >{eachSnack.name}</option>)

              })}
                
            </select> 

            <input type="submit" value="YAY! Wooby & Snack! :)" />


        </form>





        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <select onChange={updateWooblyForWooblySnackDropDown}>
          {/* <option value="woobly" >Woobly</option> */}
          <option value={0} >Choose a Woobly :)</option>
            {/* Default Dropdown Choice */}
            
          <option value={1} >Woobly</option>
          <option value={2}>Joobly</option>
        </select> 


        <select>
          
        </select> 

      
      </>)

    }

    ////////



    const[snackWeAreSearchingFor, setSnackWeAreSearchingFor] = useState("")


      const typingInSearchBar =(sythEvent)=>{ // e , se
        console.log(sythEvent.target.value)  //

        setSnackWeAreSearchingFor(sythEvent.target.value)
        
      }
      const renderFilteredSnacks =()=>{
        console.log("IN renderFilteredSnacks")  //

        let filteredAllTheSnacks 


        ////  WITHOUT (.include)
        // if(snackWeAreSearchingFor != ""){

        //   filteredAllTheSnacks = allTheSnacks.filter(eachSnackToFilter => eachSnackToFilter.name == snackWeAreSearchingFor)
        //   // let filteredAllTheSnacks = allTheSnacks.filter(eachSnackToFilter => eachSnackToFilter.name == "Chips")

        // }else{

        //   filteredAllTheSnacks = allTheSnacks

        // }

        ////  WITH (.include)
        filteredAllTheSnacks = allTheSnacks.filter(    eachSnackToFilter => 
          
          eachSnackToFilter.name.toLowerCase().includes(snackWeAreSearchingFor.toLowerCase()) 
          
          || //&&
          
          eachSnackToFilter.flavor.toLowerCase().includes(snackWeAreSearchingFor.toLowerCase())
        
        )
        // filteredAllTheSnacks = allTheSnacks.filter(    eachSnackToFilter => eachSnackToFilter.name.toLowerCase().includes(snackWeAreSearchingFor.toLowerCase())    )



        return(

          filteredAllTheSnacks.map(eachSnack => {
            
            return(<>
            
              <h3>{eachSnack.name}</h3>
              <h5>{eachSnack.flavor}</h5>
              {/* <h3>THIS IS WITH -> {eachSnack.name}</h3> */}

            </>)

          })
        )

      }




    // const searchBar =()=>{


    //   return(<>

    //    <>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //    </>

    //     {/* <form> */}

    //       {/* <input value={snackWeAreSearchingFor} onChange={(se)=> typingInSearchBar(se)}/> */}
    //       <input value={snackWeAreSearchingFor} onChange={typingInSearchBar}/>

    //       {renderFilteredSnacks()}


    //     {/* </form> */}


    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <br></br>

    //   </>)


    // }
    // export default ....







  return (
    <div className="App">

        <h1> Hi :) </h1>

        {renderSignupAndLogin()}

        <SearchBar 

          ////  Variables 
          snackWeAreSearchingFor={snackWeAreSearchingFor} 
          
          //// Funtions
          typingInSearchBar={typingInSearchBar} renderFilteredSnacks={renderFilteredSnacks} 
          
        />
        {/* {searchBar()} */}
      
        {renderWooblySnackNEWForm()}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


export default App;






    // // -TEMP- //
    // const [allUsersEVENTHOUGHWESHOULDNEVER, setAllUsers] = useState( [] )
    // console.log("State of Our allUsersEVENTHOUGHWESHOULDNEVER: ", allUsersEVENTHOUGHWESHOULDNEVER)


    // useEffect( ()=>{

    //   // -TEMP- //
    //   fetch("http://localhost:3000/users")
    //   .then(r => r.json())
    //   .then(console.log)


    // } , [] )














































// // // // // // // // // // // // // // // // 










// function App() {


//   const [currentWoob, setCurrtentWoob] = useState( {} )
//   console.log("State of Current Woob:  ", currentWoob)

//   const [signupOrLogin, toggleSignupOrLogin] = useState(false)
//     // signupOrLogin ? "TRUE: We're Logging In!" : "FALSE: We're Signing Up!"
//   console.log("State of Current Woob:  ", signupOrLogin ? "TRUE: We're Logging In!" : "FALSE: We're Signing Up!")



//     const [wooblies, setWooblies] = useState( [] )
//     console.log("State of Wooblies:  ", wooblies)

//   useEffect( ()=>{ console.log("--IN USE EFFECT--")


//     // fetch("http://localhost:3000/wooblies/1")
//     // .then(r => r.json())
//     // .then(fetchedWoobly =>{ console.log(fetchedWoobly) 
    
//     //   setCurrtentWoob(fetchedWoobly)

//     // })


//       fetch("http://localhost:3000/snacks")
//       .then(r => r.json())
//       .then(console.log)

//       fetch("http://localhost:3000/wooblies")
//       .then(r => r.json())
//       .then(fetchedWooblies =>{ console.log(fetchedWooblies) 
      
//           setWooblies(fetchedWooblies)

//       })
//       // .then(console.log)


//     // const f = fetch("http://localhost:3000/wooblies")
//     // console.log("THE F🤨??  ", f)
//     // .then(r => r.json())
//     // .then(console.log)


//   }, [])


//   const renderSignupOrLogin =()=>{

//     return signupOrLogin ? 
//     (<>
//       <h2>Login!💫</h2>
//       <form>
//         <input type="text" />
//         <input type="password" />
//         <input type="submit" value="Login" />
//       </form>
//     </>)
//     :
//     (<>
//       <h2>Signup!✨</h2>
//       <form>
//         <input type="text" />
//         <input type="password" />
//         <input type="submit" value="Login" />
//       </form>
//     </>)

//   }

//   return (
//     <div className="App">

//         <h1> SAM :) </h1>

//         {renderSignupOrLogin()}


      
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



















































// // // // // // // // // // // // // // // // 










// import logo from './logo.svg';
// import './App.css';

// import { useState, useEffect} from 'react'




// function App() {


//   const [wooblies, setWooblies] = useState( [] )
//   console.log("State of Wooblies:  ", wooblies)

//   useEffect( ()=>{ console.log("--IN USE EFFECT--")


//     fetch("http://localhost:3000/snacks")
//     .then(r => r.json())
//     .then(console.log)

//     fetch("http://localhost:3000/wooblies")
//     .then(r => r.json())
//     .then(fetchedWoobleis =>{ console.log(fetchedWoobleis) 
    
//         setWooblies(fetchedWoobleis)

//     })
//     // .then(console.log)

//     // const f = fetch("http://localhost:3000/wooblies")
//     // console.log("THE F🤨??  ", f)
//     // .then(r => r.json())
//     // .then(console.log)


//   }, [])

//   return (
//     <div className="App">

//         <h1> SAM :) </h1>
      
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
