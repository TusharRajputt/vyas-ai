import express from 'express';
import record from './Model1.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

router.get('/', (req, res) => {
  res.send('Hello from routerModule');
});

// Endpoint to check user existence and credentials
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await record.findOne({ email });
    if (user && user.password === password) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Create new user
router.post('/create', async (req, res) => {
  const { name, password, email } = req.body;

  const newUser = new record({
    name,
    password,
    email,
  });

  try {
    const savedRecord = await newUser.save();
    res.json(savedRecord);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Signup endpoint to handle duplicate user check
router.post("/signup", async (req, res) => {
  const { name, password, email } = req.body;

  try {
    const existingUser = await record.findOne({ email });

    if (existingUser) {
      res.json('exist');
    } else {
      const newUser = new record({
        name,
        password,
        email,
      });
      
      await newUser.save();
      res.json("notexist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
