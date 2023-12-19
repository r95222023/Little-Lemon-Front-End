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