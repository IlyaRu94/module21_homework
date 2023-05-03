//Задание 1
const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const student = xmlDOM.querySelectorAll("student");

function std (student){
  yyy=[];
for (let item of student){
  first=item.querySelector("first").textContent;
  second=item.querySelector("second").textContent;
  age=item.querySelector("age").textContent;
  prof=item.querySelector("prof").textContent;
  lang = item.querySelector("name").getAttribute('lang');
  res = {
    name: first +' '+ second, age: age, prof: prof, lang: lang
  }
  yyy.push(res);
}
  return yyy;
}

const result = {
    list: std(student)
}
  console.log(result);