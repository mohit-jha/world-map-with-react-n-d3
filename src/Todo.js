import React, { useState } from 'react'
import TodoList from './TodoList'
export default function Todo() {
    const [items, setitems] = useState([]);
    const [fItems, setfItems] = useState('');
    const handleOnChange = (event) => {
        setfItems(event.target.value)
    }
    const handleOnSubmit = (event) => {
        setitems((prevData) => {
            return [...prevData, fItems]
        })
        setfItems(" ")
    }
    const handleDelete = (id) =>{
        console.log('Deleted');
       setitems((prevData)=>{
         return prevData.filter((arrOfList,arrOfIndex)=>{
            return arrOfIndex !== id;
           })
       })
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    
                    <h1>Todo List</h1>
                    <br />
                    <input value={fItems} name='add' type='text'  placeholder='Add A Items ' autoComplete="off" onChange={handleOnChange}   />
                    <button type='submit' onClick={handleOnSubmit}>+</button>
                    <ol>
                        {
                            items.map((listVal,listIndex) => {
                                return <>
                                <TodoList text={listVal}
                                 id={listIndex}
                                 key = {listIndex}
                                 onSel = {handleDelete}
                                    />
                                    </>
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}
