import React, { useEffect, useState } from "react";
import Message from "./Message";



const App = () => {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);





    async function getAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      //   return data;
    //   console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);

    }


    useEffect(function(){
        getAdvice();
         
    }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
     <Message count={count} />
     
    </div>
  );
};

export default App;
