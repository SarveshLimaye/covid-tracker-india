import React from 'react';
import IndivisualState from '../components/indivisualState';
import "../components/stateCard.css"

const stateCard = ({data}) => {
  return(
      <div class="states">
          {data.map(item => {
              return(
                  <div > 
                   <IndivisualState key={item.uid} item={item}/>
                  </div>
              )
          })}
      </div>
  )
        

}

export default stateCard;