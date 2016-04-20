import { Template } from 'meteor/templating';


import './main.html';

var sch;

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
Router.route('/discussion');


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
        return ScholList.find({})
    },

     'sch': function () {
      var type = Session.get('type');
      var gender = Session.get('gender');
      return ScholList.find({type:{$in:[type]},gender:{$in:[gender]}});
    }
});

Template.scholarships.events({
    'submit form':function(event){
        event.preventDefault();
        var type = event.target.types.value;
        var gender = event.target.gender.value;
        Session.set('type', type);
        Session.set('gender',gender);
        }       
}); 
    





      

Template.scholDisplay.events({

    // var scholist = [
    // {'name':'dummy','url':'dummy'},
    // {'name':'smoe','url':'something'}
    // ]
    // _.each(scholist,function(shcl){

    //     ScholList.insert(shcl)
    // });





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

//  Template.discussion.events({
//  'submit form':function(event){
//      event.preventDefault();

//      var newPost = {
//         text: event.target.post.value;
//      }
//      Post.insert(newPost);
//   }
 
// });

Template.postForm.events({
    'submit .post':function(event){
        event.preventDefault();
        console.log("Hola");
        var newPost = {
            question : event.target.post.value,
            user : Meteor.user().username,
            comments : [

            ]
        };
        Post.insert(newPost);
    }
});

Template.discussion.helpers({
    post: function(){
        console.log("Hello");
        return Post.find({});
    }
});

Template.discussion.events({
    'submit .comment': function(event){
        event.preventDefault();
            
            var questionId = event.target.id.value;
            console.log("Hello World");
           
           var cmnts;
            
            if(event.target.comment.value){
                cmnts = 
                {
                    comment: event.target.comment.value,
                    user : Meteor.user().username
                }
            }
        
         Post.update(
            {_id: questionId},
            {
                $addToSet:{'comments':cmnts}
            });

      

    }
});

Meteor.subscribe('dispSchol');
Meteor.subscribe('scholList');
Meteor.subscribe('post');

}/* if statement*/







 
 