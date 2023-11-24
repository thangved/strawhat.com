import users from '../database/users';
import Group from '../models/group.model';
import User from '../models/user.model';
import { BaseService } from './base.service';
import groupService from './group.service';

class UserService extends BaseService<User> {
	constructor(users: User[]) {
		super(users);
	}

	protected getThrowErrorDefault(id: number): string {
		return `User with id ${id} not found`;
	}

	public getUsersGroupByGroups(): Array<Group & { users: User[] }> {
		const groups = groupService.getAll();
		const users = this.getAll();

		const result = [];

		for (const group of groups) {
			const usersInGroup = users.filter((user) => user.group.id === group.id);

			result.push({
				...group,
				users: usersInGroup,
			});
		}

		return result;
	}
}

export default new UserService(users) as UserService;
