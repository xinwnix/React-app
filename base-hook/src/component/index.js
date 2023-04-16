import React, { useEffect, useState } from "react";
import { UseStudent } from "../hooks";

export default function StudentComponent() {
  const {
    listStudents,
    handleGetStudents,
    handleAddStudents,
    handleDeleteStudents,
  } = UseStudent();

  useEffect(() => {
    document.title = "Student Page";
    handleGetStudents();
  }, [handleGetStudents]);

  const [name, setName] = useState("");

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleAddStudents({ name: name })}
            >
              Add
            </button>
          </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-end align-items-center">
          <h1 className="ml-auto">Base hooks</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listStudents.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteStudents({ id: item._id })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
