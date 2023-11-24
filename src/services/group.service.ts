import groups from '../database/groups';
import Group from '../models/group.model';
import { BaseService } from './base.service';

export class GroupService extends BaseService<Group> {
	protected getThrowErrorDefault(id: number): string {
		return `Group with id ${id} not found`;
	}
}

export default new GroupService(groups) as GroupService;
