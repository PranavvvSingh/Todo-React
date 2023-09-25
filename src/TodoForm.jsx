import { useState } from "react";
export function TodoForm({onSubmit}){
    const [newItem,setNewItem]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(newItem==="") return
        onSubmit(newItem);
        setNewItem("")
    }
    return(
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
    )
}