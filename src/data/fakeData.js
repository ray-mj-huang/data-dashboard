import { faker } from '@faker-js/faker';

const infoData = [...Array(30)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  job: faker.name.jobTitle(),
  imgId: faker.image.avatar(),
  mood: faker.datatype.number({ max: 5, min: 1 }),
}));

const fakeData = {
  infoData,
};

export default fakeData;
