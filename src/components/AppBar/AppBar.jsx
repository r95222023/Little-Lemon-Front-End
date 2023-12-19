import {
    Box,
    Button,
    Form,
    FormField,
    Header,
    Layer,
    Menu,
    Nav,
    Text,
    TextInput
} from "grommet";
import { Home, Moon, Sun, Login, Logout, Menu as MenuIcon, Cafeteria, FormSchedule, Deliver } from "grommet-icons";
import AuthContext from '../../context/AuthContext'
import { useContext, useState } from "react";
import { Register } from "..";
import config from '../../config'

const routes = config.routes

const AppBar = (props) => {
    const { dark, toggleDark, isLoggedIn, onLogin, onLogout } = useContext(AuthContext)
    const [showLogin, setShowLogin] = useState();
    const openLogin = () => { setShowLogin(true) }
    const closeLogin = () => { setShowLogin(false) }

    let items = [
        { label: 'Home', icon: <Home />, gap: 'small', href: routes.home },
        { label: 'About', icon: <Cafeteria />, gap: 'small', href: routes.about },
        { label: 'Online Order', icon: <Deliver />, gap: 'small', href: routes.onlineOrder },
        { label: 'Reservations', icon: <FormSchedule />, gap: 'small', href: routes.reservations  },
        !dark ? { label: 'Dark mode', icon: <Moon />, gap: 'small', onClick: toggleDark, } : { label: 'Light Mode', icon: <Sun />, gap: 'small', onClick: toggleDark },
        !isLoggedIn ? { label: 'Log in', icon: <Login />, gap: 'small', onClick: openLogin } : { label: 'Log out', icon: <Logout />, gap: 'small', onClick: onLogout },
    ]
    return (
        <Header
            id="appbar"
            background="brand"
            sticky="scrollup"
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="small"
            {...props}
        >
            {showLogin && (
                <Layer
                    background="#495E57"
                    onEsc={closeLogin}
                    onClickOutside={closeLogin}
                >
                    <Box pad="medium">
                        <Form data-testid="login" onValidate={(validationResults) => {
                            console.log('validationResults = ', validationResults);
                        }}>
                            <FormField label="Username" name="name" required>
                                <TextInput aria-label="name" name="name" type="name" placeholder="Enter username" />
                            </FormField>

                            <FormField label="Password" name="password" required>
                                <TextInput aria-label="password" name="password" type="password" placeholder="Enter password" />
                            </FormField>
                            {/* <Anchor href="/register">No account? Register</Anchor> */}
                            <Register />
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Button size="small" label="Cancel" onClick={closeLogin} />
                                <Button size="small" label="Log in" onClick={() => { closeLogin(); onLogin() }} />
                            </Box>
                        </Form>
                    </Box>
                </Layer>
            )}
            <Text size="large">Little Lemon</Text>
            <Nav align="center" direction="row">
                <Button
                    className="hidden-mobile"
                    a11yTitle={"Home"}
                    plain={true}
                    href={routes.home}
                    label={<Text>Home</Text>}
                />
                <Button
                    className="hidden-mobile"
                    a11yTitle={"Reservations"}
                    plain={true}
                    href={routes.reservations}
                    label={<Text>Reservations</Text>}
                />
                <Button
                    className="hidden-mobile"
                    a11yTitle={"Online Order"}
                    plain={true}
                    href={routes.onlineOrder}
                    label={<Text>Online order</Text>}
                />
                <Button
                    className="hidden-mobile"
                    a11yTitle={"About"}
                    plain={true}
                    href={routes.about}
                    label={<Text>About</Text>}
                />
                {!isLoggedIn ? <Button
                    data-testid="loginbtn"
                    className="hidden-mobile"
                    a11yTitle={"Log in"}
                    plain={true}
                    onClick={openLogin}
                    label={<Text>Log in</Text>}
                /> : <Button
                    className="hidden-mobile"
                    a11yTitle={"Log out"}
                    plain={true}
                    onClick={onLogout}
                    label={<Text>Log out</Text>}
                />}
                <Menu
                    dropProps={{ align: { top: 'bottom', right: 'right' } }}
                    dropBackground="#FFFFFF"
                    icon={<MenuIcon />}
                    items={items}
                />
            </Nav>
        </Header>
    );
}

export default AppBar;