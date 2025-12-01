function main() {

    const userForm = document.getElementById("user-form");
    let userTable = document.getElementById("user-table-body");

     function createUser(event) {
        event.preventDefault();
        let userName = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("age").value;
        let status = document.getElementById("status").value;
        userTable.innerHTML +=`<tr> <td>${userName}</td> <td>${email}</td> <td>${age}</td> <td>${status}</td> <td><button class="btn-update">Actualizar</button></td> <td><button class="btn-delete">Eliminar</button></td> </tr> `;

    }

    userForm.addEventListener('submit', createUser);

    userTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete")) {
            e.target.closest("tr").remove();
        }

        if (e.target.classList.contains("btn-update")) {
            let userName = document.getElementById("userName").value;
            let email = document.getElementById("email").value;
            let age = document.getElementById("age").value;
            let status = document.getElementById("status").value;
            e.target.closest("tr").innerHTML=`<tr> <td>${userName}</td> <td>${email}</td> <td>${age}</td> <td>${status}</td> <td><button class="btn-update">Actualizar</button></td> <td><button class="btn-delete">Eliminar</button></td> </tr> `;
        }
    });

}

main();
