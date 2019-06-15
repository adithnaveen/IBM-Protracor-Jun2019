describe('Testing  math operations ',
     function(){
        var math; 
        beforeEach(() => {
            math = new Maths(10,20); 
            
        });
        it('testing addition', () => {
            result = math.add(); 
            expect(31).toEqual(result); 
        });

        it('testing substraction', () => {
            result = math.sub(); 
            expect(-10).toEqual(result); 
        });

        describe('This is for false cases', () => {
            
            it('failing substraction cases', () => {
                result = math.sub(); 
                expect(result<0).toBeTruthy(); 
            });
            
        });

});

