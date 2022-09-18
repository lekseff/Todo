import React from 'react';

function Form({ inputValue, setInputValue, addTodo }) {
  /**
   * Добавляет задачу
   * @param {*} event - объект события
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(inputValue.trim());
    setInputValue('');
  };

  return (
    <form className='todo__form form' onSubmit={handleSubmit}>
      <label htmlFor='task' aria-label='Text input field'></label>
      <input
        className='form__field'
        value={inputValue}
        name='task'
        type='text'
        id='task'
        placeholder='Enter the task'
        required
        maxLength='256'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='form__button' aria-label='Add button'></button>
    </form>
  );
}

export default React.memo(Form);
