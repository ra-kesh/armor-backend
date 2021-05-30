import faker from "faker";

faker.seed(123);

const jacketArray = [
  "https://cdn.shopify.com/s/files/1/1045/6728/products/SCIMITARMetroJacket-blackAndFlGrn-1.1_1800x1800.jpg?v=1591594448",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/SCIMITAR-Razor-_Black-And-Fl-Green_1.1_1800x1800.jpg?v=1610527959",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Viper-green-1_1800x1800.jpg?v=1573821643",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Macna-Event-Riding-Jacket-_White_1_1800x1800.jpg?v=1572872104",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Rewind--white-1_1800x1800.jpg?v=1572873402",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/AEROCON-1_1800x1800.jpg?v=1607343053",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Macna-Equator-Riding-Jacket-_Grey_1_1800x1800.jpg?v=1572871637",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Scimitar-Razor-Jacket_write-and-Fl-Green-And-Blue_-1.1_28ec657b-6f1c-4fcd-816e-244d6e745d5c_1800x1800.jpg?v=1610528342",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/ORCANO-1_1800x1800.jpg?v=1607344009",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/ORCANO-Red-1_1800x1800.jpg?v=1614164035",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Hurracage-2_1800x1800.jpg?v=1572871083",
];

const jacketNameArray = [
  "Rewind--white-1",
  "SCIMITAR MetroJacket",
  "SCIMITAR-Razor",
  "Viper-green-1",
  "Macna-Event-Riding-Jacket",
  "AEROCON-1",
  "Macna-Equator",
  "Scimitar-Razor",
  "ORCANO-1",
  "Hurracage-2",
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

const shoeNameArray = ["ADVENTURE-BLACK-1", "Ryo-Onex", "Voyage-1", "Braaap-1"];

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

export const products = [...Array(10)].map((item) => ({
  name: faker.random.arrayElement(jacketNameArray),
  image: faker.random.arrayElement(jacketArray),
  brand: faker.random.arrayElement(brandNameArray),
  description: faker.random.arrayElement(descriptionArray),
  price: faker.random.arrayElement(priceArray),
  fastDelivery: faker.datatype.boolean(),
  inStock: faker.datatype.boolean(),
  rating: faker.random.arrayElement(ratingArray),
  quantity: 1,
  category: "jackets",
  discount: faker.random.arrayElement(discountArray),
}));
