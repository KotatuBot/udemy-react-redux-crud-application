import React from 'react';

/*
function App() {
  return(

          <div>
                <label htmlFor="bar">bar </label>
                <input type="text"onChange={()=>console.log("I am")}/>
          </div>

  
  );
}

*/

function App(){

        return (
                <div>

                <Cat/>
                <Cat/>

                </div>
        );


}
function Cat(){

        return (<div>Meow!</div>);
}

export default App;
