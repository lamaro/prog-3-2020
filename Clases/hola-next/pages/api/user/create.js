export default (req, res) => {

    console.log(req.body)
    const { name, password } = req.body

    //CREO EL USUARIO EN LA BASE
    //....

    //DEVUELVO EL ESTADO DE LA OPERACION
    res.statusCode = 200
    res.json({ name, password, "status": "El usuario fue creado exitosamente" })
}
