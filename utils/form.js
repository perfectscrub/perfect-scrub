// Form Submit Control
// Purpose: Submit form data to Netlify server & show status to user


export function submitHandler(e) {
    const form = e.currentTarget;
    e.preventDefault();
    // form data sent to Netlify server
    const formData = new FormData(form);
    // const data = Object.fromEntries(formData)
    // console.log(data);
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(handleErrors)
        .then(() => {
            form.reset();
        })
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