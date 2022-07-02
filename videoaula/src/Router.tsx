import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Home } from "./pages/Home";
import { Subscribe } from "./pages/subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/home" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lessons/:slug" element={<Event />} />
        </Routes>
    )
}