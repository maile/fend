
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('travel_dest').value

    console.log(input);
}

export { handleSubmit }
