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
        else {
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
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function createBook(formData) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${BASE_URL}/books`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function editBook(id, title, author, publisher, year, pages) {

}

async function getBookDetail(id) {
    console.log(`get book detail of id ${id}`);
    try {
        const res = await axios.get(`${BASE_URL}/books/${id}`)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}


async function deleteBook(id) {
    console.log("delete book");
}

export {
    register,
    login,
    createBook,
    getAllBooks,
    editBook,
    deleteBook,
    getBookDetail
}
