import {save, load, remove } from "./partials/storage";
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = "feedback-form-state";
let formData = {};


onStorageData();
readDataFromStorage();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  const { name, value } = event.target;

  formData[name] = value;
  save(LOCAL_STORAGE_KEY, formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  
  if (email.value && message.value) {
      console.log(formData);
      event.currentTarget.reset();
      remove(LOCAL_STORAGE_KEY);   ;
  } else alert('Please, fill all fields!');
}

function readDataFromStorage() {
  formData = load(LOCAL_STORAGE_KEY);
  formData = formData ? formData : {};
}

function onStorageData() {
  formData = load(LOCAL_STORAGE_KEY);

  if (!formData) {
    return;
  }
  Object.entries(formData).forEach(([key, value]) => {
    form.elements[key].value = value;
  });
}














