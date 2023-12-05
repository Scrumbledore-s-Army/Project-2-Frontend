const URL = "http://localhost:8080/api/testimonials"

async function fetchTestimonials(){
    const testimonials = await fetch(URL)
    .then(response => response.json())

    const rows = testimonials.map(testimonial => `
    <tr>
    <td>${testimonial.submissionName}</td>
    <td>${testimonial.text}</td>
    <td>${testimonial.image}</td>
    </tr>
    `)
    const rowsAsString = rows.join("")

    document.querySelector("#testimonial-rows").innerHTML = rowsAsString;
}

// Get the modal element and the button that opens it
const modal = document.getElementById("myModal");
const closeButton = document.querySelector("#close-testimonial-modal"); // Selecting the close button
const btn = document.getElementById("add-testimonial-modal");
const modalContent = document.querySelector(".modal-content");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    // Load content into the modal (for example, another HTML file)
    modalContent.innerHTML = '<span style="cursor: pointer; font-size: 2.5em;" onclick="closeModal()" id="close-testimonial-modal">&times;</span><object style="width: 100%; height: 300px;" type="text/html" data="/pages/addTestimonial/addTestimonial.html" ></object> ';
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    modalContent.innerHTML = ''; // Clear content when modal is closed
}



// Event listener for the button click to open the modal
btn.addEventListener("click", openModal);

// Event listener for closing the modal when the 'close' button is clicked
closeButton.addEventListener("click", closeModal); // Attaching event listener to close button


