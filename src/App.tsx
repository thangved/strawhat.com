import { Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from './components/header';
import userService from './services/user.service';

const useStyles = createUseStyles({
	wrapper: {},
});

const groups = userService.getUsersGroupByGroups();

function App() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Header />

			<Container>
				<Typography component='h2' fontWeight={700} fontSize={24} margin='10px 0'>
					Giới thiệu công ty
				</Typography>

				{groups.map((group) => (
					<React.Fragment key={group.id}>
						<Typography component='h3' fontWeight={700} fontSize={20} margin='10px 0'>
							{group.name}
						</Typography>
						<Grid container spacing={2}>
							{group.users.map((user) => (
								<Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
									<Card variant='outlined'>
										<CardMedia
											image={user.image}
											sx={{
												height: 200,
											}}
										/>
										<CardContent>
											<Typography
												component='div'
												fontWeight={700}
												fontSize={16}
												margin='10px 0'
												display='flex'
												gap={1}
												alignItems='center'
											>
												<Chip
													label={user.position.name}
													color='primary'
													variant='outlined'
													size='small'
												/>
												{user.fullName}
											</Typography>

											<Typography component='p' fontWeight={400} fontSize={14} margin='10px 0'>
												{user.description}
											</Typography>
										</CardContent>
										<CardActions>
											<Button variant='contained' onClick={() => setActiveId(user.id)}>
												Learn More
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</React.Fragment>
				))}
			</Container>
		</div>
	);
}

export default App;
