import clsx from "clsx";

function Table({ children }) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                {children}
            </table>
        </div>
    );
}

function Thead({ children }) {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            {children}
        </thead>
    );
}

function Th({ className, children }) {
    return (
        <th scope="col" className={clsx("px-4 py-3", className)}>
            {children}
        </th>
    );
}

function Tbody({ children }) {
    return <tbody>{children}</tbody>;
}

function Td({ className, children }) {
    return (
        <td
            className={clsx(
                "px-4 py-4 border-b bg-white whitespace-nowrap",
                className
            )}
        >
            {children}
        </td>
    );
}

function Empty({ colSpan, message = "No product found." }) {
    return (
        <tr>
            <td colspan={colSpan} className="bg-white">
                <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 inline"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                            />
                        </svg>
                        <div className="mt-3">{message}</div>
                    </div>
                </div>
            </td>
        </tr>
    );
}

Table.Thead = Thead;
Table.Th = Th;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Empty = Empty;

export default Table;
