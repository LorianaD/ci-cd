import { after, test } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import app from "../../../src/app.js";
import { pool as db } from "../../../src/db/index.js";

after(async () => {
    await db.end();
})

test("GET /api/tasks without token return 401", async () => {
    const response = await request(app).get("/api/tasks");

    assert.equal(response.status, 401);
    assert.equal(response.body.success, false);
    assert.equal(response.body.error, "Token missing");
});

test("GET /api/tasks without token invalid return 401", async () => {
    const response = await request(app)
        .get("/api/tasks")
        .set("Authorization", "Bearer token-invalid");

    assert.equal(response.status, 401);
    assert.equal(response.body.success, false);
    assert.equal(response.body.error, "Token invalid");
});