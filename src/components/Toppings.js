const Toppings = ({ 
    pizza1, pizza2, pizza3,
    pineapple, basil, olive, tomato, mushroom, cheese,
    setPineapple, setBasil, setOlive, setTomato,
    setMushroom, setCheese, toppingsBtn, setToppingsBtn
 }) => {

return (
<div>
<h2>Build your own pizza</h2>
<form>
<div>
    <input type='checkbox' value={pineapple} onChange={e => setPineapple(e.currentTarget.checked)}/>
    <label>Pineapple</label>
</div>

<div>
    <input type='checkbox' value={basil} onChange={e => setBasil(e.currentTarget.checked)} />
    <label>Basil</label>
</div>

<div>
    <input type='checkbox' value={olive} onChange={e => setOlive(e.currentTarget.checked)} />
    <label>Olive</label>
</div>

<div>
    <input type='checkbox' value={tomato} onChange={e => setTomato(e.currentTarget.checked)} />
    <label>Tomato</label>
</div>

<div>
    <input type='checkbox' value={mushroom} onChange={e => setMushroom(e.currentTarget.checked)}/>
    <label>Mushroom</label>
</div>

<div>
    <input type='checkbox' value={cheese} onChange={e => setCheese(e.currentTarget.checked)}/>
    <label>Cheese</label>
</div>
</form>

<div>
<br />
<br />
<button className='mybtn' onClick={() => setToppingsBtn(false)}>Proceed to Checkout</button>
</div>
</div>
)
}

export default Toppings
