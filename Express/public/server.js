const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Import routes
const indexRouter = require('./routes/index');
const furnitureRouter = require('./routes/furniture');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

// Use routes
app.use('/', indexRouter);
app.use('/furniture', furnitureRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
