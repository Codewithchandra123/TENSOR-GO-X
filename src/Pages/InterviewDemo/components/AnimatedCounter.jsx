// import React, { useEffect, useState } from 'react';
// import { motion, animate } from 'framer-motion';

// const AnimatedCounter = ({ value }) => {
//     const [displayValue, setDisplayValue] = useState(0);

//     useEffect(() => {
//         const controls = animate(displayValue, value, {
//             duration: 0.8,
//             ease: "easeOut",
//             onUpdate: (latest) => {
//                 setDisplayValue(Math.round(latest));
//             }
//         });
//         return () => controls.stop();
//     }, [value]);

//     return <span>{displayValue}</span>;
// };

// export default AnimatedCounter;




//src/Pages/InterviewDemo/components/AnimatedCounter.jsx
import React from "react";
import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

const AnimatedCounter = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(displayValue, value, {
            duration: 1.2, // Slightly longer duration for a smoother feel
            ease: "easeOut",
            onUpdate: (latest) => {
                setDisplayValue(Math.round(latest));
            }
        });

        // Cleanup function to stop the animation when the component unmounts or value changes
        return () => controls.stop();
    }, [value]); // Rerun the effect when the target 'value' changes

    // Using a span as it's an inline element suitable for text
    return <span>{displayValue}</span>;
};

export default AnimatedCounter;