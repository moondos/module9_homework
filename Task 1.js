const xml = `<list>
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
              </list>`,
	parser = new DOMParser(),
	xmlDOM = parser.parseFromString(xml,"text/xml"),
  list = xmlDOM.querySelector('list'),
  lang = xmlDOM.querySelectorAll('name'),
  langOne = lang[0].getAttribute('lang'),
  langTwo = lang[1].getAttribute('lang'),
  studentName = list.querySelectorAll('first'),
  studentSurname = list.querySelectorAll('second'),
  studentAge = list.querySelectorAll('age'),
  studentProf = list.querySelectorAll('prof');
  
  
const result = {
	list: [
  {
  	name: studentName[0].textContent + ' ' + studentSurname[0].textContent,
    age: studentAge[0].textContent, 
    prof: studentProf[0].textContent, 
   	lang:langOne
  },
  {
  	name: studentName[1].textContent + ' ' + studentSurname[1].textContent,
    age: studentAge[1].textContent, 
    prof: studentProf[1].textContent, 
    lang:langTwo
  }
]};

console.log(result)
  



