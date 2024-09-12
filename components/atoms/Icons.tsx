export const IconScrollDown = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="20"
    height="30"
    viewBox="0 0 20 30"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <rect x="0.5" y="0.5" width="19" height="29" rx="9.5" stroke="white" />
    <path
      fill="white"
      className="animate-down"
      d="M10.5 7C10.5 6.72386 10.2761 6.5 10 6.5C9.72386 6.5 9.5 6.72386 9.5 7L10.5 7ZM9.64645 23.3536C9.84171 23.5488 10.1583 23.5488 10.3536 23.3536L13.5355 20.1716C13.7308 19.9763 13.7308 19.6597 13.5355 19.4645C13.3403 19.2692 13.0237 19.2692 12.8284 19.4645L10 22.2929L7.17157 19.4645C6.97631 19.2692 6.65973 19.2692 6.46447 19.4645C6.2692 19.6597 6.2692 19.9763 6.46447 20.1716L9.64645 23.3536ZM9.5 7L9.5 23L10.5 23L10.5 7L9.5 7Z"
    />
  </svg>
);

export const IconArrowUpRight = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
      fill="white"
    />
  </svg>
);

export const IconClose = () => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6L18 18"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 6L6 18"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconSoundcloud = () => (
  <svg width="24" height="24" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="white"
      d="M0.5 11.1661C0.5 11.4569 0.607972 11.6768 0.823872 11.8259C1.03979 11.9749 1.27059 12.0276 1.51629 11.984C1.74708 11.9404 1.90902 11.8604 2.00212 11.7441C2.09517 11.6278 2.14172 11.4351 2.14172 11.1661V8.00333C2.14172 7.77792 2.06169 7.58707 1.9016 7.43076C1.74155 7.27444 1.54611 7.19629 1.31529 7.19629C1.09193 7.19629 0.900217 7.27444 0.740135 7.43076C0.580052 7.58707 0.5 7.77792 0.5 8.00333V11.1661ZM3.06864 12.5184C3.06864 12.7293 3.14496 12.8874 3.29758 12.9928C3.45022 13.0983 3.64566 13.151 3.8839 13.151C4.1296 13.151 4.32874 13.0983 4.48139 12.9928C4.63401 12.8874 4.71033 12.7293 4.71033 12.5184V5.14596C4.71033 4.92784 4.63028 4.7406 4.47022 4.5843C4.31014 4.42799 4.1147 4.34982 3.8839 4.34982C3.66054 4.34982 3.46881 4.42799 3.30875 4.5843C3.14867 4.74063 3.06864 4.92784 3.06864 5.14596V12.5184ZM5.62611 12.8674C5.62611 13.0783 5.70428 13.2364 5.86063 13.3418C6.01698 13.4473 6.21801 13.5 6.46373 13.5C6.70196 13.5 6.8974 13.4473 7.05002 13.3418C7.20267 13.2364 7.27899 13.0783 7.27899 12.8674V6.1384C7.27899 5.91302 7.19894 5.72033 7.03888 5.56039C6.8788 5.40044 6.68709 5.32048 6.46373 5.32048C6.23291 5.32048 6.03561 5.40044 5.87182 5.56039C5.70803 5.72033 5.62613 5.91302 5.62613 6.1384L5.62611 12.8674ZM8.19474 12.9001C8.19474 13.3 8.47021 13.5 9.02117 13.5C9.57211 13.5 9.84758 13.3 9.84758 12.9001V1.99412C9.84758 1.38339 9.65772 1.03804 9.27801 0.958052C9.03232 0.899879 8.79033 0.968958 8.55209 1.16527C8.31384 1.36157 8.19472 1.63785 8.19472 1.99412V12.9001H8.19474ZM10.8081 13.2164V1.35067C10.8081 0.972601 10.9235 0.747218 11.1543 0.674496C11.6531 0.558173 12.1482 0.5 12.6396 0.5C13.7787 0.5 14.8397 0.761744 15.8225 1.28523C16.8053 1.80872 17.6001 2.52306 18.2068 3.42826C18.8136 4.33348 19.1654 5.33136 19.2622 6.42198C19.7164 6.23294 20.2003 6.13843 20.714 6.13843C21.7564 6.13843 22.648 6.49832 23.3888 7.21812C24.1296 7.93794 24.5 8.80313 24.5 9.81377C24.5 10.8317 24.1296 11.7005 23.3888 12.4203C22.648 13.1401 21.7601 13.5 20.7252 13.5L11.0091 13.4891C10.942 13.4673 10.8918 13.4273 10.8583 13.3691C10.8248 13.311 10.8081 13.26 10.8081 13.2164Z"
    />
  </svg>
);

export const IconInstagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="white"
      d="M23.9343 7.05606C23.8781 5.78085 23.6719 4.90415 23.3765 4.14448C23.0718 3.33811 22.6029 2.61617 21.9887 2.01602C21.3885 1.40652 20.6618 0.932921 19.8648 0.632936C19.1007 0.337529 18.2286 0.131312 16.9534 0.0750879C15.6686 0.0141019 15.2608 0 12.0023 0C8.74389 0 8.33603 0.0141019 7.05606 0.0703262C5.78085 0.126551 4.90415 0.332951 4.14467 0.628174C3.33811 0.932921 2.61617 1.40176 2.01602 2.01602C1.40652 2.61617 0.933104 3.34288 0.632936 4.13991C0.337529 4.90415 0.131312 5.77609 0.0750878 7.0513C0.0141019 8.33604 0 8.74389 0 12.0023C0 15.2608 0.0141019 15.6686 0.0703262 16.9486C0.126551 18.2238 0.332951 19.1005 0.628357 19.8602C0.933104 20.6666 1.40652 21.3885 2.01602 21.9887C2.61617 22.5982 3.34287 23.0718 4.1399 23.3717C4.90415 23.6672 5.77609 23.8734 7.05148 23.9296C8.33127 23.986 8.73931 23.9999 11.9978 23.9999C15.2562 23.9999 15.6641 23.986 16.944 23.9296C18.2192 23.8734 19.0959 23.6672 19.8554 23.3717C21.4684 22.7481 22.7436 21.4729 23.3672 19.8602C23.6624 19.0959 23.8688 18.2238 23.925 16.9486C23.9812 15.6686 23.9953 15.2608 23.9953 12.0023C23.9953 8.74389 23.9906 8.33604 23.9343 7.05606ZM21.7731 16.8548C21.7215 18.027 21.5246 18.6599 21.3605 19.0818C20.9572 20.1274 20.1274 20.9572 19.0818 21.3605C18.6599 21.5246 18.0224 21.7215 16.8548 21.7729C15.589 21.8293 15.2093 21.8432 12.0071 21.8432C8.80487 21.8432 8.42046 21.8293 7.15917 21.7729C5.98707 21.7215 5.35413 21.5246 4.93217 21.3605C4.41187 21.1682 3.93827 20.8634 3.55385 20.4649C3.15534 20.0758 2.85059 19.6069 2.65829 19.0866C2.4942 18.6646 2.29732 18.027 2.24586 16.8596C2.18945 15.5937 2.17553 15.2139 2.17553 12.0117C2.17553 8.80946 2.18945 8.42504 2.24586 7.16393C2.29732 5.99183 2.4942 5.35889 2.65829 4.93694C2.85059 4.41645 3.15534 3.94303 3.55861 3.55843C3.94761 3.15992 4.41645 2.85517 4.93693 2.66306C5.35889 2.49896 5.99659 2.30208 7.16393 2.25044C8.4298 2.19421 8.80964 2.18011 12.0117 2.18011C15.2187 2.18011 15.5983 2.19421 16.8596 2.25044C18.0317 2.30208 18.6646 2.49896 19.0866 2.66306C19.6069 2.85517 20.0805 3.15992 20.4649 3.55843C20.8634 3.94761 21.1682 4.41645 21.3605 4.93694C21.5246 5.35889 21.7215 5.99641 21.7731 7.16393C21.8293 8.4298 21.8434 8.80946 21.8434 12.0117C21.8434 15.2139 21.8293 15.589 21.7731 16.8548Z"
    />
    <path
      fill="white"
      d="M12.0024 5.83691C8.59869 5.83691 5.8371 8.59832 5.8371 12.0022C5.8371 15.406 8.59869 18.1674 12.0024 18.1674C15.4062 18.1674 18.1676 15.406 18.1676 12.0022C18.1676 8.59832 15.4062 5.83691 12.0024 5.83691ZM12.0024 16.0014C9.79423 16.0014 8.00311 14.2105 8.00311 12.0022C8.00311 9.79386 9.79423 8.00292 12.0024 8.00292C14.2107 8.00292 16.0016 9.79386 16.0016 12.0022C16.0016 14.2105 14.2107 16.0014 12.0024 16.0014Z"
    />
    <path
      fill="white"
      d="M19.8508 5.59312C19.8508 6.38795 19.2064 7.03243 18.4114 7.03243C17.6165 7.03243 16.972 6.38795 16.972 5.59312C16.972 4.7981 17.6165 4.15381 18.4114 4.15381C19.2064 4.15381 19.8508 4.7981 19.8508 5.59312Z"
    />
  </svg>
);

export const IconFacebook = () => (
  <svg
    width="13"
    height="22"
    viewBox="0 0 13 22"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    stroke="white"
  >
    <path
      d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconMail = () => (
  <svg
    id="email"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.8 9.80039L13.8 13.0004C13.3 13.4004 12.7 13.6004 12 13.6004C11.4 13.6004 10.8 13.4004 10.2 13.0004L6.2 9.70039C5.9 9.40039 5.8 9.00039 6.1 8.60039C6.4 8.20039 6.8 8.20039 7.2 8.50039L11.2 11.7004C11.7 12.1004 12.4 12.1004 12.8 11.7004L16.8 8.50039C17.1 8.20039 17.6 8.30039 17.9 8.60039C18.2 9.00039 18.1 9.50039 17.8 9.80039ZM16.4 3.40039H7.6C4.7 3.40039 2.5 5.80039 2.5 8.90039V15.1004C2.5 16.7004 3.1 18.2004 4.1 19.2004C5 20.1004 6.2 20.6004 7.6 20.6004H16.4C17.7 20.6004 18.9 20.1004 19.9 19.2004C20.9 18.2004 21.5 16.7004 21.5 15.1004V8.90039C21.5 5.80039 19.3 3.40039 16.4 3.40039Z"
      fill="white"
    />
  </svg>
);

export const IconPhone = () => (
  <svg
    id="Call"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Iconly/Bulk/Call</title>
    <g id="Iconly/Bulk/Call" stroke="none" stroke-width="1.5" fill="none" fill-rule="evenodd">
      <g id="Call" transform="translate(2.500000, 2.500000)" fill="white">
        <path
          d="M9.03174073,9.97238745 C13.0208243,13.9603606 13.9257751,9.34671782 16.4656491,11.8848116 C18.9142765,14.3327574 20.32162,14.8232052 17.2192381,17.9247236 C16.8306352,18.2370218 14.3616115,21.9942591 5.68460336,13.3196663 C-2.99347825,4.64400029 0.761584769,2.17244427 1.07396994,1.78394958 C4.18386634,-1.32615434 4.6658627,0.0893829491 7.11449014,2.53732879 C9.6543641,5.07649576 5.04265719,5.9844143 9.03174073,9.97238745 Z"
          id="Stroke-1"
        ></path>
      </g>
    </g>
  </svg>
);
