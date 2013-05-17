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




// get contact file
function getContactFile(url) {
  var xhr = new XMLHttpRequest({
    mozSystem: true // use systemXHR
  });
  xhr.addEventListener('load', function() {
    var contacts = CSVToArray(xhr.response);
    

    for(var i = 0; i<contacts.length;i++)
    {
      saveCSVContactInPhone(contacts[i]);
    }

// document.getElementById('kontakte').innerHTML = document.getElementById('kontakte').innerHTML + '<br>' +
// "+First Name: " + contacts[7][0] + '<br>' +
// "+Middle Name: " + contacts[7][1] + '<br>' +
// "+Last Name: " + contacts[7][2] + '<br>' +
// "+Title: " + contacts[7][3] + '<br>' +
// "+Suffix: " + contacts[7][4] + '<br>' +
// "Initials: " + contacts[7][5] + '<br>' +
// "+Web Page: " + contacts[7][6] + '<br>' +
// "+Gender: " + contacts[7][7] + '<br>' +
// "+Birthday: " + contacts[7][8] + '<br>' +
// "+Anniversary: " + contacts[7][9] + '<br>' +
// "Location: " + contacts[7][10] + '<br>' +
// "Language: " + contacts[7][11] + '<br>' +
// "Internet Free Busy: " + contacts[7][12] + '<br>' +
// "+Notes: " + contacts[7][13] + '<br>' +
// "+E-mail Address: " + contacts[7][14] + '<br>' +
// "+E-mail 2 Address: " + contacts[7][15] + '<br>' +
// "+E-mail 3 Address: " + contacts[7][16] + '<br>' +
// "+Primary Phone: " + contacts[7][17] + '<br>' +
// "+Home Phone: " + contacts[7][18] + '<br>' +
// "+Home Phone 2: " + contacts[7][19] + '<br>' +
// "+Mobile Phone: " + contacts[7][20] + '<br>' +
// "Pager: " + contacts[7][21] + '<br>' +
// "Home Fax: " + contacts[7][22] + '<br>' +
// "+Home Address: " + contacts[7][23] + '<br>' +
// "+Home Street: " + contacts[7][24] + '<br>' +
// "+Home Street 2: " + contacts[7][25] + '<br>' +
// "+Home Street 3: " + contacts[7][26] + '<br>' +
// "+Home Address PO Box: " + contacts[7][27] + '<br>' +
// "+Home City: " + contacts[7][28] + '<br>' +
// "+Home State: " + contacts[7][29] + '<br>' +
// "+Home Postal Code: " + contacts[7][30] + '<br>' +
// "+Home Country: " + contacts[7][31] + '<br>' +
// "Spouse: " + contacts[7][32] + '<br>' +
// "Children: " + contacts[7][33] + '<br>' +
// "Manager's Name: " + contacts[7][34] + '<br>' +
// "Assistant's Name: " + contacts[7][35] + '<br>' +
// "Referred By: " + contacts[7][36] + '<br>' +
// "+Company Main Phone: " + contacts[7][37] + '<br>' +
// "+Business Phone: " + contacts[7][38] + '<br>' +
// "+Business Phone 2: " + contacts[7][39] + '<br>' +
// "Business Fax: " + contacts[7][40] + '<br>' +
// "+Assistant's Phone: " + contacts[7][41] + '<br>' +
// "Company: " + contacts[7][42] + '<br>' +
// "+Job Title: " + contacts[7][43] + '<br>' +
// "Department: " + contacts[7][44] + '<br>' +
// "Office Location: " + contacts[7][45] + '<br>' +
// "Organizational ID Number: " + contacts[7][46] + '<br>' +
// "Profession: " + contacts[7][47] + '<br>' +
// "Account: " + contacts[7][48] + '<br>' +
// "+Business Address: " + contacts[7][49] + '<br>' +
// "+Business Street: " + contacts[7][50] + '<br>' +
// "+Business Street 2: " + contacts[7][51] + '<br>' +
// "+Business Street 3: " + contacts[7][52] + '<br>' +
// "+Business Address PO Box: " + contacts[7][53] + '<br>' +
// "+Business City: " + contacts[7][54] + '<br>' +
// "+Business State: " + contacts[7][55] + '<br>' +
// "+Business Postal Code: " + contacts[7][56] + '<br>' +
// "+Business Country: " + contacts[7][57] + '<br>' +
// "+Other Phone: " + contacts[7][58] + '<br>' +
// "Other Fax: " + contacts[7][59] + '<br>' +
// "+Other Address: " + contacts[7][60] + '<br>' +
// "+Other Street: " + contacts[7][61] + '<br>' +
// "+Other Street 2: " + contacts[7][62] + '<br>' +
// "+Other Street 3: " + contacts[7][63] + '<br>' +
// "+Other Address PO Box: " + contacts[7][64] + '<br>' +
// "+Other City: " + contacts[7][65] + '<br>' +
// "+Other State: " + contacts[7][66] + '<br>' +
// "+Other Postal Code: " + contacts[7][67] + '<br>' +
// "+Other Country: " + contacts[7][68] + '<br>' +
// "Callback: " + contacts[7][69] + '<br>' +
// "+Car Phone: " + contacts[7][70] + '<br>' +
// "ISDN: " + contacts[7][71] + '<br>' +
// "+Radio Phone: " + contacts[7][72] + '<br>' +
// "+TTY/TDD Phone: " + contacts[7][73] + '<br>' +
// "Telex: " + contacts[7][74] + '<br>' +
// "User 1: " + contacts[7][75] + '<br>' +
// "User 2: " + contacts[7][76] + '<br>' +
// "User 3: " + contacts[7][77] + '<br>' +
// "User 4: " + contacts[7][78] + '<br>' +
// "Keywords: " + contacts[7][79] + '<br>' +
// "Mileage: " + contacts[7][80] + '<br>' +
// "Hobby: " + contacts[7][81] + '<br>' +
// "Billing Information: " + contacts[7][82] + '<br>' +
// "Directory Server: " + contacts[7][83] + '<br>' +
// "Sensitivity: " + contacts[7][84] + '<br>' +
// "Priority: " + contacts[7][85] + '<br>' +
// "Private: " + contacts[7][86] + '<br>' +
// "Categories : " + contacts[7][87] + '<br>' ;

  });
  xhr.open('GET', url, true);

  xhr.send();
}
