const { response, request } = require("express");

const getUsuarios = (req = request, res = response) => {
  const { nombre, edad } = req.query;
  res.json({
    msg: "get-to controller",
    nombre,
    edad,
  });
};

const putUsuarios = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put-to controller",
    id,
  });
};

const deleteUsuarios = (req, res = response) => {
  res.json({
    msg: "Delete-to controller",
  });
};

const postUsuarios = (req, res = response) => {
  const data = req.body;
  res.json({
    msg: "post-to controller",
    data,
  });
};

module.exports = {
  getUsuarios,
  putUsuarios,
  deleteUsuarios,
  postUsuarios,
};
