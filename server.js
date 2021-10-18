const express = require('express')
const fetch = require('node-fetch')
const movie = require('./modal/movie')
const app = express()
const port = 3001
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    console.log(req.headers['x-forwarded-for'])
    console.log(req.socket.remoteAddress)
    console.log(req.ip)
    movie.find().then((movies) => {
        res.render('movies', { movies })
    })
})
app.get('/addmovie', (req, res) => {
    res.render('addMovie')
})
app.post('/postmovie', (req, res) => {

    const newMovie = new movie({
        movietitle: req.body.movieTitle,
        moviedirector: req.body.movieDirector
    })
    if (newMovie.movietitle >= 18) {
        res.end("eligibe for 12th standard");
    } else {
        res.end('you are not eligible for 12 th standard')
    }
})
app.post('/movieid', (req, res) => {
    console.log("api called")
    console.log(req.body.id)
    res.send({ "id": req.body.id })
})

app.listen(port, () => {
    console.log(`running in ${port}`)
})