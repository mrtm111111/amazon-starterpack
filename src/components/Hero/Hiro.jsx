// import React from 'react'
// import css from './Hiro.module.css'
// import HeroImg from '../../assets/hero.png'
// import {RiShoppingBagFill} from 'react-icons/ri'
// import {BsArrowRight} from 'react-icons/bs'


// function Hiro() {
//   return (
//     <div className={css.container}>

//     <div className={css.h_sides}>
//         <span>skin protection cream</span>
//         <div className={css.text2}>
//             <span>Trendy Collection</span>
//             <span> Seedily say has suitable disposal and boy. exercise joy man chi rejoiced.</span>
//         </div>
//     </div>

//     {/* middele side hiro image */}
//      <div className={css.wrapper}>
//         <div className={css.blueCircle}></div>
//         <img src={HeroImg} alt='' width={600}/>
//         <div className={css.cart2}>
//             <RiShoppingBagFill/>
//             <div className={css.signup}>
//                 <span>Best Signup Offers</span>
//             </div>
//             <div>
//                 <BsArrowRight/>
//             </div>
//         </div>
//      </div> 

//      {/* right sude */}
//      <div className={css.h_sides}>
//         <div className={css.traffic}>
//             <span>100k</span>
//             <span>Monthly Traffic</span>
//         </div>
//         <div className={css.customer}>
//             <span>100k</span>
//             <span>Happy Customer</span>
//         </div>
//      </div>
//     </div>
//   )
// }

// export default Hiro
import React from "react";
import css from "./Hiro.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hiro = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* main image with cirlce back */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: !mobile && "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>
        <motion.img
          initial={{ bottom: !mobile && "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          initial={{ right: !mobile && "4%" }}
          whileInView={{ right: !mobile && "2%" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hiro;
