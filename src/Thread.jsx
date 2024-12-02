import './App.css'
import { useState } from 'react';
import { DndContext, closestCorners} from '@dnd-kit/core';
import Draggable from './Draggable';
import { Droppable } from './Droppable';

function ThreadOfThought() {
    const [ show, setShow] = useState(false);
    const [ reveal, setReveal] = useState(false);

    const draggables = [ 
        <Draggable id="draggable-1" title="white" key="draggable-1"></Draggable>,
        <Draggable id="draggable-2" title="water" key="draggable-2"></Draggable>,
        <Draggable id="draggable-3" title="happy" key="draggable-3"></Draggable>,
        <Draggable id="draggable-4" title="snow" key="draggable-4"></Draggable>,
        <Draggable id="draggable-5" title="dwarf" key="draggable-5"></Draggable>,
    ]

    const [positions, setPositions] = useState({
        "draggable-1": null,
        "draggable-2": null,
        "draggable-3": null,
        "draggable-4": null,
        "draggable-5": null, 
    });

    const drags = draggables.filter(draggable => !positions[draggable.key]);

    const droppedItem1 = draggables.find(draggable => positions[draggable.key] === "droppable-1")
    const droppedItem2 = draggables.find(draggable => positions[draggable.key] === "droppable-2")
    const droppedItem3 = draggables.find(draggable => positions[draggable.key] === "droppable-3")
    const droppedItem4 = draggables.find(draggable => positions[draggable.key] === "droppable-4")
    const droppedItem5 = draggables.find(draggable => positions[draggable.key] === "droppable-5")

    return (
        <>
            <DndContext onDragEnd={handleDragEnd} > 
                <div className='words-container'> 
                {drags}
                 </div>
                <div className='drop-area'>
                <p className='greater-than'>1.</p><div className='drop-cell-given'>steam</div><p className="greater-than">2.</p>
                    {droppedItem1 ? droppedItem1 : <Droppable id="droppable-1"/>}<p className="greater-than">3.</p>
                    {droppedItem2 ? droppedItem2 : <Droppable id="droppable-2"/>}<p className="greater-than">4.</p>
                    {droppedItem3 ? droppedItem3 : <Droppable id="droppable-3"/>}<p className="greater-than">5.</p>
                    {droppedItem4 ? droppedItem4 : <Droppable id="droppable-4"/>}<p className="greater-than">6.</p>
                    {droppedItem5 ? droppedItem5 : <Droppable id="droppable-5"/>}
                </div>
                <button
                className='try-button-thread-test'
                disabled = {show || reveal || Object.values(positions).includes(null)}
                onClick={checkResult}
                >Test</button><button
                className='try-button-thread'
                disabled = { show }
                onClick={restartGame}
                >Reset</button>
                <p>{ show && <h3 className='correct-answer'>Correct! You threaded that thought.</h3> }</p>
                <p>{ reveal && <h3 className='error'>Not quite! Reset and try again. </h3> }</p>
            </DndContext>
        </>
    );

    function handleDragEnd (event) {
        const newPositions = {...positions};
        newPositions[event.active.id] = event.over.id;
        setPositions(newPositions);
    };

    function checkResult() {
        if (positions['draggable-2'] === 'droppable-1' &&
            positions['draggable-4'] === 'droppable-2' &&
            positions['draggable-1'] === 'droppable-3' &&
            positions['draggable-5'] === 'droppable-4' &&
            positions['draggable-3'] === 'droppable-5') {
            setShow(!show);
        } else {
            setReveal(!reveal);
        } 
    };

    function restartGame() {
        setPositions({
            "draggable-1": null,
            "draggable-2": null,
            "draggable-3": null,
            "draggable-4": null,
            "draggable-5": null, 
        });
        if (reveal) {
            setReveal(false);
        }
        if (show) {
            setShow(false);
        }
    }
}

export default ThreadOfThought