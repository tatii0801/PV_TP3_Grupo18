import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {


  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado);
    }

    return {
      nombre: "Carlos Rodriguez",
 
      rol: "Docente",
      institucion: "Facultad de Ingeniería",
    };
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