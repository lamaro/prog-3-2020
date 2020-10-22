export default (req, res) => {

    console.log('Console Log Backend (Server)',req.body);

    const { values } = req.body;

    //ACA EN EL MEDIO, VAMOS A INTERACTUAR CON LA BASE DE DATOS
    //Seteamos la Cookie

    res.statusCode = 200;
    res.json({ message: "Bienvenide", email: values.email });
}
