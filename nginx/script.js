var evia_attendees = [
  "Igor Ilic",
  "Denislav Kolaksazov",
];
var ul = document.createElement('ul');
document.getElementById('app').appendChild(ul);
evia_attendees.forEach(function(attendee) {
  var li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += attendee;
});
