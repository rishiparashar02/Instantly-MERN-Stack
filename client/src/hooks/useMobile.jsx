//Hooks generally refer to functions or mechanisms that allow you to "hook into" certain parts of a
//system or framework to add custom behavior or modify the default functionality.

//The purpose of this custom hook is to determine whether the current window size is below a specified
//  breakpoint (defaulting to 768px), which is commonly used to distinguish between mobile and desktop views.
//  It returns a boolean (isMobile) that indicates whether the screen width is below that breakpoint
//  (i.e., whether the view is "mobile" or not).

import { useEffect, useState } from "react"

const useMobile = (breakpoint = 768)=>{
    const [isMobile,setIsMobile] = useState(window.innerWidth < breakpoint)

    const handleResize = ()=>{
        const checkpoint = window.innerWidth < breakpoint
        setIsMobile(checkpoint)
    }

    useEffect(()=>{
        handleResize()

        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return [ isMobile ]
}

export default useMobile