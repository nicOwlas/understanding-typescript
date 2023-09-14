"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_only"] = 1] = "Read_only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
const person = {
    name: "Nicolas",
    age: 38,
    hobbies: ["karate", "judo"],
    role: Role.Author,
};
if (person.role === Role.Author) {
    console.log("Person is an author");
}
else {
    console.log("Person is not an author");
}
