//Start API
const api_cats_url = 'https://cat-fact.herokuapp.com/facts/'

async function getCat() {
    console.log('API (Cat Facks has started)');
    
    const response = await fetch(api_cats_url);
//                convert data to json
    const data = await response.json();
//                get data set x in array
    console.log(data)
//                generate random _id from 0 up to 230:
    var _id = Math.floor((Math.random() * 231));

//                display text on screen
    cat = data.all[_id].text;
    document.getElementById('cat').textContent = cat;

}            
//            call function
getCat();