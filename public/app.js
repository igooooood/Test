class App {
  constructor() {
    this.form = null
    this.field = null
    this.caption = null
    this.addButton = null
    this.saveButton = null
    this.list = null

    this.todos = null

    this.init()
  }

  hideError = () => {
    if (this.caption.classList.contains('caption_show')) {
      this.caption.classList.remove('caption_show');
    }
  }

  addTodo = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:3000/todos', {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify(
        {
          "text": this.field.value
        }
      )
    })
    .then(response => {
      if (response.status === 201) {
        this.field.value = '';
        this.hideError();
        this.renderTodos();
      } else {
        response.json().then(error => {
          this.caption.innerText = `message: ${error.message}`;
          this.caption.classList.add('caption_show');
        });
      }
    })
  }

  getTodos = () => {
    return fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(response => {
        this.todos = response;
        console.log(this.todos);
      })
  }

  deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      "method": "DELETE",
      "headers": {
        "content-type": "application/json"
      }
    })
    .then(response => {
      if (response.status === 204) {
        this.renderTodos();
      }
    })
  }

  saveEditTodo = (e, id) => {
    e.preventDefault();

    fetch(`http://localhost:3000/todos/${id}`, {
      "method": "PUT",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify(
        {
          "text": this.field.value
        }
      )
    })
    .then(response => {
      if (response.status === 204) {
        this.field.value = '';
        this.hideError();
        this.renderTodos();
        this.addButton.classList.remove('button-add_hide');
        this.saveButton.classList.remove('button-save_show');
      } else {
        response.json().then(error => {
          this.caption.innerText = `message: ${error.message}`;
          this.caption.classList.add('caption_show');
        });
      }
    })
  }

  editTodo = ({id, text}) => {
    this.hideError();
    this.field.value = text;
    this.field.focus();
    this.saveButton.onclick=((e) => this.saveEditTodo(e, id));
    this.addButton.classList.add('button-add_hide');
    this.saveButton.classList.add('button-save_show');
  }

  renderTodos = () => {
    this.getTodos().then(() => {
      this.list.innerHTML = '';
      this.todos.map(item => {
        let listItem = document.createElement('li');
        listItem.className = "todo-list-item";
        listItem.setAttribute('data-id', item.id);
        listItem.innerHTML = item.text;
  
        let iconBtnDel = document.createElement('button');
        iconBtnDel.className = "icon-btn icon-btn_del";
        iconBtnDel.addEventListener('click', () => this.deleteTodo(item.id))
  
        let iconBtnEdit = document.createElement('button');
        iconBtnEdit.className = "icon-btn icon-btn_edit";
        iconBtnEdit.addEventListener('click', () => this.editTodo(item));
  
        listItem.append(iconBtnEdit);
        listItem.append(iconBtnDel);
  
  
        this.list.append(listItem);
      })
    })
  }

  init = () => {
    this.form = document.getElementById('form');
    this.field = document.getElementById("input");
    this.caption = document.getElementById("caption");
    this.list = document.getElementById("list");
    this.addButton = document.getElementById('add-item');
    this.saveButton = document.getElementById('save-item');

    this.addButton.addEventListener("click", this.addTodo);

    this.renderTodos();
  }
}

new App();
