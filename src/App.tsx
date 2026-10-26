import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FindWorkshopPage from "./pages/FindWorkshopPage";
import InfoPage from "./pages/InfoPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FindWorkshopPage />} />
        <Route path="how-it-works" element={<InfoPage page="how-it-works" />} />
        <Route path="accessibility" element={<InfoPage page="accessibility" />} />
        <Route path="enroll/:workshopId" element={<InfoPage page="enroll" />} />
      </Route>
    </Routes>
  )
}
