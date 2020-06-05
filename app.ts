import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./src/routes/index.ts";

const port = Deno.env.get("PORT") || 5000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Application running on http://localhost:${port}`);

await app.listen({ port: +port });
