import { test, mock } from "node:test";
import assert from "node:assert/strict";

const expectedTasks = [
    {
        id: 1,
        title: "Test task",
        description: "Task description",
        status: "pending",
        user_id: 1
    }
];

const calls = [];

mock.module("../../../src/services/index.js", {
    namedExports: {
        getAllTasksService: async (userId) => {
            calls.push(userId);
            return expectedTasks;
        }
    }
});

const { default: getAllTasks } = await import(
    "../../../src/controllers/tasks/getAllTasks.controller.js"
);

test("retrieves user tasks and returns 200", async () => {
    const req = {
        user: { sub: 1 }
    };

    let statusCode;
    let responseBody;

    const res = {
        status(code) {
            statusCode = code;
            return this;
        },
        json(body) {
            responseBody = body;
            return this;
        }
    };

    const next = (error) => {
        throw error;
    };

    await getAllTasks(req, res, next);

    assert.equal(statusCode, 200);

    assert.deepEqual(responseBody, {
        success: true,
        message: "Tasks retrieved successfully",
        data: expectedTasks
    });

    assert.deepEqual(calls, [1]);
});