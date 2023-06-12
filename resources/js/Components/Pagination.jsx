import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

<<<<<<< HEAD
export default function Pagination({ marginTop = "mt-10", meta, links }) {
    return (
        <div
            className={clsx(
                "flex items-center justify-center gap-3",
                marginTop
            )}
        >
            {meta.links.map((link, i) => (
                <Link
                    className={clsx(
                        link.active && "text-blue-500",
                        "bg-white text-black border rounded px-3 py-1 shadow-sm"
=======
export default function Pagination({ meta, links }) {
    return (
        <div className="flex items-center justify-center gap-3 mt-12">
            {meta.links.map((link, i) => (
                <Link
                    className={clsx(
                        link.active && "text-red-500",
                        "text-black border rounded px-3 py-1 shadow-sm"
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
                    )}
                    key={i}
                    href={link.url}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
