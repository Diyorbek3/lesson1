const TodoList = require('../src/todoList');
describe('TodoList', () => {
  let list;
  beforeEach(() => { list = new TodoList(); });
  it('yangi todo qo\'shadi', () => {
    const todo = list.add('Docker o\'rganish');
    expect(todo.text).toBe('Docker o\'rganish');
    expect(list.count()).toBe(1);
  });
});
