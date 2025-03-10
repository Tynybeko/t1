


let user = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
]

function deleteUser(id) {
    user = user.filter(item => item.id != id)

}

deleteUser(1)
console.log(user);