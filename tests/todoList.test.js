// tests/todoList.test.js
const TodoList = require('../src/todoList');

describe('TodoList', () => {
  let list;

  beforeEach(() => {
    list = new TodoList();
  });

  // ─── QOSH ─────────────────────────────────────────
  describe('add()', () => {
    it('yangi todo qo\'shadi va id beradi', () => {
      const todo = list.add('Kitob o\'qish');
      expect(todo.id).toBeDefined();
      expect(todo.text).toBe('Kitob o\'qish');
      expect(todo.done).toBe(false);
    });
    it('bir nechta todo qo\'shiladi', () => {
      list.add('Birinchi'); list.add('Ikkinchi');
      expect(list.count()).toBe(2);
    });
    it('bo\'sh matn xato beradi', () => {
      expect(() => list.add('')).toThrow('Matn bo\'sh bo\'lishi mumkin emas');
    });
    it('har todo noyob id oladi', () => {
      const a = list.add('A'); const b = list.add('B');
      expect(a.id).not.toBe(b.id);
    });
  });

  // ─── O'CHIR ───────────────────────────────────────
  describe('remove()', () => {
    it('mavjud todo\'ni o\'chiradi', () => {
      const { id } = list.add('O\'chiriladi');
      list.remove(id);
      expect(list.count()).toBe(0);
    });
    it('yo\'q id xato beradi', () => {
      expect(() => list.remove(999)).toThrow('Todo topilmadi');
    });
  });

// ─── BAJARILDI ────────────────────────────────────
  describe('complete()', () => {
    it('done=true qiladi', () => {
      const { id } = list.add('Vazifa');
      list.complete(id);
      expect(list.getAll()[0].done).toBe(true);
    });
    it('yo\'q id xato beradi', () => {
      expect(() => list.complete(999)).toThrow('Todo topilmadi');
    });
  });
 // ─── YANGILASH ────────────────────────────────────
  describe('update()', () => {
    it('matnni yangilaydi', () => {
      const { id } = list.add('Eski matn');
      list.update(id, 'Yangi matn');
      expect(list.getAll()[0].text).toBe('Yangi matn');
    });
  });

  // ─── FILTRLASH ────────────────────────────────────
  describe('getCompleted() va getPending()', () => {
    it('bajarilganlarni qaytaradi', () => {
      const a = list.add('A'); list.add('B');
      list.complete(a.id);
      expect(list.getCompleted()).toHaveLength(1);
      expect(list.getPending()).toHaveLength(1);
    });
  });

// ─── HISOB VA HOLAT ───────────────────────────────
  describe('count() va isEmpty()', () => {
    it('bo\'sh listda isEmpty() true', () => {
      expect(list.isEmpty()).toBe(true);
    });
    it('qo\'shilgandan keyin isEmpty() false', () => {
      list.add('A');
      expect(list.isEmpty()).toBe(false);
    });
    it('count() to\'g\'ri hisoblaydi', () => {
      list.add('A'); list.add('B'); list.add('C');
      expect(list.count()).toBe(3);
    });
  });

  describe('clear()', () => {
    it('barcha todo\'larni o\'chiradi', () => {
      list.add('A'); list.add('B');
      list.clear();
      expect(list.count()).toBe(0);
    });
  });

});
