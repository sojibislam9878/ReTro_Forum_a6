const SearcePost = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)

    const data =await res.json();
    // console.log(data.posts);
    const DiscussContainer = document.getElementById("DiscussContainer")
    DiscussContainer.textContent =""
    data.posts.forEach(items => {
        // console.log(items);
        const div = document.createElement("div")
        div.classList = `flex flex-col md:flex-row gap-6 p-10 bg-[#797DFC1A] rounded-2xl mb-4 `
        div.innerHTML = `
        <div class = "posts">
        <div class="indicator">
          <span class="indicator-item badge badge-accent"></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            <img src="${items.image}" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div class="border-b-2 border-dashed">
          <div class=" md:flex gap-5">
            <p class="font-medium opacity-80">#${items.category}</p>
            <p class="font-medium opacity-80">Author:${items.author.name}</p>
          </div>
          <h6 class="font-bold text-xl mt-3">${items.title}</h6>
          <p class="text-lg opacity-60 mt-4 mb-5">${items.description}</p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-between items-center mt-5"
        >
          <div class="flex md:gap-14 gap-4 items-center">
            <div class="">
              <p class="flex justify-center items-center gap-3">
                <span class="material-symbols-outlined"> comment </span
                >${items.comment_count} min
              </p>
            </div>
            <div>
              <p class="flex justify-center items-center gap-3">
                <span class="material-symbols-outlined">
                  visibility </span
                >${items.view_count} min
              </p>
            </div>
            <div>
              <p class="flex justify-center items-center gap-3">
                <span class="material-symbols-outlined"> schedule </span
                >${items.posted_time} min
              </p>
            </div>
          </div>
          <button  onclick="readMore()" class="bg-green-400 rounded-full p-3 btn text-white rbtn">
          <span class="material-symbols-outlined"> drafts </span>
        </button>
        </div>
        `
        DiscussContainer.appendChild(div)
    });
    handleSpinner(false);

}

SearcePost("comedy");



const latestPosts = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");

    const data = await res.json();
    const cardContainer = document.getElementById("cardContainer")

    data.forEach(items => {
        const div = document.createElement("div")
        const date = items.author.posted_date;
        div.classList = `card bg-base-100 shadow-xl`
        div.innerHTML = `
        <figure>
        <img
          src="${items.cover_image}"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h3 class="flex gap-3 items-center">
          <span class="material-symbols-outlined"> calendar_month </span>
          ${items.author.posted_date || "No publish date"}
        </h3>
        <h1 class="text-lg font-extrabold mt-4">${items.title}</h1>
        <p class="opacity-60 font-semibold">${items.description}</p>
        <div class="flex gap-6 items-center">
          <div class="">
            <img
              class="object-cover w-20 border rounded-full"
              src="${items.profile_image}"
              alt=""
            />
          </div>
          <div class="">
            <h1 class="font-bold text-lg">${items.author.name}</h1>
            <p class="opacity-60">${items.author.designation || "Unknown" }</p>
          </div>
        </div>
      </div>
        `
        cardContainer.appendChild(div)
    });
    
};

latestPosts()


// const readMore = () =>{
//       timtim()
    
// }


// function timtim() {
//     const rbtn = document.getElementsByClassName("rbtn")
//     for (const rtn of rbtn) {
//         rtn.addEventListener("click", (e)=>{
//         const h1 = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
        
//         console.log(h1);
//     })
//     }
    
// }

// * handleSearch

const handleSearch =()=>{
    const search = document.getElementById("search")
    const searchText = search.value;
    SearcePost(searchText);
    handleSpinner(true);
}

// * spinner handle

const handleSpinner = (isloading) => {
    const spinner = document.getElementById("spinner");
    if (isloading) {
      spinner.classList.remove("hidden");
    } else {
      spinner.classList.add("hidden");
    }
  };