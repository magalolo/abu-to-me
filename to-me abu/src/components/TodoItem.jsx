import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



const TodoItem = ({ todo, onToggle, onDelete, onEdit, onToggleImportant }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`border-4 ${todo.done ? 'red' : ''} ${todo.important ? 'important' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
        />
      ) : (
        <p className="todo-title">{todo.text}</p>
      )}
      <div className='div-10'>
        <input type='checkbox' className="todo-checkbox" checked={todo.done} onChange={onToggle} />
        <button className='btn todo-important-button' onClick={onToggleImportant}>
        <CiStar />
        </button>
        <button className='btn todo-edit-button' onClick={handleEdit}>
        <FaPencilAlt />
        </button>
        <button className='btn todo-delete-button' onClick={onDelete}>
        <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
