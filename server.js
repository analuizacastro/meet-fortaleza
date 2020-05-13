const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'))
server.set("view engine", "njk") // nunjucks files

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        photo_url: "fortaleza-img.png",
        title: "Fortaleza - CE, Brazil",
        description: "City of the sun",
        text: `With clear days all year round, the northeastern city also has a series of cultural and historical attractions, as well as rich gastronomy. In the itinerary of the visitors are the beaches of the Ceará capital of Iracema, Meireles, Mucuripe and Future Beach, the most sought after by cause of the mega-structure of tents. So let's <a href="/videos">meet Fortaleza!</a>`,
        links: [
            { name: "Github", url: "https://github.com/analuizacastro" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/analuizabarbosacastro" }
        ]

    }

    // return res.send("Hi!")
    return res.render("about", { about, items: videos }) // about: about
})

server.get("/videos", function (req, res) {
    // return res.send("Hi!")
    return res.render("videos", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id
    const video = videos.find(function (video) {
        if (video.id == id) { // return video.id == id
            return true;
        }
    })
    if (!video) {
        return res.send("Video not found!")
    }
    return res.render("video", { item: video })
})

server.listen(5000, function () {
    console.log("Server is running")
})