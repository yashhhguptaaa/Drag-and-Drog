import React, { useState } from 'react'

export default function Cards() {

    const [donelist, setDonelist] = useState(["Ideation", "Sketches"])
    const [trashlist, setTrashlist] = useState(["Interviews", "Research"])
    const [doinglist, setDoinglist] = useState(["Hypothesis", "User Testing", "Prototype"])
    const [todolist, setTodolist] = useState(["Analysis", "Coding", "Card Sorting", "Measure"])

    return (
        <div>
            <div className="main-container">
                <ul className="columns">

                    <li className="column to-do-column"
                    >
                        <div className="column-header" >
                            <h4>To Do</h4>
                        </div>

                        <ul className="task-list" id="to-do" onDrop=
                            {
                                (e) => {
                                    e.preventDefault();
                                    var data = e.dataTransfer.getData("text");
                                    setTodolist((todolist) => [...todolist,data])
                                }
                            }
                            onDragOver={(e) => { e.preventDefault(); }}>
                            {todolist.map((task, index) => {
                                return <li key={index} className="task" draggable="true"
                                    onDragStart=
                                    {
                                        (e) => {
                                          
                                            e.dataTransfer.setData("text", `${task}`);
                                            todolist.splice(index, 1);
                                            setTodolist(todolist)
                                        }
                                    }>
                                    <p>{task}</p>
                                </li>
                            })}
                        </ul>
                    </li>

                    <li className="column doing-column"
                        onDrop=
                        {
                            (e) => {
                                e.preventDefault();
                                var data = e.dataTransfer.getData("text");
                                setDoinglist((doinglist)=>[...doinglist,data])
                            }
                        }
                        onDragOver={(e) => { e.preventDefault(); }}>
                        <div className="column-header">
                            <h4>Doing</h4>
                        </div>
                        <ul className="task-list" id="doing">
                            {doinglist.map((task, index) => {
                                return <li key={index} className="task" draggable="true"
                                    onDragStart=
                                    {
                                        (e) => {
                                          
                                            e.dataTransfer.setData("text", `${task}`);
                                            doinglist.splice(index, 1);
                                            setDoinglist(doinglist)
                                        }
                                    }>
                                    <p>{task}</p>
                                </li>
                            })}
                        </ul>
                    </li>

                    <li className="column done-column"
                        onDrop=
                        {
                            (e) => {
                                e.preventDefault();
                                var data = e.dataTransfer.getData("text");
                                setDonelist((donelist) => [...donelist,data]);
                            }
                        }
                        onDragOver={(e) => { e.preventDefault(); }} >
                        <div className="column-header">
                            <h4>Done</h4>
                        </div>
                        <ul className="task-list" >
                            {donelist.map((task, index) => {
                                return <li key={index} className="task" draggable="true"
                                    onDragStart=
                                    {
                                        (e) => {
                                          
                                            e.dataTransfer.setData("text", `${task}`);
                                            donelist.splice(index, 1);
                                            setDonelist(donelist);
                                        }
                                    }>
                                    <p>{task}</p>
                                </li>
                            })}
                        </ul>
                    </li>

                    <li className="column trash-column"
                        onDrop=
                        {
                            (e) => {
                                e.preventDefault();
                                var data = e.dataTransfer.getData("text");
                                setTrashlist((trashlist) => [...trashlist,data]);
                            }
                        }
                        onDragOver={(e) => { e.preventDefault(); }}>
                        <div className="column-header">
                            <h4>Trash</h4>
                        </div>
                        <ul className="task-list" id="trash">
                            {trashlist.map((task, index) => {
                                return <li key={index} className="task" draggable="true"
                                    onDragStart=
                                    {
                                        (e) => {

                                            e.dataTransfer.setData("text", `${task}`);
                                            trashlist.splice(index, 1);
                                            setTrashlist(trashlist);
                                        }
                                    }>
                                    <p>{task}</p>
                                </li>
                            })}
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}
