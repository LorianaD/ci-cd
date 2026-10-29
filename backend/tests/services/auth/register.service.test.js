
import { test, mock } from "node:test";
import assert from "node:assert/strict";
import bcrypt from "bcrypt";

const queries = [];
let existingUsers = [];
let insertedId = 1;

const fakePool = {
    async execute(sql, params) {
        queries.push({ sql, params });

        if (sql.includes("SELECT id FROM users")) {
            return [existingUsers];
        }

        if (sql.includes("INSERT INTO users")) {
            return [{ insertId: insertedId }];
        }

        throw new Error("Unexpected SQL query");
    }
};

// Mock MySQL before importing the service
mock.module("../../../src/db/db.js", {
    exports: {
        default: fakePool
    }
});

const { default: registerService } = await import(
    "../../../src/services/auth/register.service.js"
);

test.beforeEach(() => {
    queries.length = 0;
    existingUsers = [];
    insertedId = 1;
});

test("register rejects missing required fields with 400", async () => {
    await assert.rejects(
        registerService({
            username: "",
            email: "test@example.com",
            password: "Password123!"
        }),
        { status: 400 }
    );

    assert.equal(queries.length, 0);
});

test("register rejects an existing email with 409", async () => {
    existingUsers = [{ id: 10 }];

    await assert.rejects(
        registerService({
            username: "TestUser",
            email: "test@example.com",
            password: "Password123!"
        }),
        { status: 409 }
    );

    assert.equal(queries.length, 1);
});

test("register creates a user with a hashed password", async () => {
    const user = await registerService({
        username: "TestUser",
        email: "test@example.com",
        password: "Password123!"
    });

    assert.equal(user.id, 1);
    assert.equal(user.username, "TestUser");
    assert.equal(user.email, "test@example.com");
    assert.ok(user.created_at instanceof Date);

    assert.equal(queries.length, 2);

    const insertQuery = queries[1];

    assert.match(insertQuery.sql, /INSERT INTO users/);

    const hashedPassword = insertQuery.params[2];

    assert.notEqual(hashedPassword, "Password123!");

    assert.equal(
        await bcrypt.compare("Password123!", hashedPassword),
        true
    );

    assert.equal(
        Object.hasOwn(user, "password"),
        false
    );
});
