import nav from './src/data/Navigationdata/ServiceList.js';
import data from './src/data/services/ServiceData.js';

const navSlugs = [];
nav.ServicesNavList.forEach(c => c.children.forEach(s => navSlugs.push(s.slug)));

const dataSlugs = Object.keys(data.default || data);

console.log('=== SLUG COMPARISON ===');
navSlugs.forEach(slug => {
  const found = dataSlugs.includes(slug);
  console.log(slug + ':', found ? '✅ MATCHES' : '❌ NOT FOUND');
});

console.log('\nTotal in Navigation:', navSlugs.length);
console.log('Total in ServiceData:', dataSlugs.length);
