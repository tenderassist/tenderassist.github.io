//Arrays & Constants
const date = new Date();

const logusers = [
    { logusername: "admin", logpassword: "admin2023" },
    { logusername: "user", logpassword: "user2023" }];

var temps = [
    { tempname: "John", tempsurname: "Cena" },
    { tempname: "Andrew", tempsurname: "Parker" },
    { tempname: "Keenan", tempsurname: "Thompson" },
    { tempname: "Mark", tempsurname: "Cera" }];

var boxes = [
    { boxnum: "1", boxlastoffice: "1a", boxlastcheckout: "", boxlastcheckin: "", boxlastcheckoutcalc: 1674220000000, boxlastcheckincalc: "", boxtemplastcheckout: "" },
    { boxnum: "2", boxlastoffice: "", boxlastcheckout: "", boxlastcheckin: "", boxlastcheckoutcalc: "", boxlastcheckincalc: "", boxtemplastcheckout: "" },
    { boxnum: "3", boxlastoffice: "3b", boxlastcheckout: "", boxlastcheckin: "", boxlastcheckoutcalc: 1674220000000, boxlastcheckincalc: "", boxtemplastcheckout: "" },
    { boxnum: "4", boxlastoffice: "", boxlastcheckout: "", boxlastcheckin: "", boxlastcheckoutcalc: "", boxlastcheckincalc: "", boxtemplastcheckout: "" }];

var specials = [
    { specnum: "11", speclastoffice: "", speclastcheckout: "", speclastcheckin: "", speclastcheckoutcalc: "", speclastcheckincalc: "", spectemplastcheckout: "" },
    { specnum: "12", speclastoffice: "", speclastcheckout: "", speclastcheckin: "", speclastcheckoutcalc: "", speclastcheckincalc: "", spectemplastcheckout: "" },
    { specnum: "13", speclastoffice: "4a", speclastcheckout: "", speclastcheckin: "", speclastcheckoutcalc: 1674220000000, speclastcheckincalc: "", spectemplastcheckout: "" },
    { specnum: "14", speclastoffice: "", speclastcheckout: "", speclastcheckin: "", speclastcheckoutcalc: "", speclastcheckincalc: "", spectemplastcheckout: "" }];

var officeinfo = [
    { compid: "1a", offnum: "1", offcomp: "ABC", offdateadded: "", offlastchecked: "1 2 3 11" },
    { compid: "1b", offnum: "1", offcomp: "DEF", offdateadded: "", offlastchecked: "" },
    { compid: "2a", offnum: "2", offcomp: "GHI", offdateadded: "", offlastchecked: "" },
    { compid: "3a", offnum: "3", offcomp: "JKL", offdateadded: "", offlastchecked: "" }];

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
    var offboxinid = document.getElementById("boxinoffid").value;
    var boxnumin1 = document.getElementById("boxin1").value;
    var boxnumin2 = document.getElementById("boxin2").value;
    var boxnumin3 = document.getElementById("boxin3").value;
    var specialnumin = document.getElementById("specialin").value;
    var timecheckin = date.getTime();
    var timecheckindisplay = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById("boxinreturn").innerHTML = "Returned boxes/specials: '" + boxnumin1 + "'; '" + boxnumin2 + "'; '" + boxnumin3 + "'; '" + specialnumin + "' Time:(" + timecheckindisplay + ")";

    for (var i = 0; i < boxes.length; i++) {
        if (boxnumin1 == boxes[i].boxnum) {
            boxes[i].boxlastoffice = offboxinid;
            boxes[i].boxlastcheckin = timecheckindisplay;
            boxes[i].boxlastcheckincalc = timecheckin;
        }

        if (boxnumin2 == boxes[i].boxnum) {
            boxes[i].boxlastoffice = offboxinid;
            boxes[i].boxlastcheckin = timecheckindisplay;
            boxes[i].boxlastcheckincalc = timecheckin;
        }

        if (boxnumin3 == boxes[i].boxnum) {
            boxes[i].boxlastoffice = offboxinid;
            boxes[i].boxlastcheckin = timecheckindisplay;
            boxes[i].boxlastcheckincalc = timecheckin;
        }
    }

    for (var i = 0; i < specials.length; i++) {
        if (specialnumin == specials[i].specnum) {
            specials[i].speclastoffice = offboxinid;
            specials[i].speclastcheckin = timecheckindisplay;
            specials[i].speclastcheckincalc = timecheckin;
        }
    }

    console.log(boxes);
    console.log(specials);

    document.getElementById("boxin1").reset;
    document.getElementById("boxin2").reset;
    document.getElementById("boxin3").reset;
    document.getElementById("specialin").reset;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//boxout.html
var tempchoseout = document.getElementById("templistout");

for (var i = 0; i < temps.length; i++) {
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(temps[i].tempname);
    option.appendChild(txt);
    option.setAttribute("value", temps[i].tempname);
    templistout.insertBefore(option, templistout.lastChild);
}

function CheckOut() {
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

    for (var i = 0; i < officeinfo.length; i++) {
        if (offboxoutid == officeinfo[i].compid) {
            officeinfo[i].offlastchecked = offlastcheckedout;
        }
    }

    for (var i = 0; i < boxes.length; i++) {
        if (boxnumout1 == boxes[i].boxnum) {
            boxes[i].boxlastoffice = offboxoutid;
            boxes[i].boxlastcheckout = timecheckoutdisplay;
            boxes[i].boxlastcheckoutcalc = timecheckout;
            boxes[i].boxtemplastcheckout = tempbookout;
        }

        if (boxnumout2 == boxes[i].boxnum) {
            boxes[i].boxlastoffice = offboxoutid;
            boxes[i].boxlastcheckout = timecheckoutdisplay;
            boxes[i].boxlastcheckoutcalc = timecheckout;
            boxes[i].boxtemplastcheckout = tempbookout;
        }

        if (boxnumout3 == boxes[i].boxnum) {
            boxes[i].boxlastoffice = offboxoutid;
            boxes[i].boxlastcheckout = timecheckoutdisplay;
            boxes[i].boxlastcheckoutcalc = timecheckout;
            boxes[i].boxtemplastcheckout = tempbookout;
        }
    }

    for (var i = 0; i < specials.length; i++) {
        if (specialnumout == specials[i].specnum) {
            specials[i].speclastoffice = offboxoutid;
            specials[i].speclastcheckout = timecheckoutdisplay;
            specials[i].speclastcheckoutcalc = timecheckout;
            specials[i].spectemplastcheckout = tempbookout;
        }
    }

    console.log(boxes);
    console.log(specials);
    console.log(officeinfo);

    document.getElementById("boxout1").reset();
    document.getElementById("boxout2").reset();
    document.getElementById("boxout3").reset();
    document.getElementById("specialout").reset();
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//officesearch.html
function OfficeSearch() {
    var idOffice = document.getElementById("offidsearch").value;

    for (var i = 0; i < officeinfo.length; i++) {
        if (idOffice == officeinfo[i].compid) {
            document.getElementById("officereturninfo").innerHTML = "Office ID: '" + officeinfo[i].compid + "'; Office number: '" + officeinfo[i].offnum + "'; Company: '" + officeinfo[i].offcomp + "'; Boxes Last checked: '" + officeinfo[i].offlastchecked + "'";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//searchbox.html
function BoxSearch() {
    var searchboxnum = document.getElementById("boxnumsearch").value;
    var boxorspec = document.getElementById("boxspecial").value;

    if (boxorspec == "box") {
        for (var i = 0; i < boxes.length; i++) {
            if (searchboxnum == boxes[i].boxnum) {
                document.getElementById("searchboxreturn").innerHTML = "Box number: " + boxes[i].boxnum + "; Last office: " + boxes[i].boxlastoffice + "; Last check-out time: " + boxes[i].boxlastcheckout + "; Last check-in time: " + boxes[i].boxlastcheckin + "; Checked out by: " + boxes[i].boxtemplastcheckout;
            }
        }
    }

    if (boxorspec == "special") {
        for (var i = 0; i < specials.length; i++) {
            if (searchboxnum == specials[i].specnum) {
                document.getElementById("searchboxreturn").innerHTML = "Special number: " + specials[i].specnum + "; Last office: " + specials[i].speclastoffice + "; Last check-out time: " + specials[i].speclastcheckout + "; Last check-in time: " + specials[i].speclastcheckin + "Checked out by: " + specials[i].spectemplastcheckout;
            }
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
//checkoutstanding.html
function Outstanding() {
    let i = 0;
    var timeoutstanding = date.getTime();
    let outstandingboxtext = " ";
    let outstandingspectext = " ";

    do {
        var timedifference = timeoutstanding - boxes[i].boxlastcheckoutcalc;
        console.log(timedifference)
        if ((boxes[i].boxlastcheckincalc < boxes[i].boxlastcheckoutcalc) && (timedifference >= 2500000)) {
            let outstandingboxnum = boxes[i].boxnum;
            let outstandingboxoff = boxes[i].boxlastoffice;
            outstandingboxtext = outstandingboxtext + outstandingboxnum + "(" + outstandingboxoff + ") ";
            console.log(outstandingboxtext);
        }

        var timedifferencespec = timeoutstanding - specials[i].speclastcheckoutcalc;
        if ((specials[i].speclastcheckincalc < specials[i].speclastcheckoutcalc) && (timedifferencespec >= 2500000)) {
            let outstandingspecnum = specials[i].specnum;
            let outstandingspecoff = specials[i].speclastoffice;
            outstandingspectext = outstandingspectext + outstandingspecnum + "(" + outstandingspecoff + ") ";
            console.log(outstandingspectext);
        }
        i++;
    } while (i < boxes.length);
    document.getElementById("outstandingboxreturn").innerHTML = outstandingboxtext;
    document.getElementById("outstandingspecreturn").innerHTML = outstandingspectext;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
//ADMIN MODE
//editoffice.html
function OfficeEdit() {
    let dateenteroff = new Date().toJSON().slice(0, 10);
    var propid = document.getElementById("offcompid").value;
    var editoffnum = document.getElementById("offnumedit").value;
    var editcompname = document.getElementById("compnameedit").value;

    if (officeinfo[i].compid == propid) {
        document.getElementById("idexists").innerHTML = "ID " + propid + " already exists!";
    } else {
        document.getElementById("editofficereturn").innerHTML = "Office ID: " + propid + "; Office edited: " + editoffnum + "; Company name: " + editcompname;
        officeinfo.push({ compid: propid, offnum: editoffnum, offcomp: editcompname, offdateadded: dateenteroff, offboxchecked: "", offspecialchecked: "", offlastchecked: "" });
    }
    console.log(officeinfo);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
//addtemp.html
function AddTemp() {
    var firstnametemp = document.getElementById("tempfirstname").value;
    var lastnametemp = document.getElementById("templastname").value;

    document.getElementById("addtempreturn").innerHTML = "Successfully added " + firstnametemp + " " + lastnametemp + " as a temp.";
    temps.push({ tempname: firstnametemp, tempsurname: lastnametemp });
    console.log(temps);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//deletetemp.html
var tempchosedel = document.getElementById("templistdel");

for (var i = 0; i < temps.length; i++) {
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(temps[i].tempname);
    option.appendChild(txt);
    option.setAttribute("value", temps[i].tempname);
    templist.insertBefore(option, templistdel.lastChild);
}

function DeleteTemp() {
    var selectedtemp = document.getElementById("templist").value;
    var deleteconfirmation = confirm("Are you sure you want to delete the temp?");
    if (deleteconfirmation) {
        document.getElementById("deletetempreturn").innerHTML = "Temp was successfully deleted!";
        for (var i = 0; i < temps.length; i++) {
            if (selectedtemp == temps[i].tempname) {
                temps.splice(i, 1);
            }
        }
    }
    console.log(temps);
}

    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //addbox.html
    function AddBox() {
        var boxspecialadd = document.getElementById("addboxspecial").value;
        var addnum = document.getElementById("addboxspecnum").value;

        if (boxspecialadd == "addbox") {
            document.getElementById("addboxreturn").innerHTML = "Successfully added box " + addnum;
            boxes.push({ boxnum: addnum, boxlastoffice: "", boxlastcheckout: "", boxlastcheckin: "" });
        }

        if (boxspecialadd == "addspecial") {
            document.getElementById("addboxreturn").innerHTML = "Successfully added special " + addnum;
            specials.push({ specnum: addnum, speclastoffice: "", speclastcheckout: "", speclastcheckin: "" });
        }
        console.log(boxes);
        console.log(specials);
    }

    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //deletebox.html
    function dropcascade() {
        var typechose = document.getElementById("typedelete").value;
        var numchose = document.getElementById("boxlist");

        if (typechose == "deletebox") {
            boxlist.length = 1;
            for (var i = 0; i < boxes.length; i++) {
                var option = document.createElement("OPTION"),
                    txt = document.createTextNode(boxes[i].boxnum);
                option.appendChild(txt);
                option.setAttribute("value", boxes[i].boxnum);
                boxlist.insertBefore(option, boxlist.lastChild);
            }
        }

        if (typechose == "deletespecial") {
            boxlist.length = 1;
            for (var i = 0; i < specials.length; i++) {
                var option = document.createElement("OPTION"),
                    txt = document.createTextNode(specials[i].specnum);
                option.appendChild(txt);
                option.setAttribute("value", specials[i].specnum);
                boxlist.insertBefore(option, boxlist.lastChild);
            }
        }
    }

    function DeleteBox() {
        var typedelete = document.getElementById("typedelete").value;
        var selectednumber = document.getElementById("boxlist").value;

        var deleteconfirmation = confirm("Are you sure you want to delete?");
        if (deleteconfirmation) {
            if (typedelete == "deletebox") {
                document.getElementById("deleteboxreturn").innerHTML = "Box " + selectednumber + " was successfully deleted!";
                for (var i = 0; i < boxes.length; i++) {
                    if (boxes[i].boxnum === selectednumber) {
                        boxes.splice(i, 1);
                    }
                }
            }

            if (typedelete == "deletespecial") {
                document.getElementById("deleteboxreturn").innerHTML = "Special " + selectednumber + " was successfully deleted!";
                for (var i = 0; i < specials.length; i++) {
                    if (specials[i].specnum === selectednumber) {
                        specials.splice(i, 1);
                    }
                }
            }
        }
        console.log(boxes);
        console.log(specials);
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------