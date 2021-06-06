let button = document.querySelector("#see_review");

button.addEventListener("click", () => {
    let review = document.querySelector("#review");
    if (review.classList.contains("container_d_none")) {
        review.classList.remove("container_d_none");
        button.textContent = "CLOSE REVIEW"
    }
    else {
        review.classList.add("container_d_none");
        button.textContent = "SEE REVIEW"
    }
});