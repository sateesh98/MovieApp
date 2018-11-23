// var should = require('chai').should();
// 
// var api = supertest('http://localhost:3000');

var server = require('../app');
var request = require('supertest');
var chai = require('chai');
var expect = require('chai').expect;


describe('Movie API Test', function(){
    
    var emp = {         
        Name: 'Sateesh',
        City: 'Bangalore',
        Salary: 50000,
        Company: 'Capgemini',
        Gender: 'Male',
        Age: 25
      };

      let emp_id = '5bf45e7840ca250c7c6f5837';

      // get all test case.
        describe('#GET/ employees', function(){
            it('Should get all employees', function(done){
                request(server).get('/employees')
                .end(function(err,res){
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    done();                    
                });
            });
        });

        // insert test case.
        describe('# Create employee ', function() { 
            it('should create an employee', function(done) { 
              request(server).post('/employees')
              .send(emp)
              .end(function(err, res) { 
                expect(res.statusCode).to.equal(200); 
                expect(res.body.Name).to.equal('Sateesh'); 
                emp = res.body; 
                done(); 
              }); 
            });            
        });
        
        // get employee by empid
        describe('Get a employee by id', function() { 
            it('should get a employee', function(done) { 
              request(server).get('/employees/' + emp_id)
               .end(function(err, res) { 
                expect(res.statusCode).to.equal(200); 
                expect(res.body.Name).to.equal('Sateesh'); 
                done(); 
              }); 
            }); 
          });  
          
          // update employee by empID
          describe('Update a employee by id', function() {
            it('should modify a employee', function(done) {
              emp.Name = 'New Sateesh'
              request(server)
                .put('/employees/' + emp_id)
                .send(emp)
                .end(function(err, res) {
                  expect(res.body.Name).to.equal('New Sateesh');
                  expect(res.statusCode).to.equal(200);
                  done();
                });
            });
          });

          // delete employee by empID
          describe('Delete a employee by id', function() {
            it('should delete a employee', function(done) {
              request(server)
                .delete('/employees/' + emp_id)
                .end(function(err, res) {
                  expect(res.statusCode).to.equal(200);
                  expect(res.body.message).to.equal('Employee deleted successfully!');
                  done();
                });
            });
          });
});

