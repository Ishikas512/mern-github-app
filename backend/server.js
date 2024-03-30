import express from "express";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import cors from "cors";

const app=express();
app.use(cors());

app.get("/",(req,res) => {
    res.send("Server is ready");
});

app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);

app.listen(5000,()=> {
    console.log("Server started on http://localhost:5000");
});