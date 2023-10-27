import { example } from '@/js/example';
import '@/styles/index.scss';

const header = document.createElement('h1');
header.textContent = example();

const app = document.querySelector('#root');
app.append(header);
