import {
    Anchor,
    Box,
    Button,
    Form,
    FormField,
    Layer,
    TextInput
} from "grommet";
import { useState } from "react";
import config from '../../config'

const lsk = config.localStorageKey

const Register = (props) => {
    // const navigate = useNavigate()
    const [showRegister, setShowRegister] = useState();
    const openRegister = () => { setShowRegister(true) }
    const closeRegister = () => { setShowRegister(false) }
    const [formValue, setFormValue] = useState();
    let lastValidationResults = {}
    const onSubmit = () => {
        if (lastValidationResults.valid) {
            setTimeout(() => {
                localStorage.setItem(lsk.isLoggedIn, 'true')
                window.location.reload(false);
            }, 200)
        }
    }
    return (
        <>
            <Anchor color="white" onClick={openRegister}>Create an account</Anchor>
            {showRegister && (
                <Layer
                    size="large"
                    background="#495E57"
                    onEsc={closeRegister}
                    onClickOutside={closeRegister}
                >
                    <Box pad="medium">
                        <Form value={formValue} onValidate={(validationResults) => {
                            console.log('validationResults = ', validationResults);
                            console.log('validate', formValue)
                            lastValidationResults = validationResults
                        }} onChange={nextValue => { console.log('set form value'); setFormValue(nextValue) }} onSubmit={onSubmit}>
                            <FormField label="Username" name="name" required validate={[{ rexexp: /^[a-zA-Z0-9._+%&#]{3,15}$/ }]}>
                                <TextInput placeholder="Enter username" aria-label="name" name="name" type="name" />
                            </FormField>

                            <FormField label="Password" name="password" required validate={[
                                { rexexp: /^[a-zA-Z0-9._+%&#]{5,35}$/, message: 'Only characters including ._+%&# with total length between 5 to 35 are allowed'},
                                (pwd) => {
                                    // console.log('reenter', formValue['reenter-password'])
                                    if (pwd && pwd.length < 5) return 'Atleast 5 characters required';
                                    return undefined;
                                },
                            ]} validateOn="change">
                                <TextInput placeholder="Enter password" aria-label="password" name="password" type="password"/>
                            </FormField>
                            <FormField label="Re-enter Password" name="reenter" required validate={[
                                { rexexp: /^[a-zA-Z0-9._+%&#]{5,35}$/ },
                                (pwd) => {
                                    console.log('reenter', formValue['reenter'], pwd, formValue['reenter'])
                                    if (pwd && pwd !== formValue['password']) { console.log('mismatch'); return 'Passwords do not match' }
                                    return undefined;
                                },
                            ]} validateOn="change">
                                <TextInput placeholder="Re-enter password" aria-label="re-enter password" name="reenter" type="password" />
                            </FormField>
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Button size="small" label="Cancel" onClick={closeRegister} />
                                <Button onSubmit={onSubmit} type="submit" size="small" label="Register" />
                            </Box>
                        </Form>
                    </Box>
                </Layer>
            )}
        </>
    );
}

export default Register;