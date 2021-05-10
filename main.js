import { check, sleep } from "k6";
import http from "k6/http";
import { randomItem } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
import * as faker from "faker/locale/en_US";

export const options = {
  stages: [{ iterations: 1 }],
};

export default function main() {
  console.log(faker.name.firstName());
}
