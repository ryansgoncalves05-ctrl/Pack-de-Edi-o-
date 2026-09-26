// ==========================================
// CONFIGURAÇÃO
// ==========================================

// Quando tivermos o link da Kiwify,
// coloque ele entre as aspas abaixo.
const CHECKOUT_URL = "COLOCAR_LINK_DA_KIWIFY_AQUI";


// ==========================================
// FAQ
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const alreadyOpen = item.classList.contains("active");

        faqItems.forEach((otherItem) => {
            otherItem.classList.remove("active");

            const answer = otherItem.querySelector(".faq-answer");
            answer.style.maxHeight = null;
        });

        if (!alreadyOpen) {
            item.classList.add("active");

            const answer = item.querySelector(".faq-answer");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});


// ==========================================
// BOTÕES DE COMPRA
// ==========================================

const checkoutButtons = document.querySelectorAll(".checkout-button");

checkoutButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        if (
            !CHECKOUT_URL ||
            CHECKOUT_URL === "COLOCAR_LINK_DA_KIWIFY_AQUI"
        ) {
            event.preventDefault();

            alert(
                "O checkout ainda não foi configurado. Em breve você será direcionado para a página de compra."
            );

            return;
        }

        button.href = CHECKOUT_URL;
    });

});


// ==========================================
// ANIMAÇÃO AO APARECER NA TELA
// ==========================================

const animatedElements = document.querySelectorAll(
    ".category, .benefit, .product-card, .offer-card, .faq-item"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.08
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// ==========================================
// EFEITO DO HEADER AO ROLAR
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==========================================
// ANO AUTOMÁTICO NO FOOTER
// ==========================================

const footerYear = document.querySelector(".footer p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Pack de Edição. Todos os direitos reservados.`;
}
