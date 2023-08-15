const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://GoFoods:GoFoods@cluster0.fb6egej.mongodb.net/GoFoods?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    // const fetched_data = await mongoose.connection.db.collection("Food_items")
    // const ans = fetched_data.find({}).toArray(function(err,data){
    const fetched_data = await mongoose.connection.db.collection("Food_items");
    const data = await fetched_data.find({}).toArray(); // Use await here
    global.food_items = data;

    const fetched_data1 = await mongoose.connection.db.collection("Food_Category");
    const data1 = await fetched_data1.find({}).toArray(); // Use await here
    global.food_category = data1;
    console.log(global.food_category)

  }
  catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


module.exports = connectDB;