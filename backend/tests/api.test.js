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
