import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function Pagination({ meta, links }) {
    return (
        <div className="flex items-center justify-center gap-3 mt-12">
            {meta.links.map((link, i) => (
                <Link
                    className={clsx(
                        link.active && "text-red-500",
                        "text-black border rounded px-3 py-1 shadow-sm"
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
