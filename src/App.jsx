
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restraunts from './components/Restraunts';
import userinfo from "./data/userinfo.json"
import offers from "./data/offers.json"
import restraunts from "./data/restraunts.json"
import {useState} from "react"

const filters={
  1:" Cost High to Lost",
  2:" Cost Lost to High",
  3:"  Ratings",
  4:"  Delivery Time",
  5:"  Relevance",

}






function App() {
  const [filterBy, setfilterBy]=useState("");
  const [data,setdata]=useState([restraunts]);
   
  const updateFilter=(newfilter)=>{

    switch(newfilter){
      case "1":{
        setfilterBy(1);
        data.sort((a,b)=>a.costForTwo-b.costForTwo);
        setdata({...data});
        break;

      }
      case "2":{
        setfilterBy(2);
        data.sort((a,b)=>b.costForTwo-a.costForTwo);
        setdata({...data});
        break;

      }
      default:{
        setdata(restraunts);
        break;
      }
    }

  }


  return (
    <div>
     <Navbar {...userinfo.location}></Navbar>
     <Offers offers={offers}></Offers>
     <section className="near-you">
       <Restraunts restraunts={restraunts}></Restraunts>
       <Filter filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}></Filter>
     </section>
    </div>
  );
}

export default App;
