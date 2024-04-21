import axios from 'axios';

const BASE_URL = "http://localhost:8000"

async function register(name, email, password) {
    try {
        const res = await axios.post(`${BASE_URL}/register`, {
            name,
            email,
            password
        })
        if (res.status === 200) {
            console.log(res.data.token);
            return res.data.token;
        }
        else{
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function login(email, password) {
    try {
        const res = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        })
        console.log(res.status)
        if (res.status === 200) {
            console.log(res.data.token);
            return res.data.token;
        }
        else{
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function createBook(formData) {

}

async function getAllBooks() {

}

async function editBook(id, title, author, publisher, year, pages) {

}

async function deleteBook(id) {

}

export {
    register,
    login,
    createBook,
    getAllBooks,
    editBook,
    deleteBook
}
