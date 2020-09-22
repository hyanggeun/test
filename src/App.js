import React from 'react';
import Test from './Test'


var kvArray = [{key:1, value:10},
  {key:2, value:20},
  {key:3, value: 30}];
const App = ()=>{
  return (
    <Test num={3} arr={kvArray}/>
  )
}
export default App;
