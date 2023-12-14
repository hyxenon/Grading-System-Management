export interface criteria{
    _id: string
    criteriaName: string
    criteriaDescription: string
    type: string
    deadline: string
    isPublish: boolean
    scores: [{ studentId: string, score: number, _id: string}]
}