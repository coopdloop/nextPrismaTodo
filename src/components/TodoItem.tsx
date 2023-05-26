"use client"

import { useState } from "react";

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => any
}
export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {

    const [showElement, hideTodo] = useState(true);
    
    const handleElementClick = () => {
        hideTodo(false);
        deleteTodo(id);
    };

    return (
        <>
            {showElement && (
                <li className="flex gap-1 items-center">
                    <input
                        id={id}
                        type='checkbox'
                        className="cursor-pointer peer"
                        defaultChecked={complete}
                        onChange={e => toggleTodo(id, e.target.checked)} />
                    <label
                        htmlFor={id}
                        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
                    >
                        {title}
                    </label>

                    <label
                        className="cursor-pointer border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                        htmlFor={id}
                        onClick={handleElementClick}
                    >
                        Delete
                    </label>
                </li>
            )}
        </>
    )
}
