import {Routes, Route} from "react-router-dom";
import {ColorModeContext, UseMode} from "./themes.js";
import {CssBaseline, ThemeProvider}from '@mui/material';
import {
  Dashboard,
  SideBar,
  TopBar,
  Bar,
  Calender,
  Contacts,
  FAQ,
  FormInformation,
  Geography,
  Invoices,
  Line,
  Pie,
  Team

} from "./index.js";


const App = () => {
  const [theme, colorMode] = UseMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <SideBar/>
            <main className="content">
              <TopBar/>
              <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/calender" element={<Calender/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/form" element={<FormInformation/>}/>
              <Route path="/geography" element={<Geography/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/team" element={<Team/>}/>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;