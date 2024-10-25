// import React, { useEffect, useRef, useState } from "react";
// import css from "./Header.module.scss";
// import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
// import { motion } from "framer-motion";
// import { getMenuStyles, headerVariants } from "../../utils/motion";
// import useOutsideAlerter from "../../hooks/useOutsideAlerter";
// import useHeaderShadow from "../../hooks/useHeaderShadow";

// const Header = () => {
//   const menuRef = useRef(null);
//   const [menuOpened, setMenuOpened] = useState(false);
//   const headerShadow = useHeaderShadow();

//   // To handle click outside of sidebar on mobile
//   useOutsideAlerter({
//     menuRef,
//     setMenuOpened,
//   });

//   return (
//     <motion.div
//       variants={headerVariants}
//       initial="hidden"
//       whileInView="show"
//       className={`bg-primary paddings ${css.wrapper}`}
//       viewport={{ once: true, amount: 0.25 }}
//       style={{ boxShadow: headerShadow }}
//     >
//       <div className={`innerWidth ${css.container} flexCenter`}>
//         {/* Link to Home page */}
//         <a href="/" className={css.name}>
//           Nitin Kumar
//         </a>

//         <ul
//           className={`flexCenter ${css.menu}`}
//           ref={menuRef}
//           style={getMenuStyles(menuOpened)}
//         >
//           <li>
//             <a href="#experties">Services</a>
//           </li>
//           <li>
//             <a href="#work">Experience</a>
//           </li>
//           <li>
//             <a href="#portfolio">Portfolio</a>
//           </li>
//           {/* <li>
//             <a href="#people">Testimonials</a>
//           </li> */}
//           <li className={`flexCenter ${css.phone}`}>
//             <p>+91-9568174302</p>
//             <BiPhoneCall size={"40px"} />
//           </li>
//         </ul>

//         {/* For medium and small screens */}
//         <div
//           className={css.menuIcon}
//           onClick={() => setMenuOpened((prev) => !prev)}
//         >
//           <BiMenuAltRight size={30} />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Header;



// update


import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // Handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpened(false); // Close the menu when a link is clicked
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        {/* Link to Home page */}
        <a href="/" className={css.name}>
          Nitin Kumar
        </a>

        <ul
          className={`flexCenter ${css.menu} ${menuOpened ? css.open : ""}`} // Add open class conditionally
          ref={menuRef}
          style={getMenuStyles(menuOpened)} // Ensure this function handles styles based on menuOpened
        >
          <li>
            <a href="#experties" onClick={handleLinkClick}>Services</a> {/* Close on click */}
          </li>
          <li>
            <a href="#work" onClick={handleLinkClick}>Experience</a> {/* Close on click */}
          </li>
          <li>
            <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a> {/* Close on click */}
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91-95******02</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>


        <div
          className={css.menuIcon}
          onClick={handleMenuToggle}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
