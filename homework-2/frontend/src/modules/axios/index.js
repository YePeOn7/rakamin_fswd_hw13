import axios from 'axios';

const BASE_URL="http://localhost:8000"

async function register(name, email, password) {

}

async function login(email, password) {
    try{
        const res = await axios.post(`${BASE_URL}/login`, {
            email, 
            password
        })
        console.log(res.status)
        if(res.status === 200){
            console.log(res.data.token);
            return res.data.token;
        }
    } catch(e){
        console.log("Error:", e)
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
