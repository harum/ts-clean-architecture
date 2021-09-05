import './style.css';
import User from '../../../lib/user/User';

const user = new User('John', 'Wick');
const app = document.querySelector('#app');

app.innerHTML = `
  <h1>Hello ${user.fullName}, welcome to Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
