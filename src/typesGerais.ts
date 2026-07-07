export type usuarioType = {
    id:string
    nome:string
    email:string
    senha?:string
}
export type responseType = {
    status:number
    json():string | usuarioType
}