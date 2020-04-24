import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'

// set up hooks into index.html
const submit = document.getElementById('travel_submit');
submit.addEventListener("click", handleSubmit);

export {
    handleSubmit
}
