import { useEffect, useState } from "react";

function App() {

  const [requests, setRequests] = useState([]);

  const [form, setForm] = useState({
    studentName: "",
    email: "",
    category: "",
    description: "",
    priority: "Low"
  });

  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/requests";

  // Get all requests
  const getRequests = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setRequests(data);
  };

  useEffect(() => {
    getRequests();
  }, []);

  // Add or Update
  const submitRequest = async () => {

    if (editId) {

      await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      setEditId(null);

    } else {

      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

    }

    setForm({
      studentName: "",
      email: "",
      category: "",
      description: "",
      priority: "Low"
    });

    getRequests();
  };

  // Delete
  const deleteRequest = async (id) => {

    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    getRequests();
  };

  // Edit
  const editRequest = (item) => {

    setForm({
      studentName: item.studentName,
      email: item.email,
      category: item.category,
      description: item.description,
      priority: item.priority
    });

    setEditId(item.id);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>

      <h1>Campus Help Desk</h1>

      <input
        placeholder="Student Name"
        value={form.studentName}
        onChange={(e) =>
          setForm({ ...form, studentName: e.target.value })
        }
      />
      <br /><br />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <br /><br />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      />
      <br /><br />

      <textarea
        placeholder="Problem Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />
      <br /><br />

      <select
        value={form.priority}
        onChange={(e) =>
          setForm({ ...form, priority: e.target.value })
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br /><br />

      <button onClick={submitRequest}>
        {editId ? "Update Request" : "Submit Request"}
      </button>

      <hr />

      <h2>Submitted Requests</h2>

      {requests.map((item) => (

        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: 10,
            marginBottom: 10
          }}
        >

          <h3>{item.studentName}</h3>

          <p>{item.email}</p>

          <p>Category: {item.category}</p>

          <p>{item.description}</p>

          <p>Priority: {item.priority}</p>

          <button onClick={() => editRequest(item)}>
            Edit
          </button>

          <button
            onClick={() => deleteRequest(item.id)}
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default App;