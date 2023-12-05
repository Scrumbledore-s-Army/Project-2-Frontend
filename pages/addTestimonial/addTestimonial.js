const API_URL = "http://localhost:8080/api/"

document.querySelector("#add-testimonial").addEventListener("click", async()=>{
    const status = document.querySelector("#add-testimonial-status")
    const form = document.querySelector("#testimonial-form")

    const newTestimonial = {
        submissionName: form.name.value,
        text: form.text.value,
        image: form.image.value,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newTestimonial)
    }
    try {
        const response = await fetch(API_URL + "testimonials", options);

        if (!response.ok) {
            
            if (response.status === 401 || response.status === 403) {
                
                status.textContent = "Unauthorized access. Please log in.";

            } else {
                // Handle other non-authorization-related HTTP errors
                throw new Error('HTTP error: ' + response.status);
            }
        } else {
            // Proceed with handling successful response
            const courseResponse = await response.json();
            console.log('Testimonial added:', courseResponse);
            status.textContent = "Testimonial added successfully";
            // Optionally, do something with the response
        }
    } catch (error) {
        console.error('Error adding Testimonial:', error);
        status.textContent = "Error adding testimonial";
        // Handle other errors, such as network issues, parsing JSON, etc.
    }
})