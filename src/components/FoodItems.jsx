/* eslint-disable array-callback-return */

import FoodItem from './FoodItem'

const FoodItems=(props)=>{
 console.log(props)
 
  return(
    <div className={"container"}>

{
  props.foodItems.map((item)=>{
     
    return(
      <FoodItem key={item.id} 
      IncrementItem={props.IncrementItem}
      DecrementItem={props.DecrementItem}
      item={item}/>
    )
  }
   
   
  )
}


    
    </div>
  )
}

export default FoodItems