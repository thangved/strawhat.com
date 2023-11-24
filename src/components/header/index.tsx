import { GitHub } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { logoImage } from '../../assets/images';

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
		fontWeight: 700,
	},
	brand: {
		margin: '0',
		fontSize: 24,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	},
	logo: {
		width: 48,
	},
});

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.brand}>
				<img src={logoImage} alt='Logo' className={classes.logo} /> Strawhat
			</div>

			<Link href='https://github.com/thangved/strawhat.com' target='_blank'>
				<Button startIcon={<GitHub />}>Github</Button>
			</Link>
		</div>
	);
}
