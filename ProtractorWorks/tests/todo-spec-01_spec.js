describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://angularjs.org');
  
      // find for the element test type 
      // with ng-model todoList.todoText
      
      element(by.model('todoList.todoText')).clear(); 
      element(by.model('todoList.todoText')).sendKeys("Sample Text"); 
    
      // then click on add 
        element(by.css('[value="add"]')).click();


        // to check if we have 3 todo's in the list 
        // /ng-repeat="todo in todoList.todos
        
        var todolist = element.all(by.repeater('todo in todoList.todos')); 
        expect(todolist.count()).toEqual(3); 

        todolist.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true')); 
        // if the completed is second 

        expect(completedAmount.count()).toEqual(2);

        browser.driver.sleep(4000); 
    });
  });