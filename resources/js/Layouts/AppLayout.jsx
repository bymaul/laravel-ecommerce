import { useState } from "react";
import NavbarLayout from "./NavbarLayout";
import { Toaster } from "react-hot-toast";

export default function App({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <NavbarLayout />
            <Toaster position="top-center" />

            <main className="py-12">{children}</main>
        </div>
    );
}
