const express = require('express');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let posts = [
    {
        id: uuidv4(),
        title: 'Welcome to My Blog',
        author: 'Admin',
        date: new Date().toLocaleDateString(),
        content: 'This is the first post on this simple CRUD blog. Feel free to edit or delete it, or create a new one!'
    }
];

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/posts/new', (req, res) => {
    res.render('new');
});

app.post('/posts', (req, res) => {
    const { title, author, content } = req.body;
    const newPost = {
        id: uuidv4(),
        title,
        author,
        date: new Date().toLocaleDateString(),
        content
    };
    posts.unshift(newPost);
    res.redirect('/');
});

app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.render('show', { post });
});

app.get('/posts/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.render('edit', { post });
});

app.put('/posts/:id', (req, res) => {
    const { title, author, content } = req.body;
    const postIndex = posts.findIndex(p => p.id === req.params.id);
    if (postIndex === -1) return res.status(404).send('Post not found');

    posts[postIndex] = {
        ...posts[postIndex],
        title,
        author,
        content
    };
    res.redirect('/');
});

app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
