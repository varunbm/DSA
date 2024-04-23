//Callback 
const posts = [
    {title:"First post", body:"This is First post"},
    {title:"Second post", body:"This is Second post"}
]

function getPost(){
    setTimeout(() => {
        let output = ''
        posts.forEach(post => {
            output += `<li><b><i>${post.title}</i></b></li>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post,callback){
    setTimeout(() => {
        callback() // Without callback, get post will execute in 1 sec and it will not wait for post
                   // so updated post will not get displayed.
        posts.push(post);
    },2000)
    console.log(posts)
}

createPost({title: 'Third post', body:"This is a third post"},getPost);