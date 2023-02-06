import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Leftbar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import ProfileForm from "./scenes/form/ProfileForm";
import Calendar from "./scenes/calendar/Calendar";
import Faqs from "./scenes/faq/Faqs";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geo from "./scenes/geo/Geo";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Leftbar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<ProfileForm />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faqs />} />
              <Route path="/bar-chart" element={<Bar />} />
              <Route path="/pie-chart" element={<Pie />} />
              <Route path="/line-chart" element={<Line />} />
              <Route path="/geography-chart" element={<Geo />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
