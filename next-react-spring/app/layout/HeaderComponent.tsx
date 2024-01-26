"use client"
import { animated, useSpring } from "@react-spring/web"

const HeaderComponent = () => {
    const springProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            mass: 1, tension: 20, friction: 26
        }
    })
    return <animated.div style={springProps}>
        <div className=" shadow-blue-500/50 w-full h-32 bg-[#43766C]">
            
        </div>
    </animated.div>
}
export default HeaderComponent

