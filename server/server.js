
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
require('./DB')
const bookRouter = require('./routes/book-router');
const usersRouter = require('./routes/user-router')
const path = require('path');
const passport = require('passport');
require('./config/passport')(passport);
const app = express();
const port = 8080;

app.use(passport.initialize())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use('/books',passport.authenticate('jwt', { session: false }), bookRouter);
app.use('/users',usersRouter);

app.get('/',(req,res)=>{
    res.send('success')
})
app.listen(port,()=>{
    console.log(process.env.CONNECTION_STRING);
    console.log(`server listen on port: ${port}`);
})


//*****************************************************************/
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
//*******************************************************************/