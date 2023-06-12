import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink({ href, className, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(
                usePage().url == href ? "text-black" : "text-gray-600",
                className,
                "hover:text-black py-3"
            )}
        >
            {children}
        </Link>
    );
}
