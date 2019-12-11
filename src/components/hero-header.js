import React from "react"

const HeroHeader = ({children, className}) => (
    <div className="hero-banner bg-primary py-3">
        <div className={`container ${className}`}>
            {children}
        </div>
    </div>    
)

export default HeroHeader
