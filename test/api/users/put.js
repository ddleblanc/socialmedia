// process.env.NODE_ENV = "test";

// const expect = require("chai").expect;
// const request = require("supertest");

// const app = require("../../../app");
// const db = require("../../../db/index.js");

// const username = "name";

// describe("PUT /users", () => {
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
//     it("UPDATES a user", done => {
//       request(app)
//         .put(`/api/v1/users/${username}`)
//         .send({
//           username: "updatedName"
//         })
//         .then(res => {
//           const body = res.body;
//           expect(body).to.contain.property("_id");
//           expect(body).to.contain.property("username");
//           expect(body).to.contain.property("email");
//           expect(body).to.contain.property("createdAt");
//           expect(body.username).to.equal("updatedName");
//           done();
//         })
//         .catch(err => done(err));
//     });
//   });
// });
