enum Role {
  Admin,
  Read_only,
  Author,
}

const person = {
  name: "Nicolas",
  age: 38,
  hobbies: ["karate", "judo"],
  role: Role.Author,
};

if (person.role === Role.Author) {
  console.log("Person is an author");
} else {
  console.log("Person is not an author");
}
