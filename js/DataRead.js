let FruitsName = ["りんご"];
let FruitsWeight = [300];
let FruitsException = ["りんごです。"];
const json = `{
  "employee": {
    "name": "Roy Mustang",
    "age": 35,
    "favoriteColor": ["Blue", "Black", "Purple"],
    "siblings": {
      "Liza": 20, "Emily": 12
      }
    }
  }`;

var data = JSON.parse(json);

console.log(data.employee.name);
console.log(data.employee.favoriteColor[2]);
console.log(data.employee.siblings);
console.log(data.employee.siblings.Liza);