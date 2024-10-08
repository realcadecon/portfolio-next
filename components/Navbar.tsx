"use client"

import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";


export const Navbar = () => {

    const [navActive, setNavActive] = useState(true);

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return width;
      }

    useEffect(() => {
        function handleResize() {
            const width = getWindowDimensions();
            if(width < 768) {
                setNavActive(true);
            } else {
                setNavActive(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const dim = 35;

    return (
        <div className="fixed w-fit left-0 right-0 mx-auto bottom-[2%] md:left-auto md:bottom-auto md:right-[2%] md:top-[2%] z-[9999]">
            <div className=" bg-neutral-50 p-3 rounded-full shadow-lg drop-shadow-xl text-center transition ease-in-out hover:cursor-pointer">
                {!navActive &&
                    <svg className="hover:scale-110 rounded-full p-1" width={dim} height={dim} onClick={() => setNavActive(!navActive)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
                {navActive &&
                    <ul className="flex flex-row md:flex-col items-center gap-3 text-center text-primary">
                        <svg className="hidden md:block hover:scale-110 rounded-full md:p-1 hover:bg-gray-300" width={dim} height={dim} onClick={() => setNavActive(!navActive)} viewBox="0 0 24 24" fill="none">
                            <path d="M6 6L18 18M18 6L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <TransitionLink href="/">
                            <svg className="transition ease-in-out hover:scale-110 rounded-full md:p-1 hover:bg-gray-300" width={dim} height={dim} viewBox="0 0 24 24" fill="none">
                                <path d="M14 21.0001V15.0001H10V21.0001M19 9.77818V16.2001C19 17.8802 19 18.7203 18.673 19.362C18.3854 19.9265 17.9265 20.3855 17.362 20.6731C16.7202 21.0001 15.8802 21.0001 14.2 21.0001H9.8C8.11984 21.0001 7.27976 21.0001 6.63803 20.6731C6.07354 20.3855 5.6146 19.9265 5.32698 19.362C5 18.7203 5 17.8802 5 16.2001V9.77753M21 12.0001L15.5668 5.96405C14.3311 4.59129 13.7133 3.9049 12.9856 3.65151C12.3466 3.42894 11.651 3.42899 11.0119 3.65165C10.2843 3.90516 9.66661 4.59163 8.43114 5.96458L3 12.0001" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </TransitionLink>
                        <TransitionLink href="/about">
                            <svg className="transition ease-in-out hover:scale-110 rounded-full md:p-1 hover:bg-gray-300" width={dim} height={dim} viewBox="0 0 24 24" fill="none">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </TransitionLink>
                        <TransitionLink href="/work" >
                            <svg className="transition ease-in-out hover:scale-110 rounded-full md:p-1 hover:bg-gray-300" width={dim} height={dim} viewBox="0 0 24 24" fill="none">
                                <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </TransitionLink>
                        {/* <TransitionLink href="/work">
                            <svg className="transition ease-in-out hover:scale-110 p-1 rounded-full hover:bg-gray-300" width={dim} height={dim} viewBox="0 0 24 24" fill="none">
                                <path d="M8 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V16.2C21 15.0799 21 14.5198 20.782 14.092C20.5903 13.7157 20.2843 13.4097 19.908 13.218C19.4802 13 18.9201 13 17.8 13H17.6568M11 8.34314L13.2728 6.07036C14.0648 5.27833 14.4608 4.88231 14.9175 4.73393C15.3192 4.60342 15.7519 4.60342 16.1536 4.73393C16.6102 4.88231 17.0062 5.27833 17.7983 6.07036L18.9296 7.20173C19.7217 7.99376 20.1177 8.38978 20.2661 8.84644C20.3966 9.24812 20.3966 9.68082 20.2661 10.0825C20.1177 10.5392 19.7217 10.9352 18.9296 11.7272L17.6568 13M11 8.34314V6.2C11 5.0799 11 4.51984 10.782 4.09202C10.5903 3.71569 10.2843 3.40973 9.90798 3.21799C9.48016 3 8.92011 3 7.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H7.8C8.92011 21 9.48016 21 9.90798 20.782C10.2843 20.5903 10.5903 20.2843 10.782 19.908C10.7926 19.8872 10.8027 19.866 10.8123 19.8445M11 8.34314V17.8C11 18.8656 11 19.4243 10.8123 19.8445M17.6568 13L10.8123 19.8445M7 17H7.01" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </TransitionLink>
                        <TransitionLink href="/work" >
                            <svg className="transition ease-in-out hover:scale-110 rounded-full p-1 hover:bg-gray-300" width={dim} height={dim} viewBox="0 0 24 24" fill="none">
                                <path d="M7.99999 8.5C7.99999 7.94772 7.55227 7.5 6.99999 7.5C6.4477 7.5 5.99999 7.94772 5.99999 8.5V9H5.49999C4.9477 9 4.49999 9.44771 4.49999 10C4.49999 10.5523 4.9477 11 5.49999 11H5.99999V11.5C5.99999 12.0523 6.4477 12.5 6.99999 12.5C7.55227 12.5 7.99999 12.0523 7.99999 11.5V11H8.49999C9.05227 11 9.49999 10.5523 9.49999 10C9.49999 9.44771 9.05227 9 8.49999 9H7.99999V8.5Z" fill="#0F1729" />
                                <path d="M18 8C18 8.55229 17.5523 9 17 9C16.4477 9 16 8.55229 16 8C16 7.44772 16.4477 7 17 7C17.5523 7 18 7.44772 18 8Z" fill="#0F1729" />
                                <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="#0F1729" />
                                <path d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44771 14.4477 9 15 9C15.5523 9 16 9.44771 16 10Z" fill="#0F1729" />
                                <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10C18 10.5523 18.4477 11 19 11Z" fill="#0F1729" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.1879 3 7.96237 3.25817 6.21782 3.5093C3.94305 3.83676 2.09096 5.51696 1.60993 7.7883C1.34074 9.05935 1.07694 10.5622 1.01649 11.8204C0.973146 12.7225 0.877981 13.9831 0.777155 15.1923C0.672256 16.4504 1.09148 17.7464 1.86079 18.6681C2.64583 19.6087 3.88915 20.2427 5.32365 19.8413C6.24214 19.5842 6.97608 18.9387 7.5205 18.3026C8.07701 17.6525 8.51992 16.9124 8.83535 16.3103C9.07821 15.8467 9.50933 15.5855 9.91539 15.5855H14.0846C14.4906 15.5855 14.9218 15.8467 15.1646 16.3103C15.4801 16.9124 15.923 17.6525 16.4795 18.3026C17.0239 18.9387 17.7578 19.5842 18.6763 19.8413C20.1108 20.2427 21.3541 19.6087 22.1392 18.6681C22.9085 17.7464 23.3277 16.4504 23.2228 15.1923C23.122 13.9831 23.0268 12.7225 22.9835 11.8204C22.923 10.5622 22.6592 9.05935 22.39 7.7883C21.909 5.51696 20.0569 3.83676 17.7821 3.5093C16.0376 3.25817 13.8121 3 12 3ZM6.50279 5.48889C8.22744 5.24063 10.3368 5 12 5C13.6632 5 15.7725 5.24063 17.4972 5.4889C18.965 5.70019 20.1311 6.77489 20.4334 8.20267C20.6967 9.44565 20.9332 10.8223 20.9858 11.9164C21.0309 12.856 21.1287 14.1463 21.2297 15.3585C21.2912 16.0956 21.0342 16.8708 20.6037 17.3866C20.1889 17.8836 19.7089 18.0534 19.2153 17.9153C18.8497 17.8129 18.4327 17.509 17.9989 17.0021C17.5771 16.5094 17.2144 15.9131 16.9362 15.3822C16.4043 14.3667 15.3482 13.5855 14.0846 13.5855H9.91539C8.65178 13.5855 7.59571 14.3667 7.06374 15.3822C6.78558 15.9131 6.42285 16.5094 6.00109 17.0021C5.56723 17.509 5.15027 17.8129 4.78463 17.9153C4.29109 18.0534 3.81102 17.8836 3.39625 17.3866C2.96576 16.8708 2.70878 16.0956 2.77024 15.3585C2.87131 14.1463 2.96904 12.856 3.01418 11.9164C3.06675 10.8223 3.30329 9.44565 3.56653 8.20267C3.86891 6.77489 5.03497 5.70019 6.50279 5.48889Z" fill="#0F1729" />
                            </svg>
                        </TransitionLink> */}
                        <span className="w-0.5 h-6 md:w-full md:h-0.5 bg-black rounded-3xl md:mb-1"></span>
                        <a href="/Cade_Conner_Resume.pdf" title="Resume">
                            <svg className="transition ease-in-out hover:scale-110 rounded-full md:p-1 hover:bg-gray-300" width={dim} height={dim} viewBox="0 0 24 24" fill="none" >
                                <path d="M19 15V21M19 21L17 19M19 21L21 19M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H14M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H13M9 13H15M9 9H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </ul>
                }
            </div>
        </div>
    );
}