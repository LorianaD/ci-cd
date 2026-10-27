import { after, test } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import app from "../src/app.js";
import db from "../src/db/db.js";

after(async () => {
    await db.end();
})

test('GET /api return 200 and the message API OK', async () => {
  const response = await request (app).get("/api");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    message: "API OK"
  })
})


test("GET /api/tasks sans token retourne 401", async () => {
    const response = await request(app).get("/api/tasks");

    assert.equal(response.status, 401);
    assert.equal(response.body.succes, false);
    assert.equal(response.body.error, "Token maquant");
});

test("GET /api/tasks avec un token invalide retourne 401", async () => {
    const response = await request(app)
        .get("/api/tasks")
        .set("Authorization", "Bearer token-invalide");

    assert.equal(response.status, 401);
    assert.equal(response.body.succes, false);
    assert.equal(response.body.error, "Token invalise");
});
