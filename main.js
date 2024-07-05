
// Створення мар
let people = new Map();

people.set('Іван', 19);
people.set('Олександр', 20);
people.set('Ольга', 32);
people.set('Каріна', 25);

// Функція, яка повертає середній вік
function getAverageAge(map) {
    let totalAge = 0;
    let count = 0;

    map.forEach((age) => {
        totalAge += age;
        count++;
    });

    return totalAge / count;
}

console.log(getAverageAge(people));

// Оновлення віку людини
people.set('Каріна', 32);

// Видалення однієї людини
people.delete('Іван');

console.log(people);


// Створення set
let books = new Set();


// Функція, яка додає назву книги до множини та перевіряє, чи вже вона існує.
function addBook(set, title) {
    if (set.has(title)) {
        console.log(`Книга '${title}' вже існує.`);
    } else {
        set.add(title);
        console.log(`Книга '${title}' додана.`);
    }
}

addBook(books, "Майстер і Маргарита");
addBook(books, "Опівнічні діти");
addBook(books, "Майстер і Маргарита");


//  Код для відображення всіх назв книг у множині в алфавітному порядку
function displayBooks(set) {
    let sortedBooks = Array.from(set).sort();
    console.log("Книги в алфавітному порядку:");
    sortedBooks.forEach(book => console.log(book));
}

// Додавання кількох книг
books.add("Гаррі Поттер і келих вогню");
books.add("1984");
books.add("Маленький принц");
books.add("Великий Гетсбі");

// Відображення в алфавітному порядку
displayBooks(books);


// Створення функції memoize
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

// Нерекурсивна функція factorial(n), яка повертає факторіал числа n
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const memoizedFactorial = memoize(factorial);

console.time("Memoized Factorial 10");
console.log(memoizedFactorial(10)); 
console.timeEnd("Memoized Factorial 10");

console.time("Memoized Factorial 20");
console.log(memoizedFactorial(20)); 
console.timeEnd("Memoized Factorial 20");

console.time("Memoized Factorial 10 (cached)");
console.log(memoizedFactorial(10)); 
console.timeEnd("Memoized Factorial 10 (cached)");

console.time("Non-memoized Factorial 20");
console.log(factorial(20)); 
console.timeEnd("Non-memoized Factorial 20");


