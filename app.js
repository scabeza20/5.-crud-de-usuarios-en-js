function main() {

    const userForm = document.getElementById("user-form");
    let userTable = document.getElementById("user-table-body");


    function createUser(event) {
        event.preventDefault();
        let userName = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("age").value;
        let status = document.getElementById("status").value;
        userTable.innerHTML +=`<tr> <td>${userName}</td> <td>${email}</td> <td>${age}</td> <td>${status}</td> <td><button>Actualizar</button></td> <td><button>Eliminar</button></td> </tr> `;
    }

    userForm.addEventListener('submit', createUser);

}

main();
