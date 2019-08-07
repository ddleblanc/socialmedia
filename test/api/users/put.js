process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const User = require("../../../users/user_model");
const jwt = require("jsonwebtoken");
const config = require("../../../config/database");

const app = require("../../../app");
const db = require("../../../db/index.js");

let userId;
let token;
let user;

describe("PUT /users", () => {
    before(done => {
        db.connect()
            .then(async () => {
                user = await new User({
                    username: "name",
                    email: "name@gmail.com",
                    hashedPassword: "password",
                    avatar: "avatar"
                })
                    .save()
                    .then(async () => {
                        const createdUser = await User.findOne({ username: "name" }).select(
                            "username email _id hashedPassword"
                        );
                        token = jwt.sign(createdUser.toJSON(), config.secret, {
                            expiresIn: 604800 // 1 week
                        })
                        // console.log(token)
                    })
            });
    });

    after(done => {
        db.close()
            .then(() => done())
            .catch(err => done(err));
    });

    describe("NORMAL BEHAVIOR UPDATE", () => {
        it("UPDATES a user", done => {
            request(app)
                .put(`/api/v1/users/${user._id}`)
                .set('Authorization', `bearer ${token}`)
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
            console.log(token)
        });
    });
});
