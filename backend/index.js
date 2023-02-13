var express=require('express'),
 app=express(),
 port=process.env.PORT || 8000,
 mongoose=require('mongoose'),
 User=require('./models/userListModels'),
 bodyParser=require('body-parser');
 const cors=require('cors');
//  const bcrypt=require('bcrypt')

 mongoose.Promise=global.Promise;

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(cors())

var routes=require('./routes/userListRoutes');

routes(app);
mongoose.set("strictQuery",false);
mongoose.connect('mongodb+srv://Hari:Hari@cluster0.3agavlw.mongodb.net/User?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
  });


app.listen(port);

console.log(`Application is running on ${port} port`)
