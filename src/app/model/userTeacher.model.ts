export class userTeacher {
    public email: string
    public firstName: string
    public lastName: string
    public password: string
    public gender: string
    public position: string
    public status: boolean


    constructor(email: string, firstName: string, lastName: string, password: string, confirmPassword: string, gender: string, position: string, status: boolean){
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.gender = gender
        this.position = position
        this.status = status
    }
}