import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
 
  if(ScholList.find().count() === 0){
  
  var scholarships = [
  { 
  	"name":"Venkat Panchapakesan Memorial Scholarship",
  	"url":"https://www.google.com/edu/scholarships/venkat-panchapakesan-memorial-scholarship/",
  	"gender":["male","female","both"],
    "type":["college","post graduation"]
  },
  {
    "name":"Pre-Matric Scholarship by Ministry of Minority Affairs",
    "url":"http://www.minorityaffairs.gov.in/prematric",
    "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Post matric scholarship",
    "url":"http://www.minorityaffairs.gov.in/Postmetric/",
     "gender":["male","female","both"],
     "type":[ "college"]
  },
  { 
    "name":"Minority Welfare e-Scholarship Program(30% of theses scholarships are reserved for girls)",
    "url":"http://www.momascholarship.gov.in/",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"L’oreal’s Young Women in Science Scholarship.",
    "url":"http://www.foryoungwomeninscience.com/",
     "gender":[ "female","both"],
     "type":[ "college"]
  },
  { 
    "name":"INSPIRE’s SEATS Scholarship provided by Department of Science and Technology. Aimed at kids from grades 6 to 10",
    "url":"http://www.inspire-dst.gov.in/award.html",
    "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"INSPIRE’s SHE Scholarship offered to youth undertaking studies in science intensive programs.",
    "url":"http://www.inspire-dst.gov.in/SHE.html",
    "gender":[ "female","both"],
    "type":[ "post graduation"]
  },
  { 
    "name":"Velammal Science Talent Search for school students from Class 1 to 12 in Tamil Nadu and Pondicherry",
    "url":"http://www.velammalsciencetalenttest.com/index.html",
    "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Foundation for Academic Excellence and Access. Scholarship aimed at students who have completed their Grade 12",
    "url":"http://www.faeaindia.org/",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Amul’s Vidya Shree Award for top performers in Grade 10 and 12 exams",
    "url":"http://www.amul.in/award/lists/vidyashree.php",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"“Tata Building India” : Essay writing competition for school children from Grades 6 to 12. Prizes on offer",
    "url":"http://tatabuildingindia.com/New-Site/",
     "gender":["male","female","both"],
     "type":[ "school"]
    
  },

  { 
    "name":"National Talent Search Scheme (NTSS)",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/pre-metric-scholarships/national-talent-search-scheme-ntss",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Pre-Matric Scholarship Scheme to OBC",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/pre-metric-scholarships/pre-matric-scholarship-scheme-to-obc",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Balika Samridhi Yojana (BSY)",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/pre-metric-scholarships/balika-samridhi-yojana-bsy",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Pre-Matric Scholarships to the Children of those Engaged in Unclean Occupations",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/pre-metric-scholarships/pre-matric-scholarships-to-the-children-of-those-engaged-in-unclean-occupations",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Pre-Matric Scholarship for Students belonging to the Minority Communities",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/pre-metric-scholarships/pre-matric-scholarship-for-students-belonging-to-the-minority-communities",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  
  { 
    "name":"Incentives to Girls for Secondary Education",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/pre-metric-scholarships/incentives-to-girls-for-secondary-education",
     "gender":[ "female","both"],
    "type":[ "school"]
  },

  {
    "name":"Gandhi fellowship",
    "url":"http://www.gandhifellowship.org/fellowship-programming.php",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  {
    "name":"IOCL Scholarship",
    "url":"http://www.motachashma.com/scholarships/indian-oil-scholarship.php",
     "gender":["male","female","both"],
    "type":[ "school"]

    
  },
  { 
    "name":"Indian Oil Scholarship for Sports 2015 for Upcoming Sportspersons",
    "url":"https://www.iocl.com/aboutus/indianoilsports.aspx",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"MOMA Scholarship - Merit Cum Means Scholarship for Engineering Students (30% reserved for girls)",
    "url":"http://www.motachashma.com/scholarships/moma-scholarship-merit-cum-means-scholarship.php",
     "gender":["male","female","both"],
    "type":[ "school","post graduation"]
  },
  { 
    "name":"Central Sector Scholarship Scheme for college & University Students",
    "url":"http://www.motachashma.com/scholarships/central-sector-scholarship-for-college-university-students.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"North South Foundation Scholarship",
    "url":"http://www.motachashma.com/scholarships/north-south-foundation-nsf-college-scholarships.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"ONGC Scholarship for SC/ST Students - 50% reserved for girls",
    "url":"http://www.motachashma.com/scholarships/ongc-scholarship-for-sc-st-students.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"LIC Golden Jubilee Scholarship",
    "url":"http://www.motachashma.com/scholarships/lic-golden-jubilee-scholarship.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Siemens Scholarship - 50% reserved for girls",
    "url":"http://www.motachashma.com/scholarships/siemens-scholarship.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Panasonic Scholarship",
    "url":"http://www.motachashma.com/scholarships/panasonic-ratti-chhatr-scholarship.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Foundation for Excellence Scholarship",
    "url":"http://www.motachashma.com/scholarships/foundation-for-excellence-scholarships.php",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"FAEA BHEL Scholarship",
    "url":"http://www.faeaindia.org/StudentInfo.asp",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"UGC Scholarship for Rank Holders",
    "url":"http://www.motachashma.com/scholarships/ugc-scholarship-for-university-rank-holders-for-pg-programs.php",
     "gender":["male","female","both"],
    "type":[ "post graduation"]
  },
  { 
    "name":"Central Sector Scholarship by MHRD",
    "url":"http://www.motachashma.com/scholarships/central-sector-scholarship-for-college-university-students.php",
     
    "type":[ "college"]
  },
  { 
    "name":"OP Jindal Engineering and Management Scholarhip (OPJEMS)",
    "url":"http://www.motachashma.com/scholarships/opjems.php",
    "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"IET India Scholarship",
    "url":"http://www.motachashma.com/scholarships/iet-india-scholarship-award.php",
     "gender":["male","female","both"],
      "type":[ "college"]
    
  },
  { 
    "name":"NEST Scholarship",
    "url":"http://www.motachashma.com/scholarships/nationwide-education-and-scholarship-test-nest.php",
     "gender":["male","female","both"],
     "type":[ "college"]
  },
  { 
    "name":"Google Anita Borg Scholarship",
    "url":"http://www.google.com/anitaborg/apac/",
     "gender":[ "female","both"],
    "type":["college","post graduation"]
  },
  { 
    "name":"NTPC Scholarship(Only for SC/ST & PH candidates)",
    "url":"http://www.motachashma.com/scholarships/ntpc-scholarship-for-b-tech-mbbs-students.php",
     "gender":["male","female","both"],
     "type":["college"]
  },
  { 
    "name":"TOEFL Scholarship",
    "url":"http://www.motachashma.com/scholarships/toefl-scholarship.php",
     "gender":["male","female","both"],
     "type":[ "college"]
  },
  { 
    "name":"Aditya Birla Scholarship",
    "url":"http://www.motachashma.com/scholarships/aditya-birla-scholarship.php",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"GE Foundation Scholarship",
    "url":"http://www.motachashma.com/scholarships/ge-foundation-scholarship.php",
     "gender":["male","female","both"],
      "type":[ "college"]
  },
  { 
    "name":"Cargill Global Scholars Program - special consideration given to female applicants",
    "url":"http://www.motachashma.com/scholarships/the-cargill-global-scholars-program.php",
     "gender":["male","female","both"],
     "type":["post graduation"]
  },
  { 
    "name":"Post-Matric Scholarship Scheme to OBC",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/post-matric-scholarship/post-matric-scholarship-scheme-to-obc/",
     "gender":["male","female","both"],
    "type":[ "school","college"]
  },
  { 
    "name":"Post Matric Scholarships to the Students Belonging to Scheduled Tribe (ST )",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/post-matric-scholarship/post-matric-scholarships-to-the-students-belonging-to-st",
     "gender":["male","female","both"],
    "type":[ "school","college"]
  },
  { 
    "name":"Post-Matric Scholarship for Students belonging to Scheduled Castes (SC)",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/post-matric-scholarship/post-matric-scholarship-for-students-belonging-to-scheduled-castes-sc",
     "gender":["male","female","both"],
    "type":[ "school","college"]
  },
  { 
    "name":"Post-Matric Scholarship for Students belonging to the Minority Communities",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/post-matric-scholarship/post-matric-scholarship-for-students-belonging-to-the-minority-communities",
     "gender":["male","female","both"],
    "type":[ "school","college"]
  },
  { 
    "name":"Prime Minister's Scholarship Scheme For Central Armed Police Forces & Assam Rifles",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/post-matric-scholarship/prime-minister-s-scholarship-scheme-for-central-armed-police-forces-assam-rifles",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  {
    "name":"Ishan Uday For North Eastern Region",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/u-g-scholarships/ishan-uday-for-north-eastern-region",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Post Doctoral Fellowship To Women Candidates",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/post-doctoral-fellowship-to-women-candidates",
     "gender":["male","female","both"],
     "type":["post graduation"]
  },
  { 
    "name":"Rajiv Gandhi National Fellowship to SC/ST Candidates",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/rajiv-gandhi-national-fellowship-for-st-candidate",
     "gender":["male","female","both"],
    "]type":[ "post graduation"]
  },
  { 
    "name":"Post Doctrol Fellowship to SC/ST Candidates",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/post-doctoral-fellowship-to-sc-st-candidates",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"Post Graduate Scholarship for Professional Courses for SC/ST Candidates",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/post-graduate-scholarships-for-professional-courses-for-sc-st-candidates",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"Indira Gandhi Scholarship for Single Girl Child for PG Programs",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/post-graduate-merit-scholarship-for-university-rank-holders-for-pg-programs",
     "gender":[ "female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"Merit Scholarship for University Rank Holders for PG Programs",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/post-graduate-merit-scholarship-for-university-rank-holders-for-pg-programs-1",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"National Fellowship for OBC Candidates",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/national-fellowship-for-obc-candidate",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"Maulana Azad National Fellowship for Minority Students",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/maulana-azad-national-fellowship-for-minority-students",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"Rajiv Gandhi National Fellowship for SC Candidate",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/p-g-and-above-scholarships/rajiv-gandhi-national-fellowship-for-sc-candidate",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"Rajiv Gandhi National Fellowship for Students with Disabilities",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/scholarship-for-students-with-disabilities/rajiv-gandhi-national-fellowship-for-students-with-disabilities",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
    "name":"National Scholarships for Person with Disabilities",
    "url":"http://vikaspedia.in/education/policies-and-schemes/scholarships/scholarship-for-students-with-disabilities/national-scholarships-for-persons-with-disabilities",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },

  { 
    "name":"ACQUIRE Scholarship Programme",
    "url":"http://www.icbse.com/scholarships/acquire",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"British Council IELTS Scholarship",
    "url":"http://www.icbse.com/scholarships/british-council-ielts-scholarship",
     "gender":["male","female","both"],
     "type":[ "post graduation"]
  },
  { 
     "name":"CBSE Merit Scholarship",
    "url":"http://www.cbse.nic.in/Scholarship/Webpages/Home%20Page%20Scholarship.html",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Central Sector Scholarship Scheme (CSSS)",
    "url":"http://www.icbse.com/scholarships/central-sector-scheme",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Chacha Nehru Scholarship",
    "url":"http://www.icbse.com/scholarships/chacha-nehru-scholarship",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"ePass Scholarship",
    "url":"http://www.icbse.com/scholarships/epass",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"iGenius Scholarship",
    "url":"http://www.igenius.org/Scholarship/Scholarship_Recap_Landing.aspx",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"JNCASR Summer Research Fellowship 2011",
    "url":" http://www.jncasr.ac.in/eobumain.php/Summer-Research-Fellowships-Programme/15/1/12/",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"MHRD Scholarships - Fellowship Program",
    "url":" http://mhrd.gov.in/nmms",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"National Scholarship Scheme: State Government/ UT Administration",
    "url":"http://www.icbse.com/scholarships/national-scholarship-scheme-state-government-ut-administration",
     "gender":["male","female","both"],
     "type":[ "school"]
  },
  { 
    "name":"Sharda University Scholarships for AIEEE 2010 Aspirants",
    "url":"http://www.icbse.com/scholarships/sharda-university-scholarships-aieee-2010-aspirants",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Women Scientist Scholarship Scheme (WOS-C) 2011",
    "url":"http://www.dst.gov.in/scientific-programmes/scientific-engineering-research/women-scientists-programs",
     "gender":[ "female","both"],
    "type":[ "college"]
  },
  { 
    "name":"Young Talent IT Scholarship from Dr. GB Scholarship Foundations",
    "url":"https://www.kgisl.com/scholarship.html",
     "gender":["male","female","both"],
    "type":[ "college"]
  },
  { 
    "name":"MaRRS Spelling Bee contest",
    "url":"http://www.marrsspellingbee.com/site/index",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Kishore Vaigyanik Protsahan Yojana (KVPY):KVPY can be written by students from class 11th and 12th.",
    "url":"http://www.kvpy.iisc.ernet.in/main/applications.htm",
     "gender":["male","female","both"],
    "type":["school"]
  },
  { 
    "name":"Young India Challenge for school students : Classes 8th - 12th eligible",
    "url":"http://india.yourstory.com/contests/1/young-india-challenge-ideas-for-change/about",
    "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"“Malviya Scholarship” : Aimed at Grade 12 students",
    "url":"http://www.scholarshipsinindia.com/MAHAMANA-MALVIYA-SCHOLARSHIP.html",
     "gender":["male","female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Girl Child Scholarship Scheme : Classes 1 to 12 eligible",
    "url":"http://www.icbse.com/scholarships/merit-scholarship/single-girl-child",
     "gender":[ "female","both"],
    "type":[ "school"]
  },
  { 
    "name":"Colgate Scholarship",
    "url":"http://www.colgate.co.in/app/Colgate/IN/Scholarship/terms-and-condition.cvsp",
     "gender":["male","female","both"],
    "type":[ "school"]
  }
]


 
_.each(scholarships,function(schols){
	ScholList.insert(schols);
});



	}
});


  // Post.remove({});
Meteor.publish('dispSchol',function(){
         var currentUser=this.userId;
         return DispSchol.find({createdBy:currentUser}); //{createdBy:currentUser}
     });

     Meteor.publish('scholList', function(){
         var currentUser = this.userId;
         return ScholList.find({}); // 
     });

 Meteor.publish('post',function(){
 	var currentUser=this.userId;
 	return Post.find({});
 });
  
  



 





