import React, {useState} from "react";
import Note from "./Note";

// реализовать интерфейс заметок
// по кнопке + заметки должны добавляться
// заметки должны хранится в стейте компонента
// Note - компонент одной заметки
// заметки могут быть с одинаковыми названиями
// заметки должны удалятся по клику на Note
// заметки должны быть отсортированы по алфавиту
// количество заметок должно быть подсчитано в header
// 30 мин на реализацию

const App = () => {
    const [value, setValue] = useState("")
    const [state, setState] = useState([])
    const saveTask = () => {
        state.push(value)
        setState(state.sort())
        setValue("")
    }
    const onChangeInput = (e) => {
        setValue(e.currentTarget.value)
    }
    const deleteTask = (item) => {
        setState(state.filter(el => el !== item))
    }
    return (
        <>
            <div className="header">Notes list, total {state.length}</div>
            <div className="container">
                {/* button must add notes */}
                <div className="btn">
                    <button onClick={() => {
                        saveTask()
                    }}>+
                    </button>
                </div>
                <input
                    type="text"
                    onChange={onChangeInput}
                    value={value}
                    className="textInput"
                    autoFocus
                />
                {state.map(el => <Note item={el} deleteTask={deleteTask}/>)}
            </div>
        </>
    );
};

export default App;
