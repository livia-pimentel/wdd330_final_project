const baseURL = "https://wdd330-backend.vercel.app/"
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}
export default class ExternalServices {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;

  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.id === id);
  }
  //   async getData(category) {
  //   const response = await fetch(baseURL + `products/search/${category}`);
  //   const data = await convertToJson(response);
  //   return data.Result;
  // }
  // async findProductById(id) {
  //   const response = await fetch(baseURL + `product/${id}`);
  //   const data = await convertToJson(response);
  //   return data.Result;
  // }
  async checkout(payload){
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
  async loginRequest(user){
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "appication/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(baseURL + "login", options).then(
      convertToJson
    );
    return response.accessToken
  }
  async getOrders(token){
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(baseURL + "orders", options).then(
      convertToJson
    );
    return response
  }
}
