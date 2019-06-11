import { loginUserPath, getUserPath, createUserPath } from "./constants";

const User = {
    login: ({ name, password }) => {
        return fetch(loginUserPath(), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password })
        }).then(x => x.json()).then(x => {
            if (x.status === 200) {
                return x.user
            } else {
                throw x.message
            }
        })
    },
    getUserInfo: (id) => {
        return fetch(getUserPath(id))
    },
    createUser: ({ name, password, type }) => {
        return fetch(createUserPath(), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password, type }),
        })
    }
}

export default User;