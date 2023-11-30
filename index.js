import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("firstPage.ejs")
});

app.post("/click",(req,res)=>{
    let word = req.body["word"];
    
        let num = word.length - 2;
        let midWord = word.slice(0,num);
        let wordArry = [
        '$hi9',
        '_$wrong69',
        '@right404',
        '_!bye8',
        '$69bhi',
        '#wrong',
        '_$007',
        '#alex',
        'spaceX@',
        '#java',
        '$col'

    ];
    let number = Math.floor(Math.random()*10);
    let ranWord = wordArry[number];
    let SemiPass = ranWord.concat(midWord);
    let password = SemiPass.concat("@Bul");

    // res.send(password);

    res.render("finalPage.ejs",{password});
    
});

app.listen(port,()=>{
    console.log(`your server is running on port ${port}`);
});