// Async Await
console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie = async () => {
    const PromiseToWifeBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('ticket') }, 3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(` Popcorn`))
    const getButter= new Promise((resolve, reject) => resolve(`Butter`))
    const getColdDrinks = new Promise((resolve,reject) => resolve(`Colddrinks`))
    let ticket = await PromiseToWifeBringTicket

    console.log(`wife:I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife:No i am hungry');

    let Popcorn = await getPopcorn

    console.log(`husband: i got some ${Popcorn}`);
    console.log('husband: Now we should go in');
    console.log('wife:No i need Butter in my PopCorn');

    let Butter = await getButter
    console.log(`husband: Ok i got ${Butter}`);
    console.log(`husband: Anything else darling`);
    console.log(`wife: i need Coldrinks`)

    let Colddrinks = await getColdDrinks
    console.log(`husband: i got ${Colddrinks}`);
    console.log(`wife: Let's Go!`)

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows ticket')
console.log('person5: shows ticket')




// Async/Await
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

    }, 500)
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
            }
        }, 1000)
    })
}

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
        }, 1000)
    })
}
// Async Await 
async function init(){
    getPosts()
    await createPost({ title: 'post three', body: 'This is post three' })
    await deletePost()
    await deletePost()
    deletePost()
}
init()


