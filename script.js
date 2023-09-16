const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((person) => person.profession === "developer");
  console.log(developers);
}
printDeveloper();

// ************************************************************************************************************

// 2. Add Data
// 2. Add Data
function addData() {
    // creating an empty object newData to store worker data
    let newData = {};
    //prompt message asking the input name
    newData.name = prompt("Enter name:");
    //prompt message asking the input age
    newData.age = parseInt(prompt("Enter age:"));
    //prompt message asking the input profession
    newData.profession = prompt("Enter profession:");
    // adding data of new worker
    data.push(newData);
    // *printing added data
    console.log(newData);
    }
// ************************************************************************************************************

// 3. Remove Admins
function removeAdmin() {
    // const filteredData = data.filter(person => person.profession !== "admin");

  const nonAdmins = data.filter((person) => person.profession !== "admin");
  console.log(" after admin removed :", nonAdmins );
// console.log("Admins removed:", filteredData);

}
removeAdmin();

// ************************************************************************************************************

// 4. Concatenated Array
function concatenateArray() {
  const dummyArray = [
    { name: "alice", age: 30, profession: "designer" },
    { name: "bob", age: 35, profession: "manager" },
  ];
  const concatenatedArray = [...data, ...dummyArray];
  console.log(concatenatedArray);
}
concatenateArray();




// ************************************************************************************************************

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log(`Average Age: ${average}`);
}
averageAge();

// ************************************************************************************************************

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);
  console.log(`Is there anyone above 25? ${isAbove25}`);
}
checkAgeAbove25();

// ************************************************************************************************************

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map((person) => person.profession))];
  console.log(professions);
}
uniqueProfessions();

// ************************************************************************************************************

// 8. Sort by Age
function sortByAge() {
  const sortedData = [...data].sort((a, b) => a.age - b.age);
  console.log(sortedData);
}
sortByAge();

// ************************************************************************************************************

// 9. Update Profession
function updateJohnsProfession() {
  const updatedData = data.map((person) => {
    if (person.name === "john") {
      return { ...person, profession: "manager" };
    }
    return person;
  });
  console.log(updatedData);
}
updateJohnsProfession();

// ************************************************************************************************************

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(
    (person) => person.profession === "developer"
  ).length;
  const adminCount = data.filter(
    (person) => person.profession === "admin"
  ).length;
  console.log(
    `Total Developers: ${developerCount}, Total Admins: ${adminCount}`
  );
}
getTotalProfessions();

// ************************************************************************************************************
