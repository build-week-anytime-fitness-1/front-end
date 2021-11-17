import * as yup from 'yup'

const classSchema = yup.object().shape({
    class_name: yup
        .string()
        .trim()
        .required('Instructor name is required!'),
    type: yup
        .string()
        .required('Workout Type is Required'),
    time: yup
        .string()
        .required('Start time is required!'),
    attendance: yup
        .boolean(),
    duration: yup
        .number()
        .required('Duration is required'),
    intensity: yup
        .number()
        .required('Workout intensity is required'),
    location: yup
        .string()
        .required('Location is required'),
    date: yup
        .string()
        .required('A date is required'),
    max_class_size: yup
        .number()
        .required('A max class size is required'),
  })

  export default ClassSchema