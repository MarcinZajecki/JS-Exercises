{
    console.log('10.1.Rozgrzewka');
    {
        console.log('Ćwiczenie 1.1');
        {
            const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
            const newNames = [];
            for (const singlNameId in names) {
                const singlNameLastLetter = names[singlNameId].charAt((names[singlNameId].length - 1));
                if (singlNameLastLetter === "a") newNames.push(names[singlNameId]);
            };
            console.log('Wynik zadania to:', newNames);
        }
        // 
        // 
        console.log('Ćwiczenie 1.2');
        {
            const employees = {
                john: {
                    name: 'John Doe',
                    salary: 3000
                },
                amanda: {
                    name: 'Amanda Doe',
                    salary: 4000
                },
            }
            let employeesNames = [];
            let employeesSalaries = [];
            for (const singlEmployee in employees) {
                const singlName = employees[singlEmployee].name.split(" ", 1);
                const singlSalary = employees[singlEmployee].salary;
                employeesNames.push(singlName);
                employeesSalaries.push(singlSalary);
            }
            console.log('names: ', employeesNames, 'salaries: ', employeesSalaries);
        }
        // 
        // 
        console.log('Ćwiczenie 1.3');
        {
            const salaries = [2000, 3000, 1500, 6000, 3000];
            function sum(total, number) {
                return total + number;
            }
            console.log('sum: ', salaries.reduce(sum));
            console.log('max: ', Math.max(...salaries));
            console.log('min: ', Math.min(...salaries));
        }
        //
        // 
        console.log('Ćwiczenie 1.4');
        {
            const persons = {
                john: 2000,
                amanda: 3000,
                thomas: 1500,
                james: 6000,
                claire: 3000
            };
            let sum = 0;
            let max = 0;
            for (const singlPerson in persons) {
                sum += persons[singlPerson];
                if (persons[singlPerson] > max) max = persons[singlPerson];
            }
            const min = Math.min(...Object.values(persons));
            console.log('sum: ', sum);
            console.log('max: ', max);
            console.log('min: ', min);
        }
        // 
        // 
        console.log('Ćwiczenie 1.5');
        {
            const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];
            const uniqueTags = {};
            for (const singlTag of tags) {
                if (!uniqueTags[singlTag]) uniqueTags[singlTag] = { appearance: 1 };
                else uniqueTags[singlTag].appearance++;
            };
            console.log(uniqueTags);
        }
    }
    {
        console.log('Ćwiczenie 2.4');
        const employees = [
            { name: 'Amanda Doe', salary: 3000 },
            { name: 'John Doe', salary: 4000 },
            { name: 'Claire Downson', salary: 2000 },
            { name: 'Freddie Clarkson', salary: 6000 },
            { name: 'Thomas Delaney', salary: 8200 }
        ];
        function filterEmployees(allEmployees, minSalary, maxSalary) {
            const filteredEmpl = [];
            for (const singlEmployee of allEmployees) {
                if (singlEmployee.salary > minSalary && singlEmployee.salary < maxSalary) {
                    filteredEmpl.push(singlEmployee);
                }
            }
            console.log(filteredEmpl);
        };
        filterEmployees(employees, 2000, 8200);
    }
    {
        console.log('Ćwiczenie 2.5');
        const obj = {
            firstName: 'John',
            lastName: 'Doe'
        }
        const details = function (arg) {
            for (const singlEl in obj) {
                console.log(singlEl + ': ' + obj[singlEl]);
            }
        }
        details(obj);
    }
    {
        console.log('Ćwiczenie 2.6');
        const forEach = function (arr, callback) {
            for (const singlEl of arr) {
                callback(singlEl);
            }
        };
        const arrEx = ['John', 'Tom', 'Marry'];
        forEach(arrEx, function (item) { console.log(item); });
    }
    {
        console.log('Ćwiczenie 2.7');
        const formatName = function (name) {
            const givenName = name.split(" ");
            const firstName = givenName[0];
            const lastName = givenName[1];
            const convertedFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
            const convertedLastName = lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase();
            console.log(convertedFirstName + " " + convertedLastName);
        }
        formatName('amanda DOe');
    }
    {
        console.log('Ćwiczenie 2.8');
        const getEvensInRange = function (checkStart, checkStop) {
            const evens = [];
            for (let i = 0; i <= checkStop; i++) {
                if (checkStart + i % 2 == 0) evens.push(checkStart + i);
            }
            console.log(evens);
        }
        getEvensInRange(0, 5);
    }
    {
        console.log('Ćwiczenie 2.9');
        const filter = function (arr, call) {
            let newArr = [];
            for (const arrId of arr) {
                if (call(arrId) == true) newArr.push(arrId);
            }
            console.log(newArr);
        }
        filter([5, 6, 7], function (item) { return item % 2 === 0 });
    }
}
