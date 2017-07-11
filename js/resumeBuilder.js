/*
This is empty on purpose! Your code to build the resume will go here.
 */
//-------------bio---------------------
var bio ={
	"name":"Pradhuman Rehal",
	"role":"Web Developer",
	"biopic":"images/me.jpg",
	"welcomeMessage":"Hello there!",
	"contacts":{
		"mobile":"9041619702",
		"twitter":"@Pradhumanrehal",
		"email":"pradhuman.rehal@coolmail.com",
		"github":"Pradhumanrehal",
		"location":"Nabha, Punjab",
		"blog":"pradhumanrehal.blog"
	},
	"skills":["Awesomeness","HTML","css","programming","JS"],
	"display":function(){
		var formattedName=HTMLheaderName.replace("%data%",bio.name);
		var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
		var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		var formattedPic=HTMLbioPic.replace("%data%",bio.biopic);

		
		$("#header").prepend(formattedName,formattedRole)
		.append(formattedWelcomeMessage)
		.append(formattedPic);

	   
			var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
			var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
			var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
			var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
			var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
			var formattedBlog=HTMLblog.replace("%data%",bio.contacts.blog);

			$("#topContacts").append(formattedMobile,formattedTwitter,formattedEmail,formattedGithub,formattedLocation,formattedBlog);

		//to check skills

		if(bio.skills.length>0){
			$("#header").append(HTMLskillsStart);
			var formattedSkills=HTMLskills.replace("%data%",bio.skills[0]);
			$("#skills").append(formattedSkills);
			var formattedSkills=HTMLskills.replace("%data%",bio.skills[1]);
			$("#skills").append(formattedSkills);
			var formattedSkills=HTMLskills.replace("%data%",bio.skills[2]);
			$("#skills").append(formattedSkills);
			var formattedSkills=HTMLskills.replace("%data%",bio.skills[3]);
			$("#skills").append(formattedSkills);

		}
	}
};

//----------------work------------------------

var work={ 
	"jobs":[
		{
			"employer":"Northrop Grumman corp.",
			"title":"Aerodynamicist",
			"location":"Redondo Beach, CA, United States",
			"dates":"Jan 2017-Future",
			"description":"The tactic correlates the fascist below each jolly tip."
		},
		{
			"employer":"Boeing",
			"title":"Structural Analyser",
			"location":"El Segundo, CA, United States",
			"dates":"2012-2017",
			"description":"The tactic correlates the fascist below each jolly tip."
		}
	],

	"display":function(){
		$("#workExperience").append(HTMLworkStart);
		for(var job in work.jobs){
		var formattedjobEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedjobTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedjobTimeline=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedjobDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var formattedjobLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location)
		$(".work-entry:last").append(formattedjobEmployer,formattedjobTitle,formattedjobTimeline,formattedjobDescription,formattedjobLocation);
		}
	}
};

//-----------------education-------------------

var education={
	"schools":[
		{
			"name":"Govt. Sr. Sec. School",
			"location":"Nabha ,Punjab",
			"degree":"Senior Secondary",
			"major":"Physics",
			"dates":"2013-2015"
		},

		{
			"name":"Bhai Gurdas Inst. of Engg. and Tech.",
			"location":"Sangrur ,Punjab",
			"degree":"B.Tech",
			"major":"Computer Science",
			"dates":"2015-Present"
		},

		{
			"name":"Udacity",
			"location":"Nabha ,Punjab",
			"degree":"Nanodegree",
			"major":"Front end web Developer",
			"dates":"2017-Present"
		},
	],

	"display":function() {
		$("#education").append(HTMLschoolStart);
		for(school in education.schools) {		
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
		}
	}
};

//-----------------projects----------------------

var projects ={
	"projects":[
		{
		"title":"Online Resume",
		"dates":"2017-Present",
		"image":"images/project.gif",
		"description":".......................................",
		},
		{
		"title":"Online Resume",
		"dates":"2017-Present",
		"image":"images/project.gif",
		"description":".......................................",
		},
	],

	"display":function(){
		$("#projects").append(HTMLprojectStart);
		for(var i in this.projects){
			var project=this.projects[i];		
			$(".project-entry:last")
			.append(HTMLprojectTitle.replace("%data%", project.title) )
			.append(HTMLprojectDates.replace("%data%", project.dates) )
			.append(HTMLprojectDescription.replace("%data%", project.description) )
			.append(HTMLprojectImage.replace("%data%", project.image) );
			
		}				
	}
};

//---------------internationalize---------------

$("#main").append(internationalizeButton);

var inName=function(){
	var x = bio.name;
	x=x.split(" ");
	x[1]=x[1].toUpperCase();
	x[0]=x[0].slice(0,1).toUpperCase()+x[0].slice(1).toLowerCase();
	x=x.join(" ");
	return x;
}

//-----------------function-calls---------------- 

bio.display();
work.display();
education.display();
projects.display();
inName();

//-----------------maps-------------------------

$("#mapDiv").append(googleMap);

