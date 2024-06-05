import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Router } from "#/start/routes";

export const App = new Hono();

App.use("*", serveStatic({ root: "./public" }));
App.route("/", Router(App));
