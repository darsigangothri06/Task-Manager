import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className="todo-app">
        <TodoList />
      </div>
      <h1 className='footer'>{'< '}Developed by Gangothri{' />'}</h1>
    </>
  );
}

export default App;
