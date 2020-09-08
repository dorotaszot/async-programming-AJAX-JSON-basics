// Get Customer 
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const output = `
  <ul>
    <li>ID: ${customer.id}</li>
    <li>Name: ${customer.name}</li>
    <li>Surname: ${customer.surname}</li>
    <li>Company: ${customer.company}</li>
    <li>Age: ${customer.age}</li>
  </ul>
  `;

      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

// Get Customers
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(function (customer) {

        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Surname: ${customer.surname}</li>
          <li>Company: ${customer.company}</li>
          <li>Age: ${customer.age}</li>
        </ul>
        `;
        console.log(output);
      })

      document.getElementById('customers').innerHTML = output;

    }

  }
  xhr.send();
}