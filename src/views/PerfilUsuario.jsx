
import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Paper, 
  Avatar, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider 
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';

const PerfilUsuario = () => {
  const usuarioSimulado = {
    nombre: "Juan Pérez",
    rol: "Alumno (Analista Programador Universitario)",
    institucion: "Facultad de Ingeniería - UNJU"
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
        
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72, mb: 2, fontSize: '2rem' }}>
            {usuarioSimulado.nombre.charAt(0)}
          </Avatar>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Mi Perfil
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Información académica del usuario del sistema
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List>
          <ListItem>
            <ListItemIcon><PersonIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="Nombre Completo" 
              secondary={usuarioSimulado.nombre} 
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { fontWeight: 500 } }}
            />
          </ListItem>
          
          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon><BadgeIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="Rol / Condición" 
              secondary={usuarioSimulado.rol} 
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { fontWeight: 500 } }}
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
            <ListItemText 
              primary="Institución" 
              secondary={usuarioSimulado.institucion} 
              secondaryTypographyProps={{ variant: 'body1', color: 'text.primary', sx: { fontWeight: 500 } }}
            />
          </ListItem>
        </List>

      </Paper>
    </Container>
  );
};

export default PerfilUsuario;