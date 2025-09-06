import * as _ from "lodash";
import { calculateTax } from "./tax";

let tax = calculateTax(10_000);
console.log(tax);
_.clone([1, 2, 3]);
