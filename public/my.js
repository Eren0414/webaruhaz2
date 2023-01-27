console.log("frontend: heló");
const url = "http://localhost:3000/products";

async function getProducts(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

async function postProduct(){
    let body = {
            name: "Á9",
            quantity: 66,
            price: 6500,
            type: "fémáru"
    }

    let response = await fetch(url, {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: body,
        Cache: 'default'
      })
}

getProducts();
