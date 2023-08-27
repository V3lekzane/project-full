import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import './Header.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 64) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <AppBar
            position="static"
            className={`app-bar${isSticky ? ' sticky' : ''}`}
        >
            <Container>
                <Toolbar className="tool-bar">
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
