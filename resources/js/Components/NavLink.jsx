import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink({ href, className, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(
<<<<<<< HEAD
                usePage().url == href ? "text-black" : "text-gray-600",
                className,
                "hover:text-black py-3"
=======
                usePage().url == href && "font-semibold text-black",
                className,
                "text-gray-600 hover:text-black py-3"
>>>>>>> 6e3e94820b7471dc5e4b5aebf91e2131b2d2c7a6
            )}
        >
            {children}
        </Link>
    );
}
