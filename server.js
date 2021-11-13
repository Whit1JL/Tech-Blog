const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

console.log("Require sequelize");
const sequelize = require("./config/connection");
console.log("sequelize save");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

console.log("sequelize store");

const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
console.log("Adding session");


app.use(session(sess));

console.log("Session added");

const hbs = exphbs.create({
    helpers: {
        format_date: date => {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    console.log("sync sequelize");
    sequelize.sync({ force: false });
});
