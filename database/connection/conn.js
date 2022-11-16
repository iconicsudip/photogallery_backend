import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:admin@photogallery.7nzusli.mongodb.net/PhotoGallery?retryWrites=true&w=majority").then(()=>{
    console.log("Database connection successfull...");
}).catch((err)=>{
    console.log(err);
});