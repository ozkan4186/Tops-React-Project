import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [getuser, setGetuser] = useState("");
  const [change, setChange] = useState([]);
  const [duti, setDuti] = useState([])

  const getApi = async () => {
    try {
      const { data } = await axios(url);

      setGetuser(data);
      console.log(data);
      // console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const { title, company, dates, duties } = getuser;

  console.log(getuser);


  return (
    <div className="container text-center ">
      <h1>Experience</h1>
      <div className="button">
        <button onClick={() => setChange([duties,change, getuser[0]])}>TOOMY</button>
        <button onClick={() => setChange([duties,change, getuser[1]])}>BIGDROP</button>
        <button onClick={() => setChange([change, getuser[2]])}>CUKER</button>
      </div>
      <article>
        {change.map((item,index)=>{
          return(
            <div key={index} >
            <p>{item?.title}</p>
            <p> {item?.company}  </p>
            <p> {item?.dates} </p>  
            <p>  {[item?.duties].map((duti)=>{
              return(
                <div>
                  <p>{duti?.[0]}</p> 
                  <p>{duti?.[1]}</p> 
                  <p>{duti?.[2]}</p> 

                  </div>
              )
            })} </p>
             
            </div>
          )
        })}

      </article>
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 

      <button>MORE INFO</button>
    </div>
  );
}

export default App;
