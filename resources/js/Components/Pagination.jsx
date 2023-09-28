import { Link } from "@inertiajs/react";
import clsx from "clsx";

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
