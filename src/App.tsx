import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const refElement = useRef(null);

  const handleClick = () => {
    if (refElement.current.innerText.toLowerCase() === "madhu") {
      alert("changing name")
      refElement.current.innerText = "Mohan";
    } else {
      refElement.current.innerText = "Madhu";
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message); // Set image URL correctly
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [count]);
  console.log("mohan",count)

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 ref={refElement}>Mohan</h1>
      <button onClick={handleClick}>Toggle Name</button>
      <br /><br />
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        style={{ padding: "0.5rem", width: "200px" }}
      />
      <br /><br />
      <button onClick={() => setCount(count + 1)}>Fetch New Dog Image</button>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      {imageUrl && (
        <img src={imageUrl} alt="Dog" style={{ width: "300px", borderRadius: "10px" }} />
      )}
    </div>
  );
};

export default App;
