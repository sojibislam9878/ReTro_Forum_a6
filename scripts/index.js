const SearcePost = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts?category=coding")

    const data =await res.json();
    console.log(data.posts);
    const DiscussContainer = document.getElementById("DiscussContainer")
    data.posts.forEach(items => {
        console.log(items);
        const div = document.createElement("div")
        div.classList = `flex flex-col md:flex-row gap-6 p-10 bg-[#797DFC1A] rounded-2xl mb-4`
        div.innerHTML = `
        <div>
        <!-- image -->
        <div class="indicator">
          <span class="indicator-item badge badge-accent"></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            <img src="assets/images/logo.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div class="border-b-2 border-dashed">
          <div class="flex gap-5">
            <p class="font-medium opacity-80">#Music</p>
            <p class="font-medium opacity-80">Author:Awlad hossain</p>
          </div>
          <h1 class="font-bold text-xl mt-3">
            10 Kids Unaware of Their Halloween Costume
          </h1>
          <p class="text-lg opacity-60 mt-4 mb-5">
            It's one thing to subject yourself to ha Halloween costume
            mishap because, hey that's your prerogative
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-between items-center mt-5"
        >
          <div class="flex md:gap-16 gap-4">
            <div>
              <p class="flex justify-center items-center gap-3">
                <span class="material-symbols-outlined"> comment </span
                >560
              </p>
            </div>
            <div>
              <p class="flex justify-center items-center gap-3">
                <span class="material-symbols-outlined">
                  visibility </span
                >560
              </p>
            </div>
            <div>
              <p class="flex justify-center items-center gap-3">
                <span class="material-symbols-outlined"> schedule </span
                >560
              </p>
            </div>
          </div>
          <button class="bg-green-400 rounded-full p-3 btn text-white">
            <span class="material-symbols-outlined"> drafts </span>
          </button>
        </div>
        `
        DiscussContainer.appendChild(div)
    })

}

SearcePost();



const latestPosts = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");

    const data = await res.json();
    const cardContainer = document.getElementById("cardContainer")

    data.forEach(items => {
        const div = document.createElement("div")
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
          ${items.author.posted_date}
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
            <p class="opacity-60">${items.author.designation}</p>
          </div>
        </div>
      </div>
        `
        cardContainer.appendChild(div)
    });
};

latestPosts()
