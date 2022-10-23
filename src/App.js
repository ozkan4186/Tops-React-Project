import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [getuser, setGetuser] = useState("");
  const [change, setChange] = useState([]);
  const [duti, setDuti] = useState([]);

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
    <section className="section">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
        <div className="jobs-center">
          <div className="btn-container">
            <button
              className="btn1"
              onClick={() => setChange([duties, change, getuser[0]])}
            >
              TOOMY
            </button>
            <button
              className="btn1"
              onClick={() => setChange([duties, change, getuser[1]])}
            >
              BIGDROP
            </button>
            <button
              className="btn1"
              onClick={() => setChange([change, getuser[2]])}
            >
              CUKER
            </button>
          </div>
        </div>
        <article className="job-info">
          {change.map((item, index) => {
            return (
              <div key={index}>
                <p>{item?.title}</p>
                <p> {item?.company} </p>
                <p> {item?.dates} </p>
                {[item?.duties].map((duti) => {
                  return (
                    <div className="job-desc">
                      <div>
                        <p>{duti?.[0]}</p>
                        <p>{duti?.[1]}</p>
                        <p>{duti?.[2]}</p>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
