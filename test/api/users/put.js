process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../../app");
const db = require("../../../db/index.js");

let userId;
let token;

describe("PUT /users", () => {
    before(done => {
        db.connect()
            .then(() => {
                request(app)
                    .post("/api/v1/users")
                    .field('user', JSON.stringify({
                        username: "name",
                        email: "name@gmail.com",
                        password: "password"
                    }))
                    .attach('photo', 'test/api/users/photo.jpg')
                    .then(res => {
                        userId = res.body.createdUser._id;
                        request(app)
                            .post("/api/v1/auth/name")
                            .send({
                                username: "name",
                                password: "password"
                            })
                            .then(res => {
                                token = res.body.token;
                                done()
                            })
                            .catch(err => done(err));
                    })
                    .catch(err => done(err));
            });
    });

    after(done => {
        db.close()
            .then(() => done())
            .catch(err => done(err));
    });

    describe("NORMAL BEHAVIOR", () => {
        it("UPDATES a user", done => {
            request(app)
                .put(`/api/v1/users/${userId}`)
                .set('Authorization', token)
                .send({
                    username: "updatedName"
                })
                .then(res => {
                    const updatedUser = res.body.user;
                    console.log(userId)
                    expect(updatedUser).to.contain.property("_id");
                    expect(updatedUser).to.contain.property("username");
                    expect(updatedUser).to.contain.property("email");
                    expect(updatedUser).to.contain.property("createdAt");
                    expect(updatedUser.username).to.equal("updatedName");
                    done();
                })
                .catch(err => done(err));
            // console.log(token)
        });
    });
});
