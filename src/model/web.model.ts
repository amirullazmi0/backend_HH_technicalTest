export class WebResponse<T> {
    status?: number
    success?: boolean
    message?: string
    error?: any
    data?: T
}