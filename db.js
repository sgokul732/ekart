const mongoose=require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://127.0.0.1:27017/kart',
error =>{
    if(!error){
        console.log("DB connected success");
    }
    else{
        console.log("error occured in DB Connection"+JSON.stringify(error, undefined, 2));
    }
   
})