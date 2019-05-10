process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../../app");
const db = require("../../../db/index.js");

const password = 'password';

describe("POST /users", () => {
    before(done => {
        db.connect()
            .then(() => done())
            .catch(err => done(err));
    });

    after(done => {
        db.close()
            .then(() => done())
            .catch(err => done(err));
    });

    describe("NORMAL BEHAVIOR", () => {
        it("CREATES a new user", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: "name",
                    email: "name@gmail.com",
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    console.log(body)
                    expect(body.createdUser).to.contain.property("username");
                    expect(body.createdUser).to.contain.property("_id");
                    expect(body.createdUser).to.contain.property("email");
                    expect(body.createdUser).to.contain.property("createdAt");
                    expect(body.createdUser.username).to.equal("name");
                    expect(body.createdUser.email).to.equal("name@gmail.com");
                    expect(body.createdUser).to.not.contain.property("hashedPassword");
                    done();
                })
                .catch(err => done(err));
        });
    });



    describe("USERNAME VALIDATION", () => {
        it("FAILS to create a new user - username is required", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    email: "name@gmail.com",
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.username.name).to.equal("ValidatorError");
                    expect(body.errors.username.message).to.equal(
                        "Your username cannot be blank."
                    );
                    expect(body.errors.username.kind).to.equal("required");
                    done();
                })
                .catch(err => done(err));
        });
        it("FAILS to create a new user - username = null", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: null,
                    email: "name@gmail.com",
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.username.name).to.equal("ValidatorError");
                    expect(body.errors.username.message).to.equal(
                        "Your username cannot be blank."
                    );
                    done();
                })
                .catch(err => done(err));
        });
        it("FAILS to create a new user - username must be at least 2 characters.", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: "d",
                    email: "name@gmail.com",
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.username.name).to.equal("ValidatorError");
                    expect(body.errors.username.message).to.equal(
                        "Username must be at least 2 characters."
                    );
                    done();
                })
                .catch(err => done(err));
        });
    });
    describe("EMAIL VALIDATION", () => {
        it("FAILS to create a new user - email required.", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: "dd",
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.email.name).to.equal("ValidatorError");
                    expect(body.errors.email.message).to.equal(
                        "Path `email` is required."
                    );
                    expect(body.errors.email.kind).to.equal("required");
                    done();
                })
                .catch(err => done(err));
        });
        it("FAILS to create a new user - no valid email provided.", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: "d",
                    email: "invalid",
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.email.name).to.equal("ValidatorError");
                    expect(body.errors.email.message).to.equal(
                        "Please enter a valid email."
                    );
                    done();
                })
                .catch(err => done(err));
        });
        it("FAILS to create a new user - email is null.", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: "d",
                    email: null,
                    password: password
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.email.name).to.equal("ValidatorError");
                    expect(body.errors.email.message).to.equal(
                        "Path `email` is required."
                    );
                    expect(body.errors.email.kind).to.equal("required");
                    done();
                })
                .catch(err => done(err));
        });
    });
    describe("PASSWORD VALIDATION", () => {
        it("FAILS to create a new user - password required.", done => {
            request(app)
                .post("/api/v1/users")
                .field('user', JSON.stringify({
                    username: "d",
                    email: "name@gmail.com"
                }))
                .attach('photo', 'test/api/users/photo.jpg')
                .then(res => {
                    const body = res.body;
                    expect(body.errors.hashedPassword.name).to.equal("ValidatorError");
                    expect(body.errors.hashedPassword.message).to.equal(
                        "Path `hashedPassword` is required."
                    );
                    expect(body.errors.hashedPassword.kind).to.equal("required");
                    done();
                })
                .catch(err => done(err));
        });
    });
});
