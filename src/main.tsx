import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(243, 53, 53)',
		},
	},
	shape: {
		borderRadius: 0,
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
