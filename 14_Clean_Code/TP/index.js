// Kode sebelum refaktorisasi

/*
function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(order => {
        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');
        detailsDiv.innerHTML = '';

        const header = document.createElement('h3');
        header.textContent = `Order ID: ${order.id}`;
        detailsDiv.appendChild(header);

        const status = document.createElement('p');
        status.textContent = `Status: ${order.status}`;
        detailsDiv.appendChild(status);

        modal.style.display = 'block';

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        const confirmBtn = modal.querySelector('#confirmOrderBtn');
        if (order.status === 'Delivered') {
            confirmBtn.style.display = 'none';
        } else {
            confirmBtn.addEventListener('click', () => {
                confirmOrder(order.id, token);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
*/


// Kode setelah refaktorisasi

function createOrderDetails(order, detailsDiv) {
    detailsDiv.innerHTML = "";

    const header = document.createElement("h3");
    header.textContent = `Order ID: ${order.id}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${order.status}`;

    detailsDiv.appendChild(header);
    detailsDiv.appendChild(status);
}

function setupConfirmButton(button, order, token) {
    if (order.status === "Delivered") {
        button.style.display = "none";
        return;
    }

    button.style.display = "block";
    button.onclick = () => confirmOrder(order.id, token);
}

function showOrderModal(order, token) {
    const modal = document.getElementById("orderModal");
    const detailsDiv = modal.querySelector("#orderDetails");
    const closeBtn = modal.querySelector(".close");
    const confirmBtn = modal.querySelector("#confirmOrderBtn");

    createOrderDetails(order, detailsDiv);

    modal.style.display = "block";

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    setupConfirmButton(confirmBtn, order, token);
}

function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            Authorization: token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch order details");
            }
            return response.json();
        })
        .then(order => {
            showOrderModal(order, token);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}