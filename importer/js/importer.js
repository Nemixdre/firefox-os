/****************************************************
 ********************* Importer *********************
 ****************************************************/


// Delete all contacts on phone
function delPhonebook() {
  alert("Delete now Contacts database on Phone");
  var req;
  req = window.navigator.mozContacts.clear();
  req.onsuccess = function () {
    alert("Deleted the database(Close an reopen Contacts app on Phone");
  };

  req.onerror = function() {
    alert("Error");
  };
}


// get contact file from given url
function getContactFile(url) {
  var xhr = new XMLHttpRequest({
    mozSystem: true // use systemXHR
  });
  xhr.addEventListener('load', function() {

    // TODO: 
    //if(outlook csv)
    //{
    var contacts = CSVToArray(xhr.response);

    for(var i = 0; i<contacts.length;i++)
    {
      saveCSVContactInPhone(contacts[i]);
    }
    //}
  });
  xhr.open('GET', url, true);

  xhr.send();
}
