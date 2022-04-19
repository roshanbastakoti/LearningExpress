const { response } = require("express")
const express = require("express") //Importing  express library

const student_data = require("./data.json")

const app = express() // Init app
app.use(express.json())

const PORT = 3000 // PORT number

//Get Method
app.get("/", (request, response) => { response.send("k cha keta keti ho") })


app.get("/about", (request, response) => { response.send("Hello Kripa") })

app.get("/api/students", (request, response) => { response.send(student_data) })

//Get  specific  student with unique id
app.get("/api/students/:id", (request, response) => {

    const user_id = (request.params.id)

    const student = student_data.find(std => std.id == user_id)

    if (!student) {
        response.status(400).send("Student not found")
    }



    response.send(student)
})

app.post("/api/students", (request, response) => {
    const first_name = (request.body.first_name)
    if (!first_name) {
        response.status(400).send({
            message: "first name is required"


        })
    }
    const student = {
        id: student_data.length + 1,
        first_name: first_name
    }
    student_data.push(student)
    response.send(student)




})
app.put("/api/students/:id", (request, response) => {
    const user_id = request.params.id
    const first_name = (request.body.first_name)

    const student = student_data.find(std => std.id == user_id)

    if (!student) {
        response.status(400).send("Student not found")
    }
    student.first_name = first_name
    response.send(student)



})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})