import React from 'react'



const MyComponent = props =>{
  const {children, name} = props;
  return (
    <div>
      ChildRen: {children}
      Name: {name}
    </div>
  )
}

MyComponent.defaultProps = {
  name: "default Name"
}

export default MyComponent;