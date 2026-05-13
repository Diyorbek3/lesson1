class TodoList {
  constructor() {
    this._todos = [];
    this._nextId = 1;
  }
  add(text) {
    if (!text || text.trim() === '') throw new Error('Matn bo\'sh bo\'lishi mumkin emas');
    const todo = { id: this._nextId++, text: text.trim(), done: false };
    this._todos.push(todo);
    return todo;
  }
  count() { return this._todos.length; }
  isEmpty() { return this._todos.length === 0; }
  _find(id) {
    const todo = this._todos.find(t => t.id === id);
    if (!todo) throw new Error('Todo topilmadi');
    return todo;
  }
  complete(id) { this._find(id).done = true; }
  getAll() { return [...this._todos]; }
}
module.exports = TodoList;
