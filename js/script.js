// Fetch data using the  API/or db connection
fetch("")
  .then((response) => response.json())
  .then((data) => {
    //client information section with fetched data
    console.log(data);
    const clientInfoDiv = document.getElementById("client-info");

    data.forEach((client) => {
      const clientDiv = document.createElement("tbody");
      clientDiv.innerHTML = `

            <tr>
              <th scope="row">${client.name}</th>
              <td>${client.rep}</td>
              <td>${client.contract}</td>
              <td>@ ${client.amount}</td>
            </tr>
                    
                `;
      clientInfoDiv.appendChild(clientDiv);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));





const paymentOptions = document.querySelectorAll('.payment-option');

  paymentOptions.forEach(option => {
    const radioInput = option.querySelector('input[type="radio"]');
    
    radioInput.addEventListener('change', () => {
      paymentOptions.forEach(otherOption => {
        otherOption.classList.remove('selected');
      });
      
      if (radioInput.checked) {
        option.classList.add('selected');
      }
    });

    if (radioInput.checked) {
        option.classList.add('selected');
      }
  });

// Get the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();
  
