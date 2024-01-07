import express from "express";
import cors from "cors";
import { sample_kits, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

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

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email 
      && user.password === password);
  
     if(user) {
      res.send(generateTokenReponse(user));
     }
     else{
       const BAD_REQUEST = 400;
       res.status(BAD_REQUEST).send("Username or password is invalid!");
     }
  
  })
  
  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }

const port = 5000;
app.listen(port, () => {
    console.log("Wesbite served on http://localhost:" + port);
})