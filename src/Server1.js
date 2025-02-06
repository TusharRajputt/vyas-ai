import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './route1.js';

const app = express();

app.use(cors({
  origin: 'https://vyasai.in/', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

mongoose.connect("mongodb+srv://vansh:vanshseth%402004@auth.pyxmqul.mongodb.net/myDatabaseName?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected successfully");
    app.use("/", router);
    app.listen(3002, function() {
      console.log("Express server is running on port 3002");
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Add detailed error logging middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
