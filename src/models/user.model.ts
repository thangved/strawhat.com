import Base from './base.model';
import Group from './group.model';
import Position from './position.model';

export default interface User extends Base {
	fullName: string;
	username: string;
	description: string;
	group: Group;
	position: Position;
}
