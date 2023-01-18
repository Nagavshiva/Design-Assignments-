import React,{useState,useEffect} from "react";
import CoinCard from './CoinCard';
import Loading from "./Loading";


function App() {

  const [coindata,setCoinData] = useState([]);
  const [page,setPage]=useState(1);
  const [loading,setLoading] = useState(false);

  const getData = async()=>{
     const Response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`);
     const data = await Response.json();
     console.log(data)
     setCoinData((prev)=>[...prev,...data]);
     setLoading(false);
  }

  useEffect(()=>{ 
    // sets up a side effect when the component is rendered
    getData() // calls the getData function to fetch data
    },[page])  // tells the useEffect hook to listen to the page variable

    
  const handleInfiniteScroll = async()=>{
    try {

      if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
        setLoading(true);
        setPage((prev)=>prev +1);
      }
      
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
      window.addEventListener("scroll",handleInfiniteScroll);
      return()=>window.removeEventListener("scroll",handleInfiniteScroll)
  },[])

  return (
    <>
    <CoinCard  data={coindata}/>
    {loading && <Loading/>}
    </>
  );
}

export default App;
