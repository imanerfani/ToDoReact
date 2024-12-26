import { useState } from "react";
import ToDoListCard from "./todo-card"


export default function toDoApp() {
    const [toDoText,setToDoText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [showResetInputButton,setShowResetInputButton] = useState(false);

    function handleInputSubmit(event) {
        if (event.key === "Enter" && event.target.value != "") {           
            const todo = {
                id: Date.now(),
                text: event.target.value,
                done:false,
            }
            setToDos([
                ...toDos,todo
            ]);
            resetToDoInput();
            setShowResetInputButton(false);            
        }
    }
    function handleDeleteTodo(todoId) {
        let newTodos = toDos.filter((item)=>{
            return item.id != todoId;
        })
        setToDos(newTodos);
    }
    function handleToggleEditTodo(todoId,active=true) {
        
        let newTodos = toDos.map((item)=>{
            if (item.id == todoId) {
                item.activeEdit = active;
            }

            return item;
        })
        setToDos(newTodos);         
    }
    function handleDoneTodo(toDoId) {
        let newTodos = toDos.map((item)=>{
            if (item.id == toDoId) {
                item.done =! item.done;
            }
            return item;
        });

        setToDos(newTodos);        
    }
    function handleEditInput(newText,toDoId){
        const newTodos = toDos.map((item)=>{
            if (item.id == toDoId) {
            return  item.text= newText;
            }
        })
        setToDos(newTodos);

        handleToggleEditTodo(toDoId,false);                                    
    }
    function handleInputChange(event) {
        if (event.target.value != "") {
            setToDoText(event.target.value);
            setShowResetInputButton(true);
        }else{
            setShowResetInputButton(false);
        }
        
    }
    function resetToDoInput() {
        setToDoText("");
        setShowResetInputButton(false);
    }
    return(
        <div className="w-full h-full flex flex-col gap-4 relative overflow-hidden pl-2 pr-2">
            <div className="header flex flex-col gap-4 bg-white sticky top-0">
                <h1 className="lg:text-5xl  sm:text-3xl text-3xl">To do app</h1>
                <div className="relative">
                    <input onKeyDown={handleInputSubmit} onChange={handleInputChange} value={toDoText} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="type somting ..." />
                    {
                        showResetInputButton ?
                            <div onClick={()=> resetToDoInput()} className="absolute right-0 top-0 h-full flex items-center px-4 cursor-pointer">
                                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                                </svg>
                            </div>
                        : null
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4 overflow-auto">
                {
                    toDos.map((item,index) => {
                        return (<ToDoListCard 
                                    key={index} 
                                    toDo={item} 
                                    toggleDone={handleDoneTodo}  
                                    handleEditInput={handleEditInput} 
                                    deleteTodo={handleDeleteTodo}
                                />)
                    })
                }
            </div>
        </div>
    )
}