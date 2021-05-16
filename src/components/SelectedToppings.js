import React from 'react'

const SelectedToppings = ({ 
                            pineapple, basil, olive, tomato, mushroom, cheese,
                            pizza1, pizza2, pizza3 ,pizza1Cost,
                            pizza2Cost, pizza3Cost
                         }) => {

        var total = (pizza1 * pizza1Cost) + (pizza2 * pizza2Cost) + (pizza3 * pizza3Cost)
        var sum = 0
        var toppingsTotal = 0
        sum = pineapple ? sum+1 : sum+0
        sum = basil ? sum+1 : sum+0
        sum = olive ? sum+1 : sum+0
        sum = tomato ? sum+1 : sum+0
        sum = mushroom ? sum+1 : sum+0
        sum = cheese ? sum+1 : sum+0 
        toppingsTotal = (sum*50)*(pizza1+pizza2+pizza3)
    return (
        <div>
            <h3>Your Selected Ingredients</h3>
            {pineapple && <h4 style={{opacity:"0.5"}}>Pineapple</h4>}
            {basil && <h4 style={{opacity:"0.5"}}>Basil</h4>}
            {olive && <h4 style={{opacity:"0.5"}}>Olive</h4>}
            {tomato && <h4 style={{opacity:"0.5"}}>Tomato</h4>}
            {mushroom && <h4 style={{opacity:"0.5"}}>Mushroom</h4>}
            {cheese && <h4 style={{opacity:"0.5"}}>Cheese</h4>}

            <div>
                <h2>We have received your order, Thank you!</h2>
                <h4 style={{opacity:"0.7"}}>Order no : #123</h4>
                <h5 style={{opacity:"0.7"}}>Total Cost : ₹ {total + toppingsTotal}</h5>
            </div>
        </div>
    )
}

export default SelectedToppings
