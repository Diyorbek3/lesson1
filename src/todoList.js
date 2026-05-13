// src/todoList.js
class TodoList {
  constructor() {
    this._todos = [];
    this._nextId = 1;
  }

  add(text) {
    if (!text || text.trim() === '') {
      throw new Error('Matn bo\'sh bo\'lishi mumkin emas');
    }
    const todo = { id: this._nextId++, text: text.trim(), done: false };
    this._todos.push(todo);
    return todo;
  }

  _find(id) {
    const todo = this._todos.find(t => t.id === id);
    if (!todo) throw new Error('Todo topilmadi');
    return todo;
  }

  remove(id) {
    this._find(id);
    this._todos = this._todos.filter(t => t.id !== id);
  }

  complete(id) {
    this._find(id).done = true;
  }

  update(id, text) {
    this._find(id).text = text;
  }

  getAll()       { return [...this._todos]; }
  getCompleted() { return this._todos.filter(t => t.done); }
  getPending()   { return this._todos.filter(t => !t.done); }
  clear()        { this._todos = []; this._nextId = 1; }
  count()        { return this._todos.length; }
  isEmpty()      { return this._todos.length === 0; }
}

module.exports = TodoList;
