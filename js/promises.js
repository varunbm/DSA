//Promises 
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

function createPost(post){
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post);
            let error = false
            if(!error){
                res()
            }else{
                rej('Something went wrong')
            }
        },2000)
        // console.log(posts)
    })
}

createPost({title: 'Third post', body:"This is a third post"})
.then(() => {
    getPost()
})
.catch(err => {
    console.log(err)
})

// Promise.all()  - Instead of calling .then() .then() again and again
// let Promise1 = Promise.resolve("Hello");
// let Promise2 = 10;
// let Promise3 = new Promise(function(resolve, reject) {setTimeout(resolve , 2000 , "Goodbye")});

// Promise.all([Promise1, Promise2, Promise3]).then(val => {console.log(val)})