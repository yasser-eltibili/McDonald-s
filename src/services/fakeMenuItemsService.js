import * as sectionApi from './fakeSectionService';

const menuItems = [
  {
    _id: 'Mc-mi_000000001',
    title: 'McRoyale',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'McRoyal.png',
    price: 70,
  },
  {
    _id: 'Mc-mi_000000002',
    title: 'Big Mac',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Bigmac.png',
    price: 55,
  },
  {
    _id: 'Mc-mi_000000003',
    title: 'Big Tasty',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Big-tasty-Beef.png',
    price: 75,
  },
  {
    _id: 'Mc-mi_000000004',
    title: 'Double Big Tasty',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Double-Big-Tasty.png',
    price: 99,
  },
  {
    _id: 'Mc-mi_000000005',
    title: 'Double McRoyale',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Double-McRoyal.png',
    price: 95,
  },
  {
    _id: 'Mc-mi_000000006',
    title: 'Little Tasty',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Little-tasty.png',
    price: 50,
  },
  {
    _id: 'Mc-mi_000000007',
    title: 'Cheeseburger',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'CheeseBurger.png',
    price: 15,
  },
  {
    _id: 'Mc-mi_000000008',
    title: 'Double Cheeseburger',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Double-CheeseBurger.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000009',
    title: 'Cheeseburger Deluxe',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Cheese-Burger-Delux.png',
    price: 20,
  },
  {
    _id: 'Mc-mi_000000010',
    title: 'McDouble',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'McDouble.png',
    price: 60,
  },
  {
    _id: 'Mc-mi_000000011',
    title: 'Beefburger',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Beefburger.png',
    price: 13,
  },
  {
    _id: 'Mc-mi_000000012',
    title: 'Double Beefburger',
    section: { _id: 'Mc-ms_001', name: 'Beef' },
    imageSrc: 'Double-Beefburger.png',
    price: 20,
  },
  {
    _id: 'Mc-mi_000000013',
    title: 'McChicken',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'McChicken.png',
    price: 60,
  },
  {
    _id: 'Mc-mi_000000014',
    title: 'Double McChicken',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Double-McChicken.png',
    price: 85,
  },
  {
    _id: 'Mc-mi_000000015',
    title: 'Big Tasty Chicken',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Big-tasty-Chicken.png',
    price: 80,
  },
  {
    _id: 'Mc-mi_000000016',
    title: 'Chicken Mac',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-Mac.png',
    price: 50,
  },
  {
    _id: 'Mc-mi_000000017',
    title: 'Grand Chicken Premier',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Grand-Chicken-Regular.png',
    price: 72,
  },
  {
    _id: 'Mc-mi_000000018',
    title: 'Grand Chicken Spicy',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Grand-Chicken-Spicy.png',
    price: 74,
  },
  {
    _id: 'Mc-mi_000000019',
    title: 'Chicken Fillet',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-Fillet.png',
    price: 55,
  },
  {
    _id: 'Mc-mi_000000020',
    title: 'Spicy Chicken Fillet',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-Fillet-Spicy.png',
    price: 60,
  },
  {
    _id: 'Mc-mi_000000021',
    title: 'McNuggets 4 Pieces',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'McNuggets-4psc.png',
    price: 40,
  },
  {
    _id: 'Mc-mi_000000022',
    title: 'McNuggets 6 Pieces',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'McNuggets-6psc.png',
    price: 50,
  },
  {
    _id: 'Mc-mi_000000023',
    title: 'McNuggets 9 Pieces',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'McNuggets-9psc.png',
    price: 65,
  },
  {
    _id: 'Mc-mi_000000024',
    title: 'Chicken MACDO',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-MACDO.png',
    price: 15,
  },
  {
    _id: 'Mc-mi_000000025',
    title: 'Spicy Chicken MACDO',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-MACDO-Spicy.png',
    price: 18,
  },
  {
    _id: 'Mc-mi_000000026',
    title: 'Chicken MACDO Deluxe',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-MACDO-Deluxe.png',
    price: 20,
  },
  {
    _id: 'Mc-mi_000000027',
    title: 'Spicy Chicken MACDO Deluxe',
    section: { _id: 'Mc-ms_002', name: 'Chicken' },
    imageSrc: 'Chicken-MACDO-Deluxe-Spicy.png',
    price: 23,
  },
  {
    _id: 'Mc-mi_000000028',
    title: 'Filet-O-Fish',
    section: { _id: 'Mc-ms_003', name: 'Fish' },
    imageSrc: 'Filet-O-Fish.png',
    price: 40,
  },
  {
    _id: 'Mc-mi_000000029',
    title: 'Double Filet-O-Fish',
    section: { _id: 'Mc-ms_003', name: 'Fish' },
    imageSrc: 'Double-FOF.png',
    price: 60,
  },
  {
    _id: 'Mc-mi_000000030',
    title: 'McFries',
    section: { _id: 'Mc-ms_004', name: 'Sides' },
    imageSrc: 'Large-Frise.png',
    price: 30,
  },
  {
    _id: 'Mc-mi_000000031',
    title: 'Chocolate Milkshake',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Milkshake-Choco.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000032',
    title: 'Strawberry Milkshake',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Milkshake-Straw.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000033',
    title: 'Vanilla Milkshake',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Milkshake-Vanilla.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000034',
    title: 'Coca-Cola',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Coke.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000035',
    title: 'Sprite',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Sprite.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000036',
    title: 'Fanta',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Fanta.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000037',
    title: 'Fanta Green Apple',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Fanta-Apple.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000038',
    title: 'Water',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Water.png',
    price: 10,
  },
  {
    _id: 'Mc-mi_000000039',
    title: 'American Coffee',
    section: { _id: 'Mc-ms_005', name: 'Beverages' },
    imageSrc: 'Ame-R-700x474.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000040',
    title: 'Happy Meal Chicken MACDO',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-Chicken-Macdo.png',
    price: 30,
  },
  {
    _id: 'Mc-mi_000000041',
    title: 'Happy Meal Cheeseburger',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-D-Chesseburger.png',
    price: 35,
  },
  {
    _id: 'Mc-mi_000000042',
    title: 'Happy Meal McNuggets 4 Pieces',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-6Nuggets.png',
    price: 35,
  },
  {
    _id: 'Mc-mi_000000043',
    title: 'Happy Meal McNuggets 6 Pieces',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-6Nuggets.png',
    price: 45,
  },
  {
    _id: 'Mc-mi_000000044',
    title: 'Happy Meal Double Cheeseburger',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-D-Chesseburger.png',
    price: 50,
  },
  {
    _id: 'Mc-mi_000000045',
    title: 'Happy Meal Beefburger',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-D-Beefburger.png',
    price: 25,
  },
  {
    _id: 'Mc-mi_000000046',
    title: 'Happy Meal Double Beefburger',
    section: { _id: 'Mc-ms_006', name: 'Happy Meal' },
    imageSrc: 'HM-D-Beefburger.png',
    price: 40,
  },
  {
    _id: 'Mc-mi_000000047',
    title: 'Caramel Sundae',
    section: { _id: 'Mc-ms_007', name: 'Desserts' },
    imageSrc: 'Caramel.png',
    price: 20,
  },
  {
    _id: 'Mc-mi_000000048',
    title: 'Chocolate Fudge Sundae',
    section: { _id: 'Mc-ms_007', name: 'Desserts' },
    imageSrc: 'Chocolate.png',
    price: 20,
  },
  {
    _id: 'Mc-mi_000000049',
    title: 'Strawberry Sundae',
    section: { _id: 'Mc-ms_007', name: 'Desserts' },
    imageSrc: 'Straw.png',
    price: 20,
  },
  {
    _id: 'Mc-mi_000000050',
    title: 'Ice Cream Cone',
    section: { _id: 'Mc-ms_007', name: 'Desserts' },
    imageSrc: 'Cone.png',
    price: 10,
  },
];

export function getmenuItems() {
  return menuItems;
}

export function getmenuItem(id) {
  return menuItems.find((m) => m._id === id);
}

export function savemenuItem(menuItem) {
  let menuItemInDb = menuItems.find((m) => m._id === menuItem._id) || {};
  menuItemInDb.title = menuItem.title;
  menuItemInDb.section = sectionApi.sections.find(
    (g) => g._id === menuItem.sectionId
  );
  menuItemInDb.numberInStock = menuItem.numberInStock;
  menuItemInDb.dailyRentalRate = menuItem.dailyRentalRate;

  if (!menuItemInDb._id) {
    menuItemInDb._id = Date.now().toString();
    menuItems.push(menuItemInDb);
  }

  return menuItemInDb;
}

export function deletemenuItem(id) {
  let menuItemInDb = menuItems.find((m) => m._id === id);
  menuItems.splice(menuItems.indexOf(menuItemInDb), 1);
  return menuItemInDb;
}
