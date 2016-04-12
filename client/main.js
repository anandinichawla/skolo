import { Template } from 'meteor/templating';


import './main.html';

Router.route('/' , {
	template: 'home'
}) ;
Router.route('/dashboard') ;
Router.route('/scholarships');/*,{
    subscriptions:function(){
        return Meteor.subscribe('scholList');
    }
}) ;*/
Router.route('/register') ;
Router.route('/loginDashboard');
Router.route('/scholarship');

ScholList= new Mongo.Collection('scholList');
DispSchol= new Meteor.Collection('dispSchol');

if (Meteor.isClient)
{
	Template.register.events({
    'submit form': function(event,template){
        event.preventDefault();
        var usernameVar = template.find('#username').value;
        var passwordVar = template.find('#password').value;
        /*var fullname=usernameVar;*/
            
        
        
        Accounts.createUser({

            username:usernameVar,
            password:passwordVar,
            },function(error) {
        if (error) {
            alert(error.reason);
        } else {
            alert('account created');
            Router.go('/dashboard');
        }
    });
        
            
        
        

        

       
    }/*submit form*/

});/*template.register.events*/

	Template.login.events({
    'submit form': function(event, template){
        event.preventDefault();
        var usernameVar = template.find('#login-username').value;
        var passwordVar = template.find('#login-password').value;
        Meteor.loginWithPassword(usernameVar, passwordVar,function(error){
            if(error){
         alert(error.reason);
        }

      });
        
        
        	
    
    }/*submit form*/
});/*template.login.events*/

    Template.logout.events({
        'click.logout': function(event,template){
            event.preventDefault();
            Meteor.logout();
            Router.go('/dashboard');

        }/*submit form*/


    });/*template.logout.events*/

    


Template.scholarships.helpers({
    'schol': function(){
        return ScholList.find()
    }
});

Template.scholDisplay.events({
    'change [type=checkbox]':function(event){
    event.preventDefault();
    var elem = $(event.currentTarget);

    // var isCompleted=this.completed;
    var documentId=this._id;
    
    if(!elem.is(":checked")){
       // ScholList.update({ _id: documentId }, {$set: { completed: false }});
        console.log("Task marked as incomplete.");
    } else {
        //var scholName = template.find('#scholName').value();
        // var scholName= $('[name=scholName]').val();
        // ScholList.update({ _id: documentId }, {$set: { completed: true }});
        console.log("Task marked as complete.", );
        var newSchoole = {
           name: this.name,
           url: this.url,
           createdBy: Meteor.userId(),
           createdAt: new Date(),
           sId : documentId
        }
        DispSchol.insert(newSchoole);
        //$('[name="scholName"]').val('');
        // $('[url="scholurl"]').val('');
        $('[name=scholName]').val('');
    }
  }//function
});//template scholDisplay

Template.scholDisplay.helpers({

    'checked': function(){
        var self = this;
        if (_.find(DispSchol.find({}, {sort: {createdAt: -1}}).fetch(), function(item1){
            return item1.sId.toString() == self._id.toString()
        })) {
            return "checked";
        }else{
            return "";
        }
    }
});

Template.dashboard.helpers({

    'dispschol': function(){
        return DispSchol.find({}, {sort: {createdAt: -1}});
    }
});

Template.scholDashDisp.events({
'click .delete-schol': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = window.confirm("Delete this scholarship?");
    if(confirm){
        DispSchol.remove({ _id: documentId });
    }
}
});





Meteor.subscribe('dispSchol');
Meteor.subscribe('scholList');

}/* if statement*/



/*if(Meteor.isServer){
    // server-side code goes here
    Meteor.publish('dispSchol',function(){
        var currentUser=this.userId;
        return DispSchol.find({createdBy:currentUser}); //{createdBy:currentUser}
    });

    Meteor.publish('scholList', function(){
        var currentUser = this.userId;
        return ScholList.find({}); // 
    });



}*/




 
 