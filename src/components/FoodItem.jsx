const FoodItem=(props)=>{
 ///console.log("ite")
  return(
  <div>

<div className="card m-3" style={{width: "20rem", float:"left"}}>

  <img className={"card-img-top"} src={props.item.picture} alt="Card image cap" />

  <div className={"card-body"} >
    <h5 className={"card-title"}>{props.item.name}</h5>
    <p className={"card-text"}>{props.item.price}</p>

    <button className={"btn btn-primary "}
     onClick={()=>{props.DecrementItem(props.item.id)}}
    >Dec</button>
    <span className={" m-4"}>{props.item.value}</span>
    <button className={"btn btn-primary"}
    onClick={()=>{props.IncrementItem(props.item.id)}}
    
    >Inc</button>
    
    
  </div>
</div>
    </div>

    
  )
}

export default FoodItem