import React from 'react';
import IndivisualState from '../components/indivisualState';
import "../components/stateCard.css"
;

const stateCard = ({data,isLoading}) => {

  return(
      <div className="states">
          {data.map(item => {
              return(
                  <div > 
                   <IndivisualState key={item.combinedKey} item={item}/>
                  </div>
              )
          })}
      </div>
  )
        

}

export default stateCard;