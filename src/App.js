import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

import FoodItems from './components/FoodItems'
import {useState} from 'react'

function App() {

  const [foodItems,setFoodItems]=useState([{id:1,name:'Fried Rice',price:200,value:0,picture:'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg'},
  {id:2,name:'Fried Chicken',price:300,value:0,picture:'https://www.thespruceeats.com/thmb/4QUIYqDCxzubLJmYFDwgr9GgBBk=/1333x1000/smart/filters:no_upscale()/terris-crispy-fried-chicken-legs-3056879-10_preview-5b05ec40a474be00362260d7.jpeg'}



])

 const IncrementItem=(id)=>{

     let updateFood= foodItems.map((item)=>{

        if(item.id==id)
        {
          item.value++;
        }
        return item;

      })



     
     /// console.log("update",updateFood)
      setFoodItems( updateFood);
      
 }


 const DecrementItem=(id)=>{

  let updateFood= foodItems.map((item)=>{

     if(item.id==id)
     {
       item.value--;
     }
     return item;

   })
   setFoodItems( updateFood);
  }
  return (
    <div className={""} >


      <Header foodItems={foodItems}/>
      <br></br>

      <FoodItems foodItems={foodItems}
      
      IncrementItem={IncrementItem} 
      DecrementItem={DecrementItem}
      
      />
    </div>
  );
}


export default App
