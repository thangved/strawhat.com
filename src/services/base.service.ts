import Base from '../models/base.model';

export class BaseService<T extends Base = Base> {
	constructor(private readonly objects: T[]) {}

	protected getThrowErrorDefault(id: number): string {
		return `Object with id ${id} not found`;
	}

	public getAll(): T[] {
		return this.objects;
	}

	public getById(id: number, getThrowError = this.getThrowErrorDefault): Base {
		const object = this.objects.find((object) => object.id === id);

		if (!object) {
			throw new Error(getThrowError(id));
		}

		return object;
	}
}

export default new BaseService([]) as BaseService<Base>;
