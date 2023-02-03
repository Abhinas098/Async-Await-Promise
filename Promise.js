const posts = [
    { title: 'post one', body: 'This is post one', createAt: new Date().getTime() },
    { title: 'post two', body: 'This is body two', createAt: new Date().getTime() }]

let intervalId = 0;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {

        let output = ""
        for (let i = 0; i < posts.length; i++) {
            output += `<li> ${posts[i].title} -Created - ${Math.round((new Date().getTime() - posts[i].createAt) / 1000)} seconds ago`
        }
        document.body.innerHTML = output;

    }, 1000)

}
function createPost(POST) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push({ ...POST, createAt: new Date().getTime() }) //update newdate with spread operator
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject('Error: Something went wrong')
                // console.log('error')
            }
        }, 2000)
    })
}

function create4thPost(POST) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            posts.push({ ...POST, createAt: new Date().getTime() })
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject('Error: Something went wrong')
            }
            // callback()
        }, 3000)
    })

}

// console.log(() => createPost())
// console.log(createPost())

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length > 0) {
                let lastElement = posts.pop()
                resolve(lastElement)
            }
            else {
                reject('Error:Array is Empty!')
            }
        }, 2000)
    })
}

getPosts()
createPost({ title: 'post three', body: 'This is post three' })
    .then(() => {
        getPosts()
        create4thPost({ title: 'post four', body: 'This is post four' }).then(() => {
            getPosts()
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {
                    getPosts()
                    deletePost().then(() => {
                    })
                    getPosts()
                    deletePost().then(() => {
                    }).catch((e) => {
                        console.log(e)
                    })
                }).catch((e) => {
                    console.log(e)
                })
            }).catch((e) => {
                console.log(e)
            })
        }).catch((e) => {
            console.log(e)
        })
    }).catch((e) => {
        console.log(e)
    })

// PromiseAll

// const promise1 = Promise.resolve('dsckj')
// const Promise2 = 10;
// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'GoodByy')
// })

// Promise.all([promise1, Promise2, Promise3])
//     .then(((values) => console.log(values)))

console.log('Before Creating',new Date().getTime())
const user = {
    username: 'likun',
    lastActivityTime: '2-feb-2023'
    
}

function UpdateLastUserActivity() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime)
        },1000)
    })
}

function userUpdatePost(){
    Promise.all([create4thPost,UpdateLastUserActivity()])
    .then(([create4thPost,UpdateLastUserActivity])=>{

        console.log('After creating User last ActivityTime',UpdateLastUserActivity)
    })
}
userUpdatePost()






