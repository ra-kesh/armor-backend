import faker from "faker";

faker.seed(123);

const imgArray = [
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Orange_1_376x.jpg?v=1611827730",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Blue_1_376x.jpg?v=1611827799",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Red_1_376x.jpg?v=1611828010",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Tornado_Pro_3_Jacket_Black_1_376x.jpg?v=1611828010",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Storm_Off_White-01_376x.jpg?v=1610443950",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_AirGT_3_Jacket_Black-01_376x.jpg?v=1607064220",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_AirGT_3_Jacket_Dark_Grey-Red-01_376x.jpg?v=1607064220",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_AirGT_3_Jacket_Grey-Hi-viz_Green-01_376x.jpg?v=1607064063",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/RynoxUrbanJacket_EarthBrown-01_376x.jpg?v=1606896792",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/RynoxUrbanJacket_StoneGrey-01_376x.jpg?v=1606896792",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/RynoxUrbanJacket_BattleGreen-01_376x.jpg?v=1606884954",
  "https://cdn.shopify.com/s/files/1/1947/9551/products/Rynox_Storm_Grey-01_376x.jpg?v=1610447203",
];

export const brandNameArray = ["RYNOX", "MUNRO", "SCIMITAR", "MACNA", "ASPIDA"];

const nameArray = [
  "STEALTH EVO 3 JACKET",
  "TORNADO PRO 3 JACKET",
  "STORM EVO JACKET",
  "URBAN JACKET",
  "AIR GT 3 JACKET",
];

const descriptionArray = [
  "dsiorjvioj vihrevhreuvggvy gyvgdiuvuidvhiudfhvi udfhuvugygvyergvyerugerw8uvg87vg",
  "dsiorjviojvudfhviudfhuvu gygvyergvyerug erw8uhvw8 uhv7we7vweg8vgwe8vewggw87vg87vg",
  "dsiorjviojvih revhreuvggvygyvgdiuv uidvhiudhvw8uhv7we7vw eg8vgwe8vewggw87vg87vg",
  "gvygyvgdiuvuidv hiudfhviudf huvugygvyergvy erugerw8uhvw8uhv7we7vweg8vg we8vewggw87vg87vg",
  "dsiorjviojv ihrevhreuvggvygyv gdiuvuidvhiudfhviudfh uvugygvyergvyeruge rw8uhvg87vg",
];

const priceArray = [6000, 8000, 7000, 9000, 5000];

const discountArray = [10, 20, 30];

const ratingArray = [1, 2, 3, 4, 5];

const countArray = [2, 20, 50, 6, 10, 15];

const categoryArray = ["jackets", "helmets", "shoes", "gloves"];

export const products = [...Array(12)].map((item) => ({
  name: faker.random.arrayElement(nameArray),
  image: faker.random.arrayElement(imgArray),
  brand: faker.random.arrayElement(brandNameArray),
  description: faker.random.arrayElement(descriptionArray),
  price: faker.random.arrayElement(priceArray),
  fastDelivery: faker.datatype.boolean(),
  inStock: faker.datatype.boolean(),
  rating: faker.random.arrayElement(ratingArray),
  quantity: 1,
  category: faker.random.arrayElement(categoryArray),
  discount: faker.random.arrayElement(discountArray),
}));
