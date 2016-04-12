import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

ScholList= new Mongo.Collection('scholList');
DispSchol= new Meteor.Collection('dispSchol');

Meteor.publish('dispSchol',function(){
        var currentUser=this.userId;
        return DispSchol.find({createdBy:currentUser}); //{createdBy:currentUser}
    });

    Meteor.publish('scholList', function(){
        var currentUser = this.userId;
        return ScholList.find({}); // 
    });
