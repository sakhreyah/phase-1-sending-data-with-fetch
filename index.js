// Add your code here

function submitData(userName, eMail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: eMail
        }),
    })
        .then(resp => resp.json())
        .then(obj => document.body.append(obj.id))
        .catch(error => document.body.append(error))
}

