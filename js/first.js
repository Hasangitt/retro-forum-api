// load discuss card data from api

const loadDiscussData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
   showDisplay(posts);
}

// display the posts data
const showDisplay = (posts) => {
    console.log(posts);
    const getPostContainer = document.getElementById('discuss-container');
    console.log(getPostContainer);
    
    posts.forEach(post => {
        console.log(post);
        const createPostCard = document.createElement('div');
        createPostCard.innerHTML = `<div class="w-[770px] h-[270px] gap-5 rounded-lg bg-[#797DFC1A] p-8">
                <div class="flex gap-5">
                    <div class="w-[72px] h-[72px]">
                        <img class="rounded-md" src="https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg" alt="">
                    </div>
                    <div class="space-y-4">
                        <div class="flex gap-5">
                            <div><p id="category"># Music</p></div>
                            <div><p id="author-name">Author: Hasan Ali</p></div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-semibold">10 Kids Unaware of Their Halloween Costume</h3>
                            <p class="text-gray-500">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
                        </div>
                       <div class="flex justify-between">
                            <div class="flex gap-5">
                                <p><i class="fa fa-comments" aria-hidden="true"></i><span id="Comment">Comment</span></p>
                                <p><i class="fa fa-user" aria-hidden="true"></i><span id="user-watch">watch</span></p>
                                <p><i class="fa fa-clock" aria-hidden="true"></i><span id="duration">Time</span></p>
                            </div>
                            <div>
                                <button id="message-btn"><i class="fa fa-message" aria-hidden="true"></i></button>
                            </div>
                       </div>
                    </div>
                </div>
            </div>`
    
        getPostContainer.appendChild(createPostCard) ;
    });

};



loadDiscussData();