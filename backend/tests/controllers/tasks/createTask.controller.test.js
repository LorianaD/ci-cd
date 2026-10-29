import { after, test } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import app from "../../../src/app.js";
import { pool as db } from "../../../src/db/index.js";

after(async () => {
    await db.end();
})

test("POST /api/tasks without token returns 401", async () => {
    const response = await request(app)
        .post("/api/tasks")
        .send({
            title: "Test task",
            description: "Task created during testing"
        });

    assert.equal(response.status, 401);
    assert.deepEqual(response.body, {
        success: false,
        error: "Token missing"
    });
});

test("POST /api/tasks with invalid token returns 401", async () => {
    const response = await request(app)
        .post("/api/tasks")
        .set("Authorization", "Bearer invalid-token")
        .send({
            title: "Test task",
            description: "Task created during testing"
        });

    assert.equal(response.status, 401);
    assert.deepEqual(response.body, {
        success: false,
        error: "Token invalid"
    });
});