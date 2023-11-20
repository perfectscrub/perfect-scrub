// Form Submit Control
// Purpose: Submit form data to Netlify server & show status to user


export function submitHandler(e) {
    const form = e.currentTarget;
    e.preventDefault();
    // form data sent to Netlify server
    const formData = new FormData(form);
    // const data = Object.fromEntries(formData)
    const body = new URLSearchParams(formData).toString()
    console.log(body)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body
    })
        .then(handleErrors)
        
        .catch((error) => {
            console.log(error)
        });
};

// Error Handler
function handleErrors(response) {
    // throws an error if HTTP response failed
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}