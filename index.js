import express from "express";
import bodyParser from "body-parser";


const port=3000;
const app=express();
app.use(express.static("public"));

const items = ["Leetcode", "SVM", " "]
const workItems = [];


app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    const date= new Date();
    const day= `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    res.render("index.ejs", { listtitle: day, newlistItems: items});
}); 

app.get("/work", (req, res)=>{
    res.render("work.ejs", {newlistItems: workItems});
});

app.post("/", (req, res)=>{
    const item = req.body["newItem"];
    if(req.body["list"] === "Work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }
});

app.post("/work", function(req, res){

    const item = req.body["newItem"];
    workItems
})

app.listen(port, ()=>{
    console.log(`The server is running on ${port}`);
});
