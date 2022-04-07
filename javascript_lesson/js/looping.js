const persons = [
	{
		id: 1,
		name: "Hunter Matthews",
		age: 20,
		gender: "male",
	},
	{
		id: 2,
		name: "bobo",
		age: 26,
		gender: "male",
	},
	{
		id: 3,
		name: "rose",
		age: 30,
		gender: "female",
	},
	{
		id: 4,
		name: "lana",
		age: 20,
		gender: "female",
	},
	{
		id: 5,
		name: "mery",
		age: 26,
		gender: "female",
	},
	{
		id: 6,
		name: "nono",
		age: 32,
		gender: "female",
	},
];
//map,filter,reduce () functional programming
let names = persons.map((p) => {
	return p.name;
});
console.log(names);
let age = persons.map((p) => {
	return p.age;
});
console.log(age);
// for (var val in persons) {
// 	console.log(val);
// 	console.log(persons[val]);
// 	console.log(persons[val].name);
// }
// for (res of persons) {
// 	console.log(res);
// 	console.log(res.gender);
// 	console.log(res.age);
// }
// persons.forEach((val) => {
// 	console.log(val);
// 	console.log(val.name);
// 	console.log(val.age);
// 	console.log(val.gender);
// });
