const express = require('express');
const app = express();
const blog = {
    id: 1,
    title: "Blog title",
    description: "Blog description"
}
app.get('/', (req, res) => {
    res.send(blog);
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
})