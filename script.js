
const loadAllPhones = async(status,brandName)=>{
    // console.log('wow 3 second gone');
    document.getElementById('spinner').classList.add('hidden');

    // fetching api
    const url =`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:'iphone'}`;
    const res = await fetch(url);
    const data = await res.json();
     

    // searchInput
console.log(brandName)
    //condition for showAll
    if(status){
      displayAllPhones(data.data)
    }
    else{
        displayAllPhones(data.data.slice(0,6))
    }

}

//display all phones
const displayAllPhones =(phones)=>{
   const phoneContainer= document.getElementById('phone-container')

          phones.forEach(phone => {
            //object_destructuring
            const {brand,image,slug,phone_name}= phone
        const div =document.createElement('div')
        div.innerHTML=`
          <div class="card  bg-base-100  shadow-xl">
            <figure>
                <img
                src=${image}
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="text-2xl font-semibold">Model : ${phone_name}</h2>
                <p class="text-base font-medium">Slug : ${slug}</p>
                <p class="bg-slate-100 px-2 py-1 w-36 rounded-md text-sm font-medium">Brand : ${brand}</p>
                <div class="card-actions justify-start mt-4">
                <button class="btn btn-warning capitalize text-white">show details</button>
                </div>
            </div>
            </div>
        `
        phoneContainer.appendChild(div)
     });
}

const handleShowAll=()=>{
    loadAllPhones(true)
}


//handle search
const handleSearch = ()=>{
    document.getElementById('spinner').classList.remove('hidden');
    // console.log('hi hello');
    const inputValue= document.getElementById('searchInput').value
    setTimeout(() => loadAllPhones(false,inputValue), 3000);
    
}

//
// const searchInput=()=>{
//     const inputValue= document.getElementById('searchInput').value

//     console.log(inputValue)
// }

loadAllPhones();