function main() {
    const userForm  = document.getElementById("user-form");
    const userTable = document.getElementById("user-table-body");

    function getFormValues() {
        return {
            userName: document.getElementById("userName").value,
            email:    document.getElementById("email").value,
            age:      document.getElementById("age").value,
            status:   document.getElementById("status").value,
        };
    }

    function createRow({ userName, email, age, status }) {
        return `<tr>
            <td>${userName}</td>
            <td>${email}</td>
            <td>${age}</td>
            <td>${status}</td>
            <td><button class="btn-update">Actualizar</button></td>
            <td><button class="btn-delete">Eliminar</button></td>
        </tr>`;
    }

    function createUser(event) {
        event.preventDefault();
        userTable.innerHTML += createRow(getFormValues());
    }

    userForm.addEventListener("submit", createUser);

    userTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete")) {
            e.target.closest("tr").remove();
        }
        if (e.target.classList.contains("btn-update")) {
            e.target.closest("tr").outerHTML = createRow(getFormValues());
        }
    });
}

main();