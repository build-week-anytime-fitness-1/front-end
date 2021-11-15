Note: I will flesh this out a bit better later.


Registration:
https://build-week-anytime-fitness-1.herokuapp.com/api/auth/register

(Instructor registration) formValues:{
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    role_id: 1    
}

(Client registration) formValues: {
    first_name: '',
    last_name: '',
    username: '',
    password: ''    
}

Login: (not yet functional)
https://build-week-anytime-fitness-1.herokuapp.com/api/auth/login

(login) formValues: {
    username: '',
    password: ''
}

Create/edit class: (not yet functional)
https://build-week-anytime-fitness-1.herokuapp.com/api/classes

(Create class) formValues: {
    class_name: '',
    type: '',
    instructor_id: integer,
    time: '',        // (12:00:00 format ('time' type on form) for submission)
    date: '',        // (2021-10-08 format ('date' type on form) for submission)
    duration: integer,
    intensity: integer,
    location: '',
    max_class_size: integer,
    }
