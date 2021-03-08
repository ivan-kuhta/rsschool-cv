# Ivan-Eduard Kukhta
*23 years old*

---
## Contacts
*Phone:* +38(067)-268-81-24\
*E-mail:* ivan.kuxta.gd@gmail.com

---
## Education ##
**Lviv College of Printing** Lviv, Ukraine. 2013-2016\
**Ukrainian Academy of Printing** Lviv, Ukraine. 2017-2021

---
## Goals
1. Improve your skills in web technologies.
2. Learning new technologies.
3. Get frontend developer skills.
4. Get experience as a frontend developer 
5. Work as a frontend developer.

---
## Skills
### Programming languages
1. **HTML** - I am free to use tags from HTML5 syntax.
2. **CSS** - use CSS3.
3. **JavaScript** - Basic knowledge of JavaScript, use of EC6 syntax and knowledge of JavaScript at the framework level
4. **PHP** - Basic knowledge of PHP and knowledge of PHP at the level of the Laravel framework

### Preprocessors
1. **SASS** - syntax and compilation css files.
2. **Less** - syntax and compilation css files.

### Frameworks
1. **Laravel** - creation of migrations, models, controllers, views, work with routing and storage.
2. **React** - creation of components, work with routing, JSX syntax.
3. **Angular** - creation of components, work with routing and services.
4. **Bootstrap** - connection and use framework.

### Database
1. **MySQL** - creating a database and tables, also using a database.
2. **IndexedDB** - creating and using a database.

---
## Simple Code
This function is to calculate the total time required for all customers to place an order. As a variable customers - array of customers is the value of the time it takes to place an order, and as a variable n is the number of cash registers.
```
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

---
## Projects



