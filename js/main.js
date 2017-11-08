function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

// today's add task
function newTodayTask(){
	var li = document.createElement("li");
	li.setAttribute('draggable', true);
	li.setAttribute('ondragstart', 'dragStart(event)');
	li.setAttribute('id', 'id_today' + Math.random().toString(36));
	li.setAttribute('onclick', 'openModal(this.id)');
	var todayValue = document.getElementById("todayinput").value;
	var t = document.createTextNode(todayValue);
	li.appendChild(t);
	if(todayValue === ''){
		alert('Please enter task name in todays task');
	}else{
		document.getElementById("today_list").appendChild(li);
	}
}

// today's week task
function newWeekTask(){
	var li = document.createElement("li");
	li.setAttribute('draggable', true);
	li.setAttribute('ondragstart', 'dragStart(event)');
	li.setAttribute('id', 'id_week' + Math.random().toString(36));
	li.setAttribute('onclick', 'openModal(this.id)');
	var weekValue = document.getElementById("weekinput").value;
	var t = document.createTextNode(weekValue);
	li.appendChild(t);
	if(weekValue === ''){
		alert('Please enter task name in weeks task');
	}else{
		document.getElementById("week_list").appendChild(li);
	}
}

// today's month task
function newMonthTask(){
	var li = document.createElement("li");
	li.setAttribute('draggable', true);
	li.setAttribute('ondragstart', 'dragStart(event)');
	li.setAttribute('id', 'id_month' + Math.random().toString(36));
	li.setAttribute('onclick', 'openModal(this.id)');
	var weekValue = document.getElementById("monthinput").value;
	var t = document.createTextNode(weekValue);
	li.appendChild(t);
	if(weekValue === ''){
		alert('Please enter task name in months task');
	}else{
		document.getElementById("month_list").appendChild(li);
	}
}

// delete list

function deleteList(id){
    var deleteList = this.document.getElementById(id);
    deleteList.style.display = "none";
}

//modal

var currentOpened;

function openModal(id_got){
	var modalOpen = document.getElementById('modal');
	modalOpen.style.display = "block";
	var i = id_got;
	currentOpened = id_got;
	var getId = this.document.getElementById(i);
	var modalHeader = this.document.getElementById('m_header_title');
	modalHeader.innerHTML = getId.innerHTML;
}

//archive list items

function archive(){
	var modal = this.document.getElementById('modal');
	modal.style.display = "none";
	document.getElementById(currentOpened).style.display = 'none';
}

// comments 

function getComments(){
	c = commentsBox.value;
  	document.getElementById("commentsSec").innerHTML +=  c + '<br /><br />';
  	document.getElementById("commentsBox").value = "";
}









