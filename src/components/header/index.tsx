import { GitHub } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	wrapper: {
		width: '100%',
		height: 64,
		backgroundColor: '#fafafa',
		borderBottom: '1px solid #e0e0e0',
		display: 'flex',
		alignItems: 'center',
		padding: '0 16px',
		position: 'sticky',
		top: 0,
		zIndex: 100,
		justifyContent: 'space-between',
	},
	brand: {
		margin: '0',
		fontSize: 18,
	},
});

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<h1 className={classes.brand}>Công ty Strawhat</h1>

			<Link href='https://github.com/thangved/strawhat.com' target='_blank'>
				<Button startIcon={<GitHub />}>Github</Button>
			</Link>
		</div>
	);
}
