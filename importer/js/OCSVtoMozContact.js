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

