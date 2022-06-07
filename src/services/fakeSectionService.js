export const sections = [
  { _id: 'Mc-ms_001', name: 'Beef' },
  { _id: 'Mc-ms_002', name: 'Chicken' },
  { _id: 'Mc-ms_003', name: 'Fish' },
  { _id: 'Mc-ms_004', name: 'Sides' },
  { _id: 'Mc-ms_005', name: 'Beverages' },
  { _id: 'Mc-ms_006', name: 'Happy Meal' },
  { _id: 'Mc-ms_007', name: 'Desserts' },
];

export function getSections() {
  return sections.filter((g) => g);
}
