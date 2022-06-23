import React, { useState } from 'react'
import './Style.css'

function Dropdown({ heading, children, bgColor, containerClassName, headingClassName, open = false }) {
    const [state, setState] = useState(open)

    return (
        <div className={containerClassName} style={{ backgroundColor: bgColor }}>
            <h5
                className={`dropdown_heading fw-bold d-flex justify-content-between align-items-center ${headingClassName}`}
                onClick={() => setState(!state)}
            >
                {heading}
                {state ?
                    <i class="bi bi-chevron-up"></i> :
                    <i class="bi bi-chevron-down"></i>
                }
            </h5>
            <div className={`dropdown font14 ${state ? 'show_dropdown' : 'hide_dropdown'}`}>{children}</div>
        </div>
    )
}

export default Dropdown