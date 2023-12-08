import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });

console.log("Deno server is running at http://localhost:3000/");

for await (const request of server) {
  request.respond({ body: "Hello, Deno!" });
}