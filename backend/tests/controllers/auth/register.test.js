import { test, mock } from "node:test";
import assert from "node:assert/strict";

let serviceResult;
let serviceError;

test('POST /register returns 201 when registration succeeds', async () => {
    const expectedUser = {
        id: 1,
        username: "TestUser",
        email: "test@example.com",
        created_at: new Date()
    };

    serviceResult = expectedUser;
    serviceError = null;

    mock.module("../../../src/services/auth/register.service.js", {
        exports: {
            default: async () => {
                if (serviceError) {
                    throw serviceError;
                }

                return serviceResult;
            }
        }
    });

    const { default: registerController } = await import(
        "../../../src/controllers/auth/register.controller.js"
    );

    const req = {
        body: {
            username: "TestUser",
            email: "test@example.com",
            password: "Password123!"
        }
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

    await registerController(req, res, next);

    assert.equal(statusCode, 201);
    assert.equal(responseBody.success, true);
    assert.equal(responseBody.message, "Inscription reussite");
    assert.deepEqual(responseBody.data, expectedUser);
});


test("POST /register forwards service errors to next", async () => {
    const expectedError = new Error("Registration failed");

    serviceError = expectedError;
    
    const { default: registerController } = await import(
        "../../../src/controllers/auth/register.controller.js"
    );

    const req = {
        body: {
            username: "TestUser",
            email: "test@example.com",
            password: "Password123!"
        }
    };

    const res = {
        status() {
            throw new Error("Response should not be sent");
        },
        json() {
            throw new Error("Response should not be sent");
        }
    };

    let receivedError;

    const next = (error) => {
        receivedError = error;
    };

    await registerController(req, res, next);

    assert.equal(receivedError, expectedError);
});