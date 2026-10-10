var today = new Date();

// prettier-ignore
let days = [  "Sunday",  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday",];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var mdate = `${days[today.getDay()]}, ${today.getDate()} - ${months[today.getMonth()]} - ${today.getFullYear()}`;

// document.getElementById("setDate").innerHTML = `Tirupati HUB - 2A Dated : ${mdate} & Working Hours From 17:30 To 06:00`;

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
  "A Purusotham Raju","S Chakrapani","N Hari Krishna","K Pavan Singh"];

var mailguards = ["P Koteswara Sharma", "N Subramanyam Reddy", "T Kavitha", "S Pravallika Jeevan", "P Parthasarathy"];
// prettier-ignore
var mts = ["OS Arranged", "M Vasanth Kumar", "V Hari Krishna", "V Munnelu", "M Jarayraman", "K Ramanjulu", "K Bala Krishna", "B Raja Naik", "M Nirmala", "G Giri Prasad", "V Suneetha", "N Om Shankar","CH Lakshmi Devi"];

var gds = ["J Dilli Babu", "N Hari Prasad", "N Murali Babu"];
// prettier-ignore
var outsiderSA = ["P Archana", "N Neeraja", "V Selvi", "P Venkatesh", "A Hemalatha", "G Kulai Basha", "B Kalyan Kumar", 
                  "E Jyoti", "M Rajeswari", "N Sudarshan", "A Kamakshi","B Devaraja","B Nagamma","BR Rojavathi","D Aruna",
                  "G Bala Surendra","K Sai Durga","K Sreekanth","K Sunil","N Aruna Jyoti","N Pradeep","N Pavani","S Lohitha Sree","T Sailaja",
                  "T Manjula","V Swathi"];
// prettier-ignore
var outsiderMTS = ["MTV Sai Kumar", "M Muni Reddy", "BV Reddy", "SA Khader Basha", "C Nirmala", "C Rupesh Chandra",
                  "N Vani","P Varalakshmi","C Nirmala","G Jyoti","T Manoj","G Jeeva","T Dilip Kumar","SA Khader Basha",
                  "SVT Reddy","B Srinivasulu","SKMD Basha","S Subramanyam","V Subramanyam","C Doraswamy","P Venakataswamy",
                  "C Haridas Reddy","V Dilli Sekhar","K Chinnaiah","S Usman","BLN Reddy",
                  "MV Ramana Murthy","E Murali","G Bala Krishna","N Murali Prasad","N Uday Kumar","P Jayamma",
                  "P Pratap Reddy",
];

export var sorters, mdate, mailguards, mts, gds, outsiderSA, outsiderMTS;
/*export var mdate;
export var mailguards;
export var mts;
export var gds;
export var outsiderSA;
export var outsiderMTS;
*/
