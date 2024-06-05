import { App } from "#/config/app";
import { logger } from "#/bin/console";

Bun.serve({
	port: 3333,
	fetch: App.fetch
});

logger.info("Server Http is running on port 3333");
