let container = document.querySelector(".container")
let books = document.querySelector(".books")
let main = document.querySelector(".main")
let buttons_add = Array.from(document.querySelectorAll(".add"));
let book_submit = document.querySelector(".book_submit")
let book_cancel = document.querySelector(".book_cancel")
let book_form = document.querySelector(".book_form")
let div_form = document.querySelector(".form")

function Book(title, author, pages, status = "Read") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


let my_library = []

let create_book_div = function (title, author, pages, status = "Read") {
    let new_book_div = document.createElement("div")
    new_book_div.classList.add("book")


    let book_info_template_div = document.createElement("div")
    book_info_template_div.classList.add("book_info_template")

    let book_info_div = document.createElement("div")
    book_info_div.classList.add("book_info")

    let ul1 = document.createElement("ul")
    let ul2 = document.createElement("ul")

    let i = 0
    for (let key in my_library[my_library.length - 1]) {
        if (i == 4) {
            break
        }
        let li1 = document.createElement("li")
        li1.innerText = key.toUpperCase() + ":"
        ul1.appendChild(li1)
        let li2 = document.createElement("li")
        li2.innerText = my_library[my_library.length - 1][key]
        ul2.appendChild(li2)
        i++
    }
    let li_status = ul2.lastChild
    li_status.setAttribute("id", "status")

    let card_third_column = document.createElement("div")
    card_third_column.classList.add("card_third_column")

    let button_delete = document.createElement("button")
    button_delete.classList.add("delete")
    button_delete.innerText = "Delete"
    button_delete.setAttribute("data-name", title);
    button_delete.addEventListener("click", () => {
        new_book_div.remove()
    })

    let button_change_status = document.createElement("button")
    button_change_status.classList.add("change_status")
    button_change_status.innerText = "Change status"
    button_change_status.setAttribute("data-name", title);
    button_change_status.addEventListener("click", () => {
        console.log(li_status.innerText)
        if (li_status.innerText == "Read") {
            li_status.innerText = "Not read"
            li_status.style.color = "#b34747"
        } else {
            li_status.innerText = "Read"
            li_status.style.color = "#7acccc"
        }
    })
    card_third_column.appendChild(button_delete)
    card_third_column.appendChild(button_change_status)

    book_info_template_div.appendChild(ul1)
    book_info_div.appendChild(ul2)
    new_book_div.appendChild(book_info_template_div)
    new_book_div.appendChild(book_info_div)
    new_book_div.appendChild(card_third_column)
    books.appendChild(new_book_div)
}

for (let button of buttons_add) {
    button.addEventListener("click", () => {
        div_form.style.display = "flex"
        container.style.opacity = 0.3;
    })
}

book_cancel.addEventListener("click", () => {
    div_form.style.display = "none"
    container.style.opacity = 1;
})

let counter_of_books = 0

book_submit.addEventListener("click", (e) => {
    e.preventDefault()
    counter_of_books++
    div_form.style.display = "none"
    container.style.opacity = 1;
    let book_info = Array.from(document.querySelectorAll("input[type='text']"))
    my_library.push(new Book(book_info[0].value, book_info[1].value, book_info[2].value))
    create_book_div(book_info[0].value, book_info[1].value, book_info[2].value)
})