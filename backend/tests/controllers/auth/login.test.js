import { test, mock } from "node:test";
import assert from "node:assert/strict";

let serviceResult;
let serviceError;

mock.module("../../../src/services/index.js", {
    exports: {
        loginService: async () => {
            if (serviceError) {
                throw serviceError;
            }

            return serviceResult;
        }
    }
});

const { default: loginController } = await import(
    "../../../src/controllers/auth/login.controller.js"
);

test.beforeEach(() => {
    serviceResult = null;
    serviceError = null;
});

test("POST /login returns 200 when login succeeds", async () => {
    serviceResult = { token: "fake-jwt-token" };

    const req = {
        body: {
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

    await loginController(req, res, next);

    assert.equal(statusCode, 200);
    assert.equal(responseBody.success, true);
    assert.equal(responseBody.message, "Connexion réussie");
    assert.deepEqual(responseBody.data, serviceResult);
});

test("POST /login forwards service errors to next", async () => {
    const expectedError = new Error("Identifiants incorrects");
    expectedError.status = 401;

    serviceError = expectedError;

    const req = {
        body: {
            email: "test@example.com",
            password: "wrong-password"
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

    await loginController(req, res, next);

    assert.equal(receivedError, expectedError);
});