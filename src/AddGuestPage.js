import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddGuestPage() {
  const [name, setName] = useState("");
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add guest to the appropriate section in the state
    history.push("/guest-list");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Add Guest</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddGuestPage;
