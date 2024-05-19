import React from 'react'

const Menu = ({ onClick, isVisible }) => {
    return (
        <div
            onClick={onClick}
        >
            {
                isVisible ? (
                    <svg
                        fill="#000000"
                        width="30px"
                        height="30px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                                fillRule="evenodd"
                            />{" "}
                        </g>
                    </svg>

                ) :

                    (<svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="#000000"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />{" "}
                        </g>
                    </svg>
                    )
            }
        </div>
    )
}

export default Menu
