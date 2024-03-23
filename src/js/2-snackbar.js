// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delay = form.addEventListener("submit", event => {
    event.preventDefault();
    const timer = event.currentTarget.elements.delay.value;
    const ratio = event.currentTarget.elements.state.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ratio === "fulfilled") {
                resolve();
            } else {
                reject();
            }
        }, timer);
    });
    promise.then(value => {
        iziToast.success({
            color: "green",
            position: "topRight",
            message: `✅ Fulfilled promise in ${timer}ms`
        });
    })
        .catch(error => {
            iziToast.error({
                color: "red",
                position: "topRight",
                message: `❌ Rejected promise in ${timer}ms`
            });
        });
});