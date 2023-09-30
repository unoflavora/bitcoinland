import Button from "../components/button";

import {Field, Formik} from "formik"

export default function Form()
{
    const formStyle = "border border-gray-200 rounded-md p-2";
    const formDivClass = "flex flex-col gap-1";

    
    return (
        <div className="w-full bg-[#F4F4F4] rounded-lg shadow py-12 lg:py-10 px-5 text-xs text-black md:text-base max-w-2xl">
            <Formik
                initialValues={{email: "", subject: "", category: "Collaboration", message: ""}}
                validate={values => {
                    const errors : {[key: string] : {}} = {};
                    var keys = Object.keys(values) as Array<keyof typeof values>;
                    keys.forEach(key => {
                        if(!values[key])
                        {
                            errors[key] = "*This field is required"
                        }
                    })

                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) 
                    {
                        errors.email = "Please enter valid email."
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);

                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => 
                    <form className="flex flex-col gap-3 lg:gap-8" onSubmit={handleSubmit}>
                        
                        <div className={formDivClass}>
                            <label htmlFor="subject">Subject*</label>
                            <input
                                className={formStyle}
                                type="text"
                                name="subject"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subject}
                                />
                            <p className="text-red-500">{errors.subject && touched.subject && errors.subject}</p>
                        </div>
                        <div className={formDivClass}>
                            <label htmlFor="email">Email*</label>
                            <input
                                className={formStyle}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
                        </div>



                        <div className={formDivClass}>
                            <label htmlFor="category">Category*</label>
                            <Field onChange={handleChange} onBlur={handleBlur} value={values.category} className={formStyle} name="category" as="select">
                                {["Payment", "Collaboration", "Others"].map((title, i) => <option value={title} key={title}>{title}</option>) }
                            </Field>
                            <p className="text-red-500">{errors.category && touched.category && errors.category}</p>
                        </div>
                    

                        <div className={formDivClass}>
                            <label htmlFor="pesan">Message*</label>
                            <Field onChange={handleChange} onBlur={handleBlur} value={values.message} className={formStyle + " h-24 lg:h-48"} name="pesan" as="textarea"/>
                            <p className="text-red-500">{errors.message && touched.message && errors.message}</p>
                        </div>

                        <button className="w-full bg-yellow text-black py-2 rounded-md font-semibold" type="submit" disabled={isSubmitting}>

                                Send
                        </button>

                       
                        
                    </form>}
            </Formik>

        </div>    
    )

}