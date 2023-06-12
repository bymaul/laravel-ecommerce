import { Menu } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import clsx from "clsx";

function DropdownLink({ children, href, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    className={clsx(
                        active && "bg-gray-100 text-black",
                        "w-full text-left block text-gray-600 py-1 px-3"
                    )}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    );
}

function DropdownMenu({ buttonClassName = "", label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button
                        className={clsx(
                            buttonClassName,
                            "flex items-center gap-x-2"
                        )}
                    >
                        {label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={clsx(
                                "transition duration-200 w-5 h-5",
                                open && "rotate-180 transition duration-200"
                            )}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="bg-white py-1 z-10 rounded-lg shadow-sm border absolute w-64 top-full mt-3 right-0">
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

function Divider() {
    return <div className="bg-gray-200 my-1 w-full block h-px"></div>;
}

DropdownMenu.Link = DropdownLink;
DropdownMenu.Divider = Divider;

export default DropdownMenu;
