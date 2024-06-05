import type { Hono } from "hono";
import { controller } from "#/app/controller";

export const Router = (Route: Hono) => {
	Route.get("/", async (context) => {
		const page = controller.index();

		return context.html(page, 200);
	});

	Route.post("/", async (context) => {
		const task = await context.req.json();
		await controller.store(task);

		return context.body(null, 201);
	});

	return Route;
};
