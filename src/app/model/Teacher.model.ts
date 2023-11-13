export interface Teacher {
    email: string
    firstName: string
    lastName: string
    password: string
    gender: string | undefined
    position: string | undefined
    status: string | undefined
    department: string
    classes: []
    _id: string
}