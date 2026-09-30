import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "tanstack-hono",
		compatibilityDate: "2026-09-29",
		entrypoint: "./worker/index.ts",
		assets: {
			notFoundHandling: "single-page-application",
			runWorkerFirst: [
				"/api/*",
			],
		},
	},
});
