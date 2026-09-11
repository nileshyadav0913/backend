
import express from "express";

const app = express();

// JSON data read karne ke liye
app.use(express.json());

// Users array
let users = [
    {
        id: 1,
        name: "A",
        email: "a@example.com"
    },
    {
        id: 2,
        name: "B",
        email: "b@example.com"
    }
];

// GET - All users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST - Add new user
app.post("/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);

    res.status(201).json(user);
});

// PUT - Update user
app.put("/users/:id", (req, res) => {

    let user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json({
        message: "User updated successfully",
        user: user
    });
});

// DELETE - Delete user
app.delete("/users/:id", (req, res) => {

    let index = users.findIndex(u => u.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});
app.delete("/user/:id",(req,res)=>{
    users=users.filter(u=>u.id!=req.params.id);
    res.json({message:"User delete successfully"});
})





// Server
app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});

