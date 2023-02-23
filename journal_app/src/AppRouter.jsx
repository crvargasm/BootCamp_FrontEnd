import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./auth/router/AppRoutes";
import { JournalRoutes } from "./journal/router/JournalRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AppRoutes />} />
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    )
}