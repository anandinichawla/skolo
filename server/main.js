import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
 
  if(ScholList.find().count() === 0){
  
  var scholarships = [
  {
    "name":"Pre-Matric Scholarship by Ministry of Minority Affairs",
    "url":"http://www.minorityaffairs.gov.in/prematric",
    "gender":"both",
    "type":"school"
  },
  {
    "name":"Post matric scholarship",
    "url":"http://www.minorityaffairs.gov.in/Postmetric/",
    "gender":"both",
    "type":"school"
  },
  {
    "name":"Minority Welfare e-Scholarship Program(30% of theses scholarships are reserved for girls)",
    "url":"http://www.momascholarship.gov.in/",
    "gender":"both",
    "type":"school"
  },
  {
    "name":"L’oreal’s Young Women in Science Scholarship.http://www.foryoungwomeninscience.com/",
    "url":"female",
    "gender":"school",
    "type":""
  },
  {
    "name":"INSPIRE’s SEATS Scholarship provided by Department of Science and Technology. Aimed at kids from grades 6 to 10",
    "url":"http://www.inspire-dst.gov.in/award.html",
    "gender":"both",
    "type":"school"
  },
  {
    "name":"INSPIRE’s SHE Scholarship offered to youth undertaking studies in science intensive programs.",
    "url":"http://www.inspire-dst.gov.in/SHE.html",
    "gender":"both",
    "type":"post graduation"
  },
  {
    "name":"Velammal Science Talent Search for school students from Class 1 to 12 in Tamil Nadu and Pondicherry",
    "url":"http://www.velammalsciencetalenttest.com/index.html",
    "gender":"both",
    "type":"college"
  },
  {
    "name":"Foundation for Academic Excellence and Access. Scholarship aimed at students who have completed their Grade 12",
    "url":"http://www.faeaindia.org/",
    "gender":"both",
    "type":"school"
  },
  {
    "name":"Amul’s Vidya Shree Award for top performers in Grade 10 and 12 exams",
    "url":"http://www.amul.in/award/lists/vidyashree.php",
    "gender":"both",
    "type":"school"
  },
  {
    "name":"“Tata Building India” : Essay writing competition for school children from Grades 6 to 12. Prizes on offer",
    "url":"http://tatabuildingindia.com/New-Site/",
    "gender":"male",
    "type":"school"
  }
]
 
_.each(scholarships,function(schols){
	ScholList.insert(schols);
});

}


  // Post.remove({});
// Meteor.publish('dispSchol',function(){
//         var currentUser=this.userId;
//         return DispSchol.find({createdBy:currentUser}); //{createdBy:currentUser}
//     });

//     Meteor.publish('scholList', function(){
//         var currentUser = this.userId;
//         return ScholList.find({}); // 
//     });
//  Meteor.publish('post',function(){
//  	var currentUser=this.userId;
//  	return Post.find({createdBy:currentUser})
//  });


 


});


