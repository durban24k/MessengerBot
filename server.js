require('dotenv').config();
let express=require('express');
let bodyParser=require('body-parser');
let path=require('path');
let logger=require('morgan');

let app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger('combined'));

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
     res.render('index.ejs');
});

let port = process.env.PORT || 3000
app.listen(port,()=>{
     console.log(`Server listening on port ${port}`);
});