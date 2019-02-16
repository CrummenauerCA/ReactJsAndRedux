import React from 'react';

const List = props => {
  return props.data.map(element => {
    // if (element.value.length > 10) return null;
    return (
      <div className="listItem" key={element.id}>
        <p>{element.value}</p>
        <button onClick={() => {props.deleteValue(element.id)}}>Excluir</button>
      </div>
    )
  })
};

export default List;