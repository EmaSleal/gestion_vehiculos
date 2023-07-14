import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="inherit">
        Todos los derechos reservados &copy; {new Date().getFullYear()} - Emanuel Soto
      </Typography>
      <Typography variant="body2" color="inherit">
        Visita mi perfil en{" "}
        <Link href="https://github.com/EmaSleal" color="inherit" target="_blank" rel="noopener">
          GitHub
        </Link>
      </Typography>
      <Typography variant="body2" color="inherit">
      Gestión de Vehículos
      </Typography>
      
    </footer>
  );
};

export default Footer;