import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
    const { email } = req.body;
    //Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({ email });
    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    }
    try {
        //Guardar un nuevo veterinario
        const venterinario = new Veterinario(req.body);
        const venerinarioGuardado = await venterinario.save(req.body);
        console.log(venerinarioGuardado);
        res.send(venerinarioGuardado);
    } catch (error) {
        console.log(error);
        console.log(req.body);
        res.send({ msg: "An error ocurred." });
    }

}


const perfil = (req, res) => {
    res.send({ url: 'Desde API' });
}

const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await Veterinario.findOne({ token });

    if (!usuarioConfirmar) {
        const error = new Error('Token no valido');
        return res.status(404).json({ msg: error.message });
    }
    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({
            msg: 'Usuario Confirmado Correctamente.',

        })
    } catch (error) {
        console.log(error);
    }
}
const autenticar = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const usuario = await Veterinario.findOne({ email });
    console.log(usuario);
    if (!usuario) {
        const error = new Error('El usuario no existe.');
        return res.status(404).json({ msg: error.message });
    }
    try {
        if (!usuario.confirmado) {
            const error = new Error('Tu cuenta no ha sido confirmada.');
            return res.status(403).json({ msg: error.message });
        }
        if (await usuario.comprobarPassword(password)) {
            console.log("C");
            return res.json({msg:"ALL OK"});
        } else {

            const error = new Error('Password Incorrecto.');
            return res.status(404).json({ msg: error.message });

        }
    }
    catch (error) {
        console.log(error);
    }
}
export {
    registrar,
    perfil, confirmar, autenticar
}