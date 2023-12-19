// import {
//     Anchor,
//     Box,
//     Button,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Grid,
//     grommet,
//     Grommet,
//     Header,
//     Heading,
//     Menu,
//     Nav,
//     Page,
//     PageContent,
//     PageHeader,
//     Paragraph,
//     ResponsiveContext,
//     Text,
// } from "grommet";
// import { Home, Moon, Sun } from "grommet-icons";
// import AuthContext from '../../context/AuthContext'
// import { useContext } from "react";
import logo from "../../assets/logo_footer.png"

const Footer = (props) => {
    return (
        <footer>
            <article className="flex1">
                <img src={logo} />
            </article>
            <article className="flex1">
                <p>Copyright Little Lemon</p>
            </article>
        </footer>
    );
}

export default Footer;