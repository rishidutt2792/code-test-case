const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const describe = require('mocha').describe;
const it = mocha.it;
const should = chai.should();

chai.use(chaiHttp);
let server = require('../index.js');

describe('PetCreate', () => {
    describe('Success case for pet creation', () => {
        it('Create a new Pet', (done) => {
            chai.request(server)
                .post('/pets')
                .send({
                    'name': 'Dog',
                    'age': 2,
                    'color': 'Brown'
                })
                .end((err, res) => {
                    (res).should.have.status(201);
                    (res.body).should.be.a('object');
                    res.body.pets.should.have.property('name');
                    res.body.pets.should.have.property('color');
                    res.body.pets.should.have.property('age');
                    res.body.pets.should.have.property('id');
                    done();
                });
        });
    });
    describe('Failure case for pet creation color missing', () => {
        it('Create new Pet', (done) => {
            chai.request(server)
                .post('/pets')
                .send({
                    'name': 'Dog',
                    'age': '3'
                })
                .end((err, res) => {
                    (res).should.have.status(500);
                    (res.body).should.be.a('object');
                    done();
                });
        });
    });
    describe('Get Pet Success Case', () => {
        it('GetPets', (done) => {
            chai.request(server)
                .get('/pets')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    done();
                });
        });
    })



    describe('Delete Pet  Failure Case', () => {
        it('GetPets', (done) => {
            chai.request(server)
                .get('/pets')
                .end(function (err, res) {
                    chai.request(server)
                        .delete('/pets/' + res.body.pets.id)
                        .end(function (error, response) {
                            response.should.have.status(200);
                            response.should.be.json;
                            response.body.should.be.a('object');
                            done();
                        });
                });
        });
    })
})
