import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

const [usuario, setUsuario] = useState(() => {
  const usuarioGuardado = localStorage.getItem("usuario");

  const usuarioPorDefecto = {
    nombre: "Carlos Rodriguez",
    dni: "44567890",
    rol: "Docente",
    institucion: "Facultad de Ingeniería",
  };

  if (usuarioGuardado) {
    return {
      ...usuarioPorDefecto,
      ...JSON.parse(usuarioGuardado),
    };
  }

  return usuarioPorDefecto;
});

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const actualizarPerfil = (nuevoPerfil) => {
    setUsuario(nuevoPerfil);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        actualizarPerfil,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};