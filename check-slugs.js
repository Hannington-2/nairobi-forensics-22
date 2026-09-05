import { ServicesNavList } from './src/data/Navigationdata/ServiceList.js';
import servicesData from './src/data/services/ServiceData.js';

const navSlugs = [];
ServicesNavList.forEach((category) => category.children.forEach((service) => navSlugs.push(service.slug)));

const dataSlugs = Object.keys(servicesData);

console.log('=== SLUG COMPARISON ===');
navSlugs.forEach(slug => {
  const found = dataSlugs.includes(slug);
  console.log(slug + ':', found ? '✅ MATCHES' : '❌ NOT FOUND');
});

console.log('\nTotal in Navigation:', navSlugs.length);
console.log('Total in ServiceData:', dataSlugs.length);
