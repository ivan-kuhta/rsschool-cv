# Ivan-Eduard Kukhta
*23 years old*

---
## Contacts
*Phone:* +38(067)-268-81-24
*E-mail:* ivan.kuxta.gd@gmail.com

---
## Education ##
**Lviv College of Printing** Lviv, Ukraine. 2013-2016
**Ukrainian Academy of Printing** Lviv, Ukraine. 2017-2021

---
## Goals
1. Improve your skills in web technologies.
1. Learning new technologies.
1. Get frontend developer skills.
1. Get experience as a frontend developer 
1. Work as a frontend developer.

---
## Skills
### Programming languages
2. **HTML** - I am free to use tags from HTML5 syntax.
2. **CSS** - use CSS3.
2. **JavaScript** - Basic knowledge of JavaScript, use of EC6 syntax and knowledge of JavaScript at the framework level
2. **PHP** - Basic knowledge of PHP and knowledge of PHP at the level of the Laravel framework
### Preprocessors
3. **SASS** - syntax and compilation css files.
3. **Less** - syntax and compilation css files.
### Frameworks
4. **Laravel** - creation of migrations, models, controllers, views, work with routing and storage.
4. **React** - creation of components, work with routing, JSX syntax.
4. **Angular** - creation of components, work with routing and services.
4. **Bootstrap** - connection and use framework.
### Database
5. **MySQL** - creating a database and tables, also using a database.
5. **IndexedDB** - creating and using a database.

---
## Simple Code
```
//This function is to calculate the total time required for all customers to place an order. As a variable customers - array of customers is the value of the time it takes to place an order, and as a variable n is the number of cash registers.

function queueTime(customers, n) {
  let arrayTills = new Array(n).fill(0);
  customers.forEach(item => {
    arrayTills[0] += item;
    arrayTills = arrayTills.sort((a,b) => a - b);
  });
  return arrayTills.sort((a,b) => b - a)[0];
}
```

---
## Level of English
A2 - Pre-Intermediate



