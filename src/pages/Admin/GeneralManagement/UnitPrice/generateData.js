import faker from 'faker';

export default (limit = 5, arrayData = false) => {
  const data = [];
  for (let i = 1; i <= limit; i++) {
    let row = null;
    if (arrayData) {
      row = [
        i,
        faker.company.findName(),
        faker.random.boolean(),
        faker.lorem.text(),
        "<button class='btn btn-info'>Action</button>"
      ];
    } else {
      row = {
        sn: i,
        id: (i+1000),
        product: faker.commerce.productName(),
        store: faker.company.companyName(),
        serviceType: faker.commerce.productAdjective(),
        unit : faker.random.boolean()?"items":"KG" ,
        applyDate : "20/07/2018",
        price: faker.commerce.price,
        maxPrice: faker.commerce.price(20000,100000,'dsdds','VND'),
        status: faker.random.boolean()?"Active":"Inactive"
      };
    }
    data.push(row);
  }
  return data;
}