import { chopperImage, luffyImage, namiImage, robinImage, sanjiImage, usoppImage, zoroImage } from '../assets/images';
import User from '../models/user.model';
import groups from './groups';
import positions from './positions';

const users: User[] = [
	{
		id: 1,
		fullName: 'Luffy',
		description: 'Thuyền trưởng băng Mũ Rơm',
		username: 'luffy',
		image: luffyImage,
		group: groups[0],
		position: positions[0],
	},
	{
		id: 2,
		fullName: 'Nami',
		description: 'Hoa tiêu của băng Mũ Rơm',
		username: 'nami',
		image: namiImage,
		group: groups[0],
		position: positions[1],
	},
	{
		id: 3,
		fullName: 'Zoro',
		description: 'Người chỉ đường',
		username: 'zoro',
		image: zoroImage,
		group: groups[1],
		position: positions[2],
	},
	{
		id: 4,
		fullName: 'Usopp',
		description: 'Sogeking :))',
		username: 'usopp',
		image: usoppImage,
		group: groups[1],
		position: positions[3],
	},
	{
		id: 5,
		fullName: 'Robin',
		description: 'Nhà khảo cổ học',
		username: 'robin',
		image: robinImage,
		group: groups[1],
		position: positions[3],
	},
	{
		id: 6,
		fullName: 'Sanji',
		description: 'Đầu bếp băng Mũ Rơm',
		username: 'sanji',
		image: sanjiImage,
		group: groups[2],
		position: positions[2],
	},
	{
		id: 7,
		fullName: 'Chopper',
		description: 'Bác sĩ băng Mũ Rơm',
		username: 'chopper',
		image: chopperImage,
		group: groups[2],
		position: positions[3],
	},
];

export default users;
