import React from 'react';
import './App.css';
import Draggable from './Draggable';

function Droppees({draggables}) {  
  return (
    <div className='droppees-container'> 
    {draggables.map((draggable) => (
        <Draggable id={draggable.id} title={draggable.title} key={draggable.id} />
        ))}
    </div>
  );
}

export default Droppees