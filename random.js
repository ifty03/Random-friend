fetch("https://randomuser.me/api/?results=1")
.then(res=>res.json())
.then(data=>displayrandom(data.results))
const displayrandom = (friends)=>{
const randomContainer =document.getElementById("random-container");
for( const friend of friends){
    const div = document.createElement("div");
    div.classList.add("stldiv");
    div.innerHTML=`
    <img class="image" src="${friend.picture.large}" alt=""><br/>
    <div>
    <span class="tt">Name:</span> ${friend.name.title} ${friend.name.first} ${friend.name.last}<br/>
    <span class="tt">Gender:</span> ${friend.gender}<br/>
    <span class="tt">Phone:</span> ${friend.phone}<br/>
    <span class="tt">Email:</span> ${friend.email}<br/>
    <span class="tt">Age:</span> ${friend.dob.age}<br/>
    <span class="tt">Country:</span> ${friend.location.country}<br/>
    <span class="tt">City:</span> ${friend.location.city}
    </div>
    <button class="btn" onClick="window.location.reload();">Change</button>
    `

    console.log(friend)
    randomContainer.appendChild(div)
}
}