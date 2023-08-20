import React from "react";
import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl,filterData } from "./data"; 
import {toast} from "react-toastify";

const App = () => {

  const[courses,setCourses]=useState(null);//useState([]);
  const [loading, setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  
  // let AllCourses=[];
  async function fetchData(catg){
    setLoading(true)
    try{
      let res=await fetch(apiUrl);
      let output= await res.json();
      if(catg!=='All'){
        setCourses({catg:output.data[catg]});
      }else{
        setCourses(output.data);
      }
      // setCourses(output.data);
      // AllCourses.push(output.data);
    }catch(error){
      toast.error("Something went5 wrong")
    }
    setLoading(false);
  }
  useEffect( ()=>{
    // const fetchData=async()=>{
    //   try{
    //     const res=await fetch(apiUrl);
    //     const output= await res.json();
    //     setCourses(output.data);          
    //   }catch(error){
    //     toast.error("Something went5 wrong")
    //   }
    // }
    fetchData(category); 
    },[category]);

  //console.log(AllCourses);
  function catgClickHndlr(catg){
    // setCourses({catg:AllCourses[catg]});
    // console.log(AllCourses);
    // setCategory(catg);
  }
  

  return( 
  <div className="min-h-screen flex flex-col">
    <div>
      <Navbar/>
    </div>
    <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}
        catgClickHndlr={catgClickHndlr}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[100vh]">
        {
          loading?(<Spinner/>):(<Cards courses={courses}/>)
        }
        
      </div>
    </div>
        
  </div>);
};

export default App;
