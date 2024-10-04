
const loadAllPhones = ()=>{
    console.log('wow 3 second gone');
    document.getElementById('spinner').classList.add('hidden')
}


//handle search
const handleSearch = ()=>{
    document.getElementById('spinner').classList.remove('hidden');
    console.log('hi hello');
    setTimeout(() => loadAllPhones(), 3000);
}