const mongoose = require('mongoose');
const DB =
  'mongodb+srv://manishbailwal02:h66GYhjTRanTe3rP@cluster0.dqhamm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
mongoose
  .connect(DB)
  .then(() => {
    console.log('db connected');
  })
  .catch((err) => console.log(err));
