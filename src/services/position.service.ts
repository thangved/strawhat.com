import positions from '../database/positions';
import Position from '../models/position.model';
import { BaseService } from './base.service';

class PositionService extends BaseService<Position> {
	protected getThrowErrorDefault(id: number): string {
		return `Position with id ${id} not found`;
	}
}

export default new PositionService(positions) as PositionService;
