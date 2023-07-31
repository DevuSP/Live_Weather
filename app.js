import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


dotenv.config();
const app = express();
const port = 3000;
let appId = process.env.APIKEY;
let nameOfCity = "Dehradun";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Making first letter capital.
function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + nameOfCity + "&appid=" + appId + "&units=metric");
        res.render("index.ejs", {
            details: result.data,
            currentCity: toCapitalize(nameOfCity)
        });
    } catch (error) {
        console.error(error.message)
        res.render("index.ejs", {
            details: "City Not Found. Check your spelling.",
        })
    };
})

app.get("/about", (req, res) => {
    res.render("about.ejs")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

app.post("/", (req, res) => {
    if (req.body.cityName != "") { nameOfCity = req.body.cityName }
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server is running at ${port}.`)
});