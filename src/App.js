import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Note from "./pages/Note";
import Create from "./pages/Create";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Note />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
