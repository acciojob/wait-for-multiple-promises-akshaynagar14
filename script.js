function generateRandomTime() {
  return Math.floor(Math.random() * 3) + 1; // returns a random number between 1 and 3
}

function createPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(generateRandomTime());
    }, generateRandomTime() * 1000);
  });
}

const promises = [createPromise(), createPromise(), createPromise()];

Promise.all(promises).then(results => {
  const table = document.getElementById('myTable');
  table.innerHTML = ''; // clear the loading text

  // add the rows to the table
  const row1 = table.insertRow();
  const cell11 = row1.insertCell();
  const cell12 = row1.insertCell();
  cell11.innerText = 'Promise 1';
  cell12.innerText = `${results[0]}`;

  const row2 = table.insertRow();
  const cell21 = row2.insertCell();
  const cell22 = row2.insertCell();
  cell21.innerText = 'Promise 2';
  cell22.innerText = `${results[1]}`;

  const row3 = table.insertRow();
  const cell31 = row3.insertCell();
  const cell32 = row3.insertCell();
  cell31.innerText = 'Promise 3';
  cell32.innerText = `${results[2]}`;

  const row4 = table.insertRow();
  const cell41 = row4.insertCell();
  const cell42 = row4.insertCell();
  cell41.innerText = 'Total';
  cell42.innerText = `${(results[0] + results[1] + results[2]).toFixed(3)}`;
});

})