//задание 3
let name = localStorage.getItem('name');
let time = localStorage.getItem('time');
if(!name){
const hi = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', "введите Ваше имя");
localStorage.setItem("name", hi);
localStorage.setItem("time",new Date());
}else{
  alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${time.toLocaleString("ru-RU")}`);
  console.log(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${time.toLocaleString("ru-RU")}`);
  localStorage.setItem("time",new Date());
}