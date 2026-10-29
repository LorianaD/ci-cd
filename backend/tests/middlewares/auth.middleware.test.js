import { test } from "node:test";
import assert from "node:assert/strict";
import jwt from "jsonwebtoken";

import authMiddleware from "../../src/middlewares/auth.middleware.js";

const secret = "test-secret-for-auth-middleware";
const originalSecret = process.env.JWT_SECRET;

test.before(() => {
    process.env.JWT_SECRET = secret;
});

test.after(() => {
    if (originalSecret === undefined) {
        delete process.env.JWT_SECRET;
    } else {
        process.env.JWT_SECRET = originalSecret;
    }
});

function createResponse() {
    return {
        statusCode: null,
        body: null,

        status(code) {
            this.statusCode = code;
            return this;
        },

        json(data) {
            this.body = data;
            return this;
        }
    };
}

test("rejects requests without a token", () => {
    const req = { headers: {} };
    const res = createResponse();

    let nextCalled = false;

    authMiddleware(req, res, () => {
        nextCalled = true;
    });

    assert.equal(res.statusCode, 401);
    assert.equal(res.body.error, "Token missing");
    assert.equal(nextCalled, false);
});

test("rejects invalid Bearer tokens", () => {
    const req = {
        headers: {
            authorization: "Bearer invalid-token"
        }
    };

    const res = createResponse();

    let nextCalled = false;

    authMiddleware(req, res, () => {
        nextCalled = true;
    });

    assert.equal(res.statusCode, 401);
    assert.equal(res.body.error, "Token invalid");
    assert.equal(nextCalled, false);
});

test("rejects malformed authorization headers", () => {
    const req = {
        headers: {
            authorization: "Basic invalid-token"
        }
    };

    const res = createResponse();

    let nextCalled = false;

    authMiddleware(req, res, () => {
        nextCalled = true;
    });

    assert.equal(res.statusCode, 401);
    assert.equal(res.body.error, "Token invalid");
    assert.equal(nextCalled, false);
});

test("accepts a valid JWT and sets req.user", () => {
    const token = jwt.sign(
        { sub: 1 },
        secret,
        { expiresIn: "7d" }
    );

    const req = {
        headers: {
            authorization: `Bearer ${token}`
        }
    };

    const res = createResponse();

    let nextCalled = false;

    authMiddleware(req, res, () => {
        nextCalled = true;
    });

    assert.equal(nextCalled, true);
    assert.equal(req.user.sub, 1);
    assert.equal(res.statusCode, null);
});