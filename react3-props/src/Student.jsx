
/* boolean works different so you need to use in order
log something */
function Student(props) {
    return(
        <div className="student" >
            <p> Name: {props.name} </p>
            <p> Age: {props.age} </p>
            <p> Fighter: {props.fighter? "Yes!": "No:("} </p>
        </div>
    );
}

export default Student









