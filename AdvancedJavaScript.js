const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
} 

const muliply = (a,b) => a*b;

const curriedfunction = (a)=>(b)=>a*b;
curriedfunction(2)(4)

const compose = (f,g) => (a) => f(g(a));
const sum = (num)/ => num+1;

compose(sum, sum)(5);

const array = [1, 51, 5]
const newArray = array.forEach((num) => {
	num*2;
})

const newArray = array.map((num) => {
	return num+num;
})

const newArray = array.map(num => num +num)

const filterArray = array.filter(num => num>5);

const reduceArray = array.reduce((accumulator, num) => accumulator + num, 2);

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const newReduceArr = array.filter()

class Player{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi, I am ${this.name}, & I'm a ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name, type){
		super(name, type)
	}
	Play(){
		console.log(`weeeeeeee I'm a ${this.type}`);
	}
}

const Wizard1 = new Wizard("John", "Healer");



