import { Link } from '@mui/material';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	wrapper: {
		padding: '50px 0',
		textAlign: 'center',
		width: '100%',
	},
});

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			&copy; {new Date().getFullYear()} Develop by{' '}
			<Link href='https://github.com/thangved' target='_blank'>
				Minh Thắng
			</Link>
		</div>
	);
}
