import './App.css';
import React, { useState } from 'react'
import Menu from './components/Menu';
import Toppings from './components/Toppings';
import SelectedToppings from './components/SelectedToppings';


function App() {

  const [showButton1 , setShowButton1] = useState(true)
  const [showButton2 , setShowButton2] = useState(true)
  const [showButton3 , setShowButton3] = useState(true)

  const [onSubmit, setOnSubmit] = useState(true)

  const [pizza1, setPizza1] = useState(0)
  const [pizza2, setPizza2] = useState(0)
  const [pizza3, setPizza3] = useState(0)


  const [pineapple, setPineapple] = useState(false)
  const [basil, setBasil] = useState(false)
  const [olive, setOlive] = useState(false)
  const [tomato, setTomato] = useState(false)
  const [mushroom, setMushroom] = useState(false)
  const [cheese, setCheese] = useState(false)

  const [toppingsBtn, setToppingsBtn] = useState(true)

  const [pizza1Cost, setPizza1Cost] = useState(250)
  const [pizza2Cost, setPizza2Cost] = useState(300)
  const [pizza3Cost, setPizza3Cost] = useState(350)
  // const onClickEvent1 = () => {
  //   setShowButton1(false)
  //   setPizza1(pizza1 + 1)
  // }

  // const onClickEvent2 = () => {
  //     setShowButton2(false)
  //     setPizza2(pizza2 + 1)
  // }

  // const onClickEvent3 = () => {
  //     setShowButton3(false)
  //     setPizza3(pizza3 + 1)
  // }


  return (
    <div className="App">
      {onSubmit && 
        <Menu showButton1={showButton1} showButton2={showButton2} showButton3={showButton3}
              setShowButton1={setShowButton1} setShowButton2={setShowButton2} setShowButton3={setShowButton3}
              pizza1={pizza1} pizza2={pizza2} pizza3={pizza3}
              setPizza1={setPizza1} setPizza2={setPizza2} setPizza3={setPizza3}
        />
      }
      {onSubmit && <button className='submit' onClick={() => setOnSubmit(false)}>Submit</button>}

      {(!onSubmit && toppingsBtn) && <Toppings
        pizza1={pizza1} pizza2={pizza2} pizza3={pizza3}
        pineapple={pineapple} basil={basil} olive={olive} tomato={tomato} mushroom={mushroom} cheese={cheese}
        setPineapple={setPineapple} setBasil={setBasil} setOlive={setOlive} setTomato={setTomato} setMushroom={setMushroom} 
        setCheese={setCheese} toppingsBtn={toppingsBtn} setToppingsBtn={setToppingsBtn}
      />}

      {!toppingsBtn && 
        <SelectedToppings 
        pizza1={pizza1} pizza2={pizza2} pizza3={pizza3}
        pizza1Cost={pizza1Cost} pizza2Cost={pizza2Cost} pizza3Cost={pizza3Cost}
        pineapple={pineapple} basil={basil} olive={olive} tomato={tomato} mushroom={mushroom} cheese={cheese}
      />}
    </div>
  );
}

export default App;
