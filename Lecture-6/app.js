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

console.log(students);
