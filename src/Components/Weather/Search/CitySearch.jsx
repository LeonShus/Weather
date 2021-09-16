import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'

const CitySearch = (props) => {
    return (
        <div>
            {['Moscow', 'Odesa', 'London', 'Paris'].map((city, index) => <button key={index} onClick={() => props.changeCity(city)}>{city}</button>)}
            <Formik
                initialValues= {{
                    city : '',
                }}
                validationSchema={Yup.object({
                    city: Yup.string().max(15, 'To long').matches(/^[aA-zZ\s]+$/, "Only alphabets")
                })}

                onSubmit={values => {
                    props.changeCity(values.city)
                }}
            >
                <Form>
                    <Field
                        name='city'
                        placeholder='Enter your city'
                        type='input'
                    />
                    <ErrorMessage name='city'/>
                    <button type='submit' >Search</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CitySearch