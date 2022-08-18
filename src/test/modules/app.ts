import {createCatName, type Cat, type Dog} from "@/test/modules/animal";
const name = createCatName()
export type Animals = Cat | Dog;
