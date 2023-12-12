export const delayVariants = (Duration) => {
 return {
  Animate : {opacity:1,transition:{duration:Duration}},
  Initial : {opacity:0}
 }
}

export const popOutVariants = {
    Initial: { opacity: 0, scale: 0.9 },
    Animate: { 
        opacity: 1,
        scale: 1,      
        transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 2 ,
          stiffness: 100 ,
          restDelta: 0.001
        }
    }}
}
