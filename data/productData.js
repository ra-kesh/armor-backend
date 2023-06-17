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

const helmetArray = [
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-scalpel-blue-1_1800x1800.jpg?v=1618563004",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Hummer-Melkor-fl.-yellow2_1800x1800.jpg?v=1615177132",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-Thunder3-Turbine-Fl1_1800x1800.jpg?v=1612327367",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-Thunder3-SV-Effect-Fl-Yellow-Gloss-Helmets-1_1800x1800.jpg?v=1618651799",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/MT-Hummer-Shark-2_1800x1800.jpg?v=1615441013",
  "https://cdn.shopify.com/s/files/1/1045/6728/products/Lycan-matt-02_1_1800x1800.jpg?v=1615203156",
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

const shoeNameArray = ["ADVENTURE-BLACK-1", "Ryo-Onex", "Voyage-1", "Braaap-1"];

const gloveNameArray = [
  "ADVENTURE-BLACK-1",
  "Ryo-Onex",
  "Voyage-1",
  "Viper-green-1",
  "Macna-Event-Riding-Jacket",
  "AEROCON-1",
  "Macna-Equator",
  "Scimitar-Razor",
];
const helmetNameArray = [
  "Ryo-Onex",
  "Voyage-1",
  "Braaap-1",
  "Viper-green-1",
  "Macna-Event-Riding-Jacket",
  "AEROCON-1",
  "Macna-Equator",
  "Scimitar-Razor",
  "ORCANO-1",
  "Hurracage-2",
];

const descriptionArray = [
  "Light, airy, and ready for all the fun under the summer sun. This jacket, with a soft mesh and Knox Level 1 flexiform armours around the shoulders and elbows, keeps you protected and comfortable on an adventure or a city commute alike.",

  "The new improved version of the all-weather, all-terrain CE certified riding jacket comes with a two-layer construction in addition to a separate rain-jacket that makes it the preferred accomplice in braving any weather condition. Equipped with D3O EVO PRO CE level 2 armour at shoulder and elbow which combines higher impact protection with lightness, flexibility and offers increased durability, this CE certified jacket already tested across some epic adventures around the world, is the perfect partner to find new ones.",

  "This CE Certified riding jacket represents the spirit of the brand in earnest. Classic, versatile, better with every outing, it is one of the most enduring riding jacket. Not only the entire jacket is CE certified, the armour at shoulder and elbow are Knox MICRO-LOCK CE Level 2 certified and are soft and comfortable to wear absorbing maximum energy on impact. The chest, arms, and back are crafted with a mix of airflow mesh & high-density polyester to help keep the jacket light yet highly-abrasion resistant. This riding jacket is also equipped with a removable thermal liner and a breathable-waterproof rain jacket that can be worn either as an inner or outer liner.",

  "This shorter length motorcycle jacket is packed with useful rider-specific features. The classic Belstaff design includes unique olive lining, two patch pockets on the chest and zipped lower pockets, waxed cotton outer fabric.",

  "This Jacket is a protective mesh jacket, purpose-built for riding in hot and humid weather. Its ventilated outer shell, sleek design and protective features also make it the ideal choice for the daily commute, or the weekend ride.",
];
const descriptionArrayGloves = [
  "The Heated Gloves are built for your chilly adventures to the mountains. These gloves provide heating options through a battery-operated mechanism, to help you fight frostbites and cold winds as per the temperature.",

  "The cragsman gloves are a combination of protection, style, and comfort. Its advanced leather construction with air mesh panels keeps the hands cool while riding. The gloves also feature longer cuffs, thus making them perfect for longer rides.",

  "The Blizzard aka jack frost gloves is rain-proof, extreme winter riding gloves that keep the grip solid and hands steady for long rides on higher altitudes. The warm micro polar fleece liner and waterproof membrane make them tough on the inside while keeping them stylish on the outside.",

  "Made with a combination of tough leather and flexible polyester, these gloves are the hybrid we created for a city rider. Ideal for touring, these are made of perforated leather that keeps the airflow intact. The Knox knuckle protectors offer safety and a special leather patch reinforces the rider’s grip",

  "Stout gloves are the ones that are durable, thick, and dependable. They come with a waterproof membrane and a warm lining, making them an all-weather all-terrain gear. The long cuffs cover beyond the wrist, keeping a larger surface area warm and protected. The high-grade leather construction and PVC knuckle protectors help protect your hands in all conditions.",
];
const descriptionArrayHelmet = [
  "This is designed keeping in mind your adventurous spirit. It’s built with high impact grade thermoplastic to give you superior protection while the lightweight material keeps you comfortable. This ISI certified helmet is perfect for every rider that loves to take the road less travelled.",

  "Made for the ones who love the thrill of experiencing new adventures, this ISI certified full-face helmet has a wide-vision sun visor perfect for sunset rides. Spend all your days off riding to the beach and stay protected with this Sundown helmet.",

  "Purpose-built with an understated design, this ISI certified modular helmet is built to accompany you on all your rides. The hard outer shell and high impact protection ensures superior protection while the easy flip up mechanism and lightweight design makes it an ideal choice for every kind of adventure. ",

  "A sporty ISI certified full-face helmet that is crafted to brave all your adventures. A ride into the woods or cruising the highway, stay comfortable and protected wherever the roads take you.",

  "Stay protected and comfortable as you prowl through the tracks in the wild.  Approved with ISI, ECE, and DOT certifications, this helmet ensures superior protection and safety for all your rides. The full-face design offers comfort and protection from the mud and dust without restricting your neck movement. Ideal for off-road and the open roads alike, the unique camo print will make you part of the landscape your chasing.",
];
const descriptionArrayShoe = [
  "Relax or ride, these shoes will always be by your side. made with full-grain leather with a padded collar to keep you safe on all your adventures.",

  "Sleek style meets the durability of the contrast poly ripstop fabric in these leather and polyester shoes that keep you safe on the road and give you a distinct look too.",

  "A unique blend of leather & canvas with Nubuck leather make sure that these shoes provide comfort while being a sure shot to stand out in a crowd.",

  "These full-grain leather sneakers are the perfect addition to your riding look. Comfortable on and off the machine, they make for a versatile pair and are a must-have for every explorer. Take them on every adventure and walk tough paths with ease",

  "Experience enhanced comfort and style on-the-go with these full-grain leather sneakers. With hand-stitched leather branding on the side and reflective piping at the back, these sneakers will make you stand out on or off the road.",
];

const priceArray = [6000, 8000, 7000, 9000, 5000];

const discountArray = [10, 20, 30];

const ratingArray = [1, 2, 3, 4, 5];

const jacketSizeArray = ["S", "M", "L", "XL", "XXL"];
const helmetSizeArray = ["M", "L", "XL"];

const shoeSizeArray = ["7", "8", "9", "10", "11"];

const countArray = [2, 20, 50, 6, 10, 15];

// export const products = [...Array(10)].map((item) => ({
//   name: faker.random.arrayElement(shoeNameArray),
//   image: faker.random.arrayElement(shoeArray),
//   brand: faker.random.arrayElement(brandNameArray),
//   description: faker.random.arrayElement(descriptionArrayShoe),
//   price: faker.random.arrayElement(priceArray),
//   fastDelivery: faker.datatype.boolean(),
//   inStock: faker.datatype.boolean(),
//   rating: faker.random.arrayElement(ratingArray),
//   quantities: faker.random.arrayElement(countArray),
//   category: "shoes",
//   discount: faker.random.arrayElement(discountArray),
//   sizes: shoeSizeArray,
// }));

// export const products = [...Array(10)].map((item) => ({
//   name: faker.random.arrayElement(gloveNameArray),
//   image: faker.random.arrayElement(gloveArray),
//   brand: faker.random.arrayElement(brandNameArray),
//   description: faker.random.arrayElement(descriptionArrayGloves),
//   price: faker.random.arrayElement(priceArray),
//   fastDelivery: faker.datatype.boolean(),
//   inStock: faker.datatype.boolean(),
//   rating: faker.random.arrayElement(ratingArray),
//   quantities: faker.random.arrayElement(countArray),
//   category: "gloves",
//   discount: faker.random.arrayElement(discountArray),
//   sizes: jacketSizeArray,
// }));

// export const products = [...Array(10)].map((item) => ({
//   name: faker.random.arrayElement(helmetNameArray),
//   image: faker.random.arrayElement(helmetArray),
//   brand: faker.random.arrayElement(brandNameArray),
//   description: faker.random.arrayElement(descriptionArrayHelmet),
//   price: faker.random.arrayElement(priceArray),
//   fastDelivery: faker.datatype.boolean(),
//   inStock: faker.datatype.boolean(),
//   rating: faker.random.arrayElement(ratingArray),
//   quantities: faker.random.arrayElement(countArray),
//   category: "helmets",
//   discount: faker.random.arrayElement(discountArray),
//   sizes: helmetSizeArray,
// }));

export const products = [...Array(10)].map((item) => ({
  name: faker.random.arrayElement(jacketNameArray),
  image: faker.random.arrayElement(jacketArray),
  brand: faker.random.arrayElement(brandNameArray),
  description: faker.random.arrayElement(descriptionArray),
  price: faker.random.arrayElement(priceArray),
  fastDelivery: faker.datatype.boolean(),
  inStock: faker.datatype.boolean(),
  rating: faker.random.arrayElement(ratingArray),
  quantities: faker.random.arrayElement(countArray),
  category: "jackets",
  discount: faker.random.arrayElement(discountArray),
  sizes: jacketSizeArray,
}));
