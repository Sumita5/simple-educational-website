import React from 'react';

const Courses = (props) => {

    const { title, price, image, instructor, duration, language} = props.course;
    // console.log(props.course);
    return (
        <div className="col-md-4">
            <div className="single-item my-4">
                <div className="card p-2">
                    <img className="card-img-top img-height" src={image} alt={title} />
                    <div className="card-body">
                        <hr/>
                        <h3 className="card-title line-height">{title}</h3>
                        <small className="text-muted">Instructor : {instructor}</small><br/>
                        <small className="text-muted">Duration : {duration}</small>
                        <br/>
                        <small className="text-muted">Language : {language}</small>
                        <h4>${price}</h4>
                        <button className="btn btn-sm btn-warning"
                            onClick={() => props.addToEnroll(props.course)} >Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
