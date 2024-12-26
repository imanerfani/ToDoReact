import { act, useState } from "react";

export default function toDoListCard({toDo,toggleDone,handleEditInput,deleteTodo}) {  
    const [editMode,setEditMode] = useState(false);  
    const [showResetInputButton,setShowResetInputButton] = useState(false);
    function toggleEditMode(active) {
        setEditMode(active);
    }
    function handleEditSubmit(event,ToDoId) {
        if (event.key === "Enter") {            
            handleEditInput(event.target.value,ToDoId);
            setEditMode(false);
        }
    }
    return(
        <div className="to-to-list-wrapper grid grid-cols-4-48-auto-32-48 lg:py-4 py-2 border border-gray-200 rounded-lg">                        
            {
                editMode ?
                    <>
                      <div></div>
                        <div className="relative">
                            <input onChange={()=>{}} onKeyDown={() => handleEditSubmit(event,toDo?.id)} defaultValue={toDo?.text} className="w-full border-2 border-gray-300 rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="type somting ..." />
                            {
                                showResetInputButton ?
                                    <div className="absolute right-0 top-0 h-full flex items-center px-4">
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                                        </svg>
                                    </div>
                                : null
                            }
                        </div> 
                        <div></div>                                   
                    </>
                :
                <>                
                    <div className="flex items-center justify-center">
                        <input type="checkbox" onChange={()=> toggleDone(toDo.id)} checked={toDo?.done} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <p className={`flex content-start items-center h-11 ${toDo?.done ? 'line-through' : ''}`}>
                        {toDo?.text}
                    </p>  
                    <div className="flex items-center justify-center" onClick={()=>toggleEditMode(true)}>
                        <svg className="cursor-pointer" width="16px" height="16px" viewBox="-2.56 0 89.725 89.725" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group_11" dataname="Group 11" transform="translate(-1020.3 -668.175)">
                                <path id="Path_53" dataname="Path 53" d="M1066.1,682.8l-34.8,34.8a3.858,3.858,0,0,0-1.1,2.2l-.8,10.1a2.488,2.488,0,0,0,2.8,2.8l9.8-.8a3.857,3.857,0,0,0,2.2-1.1l35-35a3.041,3.041,0,0,0,.3-4.3l-9.1-9.1A3.052,3.052,0,0,0,1066.1,682.8Z" fill="none" stroke="#2b4ea2" strokeMiterlimit="10" strokeWidth="4"/>
                                <path id="Path_54" dataname="Path 54" d="M1079.6,690.2l-7.8-7.8a3.684,3.684,0,0,1,0-5.3l5.8-5.8a3.684,3.684,0,0,1,5.3,0l7.8,7.8a3.684,3.684,0,0,1,0,5.3l-5.8,5.8A3.869,3.869,0,0,1,1079.6,690.2Z" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4"/>
                                <path id="Path_55" dataname="Path 55" d="M1098.6,755.9h-72a4.268,4.268,0,0,1-4.3-4.3v-3.3a4.268,4.268,0,0,1,4.3-4.3h72a4.268,4.268,0,0,1,4.3,4.3v3.3A4.268,4.268,0,0,1,1098.6,755.9Z" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4"/>
                                <path id="Path_56" dataname="Path 56" d="M1103.5,739.8" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4"/>
                            </g>
                        </svg>
                    </div>                  
                </>
                           
            }
           
            {
                editMode ? 
                        <div className="flex items-center justify-center" onClick={()=> toggleEditMode(false)}>
                            <svg className="cursor-pointer" width="16px" height="16px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                <path d="M8 8L40 40" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 40L40 8" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    :
                    <div className="flex items-center justify-center" onClick={() => deleteTodo(toDo.id)}>
                        <svg className="cursor-pointer" width="16px" height="16px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                            <path d="M8 8L40 40" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 40L40 8" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
            }
            
        </div>
    )
    
}

