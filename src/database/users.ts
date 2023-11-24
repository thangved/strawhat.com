import User from '../models/user.model';
import groups from './groups';
import positions from './positions';

const users: User[] = [
	{
		id: 1,
		fullName: 'Luffy',
		description: 'Thuyền trưởng băng Mũ Rơm',
		username: 'luffy',
		group: groups[0],
		position: positions[0],
	},
	{
		id: 2,
		fullName: 'Nami',
		description: 'Hoa tiêu của băng Mũ Rơm',
		username: 'nami',
		group: groups[0],
		position: positions[1],
	},
	{
		id: 3,
		fullName: 'Zoro',
		description: 'Thuyền phó băng Mũ Rơm',
		username: 'zoro',
		group: groups[2],
		position: positions[3],
	},
	{
		id: 4,
		fullName: 'Usopp',
		description: 'Sogeking :))',
		username: 'usopp',
		group: groups[2],
		position: positions[4],
	},
	{
		id: 5,
		fullName: 'Robin',
		description: 'Nhà khảo cổ học',
		username: 'robin',
		group: groups[2],
		position: positions[4],
	},
	{
		id: 6,
		fullName: 'Sanji',
		description: 'Đầu bếp băng Mũ Rơm',
		username: 'sanji',
		group: groups[3],
		position: positions[3],
	},
	{
		id: 7,
		fullName: 'Chopper',
		description: 'Bác sĩ băng Mũ Rơm',
		username: 'chopper',
		group: groups[2],
		position: positions[5],
	},
];

export default users;
