/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initChallenges.js")

*/

//Challenges
db.challenges.drop();
db.createCollection("activities");
db.activities.insert([
	{
<<<<<<< HEAD
		"name": "1º lugar no Divide & Conquer",
	    "points": "600",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "Atraso no Avatar",
	    "points": "-50",
	    "pointsType": "HP",
	    "description": "Falhar o prazo de envio do Avatar"
	},
	{
		"name": "Atraso na auto-avaliação",
	    "points": "-50",
	    "pointsType": "HP",
	    "description": "Falhar o prazo de envio da auto-avaliação"	    
	},
	{
		"name": "Atraso no MBTI",
	    "points": "-50",
	    "pointsType": "KP",
	    "description": "Falhar o prazo de envio do questionário para o MBTI"
	},
	{
		"name": "1º lugar no kahoot",
	    "points": "100",
	    "pointsType": "KP",
	    "description": "Vencer o kahoot do dia"	    
	},
	{
		"name": "2º lugar no kahoot",
	    "points": "50",
	    "pointsType": "KP",
	    "description": "2º lugar no kahoot diário"
	},
	{
		"name": "3º lugar no kahoot",
	    "points": "25",
	    "pointsType": "KP",
	    "description": "3º lugar no kahoot diário"
	},
	{
		"name": "Voluntário medley",
	    "points": "100",
	    "pointsType": "HP",
	    "description": "Voluntariar-se para liderar uma equipa de medleys"
	},
	{
		"name": "Voluntário lipdub",
	    "points": "100",
	    "pointsType": "HP",
	    "description": "Voluntariar-se para liderar uma das equipas na lipsync battle"	    
	},
	{
		"name": "Voluntário APP",
	    "points": "100",
	    "pointsType": "KP",
	    "description": "Voluntariar-se para liderar uma equipa de desenvolvimento android"	    
	},
	{
		"name": "Team Balance",
	    "points": "200",
	    "pointsType": "TP",
	    "description": ""	    
	},
	{
		"name": "Marshmallow Ladder",
	    "points": "400",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "Vencedor do ninjamotherfucker",
	    "points": "50",
	    "pointsType": "XP",
	    "description": "Vencedor do ninjamotherfucker diário"    	
	},
	{
		"name": "Scrum da manhã",
	    "points": "50",
	    "pointsType": "TP",
	    "description": ""	    
	},
	{
		"name": "Chain of Claws",
	    "points": "400",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "Landing Project",
	    "points": "400",
	    "pointsType": "XP",
	    "description": ""	        
	},
	{
		"name": "1º lugar no Blind Quest",
	    "points": "400",
	    "pointsType": "XP",
	    "description": ""	        
	},
	{
		"name": "2º lugar no Blind Quest",
	    "points": "200",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "3º lugar no Blind Quest",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""
	},
	{
		"name": "1º lugar no Wells & Cans",
	    "points": "600",
	    "pointsType": "XP" ,
	    "description": ""  
	},
	{
		"name": "2º lugar no Wells & Cans",
	    "points": "200",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "3º lugar no Wells & Cans",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "4º lugar no Wells & Cans",
	    "points": "50",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "Crossing Paths",
	    "points": "400",
	    "pointsType": "XP",
	    "description": ""   
	},
	{
		"name": "Drunk basketball",
	    "points": "200",
	    "pointsType": "TP",
	    "description": ""    
	},
	{
		"name": "Night challenge",
	    "points": "1000",
	    "pointsType": "XP",
	    "description": ""
	},
	{
		"name": "Atraso",
	    "points": "-10",
	    "pointsType": "HP",
	    "description": ""	    
	},
	{
		"name": "Todos a horas",
	    "points": "50",
	    "pointsType": "TP",
	    "description": ""    
	},
	{
		"name": "Penalização ",
	    "points": "-50",
	    "pointsType": "HP",
	    "description": ""    
	},
	{
		"name": "Bónus",
	    "points": "50",
	    "pointsType": "KP",
	    "description": ""    
	},
	{
		"name": "Attacker",
	    "points": "100",
	    "pointsType": "HP",
	    "description": " "    
	},
	{
		"name": "Vencer a negociação do almoço",
	    "points": "400",
	    "pointsType": "XP",
	    "description": ""	       
	},
	{
		"name": "Empatar na negociação do almoço",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "2º lugar no Divide & Conquer",
	    "points": "200",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "3º lugar no Divide & Conquer",
	    "points": "100",
	    "pointsType": "XP",
	    "description": "" 
	},
	{
		"name": "4º lugar no Divide & Conquer",
	    "points": "50",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "Duck Race",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""  
	},
	{
		"name": "NPS do Pitch da APP",
	    "points": "100",
	    "pointsType": "KP",
	    "description": ""    
	},
	{
		"name": "1º lugar na lipsync battle",
	    "points": "1000",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "2º lugar na lipsync battle",
	    "points": "600",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "3º lugar na lipsync battle",
	    "points": "300",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "4º lugar na lipsync battle",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "1º lugar na dobragem",
	    "points": "1000",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "2º lugar na dobragem",
	    "points": "600",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "3º lugar na dobragem",
	    "points": "300",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "4º lugar na dobragem",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""    
	},
	{
		"name": "5 ou mais atrasos",
	    "points": "-50",
	    "pointsType": "TP",
	    "description": ""   
	},
	{
		"name": "1º lugar no threasure hunt",
	    "points": "600",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "2º lugar no threasure hunt",
	    "points": "200",
	    "pointsType": "XP",
	    "description": ""	    
	},
	{
		"name": "3º lugar no threasure hunt",
	    "points": "100",
	    "pointsType": "XP",
	    "description": ""  
	},
	{
		"name": "4º lugar no threasure hunt",
	    "points": "50",
	    "pointsType": "XP",
	    "description": ""    
=======
		"name": "Avatar",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Autoevaluation",
		"points": 50,
		"pointsType": "KP",
		"room": "",
		"description": ""
	},
	{
		"name": "Kahoot",
		"points": 50,
		"pointsType": "KP",
		"room": "",
		"description": ""
	},
	{
		"name": "Volunteer Medley",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Volunteer Android",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Volunteer LipSync Battle",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Team Balance",
		"points": 200,
		"pointsType": "TP",
		"room": "",
		"description": ""
	},
	{
		"name": "Marshmallow Ladder",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Ninja MF Winner",
		"points": 25,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Daily Scrum",
		"points": 50,
		"pointsType": "TP",
		"room": "",
		"description": ""
	},
	{
		"name": "Chain of Claws",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Landing Project",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Blind Quest",
		"points": 200,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Wells & Cans",
		"points": 600,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Lunch",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Divide & Conquer",
		"points": 500,
		"pointsType": "XP",
		"room": "",
		"description": ""
>>>>>>> cdd9b7c4adaf57c67523860365787fa884e50298
	}
]);