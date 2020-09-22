import React from "react";

const Test = props => {
  const {num, arr} = props;
  let Result =  arr.map(result => {
    if (result.key == 1) {
      return result.key * result.value
    }
  })
  return (
    <div>
      Result : {Result}
    </div>
  )
}

export default Test;