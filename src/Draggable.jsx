import React from 'react';
import './App.css';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Draggable({id, title}) {
  const { attributes, listeners, setNodeRef, transform} = useDraggable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes} 
      {...listeners} 
      style={style}
      className='draggable-item'>
        {title}
    </div>
  );
}

export default Draggable