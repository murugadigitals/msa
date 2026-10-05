var today = new Date();

// prettier-ignore
let days = [  "Sunday",  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var mdate = `${days[today.getDay()]}, ${today.getDate()} - ${months[today.getMonth()]} - ${today.getFullYear()}`;

document.getElementById("setDate").innerHTML = `Tirupati HUB - 2A Dated : ${mdate} & Working Hours From 17:30 To 06:00`;

// prettier-ignore
var sorters = [
  "M Sri Hari",  "I Sasi Rekha",  "G Sai Madhavi",  "D Nandana Kumari",  "K Lokesh",
  "K Saravana",  "I Naveen Reddy",  "P Chandraiah",  "A Anuradha",  "P Jagadeesh",  "J Dilli Babu",
  "P Venkatesh",  "R Rajendra",  "V Hari Krishna",  "K Suresh",  "V Rajesh",  "OS Arranged",
  "Not Arranged",  "M Chandra Mouli",  "S Vamsi Priya",  "V Hari Krishna",  "K Pavan Singh",  "Arushi Kumari",
  "Nikhil Sukhla",  "R Sandeep Kumar",  "V Samba Siva Rao",  "N Sreedhar",  "S Maruthi Prasad Reddy",
  "S Suresh Kumar",  "G Ekambaram",  "K Bhargava Varma",  "M Rupesh Kumar",  "G Ganesh",
  "Y Maneendra Reddy",  "N Raja Sekhar",  "I Charitha",  "B Mahesh",  "K Nagendra",  "V Nagendra Babu",
  "VR Shiva Narayana",  "B Raghuram Naik",  "V Trilokeswar",  "N Ashok Kumar",  "B Md Rafi",  "R Suresh",
  "A Purusotham Raju","S Chakrapani"];

var mailguards = ["P Koteswara Sharma", "N Subramanyam Reddy", "T Kavitha", "S Pravallika Jeevan", "P Parthasarathy"];

var mts = ["OS Arranged", "M Vasanth Kumar", "V Hari Krishna", "V Munnelu", "M Jarayraman", "K Ramanjulu", "K Bala Krishna", "B Raja Naik", "M Nirmala", "G Giri Prasad", "V Suneetha", "N Om Shankar"];

var gds = ["J Dilli Babu", "N Hari Prasad", "N Murali Babu"];

export var sorters;
export var mdate;
export var mailguards;
export var mts;
export var gds;
