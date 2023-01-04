const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:Claudio1412@todolist.phrx6j6.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb; 