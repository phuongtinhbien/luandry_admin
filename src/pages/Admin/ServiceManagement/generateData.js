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
        service: faker.commerce.productAdjective(),
        service_image: faker.image.business(1278,728),
        service_desc: faker.lorem.sentences(3),
        branch : faker.company.companyName(),
        status: faker.random.boolean()?"Active":"Inactive"
      };
    }
    data.push(row);
  }
  return data;
}