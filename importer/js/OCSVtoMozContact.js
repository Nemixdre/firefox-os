/****************************************************
 ******** Outlook CSV to MozContact Converter *******
 ****************************************************/


// MozContact API: // https://wiki.mozilla.org/WebAPI/ContactsAPI#Example
// Outlook CSV Headers: 
// "+First Name: " + mContact[0] + '<br/>' +
// "+Middle Name: " + mContact[1] + '<br/>' +
// "+Last Name: " + mContact[2] + '<br/>' +
// "+Title: " + mContact[3] + '<br/>' +
// "+Suffix: " + mContact[4] + '<br/>' +
// "Initials: " + mContact[5] + '<br/>' +
// "+Web Page: " + mContact[6] + '<br/>' +
// "+Gender: " + mContact[7] + '<br/>' +
// "+Birthday: " + mContact[8] + '<br/>' +
// "+Anniversary: " + mContact[9] + '<br/>' +
// "Location: " + mContact[10] + '<br/>' +
// "Language: " + mContact[11] + '<br/>' +
// "Internet Free Busy: " + mContact[12] + '<br/>' +
// "+Notes: " + mContact[13] + '<br/>' +
// "+E-mail Address: " + mContact[14] + '<br/>' +
// "+E-mail 2 Address: " + mContact[15] + '<br/>' +
// "+E-mail 3 Address: " + mContact[16] + '<br/>' +
// "+Primary Phone: " + mContact[17] + '<br/>' +
// "+Home Phone: " + mContact[18] + '<br/>' +
// "+Home Phone 2: " + mContact[19] + '<br/>' +
// "+Mobile Phone: " + mContact[20] + '<br/>' +
// "Pager: " + mContact[21] + '<br/>' +
// "Home Fax: " + mContact[22] + '<br/>' +
// "+Home Address: " + mContact[23] + '<br/>' +
// "+Home Street: " + mContact[24] + '<br/>' +
// "+Home Street 2: " + mContact[25] + '<br/>' +
// "+Home Street 3: " + mContact[26] + '<br/>' +
// "+Home Address PO Box: " + mContact[27] + '<br/>' +
// "+Home City: " + mContact[28] + '<br/>' +
// "+Home State: " + mContact[29] + '<br/>' +
// "+Home Postal Code: " + mContact[30] + '<br/>' +
// "+Home Country: " + mContact[31] + '<br/>' +
// "Spouse: " + mContact[32] + '<br/>' +
// "Children: " + mContact[33] + '<br/>' +
// "Manager's Name: " + mContact[34] + '<br/>' +
// "Assistant's Name: " + mContact[35] + '<br/>' +
// "Referred By: " + mContact[36] + '<br/>' +
// "+Company Main Phone: " + mContact[37] + '<br/>' +
// "+Business Phone: " + mContact[38] + '<br/>' +
// "+Business Phone 2: " + mContact[39] + '<br/>' +
// "Business Fax: " + mContact[40] + '<br/>' +
// "+Assistant's Phone: " + mContact[41] + '<br/>' +
// "Company: " + mContact[42] + '<br/>' +
// "+Job Title: " + mContact[43] + '<br/>' +
// "Department: " + mContact[44] + '<br/>' +
// "Office Location: " + mContact[45] + '<br/>' +
// "Organizational ID Number: " + mContact[46] + '<br/>' +
// "Profession: " + mContact[47] + '<br/>' +
// "Account: " + mContact[48] + '<br/>' +
// "+Business Address: " + mContact[49] + '<br/>' +
// "+Business Street: " + mContact[50] + '<br/>' +
// "+Business Street 2: " + mContact[51] + '<br/>' +
// "+Business Street 3: " + mContact[52] + '<br/>' +
// "+Business Address PO Box: " + mContact[53] + '<br/>' +
// "+Business City: " + mContact[54] + '<br/>' +
// "+Business State: " + mContact[55] + '<br/>' +
// "+Business Postal Code: " + mContact[56] + '<br/>' +
// "+Business Country: " + mContact[57] + '<br/>' +
// "+Other Phone: " + mContact[58] + '<br/>' +
// "Other Fax: " + mContact[59] + '<br/>' +
// "+Other Address: " + mContact[60] + '<br/>' +
// "+Other Street: " + mContact[61] + '<br/>' +
// "+Other Street 2: " + mContact[62] + '<br/>' +
// "+Other Street 3: " + mContact[63] + '<br/>' +
// "+Other Address PO Box: " + mContact[64] + '<br/>' +
// "+Other City: " + mContact[65] + '<br/>' +
// "+Other State: " + mContact[66] + '<br/>' +
// "+Other Postal Code: " + mContact[67] + '<br/>' +
// "+Other Country: " + mContact[68] + '<br/>' +
// "Callback: " + mContact[69] + '<br/>' +
// "+Car Phone: " + mContact[70] + '<br/>' +
// "ISDN: " + mContact[71] + '<br/>' +
// "+Radio Phone: " + mContact[72] + '<br/>' +
// "+TTY/TDD Phone: " + mContact[73] + '<br/>' +
// "Telex: " + mContact[74] + '<br/>' +
// "User 1: " + mContact[75] + '<br/>' +
// "User 2: " + mContact[76] + '<br/>' +
// "User 3: " + mContact[77] + '<br/>' +
// "User 4: " + mContact[78] + '<br/>' +
// "Keywords: " + mContact[79] + '<br/>' +
// "Mileage: " + mContact[80] + '<br/>' +
// "Hobby: " + mContact[81] + '<br/>' +
// "Billing Information: " + mContact[82] + '<br/>' +
// "Directory Server: " + mContact[83] + '<br/>' +
// "Sensitivity: " + mContact[84] + '<br/>' +
// "Priority: " + mContact[85] + '<br/>' +
// "Private: " + mContact[86] + '<br/>' +
// "Categories : " + mContact[87] + '<br/>' ;


// Create and save a MozContact from an Outlook CSV contact
function saveCSVContactInPhone(mContact) {
  var contact = new mozContact();
  
  var adr = [
  {
    type:                   ["home"],
    streetAddress:          mContact[24],
    locality:               mContact[28],
    region:                 mContact[29],
    postalCode:             mContact[30],
    countryName:            mContact[31]
  },
  {
    type:                   ["work"],
    streetAddress:          mContact[49],
    locality:               mContact[54],
    region:                 mContact[55],
    postalCode:             mContact[56],
    countryName:            mContact[57]
  },
  {
    type:                   ["other"],
    streetAddress:          mContact[61],
    locality:               mContact[65],
    region:                 mContact[66],
    postalCode:             mContact[67],
    countryName:            mContact[68]
  }
  ];

  var tel = [
  {
    type:                   ["primary"],
    value:                  mContact[17],
  },
  {
    type:                   ["home"],
    value:                  mContact[18],
  },
  {
    type:                   ["home 2"],
    value:                  mContact[19],
  },
  {
    type:                   ["mobile"],
    value:                  mContact[20],
  },
  {
    type:                   ["company main"],
    value:                  mContact[37],
  },
  {
    type:                   ["business"],
    value:                  mContact[38],
  },
  {
    type:                   ["business 2"],
    value:                  mContact[39],
  },
  {
    type:                   ["assistant"],
    value:                  mContact[41],
  },
  {
    type:                   ["other"],
    value:                  mContact[58],
  },
  {
    type:                   ["car"],
    value:                  mContact[70],
  },
  {
    type:                   ["radio"],
    value:                  mContact[72],
  },
  {
    type:                   ["tty/ttd"],
    value:                  mContact[73],
  }
  ];

  var email = [
  {
    type:                   ["email"],
    value:                  mContact[14],
  },
  {
    type:                   ["email 2"],
    value:                  mContact[15],
  },
  {
    type:                   ["email 3"],
    value:                  mContact[16],
  }
  ];

  contact.init({
    name:            mContact[0] + " " + mContact[2],
    honorificPrefix: mContact[3],
    givenName:       mContact[0],
    additionalName:  mContact[1],
    familyName:      mContact[2],
    honorificSuffix: mContact[4],
    email:           email,
    url:             mContact[6],
    adr:             adr,
    tel:             tel,
    jobTitle:        mContact[43],
    bday:            mContact[8],
    note:            mContact[13],
    anniversary:     mContact[9],
    genderIdentity:  mContact[7]
  });

  var request = navigator.mozContacts.save(contact);

  request.onsuccess = function() {
    alert("ok: " + request);
  };

  request.onerror = function() {
    alert("failure");
  };

}

