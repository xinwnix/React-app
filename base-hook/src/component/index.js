import React, { useEffect, useState } from "react";
import { UseStudent } from "../hooks"
export default function StudentComponent() {
    const {
        listStudents,
        handleGetStudents,
        handleAddStudents,
        handleDeleteStudents
    } = UseStudent();

    useEffect(() => {
        handleGetStudents()
    }, []);
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    return (
        <div>
            <div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button onClick={() => handleAddStudents({ name: name })}>ADD</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID </th>
                        <th> NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listStudents.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td><button onClick={()=>
                                        handleDeleteStudents({id:item._id})
                                    }>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
