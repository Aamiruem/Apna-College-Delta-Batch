const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync');
const ExpressError = require('./utils/ExpressError');
const listingSchema = require('./schema');

const app = express();


// setting views

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// handling add form req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

// Connecting mongodb with our app
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
})


async function main() {
    await mongoose.connect(MONGO_URL)
}


const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);

    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errorMessage);
    } else {
        next();
    }
}



app.get('/', (req, res) => {
    res.send('hi I am root!')
})


// index route
app.get('/listings', wrapAsync(async (req, res) => {

    const allListings = await Listing.find({})
    res.render('listings/index', { allListings });
}));

// new route
app.get('/listings/new', (req, res) => {
    res.render('listings/new')
})

// Create route

app.post('/listings', validateListing, wrapAsync(async (req, res) => {
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');

}));


// Show Route

app.get('/listings/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const singleListing = await Listing.findById(id);
    res.render('listings/show', { Listing: singleListing });

}));






app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;

    const myListing = await Listing.findById(id);

    res.render('listings/edit', { Listing: myListing });
}));


app.put('/listings/:id', validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect('/listings');

}));

app.delete('/listings/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listings');

}));


app.all('*', (req, res, next) => {
    next(new ExpressError(404, 'Page not Found!'));

})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    // res.status(statusCode).send(message);
    res.render('error.ejs', { message })
})

app.listen(8080, () => {
    console.log('Server is listening to port 8080');
});