type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

const existingPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobby: "Reading",
};

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobby: "Reading",
};

const person2: Person = existingPerson;

const person3: Person = { ...existingPerson };
