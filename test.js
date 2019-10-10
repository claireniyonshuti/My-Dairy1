var chai = require('chai');

var expect = chai.expect;

describe('Equality Checks', function(){
    it('checks equality ', function(){
        expect('Hello').to.equals('Hello');
    });

    it('checks inequality', function(){
        expect('Hello').to.not.equal('Olleh')       
    });
});

// describe('Uncategorized', function){
//     it(checks type', functioon(){
//         expect('Somethinbg ')
//     }
//cd server && nyc --reporter=text
// }
