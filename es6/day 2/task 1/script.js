function getUsers() {
    usersURL = "https://jsonplaceholder.typicode.com/users"
    return fetch(usersURL).then((response) => {
        return response.json()
    }).catch((err) => {
        console.log(err)
    })

}

function showUserCards(users) {
    let container = document.getElementsByClassName("container")[0]

    users.forEach((value) => {
        let newUser = document.createElement("div")
        newUser.classList.add("card-container")
        newUser.id = value.id;
        let h3 = document.createElement("h3")
        h3.innerText = value.name
        newUser.appendChild(h3);
        let iconDiv = document.createElement("div")
        iconDiv.classList.add("icon")
        let icon = document.createElement("i")
        icon.classList.add("fa", "fa-user", "fa-3x", "circle-icon")
        iconDiv.appendChild(icon)
        newUser.appendChild(iconDiv)
        container.appendChild(newUser)

    })

}


async function getPosts(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    let posts;
    if (response.ok) {
        posts = await response.json()

    } else {
        console.log(response)
    }
    return posts
}
function addUserEvents() {
    let cards = document.getElementsByClassName("card-container");
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i]
        console.log(card)
        card.addEventListener("click", async () => {
            let posts = await getPosts(card.id)
            addPostsToDOM(posts)
            let oldCard = document.getElementsByClassName("clicked")[0]
            if (oldCard) {
                oldCard.classList.remove("clicked")
            }
            card.classList.add("clicked")


        });
    }

}

function addPostsToDOM(posts) {
    let container = document.getElementsByClassName("posts-container")[0];
    container.innerHTML = ""
    console.log(container)

    posts.forEach((post) => {
        let newPost = document.createElement("div");
        newPost.classList.add("post");
        newPost.id = post.id;
        let newTitle = document.createElement("h2");
        newTitle.innerText = post.title;
        newPost.appendChild(newTitle)
        newBody = document.createElement("p");
        newBody.innerText = post.body;
        newPost.appendChild(newBody);
        container.appendChild(newPost)
    })
}


getUsers().then(async (data) => {
    console.log(data);

    showUserCards(data);

    addUserEvents();
    let post = document.getElementById(data[0].id)
    let posts = await getPosts(data[0].id)


    addPostsToDOM(posts)

})
