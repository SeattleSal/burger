# burger APP
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
* [Description](#description)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [Links](#links)
* [License](#license)

## Description
Burger is an application that is a burger logger using MySQL, Node, Express, Handlebars and a custom made ORM. It utilizes MVC design pattern. Bootstrap was used as a CSS framework.

## Dependencies
The dependencies are [express](http://expressjs.com/) for the web framework, [express-handlebars](https://www.npmjs.com/package/express-handlebars) for the views and [mysql](https://www.npmjs.com/package/mysql) for the database. There is a `package.json` included, the following commands should be run to install dependencies:

```bash
npm i
```

## Usage
Use the links below to use the application live. If you prefer to run the application from your computer, you can use the following command after installing the dependencies:
```bash
node server.js
```

The application displays a home page with a form at the bottom to enter a new hamburger. Hamburgers are listed on the left with a 'Devour It!' button, once the button is clicked the hamburger is marked as devoured and will display on the right. Devoured hamburgers can be deleted by pressing the 'Delete' button. If a user enters a new burger that is blank, a modal message will appear.

See Screenshots:<br>
![Home Page](\assets\img\screenshot1.JPG)
![Error Modal](\assets\img\screenshot1.JPG)

## Links
* Github Link: https://github.com/SeattleSal/burger
* Heroku: https://seattlesal-burgers.herokuapp.com/ 

## License

MIT License

Copyright (c) [2021] [Sally Perez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.