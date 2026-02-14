import { BrowserRouter, MemoryRouter, Route, Routes, Navigate } from "react-router-dom"
import LandingPage from "./app_identity/LandingPage"
import Application from "./Application"
import { useExtensionData } from "./ExtensionDataContext"

export const RoutingTable = () => {
    const { isExtension } = useExtensionData();

    const routes = (
        <Routes>
            <Route path="/application" element={<Application />} />
            <Route path="/welcome" element={<LandingPage />} />
            <Route path="/" element={<Navigate to={isExtension ? "/application" : "/welcome"} replace />} />
            {/* Catch-all for extension injected into random paths */}
            {isExtension && <Route path="*" element={<Navigate to="/application" replace />} />}
        </Routes>
    );

    if (isExtension) {
        return (
            <MemoryRouter initialEntries={["/application"]}>
                {routes}
            </MemoryRouter>
        );
    }

    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    )
}

