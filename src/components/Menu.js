const Menu = ({ showButton1, showButton2, showButton3,
    pizza1, pizza2, pizza3,
    setPizza1, setPizza2, setPizza3,
    setShowButton1, setShowButton2, setShowButton3}) => {


        const onClickEvent1 = () => {
            setShowButton1(false)
            setPizza1(pizza1 + 1)
          }
        
          const onClickEvent2 = () => {
              setShowButton2(false)
              setPizza2(pizza2 + 1)
          }
        
          const onClickEvent3 = () => {
              setShowButton3(false)
              setPizza3(pizza3 + 1)
          }

return (
<div>
<div className='veggieParadise menu'>
    <h3>Veggie Paradise</h3>
    <p style={{opacity:"0.5"}}>Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers and black olives</p>
    { (showButton1 || pizza1<1) && <button onClick={onClickEvent1} className='btn'>Add to Cart</button>}

    {(!showButton1 && pizza1>0) && <div>
        <button className='btn1' onClick={() => setPizza1(pizza1 - 1)}>-</button>
        <input type="text" value={pizza1} className='inp' onChange={e => setPizza1(e.target.value)}/>
        <button className='btn2' onClick={() => setPizza1(pizza1 + 1)}>+</button>
    </div>}
    
</div>

<div className='cheesenCorn menu'>
    <h3>Cheese n Corn</h3>
    <p style={{opacity:"0.5"}}>Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !</p>
    { (showButton2 || pizza2<1) && <button onClick={onClickEvent2} className='btn'>Add to Cart</button>}

    {(!showButton2 && pizza2>0) && 
    <div>
        <button className='btn1' onClick={() => setPizza2(pizza2 - 1)}>-</button>
        <input type="text" value={pizza2} className='inp' onChange={e => setPizza2(e.target.value)}/>
        <button className='btn2' onClick={() => setPizza2(pizza2 + 1)}>+</button>
    </div>
     } 
</div>

<div className='vegExtravaganza menu'>
    <h3>Veg Extravaganza</h3>
    <p style={{opacity:"0.5"}}>Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese</p>
    { (showButton3 || pizza3<1) && <button onClick={onClickEvent3} className='btn'>Add to Cart</button>}

    {(!showButton3 && pizza3>0) && <div>
        <button className='btn1' onClick={() => setPizza3(pizza3 - 1)}>-</button>
        <input type="text" value={pizza3} className='inp' onChange={e => setPizza3(e.target.value)}/>
        <button className='btn2' onClick={() => setPizza3(pizza3 + 1)}>+</button>
    </div>}
</div>


</div>
)
}

export default Menu
