const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route for home page
app.get('/', (req, res) => {
    res.render('index');
});

// Route for submitting form data
app.post('/submit', (req, res) => {
    const { username, content } = req.body;
    
    // Process data here if needed
    
    // Redirect to new page or render new template
    res.redirect('/new'); // or res.render('new', { username, content });
});

// Route for new page
app.get('/new', (req, res) => {
    res.render('new');
});


app.get('/post/:id', (req, res) => {
    const post = {
        id: req.params.id,
        username: 'user123',
        content: 'This is the post content'
    };
    res.render('post-details', { post }); // Renders the post-details.ejs view and passes the post object
});





// Route to handle the post creation
app.post('/posts', (req, res) => {
    const { username, content } = req.body; // Extract form data
    // You can now save `username` and `content` to the database or any storage
    console.log('Username:', username);
    console.log('Post Content:', content);

    // Respond or redirect after handling the form
    res.redirect('/'); // Or any other page you'd like to redirect to
});

app.listen(8080, () => {
    console.log('Server running on port 3000');
});

app.get('/posts', (req, res) => {
    // Assuming you're using MySQL or any database, fetch the posts
    // For example, if using MySQL, you could do something like:
    const sql = 'SELECT * FROM posts';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            // Pass the posts array to the EJS template
            res.render('all-posts', { posts: results });
        }
    });
});


app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const sql = 'DELETE FROM posts WHERE id = ?';
    
    db.query(sql, [postId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            res.redirect('/posts'); // Redirect back to all posts after deletion
        }
    });
});


app.get('/posts/:id/edit', (req, res) => {
    const postId = req.params.id;
    const sql = 'SELECT * FROM posts WHERE id = ?';

    db.query(sql, [postId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            res.render('edit-post', { post: result[0] });
        }
    });
});

app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const { username, content } = req.body;
    const sql = 'UPDATE posts SET username = ?, content = ? WHERE id = ?';

    db.query(sql, [username, content, postId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            res.redirect('/posts');
        }
    });
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
