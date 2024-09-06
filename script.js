let mydiv = document.querySelector('.post-header')
// let r = new XMLHttpRequest();
// r.onload = () => {
//     if (r.readyState == 4 && r.status == 200) {
//         let products = JSON.parse(r.responseText)
//         console.log(products)
//         products = products.data

//         product ? mydiv.innerHTML += `
//        <div class='card'>
//        <img src='${products.avatar}'>
//        <h3> ${products.first_name}  ${products.last_name} </h3>
//        <span>${products.email}<span>
//        </div>
//        `: <h1>loading..</h1>

//     }
// }
// r.open('GET', 'https://reqres.in/api/users/1', true)
// r.send()


//==========
{/* <div class='card'>
<img src='${data.data.avatar}'>
 <h3> ${data.data.first_name}  ${data.data.last_name} </h3>
 <span>${data.data.email}<span>
 </div> */}

 fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((data) => {
        const randomUser = data.data[Math.floor(Math.random() * data.data.length)];
        

        mydiv.innerHTML += `
            <div class="profilePost" id="users">
                <img src='${randomUser.avatar}'>
            </div>
            <div class="BigText">
                <p>${randomUser.first_name} <br> 99hrs ago</p>
            </div>
        `;
    })
    .catch((error) => console.error('Error fetching user data:', error));





// let mydiv=document.querySelector('#users')
// let r=new XMLHttpRequest();
// r.onload=()=>{
//     if(r.readyState==4 && r.status==200){
//         products=JSON.parse(r.responseText)
//     products.data.map((p)=>{
//         mydiv.innerHTML+=`
//         <div class='card'>
//         <img src='${p.avatar}'>
//         <h3> ${p.first_name}   ${p.last_name} </h3>
//         <span>${p.email}<span>
//         </div>
//         `

//     })}
// }
//     r.open('GET','https://reqres.in/api/users?page=1',true)
// r.send()
// Function to fetch and display a random post
function fetchRandomPost() {
    
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            
            const randomIndex = Math.floor(Math.random() * data.posts.length);
            const post = data.posts[randomIndex];
            
            
         
            document.getElementById('postBody').innerText = post.body;
        })
        .catch(error => console.error('Error fetching the post:', error));
}


window.onload = fetchRandomPost;