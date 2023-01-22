// JavaScript source code
//Arrays & Constants
const date = new Date();

const logusers = [
    { logusername: "admin", logpassword: "admin2023" },
    { logusername: "user", logpassword: "user2023" }];

/*const temps = [];

localStorage.setItem('temps', JSON.stringify(temps));
console.log(localStorage.getItem('temps'));

const boxes = [
    { boxnum: "", boxlastoffice: "", boxlastcheckout: "", boxlastcheckin: "", boxlastcheckoutcalc: "", boxlastcheckincalc: "", boxtemplastcheckout: "" }];

localStorage.setItem('boxes', JSON.stringify(boxes));
console.log(localStorage.getItem('boxes'));

const specials = [
    { specnum: "", speclastoffice: "", speclastcheckout: "", speclastcheckin: "", speclastcheckoutcalc: "", speclastcheckincalc: "", spectemplastcheckout: "" }];

localStorage.setItem('specials', JSON.stringify(specials));
console.log(localStorage.getItem('specials'));

const officeinfo = [
    { compid: "", offnum: "", offcomp: "", offdateadded: "", offlastchecked: "" }];

localStorage.setItem('officeinfo', JSON.stringify(officeinfo));
console.log(localStorage.getItem('office'));*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//USER MODE
//Index.html DOUBLE CHECK
// Get the modal
//var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

//Checks if passowrd and username is correct
function Login() {
    var Username = document.getElementById("loginusername").value;
    var Password = document.getElementById("loginpassword").value;

    if ((Username == "user") && (Password == "user2023")) {      
        console.log("User logged in");
        location.assign("user_home.html");

    }

    if ((Username == "admin") && (Password == "admin2023")) {
        console.log("Admin logged in"); 
        location.assign("admin_home.html");
    }

    document.getElementById("indexreturn").innerHTML = "Inorrect username or password!";
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------
//boxin.html
function CheckIn() {
    const boxesinarr = JSON.parse(localStorage.getItem('boxes'));
    const specialsinarr = JSON.parse(localStorage.getItem('specials'));

    var offboxinid = document.getElementById("boxinoffid").value;
    var boxnumin1 = document.getElementById("boxin1").value;
    var boxnumin2 = document.getElementById("boxin2").value;
    var boxnumin3 = document.getElementById("boxin3").value;
    var specialnumin = document.getElementById("specialin").value;
    var timecheckin = date.getTime();
    var timecheckindisplay = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById("boxinreturn").innerHTML = "Returned boxes/specials: '" + boxnumin1 + "'; '" + boxnumin2 + "'; '" + boxnumin3 + "'; '" + specialnumin + "' Time:(" + timecheckindisplay + ")";

    for (var i = 0; i < boxesinarr.length; i++) {
        if (boxnumin1 == boxesinarr[i].boxnum) {
            boxesinarr[i].boxlastoffice = offboxinid;
            boxesinarr[i].boxlastcheckin = timecheckindisplay;
            boxesinarr[i].boxlastcheckincalc = timecheckin;
        }

        if (boxnumin2 == boxesinarr[i].boxnum) {
            boxesinarr[i].boxlastoffice = offboxinid;
            boxesinarr[i].boxlastcheckin = timecheckindisplay;
            boxesinarr[i].boxlastcheckincalc = timecheckin;
        }

        if (boxnumin3 == boxesinarr[i].boxnum) {
            boxesinarr[i].boxlastoffice = offboxinid;
            boxesinarr[i].boxlastcheckin = timecheckindisplay;
            boxesinarr[i].boxlastcheckincalc = timecheckin;
        }
    }

    for (var i = 0; i < specialsinarr.length; i++) {
        if (specialnumin == specials[i].specnum) {
            specialsoinarr[i].speclastoffice = offboxinid;
            specialsinarr[i].speclastcheckin = timecheckindisplay;
            specialsinarr[i].speclastcheckincalc = timecheckin;
        }
    }

    localStorage.setItem('boxes', JSON.stringify(boxesinarr));
    localStorage.setItem('specials', JSON.stringify(specialsinarr));

    console.log(localStorage.getItem('boxes'));
    console.log(localStorage.getItem('specials'));

    document.getElementById("boxin1").reset;
    document.getElementById("boxin2").reset;
    document.getElementById("boxin3").reset;
    document.getElementById("specialin").reset;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//boxout.html
var tempchoseout = document.getElementById("templistout");
const tempschooseoutarr = JSON.parse(localStorage.getItem('temps'));

for (var i = 0; i < tempschooseoutarr.length; i++) {
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(tempschooseoutarr[i].tempname);
    option.appendChild(txt);
    option.setAttribute("value", tempschooseoutarr[i].tempname);
    templistout.insertBefore(option, templistout.lastChild);
}


function CheckOut() {
    const tempsoutarr = JSON.parse(localStorage.getItem('temps'));
    const boxesoutarr = JSON.parse(localStorage.getItem('boxes'));
    const specialsoutarr = JSON.parse(localStorage.getItem('specials'));
    const officeinfooutarr = JSON.parse(localStorage.getItem('officeinfo'));

    var tempbookout = document.getElementById("templistout").value;
    var offboxoutid = document.getElementById("boxoutoffid").value;
    var boxnumout1 = document.getElementById("boxout1").value;
    var boxnumout2 = document.getElementById("boxout2").value;
    var boxnumout3 = document.getElementById("boxout3").value;
    var specialnumout = document.getElementById("specialout").value;
    var offlastcheckedout = boxnumout1 + " " + boxnumout2 + " " + boxnumout3 + " " + specialnumout;
    var timecheckout = date.getTime();
    var timecheckoutdisplay = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    document.getElementById("boxoutreturn").innerHTML = "Boxes/specials going out: '" + boxnumout1 + "'; '" + boxnumout2 + "'; '" + boxnumout3 + "'; '" + specialnumout + "'; Time:(" + timecheckoutdisplay + ")";

    for (var i = 0; i < officeinfooutarr.length; i++) {
        if (offboxoutid == officeinfooutarr[i].compid) {
            officeinfo[i].offlastchecked = offlastcheckedout;
        }
    }

    for (var i = 0; i < boxesoutarr.length; i++) {
        if (boxnumout1 == boxes[i].boxnum) {
            boxesoutarr[i].boxlastoffice = offboxoutid;
            boxesoutarr[i].boxlastcheckout = timecheckoutdisplay;
            boxesoutarr[i].boxlastcheckoutcalc = timecheckout;
            boxesoutarr[i].boxtemplastcheckout = tempbookout;
        }

        if (boxnumout2 == boxesoutarr[i].boxnum) {
            boxesoutarr[i].boxlastoffice = offboxoutid;
            boxesoutarr[i].boxlastcheckout = timecheckoutdisplay;
            boxesoutarr[i].boxlastcheckoutcalc = timecheckout;
            boxesoutarr[i].boxtemplastcheckout = tempbookout;
        }

        if (boxnumout3 == boxesoutarr[i].boxnum) {
            boxesoutarr[i].boxlastoffice = offboxoutid;
            boxesoutarr[i].boxlastcheckout = timecheckoutdisplay;
            boxesoutarr[i].boxlastcheckoutcalc = timecheckout;
            boxesoutarr[i].boxtemplastcheckout = tempbookout;
        }
    }

    for (var i = 0; i < specialsoutarr.length; i++) {
        if (specialnumout == specialsoutarr[i].specnum) {
            specialsoutarr[i].speclastoffice = offboxoutid;
            specialsoutarr[i].speclastcheckout = timecheckoutdisplay;
            specialsoutarr[i].speclastcheckoutcalc = timecheckout;
            specialsoutarr[i].spectemplastcheckout = tempbookout;
        }
    }

    localStorage.setItem('boxes', JSON.stringify(boxesoutarr));
    localStorage.setItem('specials', JSON.stringify(specialsoutarr));
    localStorage.setItem('officeinfo', JSON.stringify(officeinfooutarr));

    console.log(localStorage.getItem('boxes'));
    console.log(localStorage.getItem('specials'));
    console.log(localStorage.getItem('officeinfo'));

    document.getElementById("boxout1").reset();
    document.getElementById("boxout2").reset();
    document.getElementById("boxout3").reset();
    document.getElementById("specialout").reset();
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//officesearch.html
function OfficeSearch() {
    const officeinfosearcharr = JSON.parse(localStorage.getItem('officeinfo'));
    var idOffice = document.getElementById("offidsearch").value;

    for (var i = 0; i < officeinfosearcharr.length; i++) {
        if (idOffice == officeinfosearcharr[i].compid) {
            document.getElementById("officereturninfo").innerHTML = "Office ID: '" + officeinfo[i].compid + "'; Office number: '" + officeinfo[i].offnum + "'; Company: '" + officeinfo[i].offcomp + "'; Boxes Last checked: '" + officeinfo[i].offlastchecked + "'";
        }
    }
    localStorage.setItem('officeinfo', JSON.stringify(officeinfosearcharr));
    console.log(localStorage.getItem('officeinfo'));
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//searchbox.html
function BoxSearch() {
    const boxessearcharr = JSON.parse(localStorage.getItem('boxes'));
    const specialssearcharr = JSON.parse(localStorage.getItem('specials'));

    var searchboxnum = document.getElementById("boxnumsearch").value;
    var boxorspec = document.getElementById("boxspecial").value;

    if (boxorspec == "box") {
        for (var i = 0; i < boxessearcharr.length; i++) {
            if (searchboxnum == boxessearcharr[i].boxnum) {
                document.getElementById("searchboxreturn").innerHTML = "Box number: " + boxes[i].boxnum + "; Last office: " + boxes[i].boxlastoffice + "; Last check-out time: " + boxes[i].boxlastcheckout + "; Last check-in time: " + boxes[i].boxlastcheckin + "; Checked out by: " + boxes[i].boxtemplastcheckout;
            }
        }
    }

    if (boxorspec == "special") {
        for (var i = 0; i < specialssearcharr.length; i++) {
            if (searchboxnum == specialssearcharr[i].specnum) {
                document.getElementById("searchboxreturn").innerHTML = "Special number: " + specials[i].specnum + "; Last office: " + specials[i].speclastoffice + "; Last check-out time: " + specials[i].speclastcheckout + "; Last check-in time: " + specials[i].speclastcheckin + "Checked out by: " + specials[i].spectemplastcheckout;
            }
        }
    }

    localStorage.setItem('boxes', JSON.stringify(boxessearcharr));
    localStorage.setItem('specials', JSON.stringify(specialssearcharr));
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//checkoutstanding.html
function Outstanding() {
    const boxesoutstanding = JSON.parse(localStorage.getItem('boxes'));
    const specialsoutstanding = JSON.parse(localStorage.getItem('specials'));

    let i = 0;
    var timeoutstanding = date.getTime();
    let outstandingboxtext = " ";
    let outstandingspectext = " ";

    do {
        var timedifference = timeoutstanding - boxes[i].boxlastcheckoutcalc;
        console.log(timedifference)
        if ((boxesoutstanding[i].boxlastcheckincalc < boxesoutstanding[i].boxlastcheckoutcalc) && (timedifference >= 2500000)) {
            let outstandingboxnum = boxesoutstanding[i].boxnum;
            let outstandingboxoff = boxesoutstanding[i].boxlastoffice;
            outstandingboxtext = outstandingboxtext + outstandingboxnum + "(" + outstandingboxoff + ") ";
            console.log(outstandingboxtext);
        }

        var timedifferencespec = timeoutstanding - specialsoutstanding[i].speclastcheckoutcalc;
        if ((specialsoutstanding[i].speclastcheckincalc < specialsoutstanding[i].speclastcheckoutcalc) && (timedifferencespec >= 2500000)) {
            let outstandingspecnum = specialsoutstanding[i].specnum;
            let outstandingspecoff = specialsoutstanding[i].speclastoffice;
            outstandingspectext = outstandingspectext + outstandingspecnum + "(" + outstandingspecoff + ") ";
            console.log(outstandingspectext);
        }
        i++;
    } while (i < boxesoutstanding.length);
    document.getElementById("outstandingboxreturn").innerHTML = outstandingboxtext;
    document.getElementById("outstandingspecreturn").innerHTML = outstandingspectext;

    localStorage.setItem('boxes', JSON.stringify(boxesoutstanding));
    localStorage.setItem('specials', JSON.stringify(specialsoutstanding));
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
//ADMIN MODE
//editoffice.html
function OfficeEdit() {
    const officeinfoeditarr = JSON.parse(localStorage.getItem('officeinfo'));

    let dateenteroff = new Date().toJSON().slice(0, 10);
    var propid = document.getElementById("offcompid").value;
    var editoffnum = document.getElementById("offnumedit").value;
    var editcompname = document.getElementById("compnameedit").value;

    if (officeinfoeditarr[i].compid == propid) {
        document.getElementById("idexists").innerHTML = "ID " + propid + " already exists!";
    } else {
        document.getElementById("editofficereturn").innerHTML = "Office ID: " + propid + "; Office edited: " + editoffnum + "; Company name: " + editcompname;
        officeinfoeditarr.push({ compid: propid, offnum: editoffnum, offcomp: editcompname, offdateadded: dateenteroff, offboxchecked: "", offspecialchecked: "", offlastchecked: "" });
    }
    localStorage.setItem('officeinfo', JSON.stringify(officeinfoeditarr));
    console.log(localStorage.getItem('officeinfo'));
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
//addtemp.html
function AddTemp() {
    const tempsaddarr = JSON.parse(localStorage.getItem('temps'));

    var firstnametemp = document.getElementById("tempfirstname").value;
    var lastnametemp = document.getElementById("templastname").value;

    document.getElementById("addtempreturn").innerHTML = "Successfully added " + firstnametemp + " " + lastnametemp + " as a temp.";
    tempsaddarr.push({ tempname: firstnametemp, tempsurname: lastnametemp });

    localStorage.setItem('temps', JSON.stringify(tempsaddarr));
    console.log(localStorage.getItem('temps'));
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//deletetemp.html
function DeleteTemp() {
    const tempsdelarr = JSON.parse(localStorage.getItem('temps'));

    var tempchosedel = document.getElementById("tempdelname").value;
    var tempchosedelsurname = document.getElementById("tempdelsurname").value;

    var deleteconfirmation = confirm("Are you sure you want to delete the temp?");
    if (deleteconfirmation) {
        for (var i = 0; i < tempsdelarr.length; i++) {
            if ((tempchosedel == tempsdelarr[i].tempname) && (tempchosedelsurname == tempsdelarr[i].tempsurname)) {
                tempsdelarr.splice(i, 1);
                document.getElementById("deletetempreturn").innerHTML = tempchosedel + ' ' + tempchosedelsurname + " was successfully deleted!";
            }
        }       
    }
    localStorage.setItem('temps', JSON.stringify(tempsdelarr));
    console.log(localStorage.getItem('temps'));
}

    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //addbox.html
function AddBox() {
    const boxesaddarr = JSON.parse(localStorage.getItem('boxes'));
    const specialsaddarr = JSON.parse(localStorage.getItem('specials'));

    var boxspecialadd = document.getElementById("addboxspecial").value;
    var addnum = document.getElementById("addboxspecnum").value;

    if (boxspecialadd == "addbox") {
        document.getElementById("addboxreturn").innerHTML = "Successfully added box " + addnum;
        boxesaddarr.push({ boxnum: addnum, boxlastoffice: "", boxlastcheckout: "", boxlastcheckin: "" });
    }

    if (boxspecialadd == "addspecial") {
        document.getElementById("addboxreturn").innerHTML = "Successfully added special " + addnum;
        specialsaddarr.push({ specnum: addnum, speclastoffice: "", speclastcheckout: "", speclastcheckin: "" });
    }

    localStorage.setItem('boxes', JSON.stringify(boxesaddarr));
    localStorage.setItem('specials', JSON.stringify(specialsaddarr));
    console.log(localStorage.getItem('boxes'));
    console.log(localStorage.getItem('specials'));
}

    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //deletebox.html
function dropcascade() {
    const boxesdroparr = JSON.parse(localStorage.getItem('boxes'));
    const specialsdroparr = JSON.parse(localStorage.getItem('specials'));

    var typechose = document.getElementById("typedelete").value;
    var numchose = document.getElementById("boxlist");

    if (typechose == "deletebox") {
        boxlist.length = 1;
        for (var i = 0; i < boxesdroparr.length; i++) {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(boxesdroparr[i].boxnum);
            option.appendChild(txt);
            option.setAttribute("value", boxesdroparr[i].boxnum);
            boxlist.insertBefore(option, boxlist.lastChild);
        }
    }

    if (typechose == "deletespecial") {
        boxlist.length = 1;
        for (var i = 0; i < specialsdroparr.length; i++) {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(specialsdroparr[i].specnum);
            option.appendChild(txt);
            option.setAttribute("value", specialsdroparr[i].specnum);
            boxlist.insertBefore(option, boxlist.lastChild);
        }
    }
}

function DeleteBox() {
    const boxesdelarr = JSON.parse(localStorage.getItem('boxes'));
    const specialsdelarr = JSON.parse(localStorage.getItem('specials'));

    var typedelete = document.getElementById("typedelete").value;
    var selectednumber = document.getElementById("boxlist").value;

    var deleteconfirmation = confirm("Are you sure you want to delete?");
    if (deleteconfirmation) {
        if (typedelete == "deletebox") {
            document.getElementById("deleteboxreturn").innerHTML = "Box " + selectednumber + " was successfully deleted!";
            for (var i = 0; i < boxesdelarr.length; i++) {
                if (boxesdelarr[i].boxnum === selectednumber) {
                    boxesdelarr.splice(i, 1);
                }
            }
        }

        if (typedelete == "deletespecial") {
            document.getElementById("deleteboxreturn").innerHTML = "Special " + selectednumber + " was successfully deleted!";
            for (var i = 0; i < specialsdelarr.length; i++) {
                if (specialsdelarr[i].specnum === selectednumber) {
                    specialsdelarr.splice(i, 1);
                }
            }
        }
    }
    localStorage.setItem('boxes', JSON.stringify(boxesdelarr));
    localStorage.setItem('specials', JSON.stringify(specialsdelarr));
    console.log(localStorage.getItem('boxes'));
    console.log(localStorage.getItem('specials'));
}

//-------------------------------------------------------------------------------------------------------------------------------------------------