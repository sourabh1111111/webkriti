const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sample dynamic data (replace with your fetched data)
const dynamicData = {
    blogTitle: 'Sample Blog Title',
    iconColor: '#FF4F51',
    blogSummary: 'This is a sample blog summary.',
    authorImage: 'author-image.jpg',
    authorName: 'John Doe',
    authorDesignation: 'Author'
};

// Route to render the cardView.ejs template with dynamic data
app.get('/', (req, res) => {
    res.render('cardView', { data: dynamicData });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
