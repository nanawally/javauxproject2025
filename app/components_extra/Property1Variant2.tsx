import React from "react";

type Property1Variant2Props = {
    className?: string;
};

export const Property1Variant2: React.FC<Property1Variant2Props> = ({ className }) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgba(217, 60, 12, 1)"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                     10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.69-.5-7.75-2.56
                     -2.06-2.06-3.04-4.92-2.56-7.75.48-2.83 
                     2.34-5.29 4.95-6.64 2.61-1.35 5.7-1.35 8.31 0
                     2.61 1.35 4.47 3.81 4.95 6.64.48 2.83-.5 5.69-2.56 7.75
                     -2.06 2.06-4.92 3.04-7.75 2.56zM11 11h2v6h-2zm0-4h2v2h-2z" />
        </svg>
    );
};
