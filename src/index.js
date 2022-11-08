import {createRoot} from 'react-dom/client';
import App from './App';
import './shared/styles/vendors/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
