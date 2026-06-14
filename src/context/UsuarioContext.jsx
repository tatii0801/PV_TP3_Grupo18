import { createContext, useState } from "react";

// Crear contexto
export const UsuarioContext = createContext();

//React usa children para representar todo lo que está dentro de una etiqueta
export const UsuarioProvider = ({ children }) => {

  // Usuario compartido globalmente
  const [usuario] = useState({

    nombre: "Carlos Rodriguez",
   // dni: "44567890",
    rol: "Docente",
    institucion: "Facultad de Ingeniería",
  
});

  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};