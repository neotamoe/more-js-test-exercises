import React from 'react';

export default (props) => {

  const clickHandler = (key) => {
    return props.onClick(key)
  }

  // Implement this component to pass the tests in ./__tests/index.spec.js
  return(
    <ul>
      { props.data.map((item) => {
          return <li key={item.key} className={item.selected ? 'selected' : ''} onClick={() => clickHandler(item.key)}>{item.name}</li> 
        })
      }
    </ul>
  )
};
