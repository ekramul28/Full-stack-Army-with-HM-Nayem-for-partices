const students = [
  {
    id: "89239ij39uu493nxq",
    name: "md Ekramul",
    email: "mdekramul168@.com",
  },
  {
    id: "89ue939w93292",
    name: "md yasin",
    email: "mdyasin168@.com",
  },
  {
    id: "83suidu8eww838392",
    name: "md shown",
    email: "mdshown168@.com",
  },
];

/**
 * benefites of array
 * 1.Easily  traverse
 * 2.filter
 * 3.delete
 * 4.update,o(n)
 * 5.crate anew one [push->o(1),unshift->o(n)]
 */

//crate a new student

students.push({
  id: "233324efsdrf324",
  name: "foisal",
  email: "foisal23@gmail.com",
});

//update

const idToUpdate = "83suidu8eww838392";
const updatedData = {
  name: "md mamun",
  email: "mamun@gmail.com",
};

const updatedIndex = students.findIndex((item) => item.id === idToUpdate);

students[updatedIndex] = {
  ...students[updatedIndex],
  ...updatedData,
};

// updatedObject.name = updatedData.name;
// updatedObject.email = updatedData.email;
// console.log(updatedObject);

//now we crated a object and all those think again do

const student2 = {
  "89239ij39uu493nxq": {
    id: "89239ij39uu493nxq",
    name: "md Ekramul",
    email: "mdekramul168@.com",
  },
  "89ue939w93292": {
    id: "89ue939w93292",
    name: "md yasin",
    email: "mdyasin168@.com",
  },
  "83suidu8eww838392": {
    id: "83suidu8eww838392",
    name: "md shown",
    email: "mdshown168@.com",
  },
};

const std = {
  id: "344354ksdnsj2kwkd",
  name: "hassan mamun",
  email: "hassan@gmail.com",
};

student2[std.id] = std;
// console.log((student2[std.id] = std));

const idToObjectUpdate = "344354ksdnsj2kwkd";
const updateObject = {
  name: "Eklast",
  email: "okok@12gmail.com",
};

student2[idToObjectUpdate] = {
  ...student2[idToObjectUpdate],
  ...updateObject,
};

delete student2[idToObjectUpdate];

console.log(Object.keys(student2));
Object.values(student2).forEach((std) => {
  console.log(std.name);
});

// console.log((student2[idToObjectUpdate] = updateObject));

// console.log(student2.);
