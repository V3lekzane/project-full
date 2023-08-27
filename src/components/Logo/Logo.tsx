import Typography from '@mui/material/Typography'
import logo from 'assets/logo.png'
import './logo.scss'
type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography>
            <img className="logo" src={logo} alt="Fake-shop logo" />
        </Typography>
    )
}

export default Logo
