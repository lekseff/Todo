import { useState, useCallback } from 'react';
import TaskItem from '../src/components/TaskItem/TaskItem';
import Form from '../src/components/Form/Form';
import TaskList from '../src/components/TaskList/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Список задач
  const [inputValue, setInputValue] = useState(''); // Состояние поля ввода

  /**
   * Добавляет задачу в список
   * @param {*} text - текст задачи
   */
  const addTodo = (text) => {
    const task = {
      id: Date.now(),
      content: text,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
  };

  /**
   * Удаляет задачу
   * @param {*} id - id задачи
   */
  const removeTodo = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  /**
   * Изменение состояния выполнено
   * @param {*} id
   */
  const changeCompleted = useCallback(
    (id) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      });
      setTasks(() => newTasks);
    },
    [tasks]
  );

  /**
   * Редактирование задачи
   */
  const editTodo = useCallback(
    (id) => {
      const task = tasks.find((task) => task.id === id);
      setInputValue(task.content);
      removeTodo(id);
    },
    [tasks, removeTodo]
  );

  /**
   * Рендерит элемент todo
   */
  const renderTodo = useCallback(
    (item) => (
      <TaskItem
        task={item}
        key={item.id}
        editTodo={editTodo}
        removeTodo={removeTodo}
        changeCompleted={changeCompleted}
      />
    ),
    [editTodo, removeTodo, changeCompleted]
  );

  console.log('tasks', tasks);

  return (
    <div className='container'>
      <div className='todo'>
        <h1 className='todo__title'>Todo List</h1>
        <Form
          addTodo={addTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TaskList renderTodo={renderTodo} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
