import {
    Anchor,
    Box,
    Button,
    DateInput,
    Form,
    FormField,
    Layer,
    Page,
    Select,
    TextInput
} from "grommet";
import AuthContext from '../../context/AuthContext'
import { useContext, useState } from "react";
import config from '../../config'
const lsk = config.localStorageKey

const Book = (props) => {
    const { onBookFormSubmit, isLoggedIn } = useContext(AuthContext)
    const [showBook, setShowBook] = useState();
    const closeBook = () => setShowBook(false)
    const openBook = () => setShowBook(true)
    // const today = (new Date()).toISOString().split('T')[0]
    const [date, setDate] = useState((new Date()).toISOString());
    const [formValue, setFormValue] = useState();
    let lastValidationResults = {}
    const onSubmit = () => {
        if (lastValidationResults.valid) {
            onBookFormSubmit(formValue)
            localStorage.setItem(lsk.bookForm, JSON.stringify(formValue))
            setTimeout(() => {
//                 window.location.href = window.location.protocol+ '//' + window.location.host + '/success_booking'
                   window.location.href = config.getHostUrl(window.location) + config.routes.successBooking
            }, 200)
        }
    }
    return (
        <>
            <Anchor data-testid="bookbtn" color="white" className={props.classname || "cta"} onClick={openBook}>Book now</Anchor>
            {showBook && (
                <Layer
                    background="white"
                    onEsc={closeBook}
                    onClickOutside={closeBook}
                >
                    <Page pad="medium">
                        <Form data-testid="bookform" value={formValue} onValidate={(validationResults) => {
                            // console.log('validationResults = ', validationResults);
                            lastValidationResults = validationResults
                        }} onChange={nextValue => setFormValue(nextValue)} onSubmit={onSubmit}>
                            <FormField label="Name" name="name" required validate={[
                                { rexexp: /^[a-zA-Z0-9._+%&#]{5,35}$/, message: 'Only characters including ._+%&# with total length between 5 to 35 are allowed' },
                                (name) => {
                                    if (name && name.length < 5) return 'Atleast 5 characters required';
                                    return undefined;
                                },
                            ]}
                                validateOn="submit">
                                <TextInput placeholder="Enter your name" aria-label="name" name="name" type="name" />
                            </FormField>
                            <FormField label="Date" name="date" required validateOn="submit">
                                <DateInput name="date"
                                    format="dd/mm/yyyy"
                                    value={date}
                                    onChange={(event) => {
                                        setDate(event.value);
                                    }}
                                />
                            </FormField>
                            <FormField label="Time Slot" name="time_slot">
                                <TextInput name="time_slot" min="10" max="20" value="12" aria-label="time slot" type="number" />
                            </FormField>
                            <FormField label="Number of Guests" name="number_of_guests">
                                <TextInput name="number_of_guests" min="1" max="9" value="2" aria-label="Number of Guests" type="number" />
                            </FormField>
                            <FormField label="Phone Number" name="phone_number" required aria-label="phone number" validate={[
                                { regexp: /^[0-9]*$/, message: 'Only numbers are allowed' },
                                (number) => {
                                    if (number && number.length != 10) return 'Only 10-digits numbers are allowed';
                                    return undefined;
                                },
                            ]} placeholder="Enter 10-digits phone numbers" validateOn="change" />
                            <FormField label="Available Tables" aria-label="available tables" name="available_tables">
                                <Select placeholder="No preference" options={[1, 4, 5, 6, 7, 8, 9, 10, 11, 12]}></Select>
                            </FormField>
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Button data-testid="closebtn" size="small" label="Cancel" onClick={closeBook} id="close-book-btn" />
                                <Button type="submit" size="small" label="Book" />
                                {/* <Button href="/success_booking" type="submit" size="small" label="Book" /> */}
                            </Box>
                        </Form>
                    </Page>
                </Layer>
            )}
        </>
    );
}

export default Book;