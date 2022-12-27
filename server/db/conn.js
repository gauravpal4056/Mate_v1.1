const mongoose = require('mongoose');
const db = process.env.DATABASE_LINK;
mongoose.set("strictQuery", false);
mongoose.connect(db, {
    useNewUrlParser: true,
}).then(
    () => {
        console.log("datbase connected");
    }
).catch(err => console.log(err));