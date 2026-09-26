const CHECKOUT_URL = "https://pay.kiwify.com.br/udMnLnr";

document.querySelectorAll(".checkout-button").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = CHECKOUT_URL;
    });
});


// FAQ

document.querySelectorAll(".faq-question").forEach((question) => {

    question.addEventListener("click", function () {

        const item = this.parentElement;
        const answer = item.querySelector(".faq-answer");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});
