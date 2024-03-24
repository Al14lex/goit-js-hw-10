// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const delay = parseInt(event.currentTarget.elements.delay.value, 10);
    const ratio = event.currentTarget.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ratio === "fulfilled") {
                resolve();
            } else {
                reject();
            }
        }, delay);
    });

    promise
        .then(() => {
            iziToast.success({
                color: "green",
                position: "topRight",
                message: `✅ Fulfilled promise in ${delay}ms`
            });
        })
        .catch(() => {
            iziToast.error({
                color: "red",
                position: "topRight",
                message: `❌ Rejected promise in ${delay}ms`
            });
        });
});