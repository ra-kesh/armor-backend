import faker from "faker";

faker.seed(123);

const jacketArray = [
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

const helmetArray = [
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-scalpel-blue-1_1800x1800.jpg?v=1618563004",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Hummer-Melkor-fl.-yellow2_1800x1800.jpg?v=1615177132",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-Thunder3-Turbine-Fl1_1800x1800.jpg?v=1612327367",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-Thunder3-SV-Effect-Fl-Yellow-Gloss-Helmets-1_1800x1800.jpg?v=1618651799",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-Hummer-Shark-2_1800x1800.jpg?v=1615441013",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Lycan-matt-02_1_1800x1800.jpg?v=1615203156",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Braaap-1_1800x1800.jpg?v=1609917430",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Piston-1_1800x1800.jpg?v=1611135168",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Nahesha-Gloss-Fluor-Green-1_1800x1800.jpg?v=1579872927",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/REVENGE-2-SOLID-A11-GLOSS-BLACK-1_1800x1800.jpg?v=1578382956",
];

const gloveArray = [
  "https://cdn.shopify.com/s/files/1/1045/6728/products/SCIMITAR-Street-Short-Cuff-Gloves-_Black_1_1800x1800.jpg?v=1573820503",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/ASPIDA-Ares-Full-Gauntlet-Leather-Gloves-1_1800x1800.jpg?v=1574074893",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Centaur-1_1800x1800.jpg?v=1573991442",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Macna-Assault-Black-1_1800x1800.jpg?v=1615547299",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MACNA-OCTAR-LADIES-BLACK-1_1_1800x1800.jpg?v=1607579592",
];

const shoeArray = [
  "https://cdn.shopify.com/s/files/1/1045/6728/products/1_1800x1800.jpg?v=1608028441",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/ADVENTURE-BLACK-1_1800x1800.jpg?v=1580710833",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Ryo-Onex-Sports-Riding-Boots-1_1800x1800.jpg?v=1573048869",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Voyage-1_1_1800x1800.jpg?v=1602839641",
];

export const brandNameArray = ["RYNOX", "MUNRO", "SCIMITAR", "MACNA", "ASPIDA"];

const nameArray = ["ADVENTURE-BLACK-1", "Ryo-Onex", "Voyage-1", "Braaap-1"];

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

export const products = [...Array(4)].map((item) => ({
  name: faker.random.arrayElement(nameArray),
  image: faker.random.arrayElement(shoeArray),
  brand: faker.random.arrayElement(brandNameArray),
  description: faker.random.arrayElement(descriptionArray),
  price: faker.random.arrayElement(priceArray),
  fastDelivery: faker.datatype.boolean(),
  inStock: faker.datatype.boolean(),
  rating: faker.random.arrayElement(ratingArray),
  quantity: 1,
  category: "shoes",
  discount: faker.random.arrayElement(discountArray),
}));
