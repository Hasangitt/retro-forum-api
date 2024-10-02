// load discuss card data from api

const loadDiscussData = async (categoryName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const data = await res.json();
    const posts = data.posts;
    showDisplay(posts);
}

// display the posts data
const showDisplay = (posts) => {
    console.log(posts);
    const getPostContainer = document.getElementById('discuss-container');
    getPostContainer.textContent = " "
    console.log(getPostContainer);
   
    

    // looping each post in a container
    posts.forEach(post => {
        console.log(post);
        const createPostCard = document.createElement('div');
        createPostCard.innerHTML = `<div class="w-[770px] h-[270px] gap-5 rounded-lg bg-[#797DFC1A] p-8">
                <div class="flex gap-5">
                    <div class="w-[72px] h-[72px]">
                        <img class="rounded-md" src="${post.image}" alt="">
                    </div>
                    <div class="space-y-4">
                        <div class="flex gap-5">
                            <div><p id="category">${post.category}</p></div>
                            <div><p id="author-name">${post.author.name}</p></div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-semibold mb-2">${post.title}</h3>
                            <p class="text-gray-500">${post.description}</p>
                        </div>
                       <div class="flex">
                            <div class="flex gap-5 w-[600px]">
                                <p><i class="fa fa-comments mr-2" aria-hidden="true"></i><span id="Comment">${post.comment_count}</span></p>
                                <p><i class="fa fa-user mr-2" aria-hidden="true"></i><span id="user-watch">${post.view_count}</span></p>
                                <p><i class="fa fa-clock mr-2" aria-hidden="true"></i><span id="duration">${post.posted_time}</span></p>
                            </div>
                            <div>
                                <button onclick ="getIdData('${post.id}')" id="message-btn"><i class="fa fa-message" aria-hidden="true"></i></button>
                            </div>
                       </div>
                    </div>
                </div>
            </div>`
    
        getPostContainer.appendChild(createPostCard) ;
    });
};

// get search field text

const searchFieldLoad = () => {
    const searchFieldElemnt = document.getElementById('input-field');
    const searchText = searchFieldElemnt.value;
    console.log(searchText);
    loadDiscussData(searchText);
}


// // // create a post id function for showing it another section

const getIdData = async (id) => {
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const post = data.posts.find((post) => post.id == id);
    showContainer(post);
}

// // // create a show container
const showContainer = (post) => {
    console.log(post);
    const getShowContainer = document.getElementById('show-container');
    console.log(getShowContainer);
        const createShowContainer = document.createElement('div');
        createShowContainer.innerHTML = `<div class="flex justify-between bg-white rounded-lg p-5 mt-2 mb-3">
         <p class="w-[260px]">${post.category}</p>
        <p><i class="fa fa-user mr-2" aria-hidden="true"></i><span id="user-view">${post.view_count}</span></p>
         </div>`
    getShowContainer.appendChild(createShowContainer);
}
       


   





