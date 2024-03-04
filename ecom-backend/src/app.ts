import express from "express";

// Importing Routes
import userRoute from "./routes/user.js"
import { connectDB } from "./utils/features.js";

const port = 3000;
const app = express();

connectDB();

app.use(express.json());
app.get("/", (req, res) =>{
    res.send("API Working with /api/v1")
})
// Using Routes
app.use("/api/v1/user", userRoute)

app.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`);
    
})