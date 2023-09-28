import { useState } from "react";
import { Toaster } from "react-hot-toast";
import NavbarLayout from "./NavbarLayout";

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
