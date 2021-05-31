console.log("this is index js")
Display();
//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {

}

//add methods to display prototype
Display.prototype.add = function (book) {
    tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
    console.log("Adding to UI");
}

//implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML += `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message!</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;

    setTimeout(function () {
        message.innerHTML = "";
    }, 2000);
}

//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted the form");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let horror = document.getElementById("horror");
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (horror.checked) {
        type = horror.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    // let records = localStorage.getItem("tableBody");
    // if (records == null) {
    //     recordObj = [];
    // } else {
    //     recordObj = JSON.parse(records);
    // }
    // recordObj.push(book);
    // localStorage.setItem("tableBody",JSON.stringify(recordObj));
    // book = {};

    // // var record = localStorage.getItem("book");
    // console.log(recordObj);

    // showBook();


    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();//to clear the form after submission
        display.show("success", " Your book has been sucussfully added!");
    } else {
        //show error to user
        display.show("danger", " Sorry you can not add this book");
    }

    e.preventDefault();
}
