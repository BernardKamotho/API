const userSection = document.querySelector(".user-section");

const results = 200;

const displayUsers = (users) => {
    users.forEach((user) => {
        const card = `
      <div class="user-card">
        <img
          src="${user?.picture?.large}"
          alt=""
        />
        <h3>${user?.name?.first} ${user?.name?.last}</h3>
      </div>
`;

        userSection.innerHTML += card;
    });
};

fetch(`https://randomuser.me/api/?results=${results}`)
    .then((res) => res.json())
    .then((data) => {
        displayUsers(data?.results);
    })
    .catch((err) => console.log("Some error occured:" + err));

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers[2])

// numbers.forEach(number => console.log(number))

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers.at(i))
// }

// for (number of numbers) {
//     console.log(number)
// }

// numbers.map(number =>
//     console.log(number))

// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }

// const sayHello = (name) => {

//     console.log(`Hello ${name}`)

// }

// const sayHello2 = name => console.log(`hello ${name}`)

// sayHello("Kamotho")
// sayHello2("Wangui")
