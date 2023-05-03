//Задание 4
let randomNum;

function numberPromice () {
 const number = new Promise ((resolve, reject)=>{
   setTimeout(() => {
     randomNumber();
   	if (randomNum % 2 == 0) {
		resolve(`Завершено успешно. Сгенерированное число - ${randomNum}`);
	} else {
		reject(`Завершено с ошибкой. Сгенерированное число - ${randomNum}`);
	}
    }, 3000);   
 });

number
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
    console.log(error);
})
}

function randomNumber() {
	randomNum = Math.ceil(Math.random() * 100);
}

numberPromice ();