import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from 'prop-types';

const CoursePage = (props) => {
    
    const [course, setCourse] = useState({
        title: "",
    });

    const handleChange = (event) => {
        const newCourse = { ...course, title: event.target.value};
        setCourse(newCourse)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //This prevents the page from 'posting back'.
        props.dispatch(courseActions.createCourse(course))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Courses</h1>
            <h4>Add Course</h4>
            <input
                type='text'
                onChange={handleChange}
                value={course.title}
            />
            <input 
                type="submit"
                value="Save"
            />
            {props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
        </form>
    )
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
}


export default connect(
    mapStateToProps
    )(CoursePage);