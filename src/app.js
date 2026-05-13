// src/app.js
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];
let nextId = 1;

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === +req.params.id);
  if (!todo) return res.status(404).json({ error: 'Topilmadi' });
  res.json(todo);
});

app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim())
    return res.status(400).json({ error: 'Matn kerak' });
  const todo = { id: nextId++, text: text.trim(), done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === +req.params.id);
  if (!todo) return res.status(404).json({ error: 'Topilmadi' });
  if (req.body.text !== undefined) todo.text = req.body.text;
  if (req.body.done !== undefined) todo.done = req.body.done;
  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  const idx = todos.findIndex(t => t.id === +req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Topilmadi' });
  todos.splice(idx, 1);
  res.status(204).send();
});

module.exports = { app, reset: () => { todos = []; nextId = 1; } };

