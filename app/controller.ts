import type { Task } from "@prisma/client";
import { db } from "#/config/connection";
import { edge } from "#/config/mount";

export class Controller {
	async index() {
		const tasks = await db.$queryRaw`SELECT * FROM task`;
		const page = await edge.render("home", { tasks });

		return page;
	}

	async store(task: Task) {
		await db.task.create({
			data: { ...task }
		});

		return "Task created!";
	}
}

export const controller = new Controller();
