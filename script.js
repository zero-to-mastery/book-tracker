


// MOCK DATABASE
const table = document.querySelector("tbody");
var database = [
	{
		title: "Name of the wind",
		author: "Patrick Rothfuss",		
		progress: "177" //removed 'p' so that page number is displayed properly
	},
	{
		title: "Database Systems",
		author: "Carlos Coronel, Stevent Morris",
		progress: "Done"
	},
	{
		title: "Secrets of the Oracle Database",
		author: "Norbert Debes",
		progress: "Unstarted"

	},
	{
		title: "A Game of Thrones",
		author: "George R.R. Martin",
		progress: "350"
	},
	{
		title: "Oathbringer",
		author: "Brandon Sanderson",
		progress: "Done"
	},
	{
		title: "Harry Potter & The Order of the Phoenix",
		author: "J.K. Rowling",
		progress: "Done"
	}

];

//Setting up the database
function databaseUpdate(){
	var newDb = database.map(item=>Object.values(item));

	var trs = newDb.map(item=>{
		var tdarray=item.map(val=>{
			let td = document.createElement('td');
			td.textContent = val; 
			return td;
		});
		return tdarray;
	})


	trs.forEach(item=>{
		var trow = document.createElement('tr');
		item.forEach(val=>{
			trow.appendChild(val);
		})
		table.appendChild(trow);
	})
}

databaseUpdate();