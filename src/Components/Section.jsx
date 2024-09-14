import React from 'react'
import {motion} from "framer-motion"  //for animation

const Section = ({h3, text, hasbtn=true, btnTxt, imgSrc, imgSize='70%', backgroundColor, headingColor, textColr, btnBgColor, btnColor }) => {
  
    const headingOption = {
        initial:{
            y: "100%",
            opacity: 0,
        },
        whileInView:{
            y:0,
            opacity:1,
        }
    }

    const textOption = {
        ...headingOption,
        transition: {
            delay: 0.3,
        }
    }

    const buttonOption = {
        initial:{
            y: "100%",
            opacity: 0,
        },
        whileInView:{
            y:0,
            opacity:1,
        },
        transition: {
            delay: 0.3,
            ease: "easeIn"
        }
    }

    const imgOption = {
        initial:{
            scale:0.1,
            opacity: 0,
        },
        whileInView:{
            scale:1,
            opacity:1,
        },
        transition: {
            delay: 0.3,
            
        }
    }

    return (
    <section className="section" style={{
                backgroundColor
            }}>

        <div>
            <motion.h3 style={{
                color: headingColor,
            }} {...headingOption}>{h3}</motion.h3>
            <motion.p 
            style={{
                color: textColr,
            }} {...textOption} >{text}</motion.p>


            {
                hasbtn && <motion.button style={{
                color: btnColor,
                backgroundColor: btnBgColor,
            }} {...buttonOption} >{btnTxt}</motion.button>
            }

            <motion.div {...imgOption}>

                <img src={imgSrc} alt="ImgSrc" style={{
                    width: imgSize,
                }} />

            </motion.div>


        </div>

    </section>
  )
}

export default Section