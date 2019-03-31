import { CountUp } from "./countUp";

$(document).ready(function () {
  let people = new CountUp('#counter', 123);
  people.start();
});