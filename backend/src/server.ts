import express from "express";
import cors from "cors";
import { sample_kits } from "./data";

const app = express();
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.get("/api/kits", (req, res) =>{
    res.send(sample_kits);
})

app.get("/api/kits/search/:searchTerm", (req, res) =>{
    const searchTerm = req.params.searchTerm;
    const kits = sample_kits.filter(kits => kits.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(kits);
})

app.get("/api/kits/:kitId", (req, res) =>{
    const kitId = req.params.kitId;
    const kits = sample_kits.find(kit => kit.id == kitId);
    res.send(kits);
})

const port = 5000;
app.listen(port, () => {
    console.log("Wesbite served on http://localhost:" + port);
})