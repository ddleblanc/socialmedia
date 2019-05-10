// process.env.NODE_ENV = "test";

// const expect = require("chai").expect;
// const request = require("supertest");

// const app = require("../../../app");
// const db = require("../../../db/index.js");

// describe("POST /comments", () => {
//   before(done => {
//     db.connect()
//       .then(() => done())
//       .catch(err => done(err));
//   });

//   after(done => {
//     db.close()
//       .then(() => done())
//       .catch(err => done(err));
//   });

//   describe("NORMAL BEHAVIOR", () => {
//     it("ADDS a comment to a post", done => {
//       request(app)
//         .post("/api/v1/posts")
//         .send({
//           username: "name",
//           email: "name@gmail.com",
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body).to.contain.property("_id");
//           expect(body).to.contain.property("username");
//           expect(body).to.contain.property("email");
//           expect(body).to.contain.property("createdAt");
//           done();
//         })
//         .catch(err => done(err));
//     });
//   });

//   describe("USERNAME VALIDATION", () => {
//     it("FAILS to create a new user - username is required", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           email: "name@gmail.com",
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.username.name).to.equal("ValidatorError");
//           expect(body.errors.username.message).to.equal(
//             "Your username cannot be blank."
//           );
//           expect(body.errors.username.kind).to.equal("required");
//           done();
//         })
//         .catch(err => done(err));
//     });
//     it("FAILS to create a new user - username = null", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           username: null,
//           email: "name@gmail.com",
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.username.name).to.equal("ValidatorError");
//           expect(body.errors.username.message).to.equal(
//             "Your username cannot be blank."
//           );
//           done();
//         })
//         .catch(err => done(err));
//     });
//     it("FAILS to create a new user - username must be at least 2 characters.", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           username: "d",
//           email: "name@gmail.com",
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.username.name).to.equal("ValidatorError");
//           expect(body.errors.username.message).to.equal(
//             "Username must be at least 2 characters."
//           );
//           done();
//         })
//         .catch(err => done(err));
//     });
//   });
//   describe("EMAIL VALIDATION", () => {
//     it("FAILS to create a new user - email required.", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           username: "dd",
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.email.name).to.equal("ValidatorError");
//           expect(body.errors.email.message).to.equal(
//             "Path `email` is required."
//           );
//           expect(body.errors.email.kind).to.equal("required");
//           done();
//         })
//         .catch(err => done(err));
//     });
//     it("FAILS to create a new user - no valid email provided.", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           username: "dd",
//           email: "invalidEmail",
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.email.name).to.equal("ValidatorError");
//           expect(body.errors.email.message).to.equal(
//             "Please enter a valid email."
//           );
//           done();
//         })
//         .catch(err => done(err));
//     });
//     it("FAILS to create a new user - email is null.", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           username: "dd",
//           email: null,
//           password: "password"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.email.name).to.equal("ValidatorError");
//           expect(body.errors.email.message).to.equal(
//             "Path `email` is required."
//           );
//           expect(body.errors.email.kind).to.equal("required");
//           done();
//         })
//         .catch(err => done(err));
//     });
//   });
//   describe("PASSWORD VALIDATION", () => {
//     it("FAILS to create a new user - password required.", done => {
//       request(app)
//         .post("/api/v1/users")
//         .send({
//           username: "dd",
//           email: "username@gmail.com"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body.errors.hashedPassword.name).to.equal("ValidatorError");
//           expect(body.errors.hashedPassword.message).to.equal(
//             "Path `hashedPassword` is required."
//           );
//           expect(body.errors.hashedPassword.kind).to.equal("required");
//           done();
//         })
//         .catch(err => done(err));
//     });
//   });
// });
