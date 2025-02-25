import { faker } from '@faker-js/faker';

export const orderData = {
  getValidOrder: () => ({
    id: faker.number.int(100000),
    petId: faker.number.int(100000),
    quantity: faker.number.int(100),
    shipDate: faker.date.recent(),
    status: 'placed',
    complete: true,
  }),

  getInvalidOrder: () => ({
    id: 'invalid_id',
    petId: faker.number.int(100000),
    quantity: faker.number.int(100),
    shipDate: faker.date.recent(),
    status: 'placed',
    complete: false,
  })
};
