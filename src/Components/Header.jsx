import React from 'react'
import { Menu } from "antd"

function Header() {
    return (
        < Menu
            items={
                [
                    {
                        label: "Home",
                        key: "home"
                    }
                ]
            }
        />
    )
}

export default Header