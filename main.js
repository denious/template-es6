import * as faker from "faker/locale/en_US";

export const options = {
  stages: [{ iterations: 1 }],
};

export default function main() {
  console.log(faker.name.firstName());
}
