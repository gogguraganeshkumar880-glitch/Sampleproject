let students = [];
let editIndex = -1;

function addStudent(){

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let course=document.getElementById("course").value;

if(name=="" || roll=="" || course==""){
alert("Please fill all fields");
return;
}

let student={
name,
roll,
course
};

if(editIndex===-1){
students.push(student);
}else{
students[editIndex]=student;
editIndex=-1;
}

displayStudents();

document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("course").value="";
}

function displayStudents(){

let table=document.getElementById("studentTable");

table.innerHTML="";

students.forEach((student,index)=>{

table.innerHTML+=`

<tr>

<td>${student.name}</td>

<td>${student.roll}</td>

<td>${student.course}</td>

<td>

<button class="edit" onclick="editStudent(${index})">Edit</button>

<button class="delete" onclick="deleteStudent(${index})">Delete</button>

</td>

</tr>

`;

});

}

function deleteStudent(index){

students.splice(index,1);

displayStudents();

}

function editStudent(index){

document.getElementById("name").value=students[index].name;

document.getElementById("roll").value=students[index].roll;

document.getElementById("course").value=students[index].course;

editIndex=index;

}

function searchStudent(){

let filter=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#studentTable tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(filter)?"":"none";

});

}
