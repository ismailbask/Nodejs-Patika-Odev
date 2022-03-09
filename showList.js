const posts = [
    { name: "Post1", description: "Birinci post", },
    { name: "Post2", description: "İkinci post", },
    { name: "Post3", description: "üçüncü post", }
]
listPosts = () => {
    posts.forEach(post => {
        console.log(post);
    });
}
addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts);
    })
}
showList = () => {
    return new Promise((resolve, reject) => {
        
    })
}
showPosts = async () => {
    await addPost({ name: "Post4", description: "Dördüncü post" });
    listPosts();
};
showPosts();

