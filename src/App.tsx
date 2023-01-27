import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./styles/themes/default";
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="contained" color="primary">Entrar</Button>
    </ThemeProvider>
  )
}
