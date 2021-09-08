import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';
import { addList, isComplete, isCompleted, isDelete } from './actions/list'
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);
  const myTodoList = useSelector((state) => state.listReducer)

  let lastIndexList = myTodoList.length ? myTodoList[myTodoList.length - 1].id : 0;

  let data = {
    id: lastIndexList + 1,
    label: "",
    isComplete: false
  }
  const myInput = useRef(null);
  const addListHandler = () => {
    data.label = myInput.current.value;
    myInput.current.value = "";
    dispatch(addList(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/cart">
          Cart Demo
        </Link>
        <div className="box-wrapper">
          <a href="#link" onClick={() => dispatch(incNumber())}>+</a>
          <div name="counter_input" className="input" value="0" >{myState}  </div>
          <a href="#link" onClick={() => dispatch(decNumber())}>-</a>
        </div>
        <input ref={myInput} type="text" />
        <button onClick={() => addListHandler()}>add</button>
        <ul>
          {
            myTodoList.map((item, index) => {
              return (
                <li key={index}>
                  {item.label}

                  {!item.isComplete && <button onClick={() => dispatch(isComplete(item))}>Complete</button>}
                  {item.isComplete && <button onClick={() => dispatch(isCompleted(item))}>Completed</button>}
                  {item.isComplete && <button onClick={() => dispatch(isDelete(item))}>Delete</button>}

                </li>
              )
            })
          }
        </ul>


      </header>
    </div>
  );
}

export default App;

