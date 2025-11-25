function main() {

    const userForm = document.getElementById("user-form");
    let userTable = document.getElementById("user-table-body");


    function createUsers() {
        let userName = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("age").value;
        let status = document.getElementById("status").value;
        userTable.innerText =`${userName} y status ${status}`;
    }

    userForm.addEventListener('submit', ()=> createUsers());

}

main();