import {save, load, remove } from "./partials/storage";
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const {email, message} = form;
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

onStorageData();

function onFormInput(event) {
    const {name, value} = event.target;
    formData[name] = value;
    
    save(LOCALSTORAGE_KEY, formData);
}

function onFormSubmit(event) {
    event.preventDefault();

    // const {
    //     elements: { email, message },
    //   } = event.currentTarget;
    if (email.value && message.value) {
        console.log({ email: email.value, message: message.value });
        event.currentTarget.reset();
        remove(LOCALSTORAGE_KEY);   ;
    } else alert('Please, fill all fields!');
}

function onStorageData(event) {
    const savedData = load(LOCALSTORAGE_KEY);
    try {
      email.value = savedData.email;
      message.value = savedData.message;
    } catch (error) {
      console.log('Storage is empty');
    }
  }

//   Alternative for load stored data 
// function onStorageData() {
//     const savedData = load(LOCALSTORAGE_KEY);

//     if (savedData) {
//        Object.entries(savedData).forEach(([key, value]) => {
//             form.elements[key].value = value;
//         });
//     }
// }





