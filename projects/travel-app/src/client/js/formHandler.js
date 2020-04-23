
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('anal_url').value

    console.log(input);
}

export { handleSubmit }
