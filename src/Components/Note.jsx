import React from "react";

const Note = props => {
    const {item, ...restProps} = props;
    const deleteTask = (item) => {
        props.deleteTask(item)
    }
    return (
        <div onClick={() => deleteTask(item)} {...restProps} className="note">
            {item || ""}
        </div>
    );
};

export default Note;
