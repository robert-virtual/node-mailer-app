const { transporter, randomCode } = require("../config/mailer");

const router = require("express").Router();

const users = [];

router.get("/", (req, res) => {
  res.json({ users });
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.json({ msg: req.body ?? "el  body es null" });
});

router.post("/login", (req, res) => {
  const { password, email } = req.body;

  const user = users.find((user) => user.email == email);
  if (!user) {
    return res.json({ msg: "acceso denegado, credenciales incorrectas" });
  }
  if (user.password != password) {
    return res.json({ msg: "acceso denegado, credenciales incorrectas" });
  }

  res.json({ msg: `Acceso permitido bienvenido ${user.name}` });
});

// recuperar contrasña
router.put("/", (req, res) => {
  const user = users.find((user) => user.email == email);
  if (!user) {
    return res.json({ msg: "user not found" });
  }
  let code = randomCode();
  let userIdx;
  users;
  transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: user.email,
    subject: "Recuperracion de contraseña",
    html: `<h1>${code}</h1>`,
  });
  res.json({ msg: "Hola mundo" });
});

exports.router = router;
