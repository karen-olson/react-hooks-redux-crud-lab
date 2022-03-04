import { useState } from "react";

function RestaurantInput({ handleAddRestaurant }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddRestaurant(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleChange} value={name} />
      </label>
      <input type="submit" value="Add Restaurant" />
    </form>
  );
}

export default RestaurantInput;
