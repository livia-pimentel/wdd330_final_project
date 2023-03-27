import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const productId = getParam("product");
const dataSource = new ExternalServices("dishes");
const dataSource1 = new ExternalServices("sandwiches");
const dataSource2 = new ExternalServices("desserts");
const dataSource3 = new ExternalServices("burgers");
const dataSource4 = new ExternalServices("drinks");
const dataSource5 = new ExternalServices("pizzas");
// const dataSource6 = new ExternalServices("menu")


const product = new ProductDetails(productId, dataSource);
const product1 = new ProductDetails(productId, dataSource1);
const product2 = new ProductDetails(productId, dataSource2);
const product3 = new ProductDetails(productId, dataSource3);
const product4 = new ProductDetails(productId, dataSource4);
const product5 = new ProductDetails(productId, dataSource5);
// const menu = new ProductDetails(productId, dataSource6);


product.init();
product1.init();
product2.init();
product3.init();
product4.init();
product5.init();
// menu.init();
