import { serve } from "https://deno.land/std@0.195.0/http/server.ts";

const handler = (req: Request): Response => {
  const url = new URL(req.url);
  if (url.pathname === "/") {
    return new Response("Hello, Deno!", { status: 200 });
  }
  return new Response("Not Found", { status: 404 });
};

console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });
