import { test, mock } from "node:test";
import assert from "node:assert/strict";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const testSecret = "test-secret-for-login-tests";
process.env.JWT_SECRET = testSecret;

let users = [];
const queries = [];

const fakePool = {
    async execute(sql, params) {
        queries.push({ sql, params });

        if (sql.includes("SELECT * FROM users")) {
            return [users];
        }

        throw new Error("Unexpected SQL query");
    }
};

mock.module("../../../src/db/db.js", {
    exports: {
        default: fakePool
    }
});

const { default: loginService } = await import(
    "../../../src/services/auth/login.service.js"
);

test.beforeEach(() => {
    users = [];
    queries.length = 0;
});

test("login rejects missing credentials with 400", async () => {
    await assert.rejects(
        loginService("", ""),
        { status: 400 }
    );

    assert.equal(queries.length, 0);
});

test("login rejects unknown users with 401", async () => {
    await assert.rejects(
        loginService("unknown@example.com", "Password123!"),
        { status: 401 }
    );

    assert.equal(queries.length, 1);
});

test("login rejects incorrect passwords with 401", async () => {
    users = [{
        id: 1,
        email: "test@example.com",
        password: await bcrypt.hash("Password123!", 10)
    }];

    await assert.rejects(
        loginService("test@example.com", "WrongPassword"),
        { status: 401 }
    );
});

test("login returns a valid JWT for correct credentials", async () => {
    users = [{
        id: 1,
        email: "test@example.com",
        password: await bcrypt.hash("Password123!", 10)
    }];

    const result = await loginService(
        "test@example.com",
        "Password123!"
    );

    assert.equal(typeof result.token, "string");

    const decoded = jwt.verify(result.token, testSecret);

    assert.equal(decoded.sub, 1);
    assert.equal(decoded.exp - decoded.iat, 7 * 24 * 60 * 60);
});
