import "../components/indivisualState.css"

const IndivisualState = ({item}) => {
    return(

        <div className="statecard">
        <div className="info">
        <div className="heading">
        <h3>{item.provinceState}</h3>
        </div>
        <div className="data">
        <strong>Active cases : {item.active}</strong> <br/>
        <strong>Confirmed cases: {item.confirmed}</strong> <br/>
        <strong>Deaths : {item.deaths}</strong> <br/>
        </div>
        </div>
       </div>
      

    )
   
  
 
}

export default IndivisualState