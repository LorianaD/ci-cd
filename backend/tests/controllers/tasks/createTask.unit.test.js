import { test, mock } from "node:test";
import assert from "node:assert/strict";

const expectedTask = {
    insertId: 1,
    affectedRows: 1
};

const calls = [];

mock.module("../../../src/services/index.js", {
    exports: {
        createTaskService: async (data) => {
            calls.push(data);
            return expectedTask;
        }
    }
});

const { default: createTask } = await import(
    "../../../src/controllers/tasks/createTask.controller.js"
);

test("creates a task and returns 201", async () => {
    const req = {
        body: {
            title: "Test task",
            description: "Task description",
            status: "pending"
        },
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

    await createTask(req, res, next);

    assert.equal(statusCode, 201);
    assert.deepEqual(responseBody, {
        success: true,
        message: "Task created successfully",
        data: expectedTask
    });

    assert.deepEqual(calls, [{
        title: "Test task",
        description: "Task description",
        status: "pending",
        userId: 1
    }]);
});