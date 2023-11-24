import users from '../database/users';
import User from '../models/user.model';
import { BaseService } from './base.service';

class UserService extends BaseService<User> {
	protected getThrowErrorDefault(id: number): string {
		return `User with id ${id} not found`;
	}
}

export default new UserService(users) as UserService;
