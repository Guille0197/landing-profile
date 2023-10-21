import { Dropdown } from "flowbite-react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="block text-sm text-gray-500 sm:text-left dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <a href="#" className="hover:underline">
          Guillermo Navarro
        </a>
      </span>

      <div className="flex items-center md:order-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-4 py-2">
        <Dropdown
          label={
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <svg
                className="w-5 h-5 mr-2 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
              >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                  <g id="d">
                    <g id="c">
                      <g id="e">
                        <g id="b">
                          <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          />
                          <use xlinkHref="#a" y="420" />
                          <use xlinkHref="#a" y="840" />
                          <use xlinkHref="#a" y="1260" />
                        </g>
                        <use xlinkHref="#a" y="1680" />
                      </g>
                      <use xlinkHref="#b" x="247" y="210" />
                    </g>
                    <use xlinkHref="#c" x="494" />
                  </g>
                  <use xlinkHref="#d" x="988" />
                  <use xlinkHref="#c" x="1976" />
                  <use xlinkHref="#e" x="2470" />
                </g>
              </svg>
              English (US)
            </div>
          }
          inline
          size="sm"
          arrowIcon={false}
          placement="top"
        >
          <Dropdown.Item className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg
              className="w-5 h-5 mr-2 rounded-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlinkHref="#a" y="420" />
                        <use xlinkHref="#a" y="840" />
                        <use xlinkHref="#a" y="1260" />
                      </g>
                      <use xlinkHref="#a" y="1680" />
                    </g>
                    <use xlinkHref="#b" x="247" y="210" />
                  </g>
                  <use xlinkHref="#c" x="494" />
                </g>
                <use xlinkHref="#d" x="988" />
                <use xlinkHref="#c" x="1976" />
                <use xlinkHref="#e" x="2470" />
              </g>
            </svg>
            English (US)
          </Dropdown.Item>
          <Dropdown.Item
            className="text-sm text-gray-500 dark:text-gray-400 flex items-center"
            as="a"
            href="#"
            target="_self"
          >
            <svg
              className="w-5 h-5 mr-2 rounded-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icon-css-de"
              viewBox="0 0 512 512"
            >
              <rect width="750" height="500" fill="#c60b1e" />
              <rect width="750" height="250" fill="#ffc400" y="125" />
            </svg>
            Español (ES)
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default Footer;
