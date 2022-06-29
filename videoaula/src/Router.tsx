import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/event" element={<Event />} />
        </Routes>
    )
}