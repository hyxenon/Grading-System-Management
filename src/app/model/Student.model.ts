export interface Student {
    email: string
    firstName: string
    lastName: string
    password: string
    gender: string | undefined
    position: string | undefined
    status: string | undefined
    strand: string
    classes: []
    _id: string
}