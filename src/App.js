import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [img, setImg] = useState([]);

  const ApiKey = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`)
      .then((res) => res.json())
      .then((data) => setImg(data))
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)) // error api
  }, [ApiKey]);

  const item = (img.media_type !== "video") 
  ? 
  (
    <div> 
      <img src={img.url} alt={img.title} />
    </div> 
  ) 
  : 
  (
    <div style={{top: "17em", position:"relative", paddingBottom: "30px"}}>
      <iframe title={img.title} src={img.url} frameborder="0" width="300px" allow="fullscreen"/>
    </div>
  )
    
  return (
    <div className="App">
      <div className="img">
        {item}
        <div className="text">
          <h1>Every day an astronomy picture from NASA, today is : </h1>
          <h2>
            <span data-descr={img.explanation}>
              <strong> {img.title} </strong>
            </span>
          </h2>
          <p>Copyright : {img.copyright || "/"}</p>
          <div className="credit">
            {" "}
            Credit :{" "}
            <a
              href="https://api.nasa.gov"
              target="_blank"
              rel="noopener noreferrer"
            >
              api.nasa.gov
            </a>
          </div>
          <p>To see image or video in original size, please click 
             <a href={img.url} target="_blank" rel="noopener noreferrer"> here</a>
          </p>
          <h3>See you tomorrow for another wonderful picture !</h3>
         </div>
      </div>
    </div>
  );
};

export default App;