let arr = [];
let obj = {}; //key-> value
let person = {
	name: "bobo",
	age: 20,
	marry: false,
	hobby: ["game", "running", "swimming", "sleeping"],
	address: {
		city: "ygn",
		township: "latha",
		street: "19 street",
	},
	greeting() {
		console.log(this);
		return `my name is ${this.name} and age is ${this.age}`;
	},
};
// object destructure
// const { name, age, marry, address, hobby, greeting } = person;
// console.log(name);
// console.log(address.city);
// console.log(hobby[2]);
// console.log(greeting());

// person.phone = "091234567";
// console.log(person.phone);
// console.log(person.greeting());
// console.log(person);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.address.street);
// console.log(person.hobby);
// console.log(person.hobby[3]);
// console.log(person["address"]);
// console.log(person["address"]["city"]);

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
// let toJson = JSON.stringify(persons);
// console.log(toJson);
// let toObj = JSON.parse(toJson);
// console.log(toObj);
// console.log(persons);
// console.log(persons[0]);
// console.log(persons[0].age);
// console.log(persons[0].gender);
// console.log(persons[0].name);

// // Math Object
// console.log(Math);
// console.log(Math.random()); //random number
// console.log(Math.random() * 3 + 1); //random number start 1
// console.log(Math.round(2.5)); // 3 closet number
// console.log(Math.ceil(2.2)); // 3 top number
// console.log(Math.floor(2.9)); // 2 bottom number
// console.log(Math.abs(-2.9)); // 2 positive number
// console.log(Math.abs(-2.1)); // 2 positive number
// console.log(Math.trunc(2.1)); // 2 drop decimal point
// console.log(Math.trunc(-2.1)); // 2 drop decimal point
// console.log(Math.pow(2, 3)); // power
// console.log(Math.sqrt(4, 4)); // square root
// console.log(Math.max(4, 4, 5, 6, 78, 90, 33, 4, 5, 100, 100.1)); // max value
// console.log(
// 	Math.min(0, -2, -9, -9.2, -9.9, 4, 4, 5, 6, 78, 90, 33, 4, 5, 100, 100.1)
// ); // min value

const dice = {
	sides: 6,
	roll(count) {
		i = 0;
		let a = [];
		let b = [];
		while (i < count) {
			//dice start 1
			let res = Math.floor(this.sides * Math.random()) + 1;
			if (res <= 3) {
				a.push(res);
			} else {
				b.push(res);
			}
			i++;
		}

		console.log(`a win ${a.length}`);
		console.log(`b win ${b.length}`);
		if (a.length === b.length) {
			console.log("game is draw");
		} else {
			let w = a.length > b.length ? "a winner" : "b winner";
			console.log(w);
		}
	},
};
dice.roll(5);
