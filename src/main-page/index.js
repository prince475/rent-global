import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';   
import './main-page.css'
import  Header from './header';
import FeaturedHouse from "./FeaturedHouse";

function App() {
  //state is private data for the component and can survive re-renders
  // props can be used to pass on data to other cmoponents but the state data itself is internal (private to the component) 
  // therefore we can set state and read state using the react useState hook.

  // calling the useState function
  // starting off with an empty array
  // useState function returns an array containing two items, the first is a variable that will reflect the value of the state 
  // and the second is a function to set it  
  const [allHouses, setAllHouses] = useState([])

   // a hook is a function: so as the first parameter it needs a function, while the second parameter 
   // of useEffect is time interval, letting it know when to execute the provided function which is an array of values.

   
   useEffect(() => {
    // code that fetches the data for the application

    // an async function
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
    // if the array value changes, then the function is fired
    // for empty array: it means that the function will only run the first time the component is rendered
  }, [])
  
  // To make sure that the featured house already established does not change we use the ueMemo (from memorization or catching)
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      featuredHouse = allHouses[randomIndex];
    }
  }, [allHouses]) 


  // when a user lands on the first page they need to see a featured house
  // a small function to achieve this on our page we declare a function featuredHouse. 
  // we first check if it has any items and if it does, we randomly select an item form the array that was assigned featuredHouse
   
  return (
    <Router>
      <div className="container">
        
        <Header subtitle="Providing our clients with not just a house but a Home!"/>
        <Switch>
          <Route path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// useEffect is a hook that allows to create side effects when the state of a component property changes 