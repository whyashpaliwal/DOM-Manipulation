/*
* DOM Assignment
* Developed by: Yash Paliwal
* Reviewer: RajjatB
* Date: 18-05-2020
* JS file
*/

/*-------------------------------------------------------------------------*/
/*Start function to create UI
* Excute after clicking Start Application btn
* Removes start btn
* Create the requried UI
*/
function startApp(){
    var LMtdSelectionDiv, LRadioUsingDiv, LRadioUsingTable, LPMtdType, LLabelUsingDiv, LLabelUsingTable,
        LUserDataEntryDiv,  LInputFName, LInputLName, LAddBtn,
        LDispDiv, LUIDiv, LBtnContainerDiv,LGenerateJSONBtn, LGenerateUIBtn, LTxtAreaDiv, LTextArea;
    
    //as application already started so removing start app btn reference
    document.getElementById("tsStartBtn").parentElement.remove();

    //-------------------------Section 1-------------------------------------------
    //creating a div to hold radio btns
    LMtdSelectionDiv = document.createElement("div");
    LMtdSelectionDiv.id ="tsMtdSelectionDiv";
    LMtdSelectionDiv.className ="tsclsAlignCenter";

    //label
    LPMtdType = document.createElement("p");
    LPMtdType.innerHTML = "Select Method Type :";

    //crating Radio btns and labels
    //using DIV
    LRadioUsingDiv = document.createElement("input");
    LRadioUsingDiv.id = "tsRadioUsingDiv";
    LRadioUsingDiv.setAttribute("type", "radio");
    LRadioUsingDiv.setAttribute("name", "mtdType");
    LRadioUsingDiv.setAttribute("value", "usingdiv");

    LRadioUsingDiv.addEventListener("click", clearUI);
    //label
    LLabelUsingDiv = document.createElement("label");
    LLabelUsingDiv.innerHTML = "Using Div";
    LLabelUsingDiv.addEventListener("click", function(){
        LRadioUsingDiv.checked = true;
        //call to clear Ui and creating Headers
        clearUI();
    })

    //using Table
    LRadioUsingTable = document.createElement("input");
    LRadioUsingTable.id = "tsRadioUsingTable";
    LRadioUsingTable.style.marginLeft ="80px";
    LRadioUsingTable.setAttribute("type", "radio");
    LRadioUsingTable.setAttribute("name", "mtdType");
    LRadioUsingTable.setAttribute("value", "usingtable");
    LRadioUsingTable.addEventListener("click", clearUI);
    // label
    LLabelUsingTable = document.createElement("label");
    LLabelUsingTable.innerHTML = "Using Table"
    LLabelUsingTable.addEventListener("click", function(){
        LRadioUsingTable.checked = true;
        //call to clear Ui and creating Headers
        clearUI();
    })
    //appending radio in div
    LMtdSelectionDiv.appendChild(LPMtdType);
    LMtdSelectionDiv.appendChild(LRadioUsingDiv);
    LMtdSelectionDiv.appendChild(LLabelUsingDiv);
    LMtdSelectionDiv.appendChild(LRadioUsingTable);
    LMtdSelectionDiv.appendChild(LLabelUsingTable);
    //appending method selection div to body
    document.body.appendChild(LMtdSelectionDiv);

    //-------------------------Section 2-------------------------------------------
    //creating div for data entry 
    LUserDataEntryDiv = document.createElement("div");
    LUserDataEntryDiv.id = "tsUserDataEntryDiv";
    LUserDataEntryDiv.className ="tsclsAlignCenter";

    //first name input div
    LInputFName = document.createElement("input");
    LInputFName.id = "tsInputFName";
    LInputFName.className = "tsclsInputText";
    LInputFName.setAttribute("type", "text");
    LInputFName.setAttribute("placeholder", "First Name");
    LInputFName.setAttribute("maxlength", "16");


    //last name input div
    LInputLName = document.createElement("input");
    LInputLName.id = "tsInputLName";
    LInputLName.className = "tsclsInputText";
    LInputLName.setAttribute("type", "text");
    LInputLName.setAttribute("placeholder", "Last Name");
    LInputLName.setAttribute("maxlength", "16");

    // add btn
    LAddBtn = document.createElement("button");
    LAddBtn.id = "tsAddBtn";
    LAddBtn.innerHTML = "ADD";
    LAddBtn.className = "tsclsBtn";
    LAddBtn.addEventListener("click", addDataToList);

    //appending childs to data entry div
    LUserDataEntryDiv.appendChild(LInputFName);
    LUserDataEntryDiv.appendChild(LInputLName);
    LUserDataEntryDiv.appendChild(LAddBtn);
    //appending div to body
    document.body.appendChild(LUserDataEntryDiv);

    //-------------------------Section 3-------------------------------------------
    //creating display div for showing the functionality
    LDispDiv = document.createElement("div");
    LDispDiv.id = "tsDispDiv";

    //creating UI div
    LUIDiv = document.createElement("div");
    LUIDiv.id = "tsUIDiv";
    LUIDiv.className = "tsclsSquareDiv";
    LUIDiv.style.overflow = "scroll";
    //creating Div to contain buttons
    LBtnContainerDiv = document.createElement("div");
    LBtnContainerDiv.id = "tsBtnContainerDiv";
    LBtnContainerDiv.className = "tsclsBtnContainerDiv";
    // LGenerateJSONBtn, LGenerateUIBtn,
    LGenerateJSONBtn = document.createElement("button");
    LGenerateJSONBtn.id = "tsGenerateJSONBtn";
    LGenerateJSONBtn.innerHTML = "Generate JSON >>";
    LGenerateJSONBtn.className = "tsclsGenBtn";
    LGenerateJSONBtn.addEventListener("click", generateJson);

    LGenerateUIBtn = document.createElement("button");
    LGenerateUIBtn.id = "tsGenerateUIBtn";
    LGenerateUIBtn.innerHTML = "<< Generate UI";
    LGenerateUIBtn.className = "tsclsGenBtn";
    LGenerateUIBtn.addEventListener("click", generateUI);

    //appending btns to div
    LBtnContainerDiv.appendChild(LGenerateJSONBtn);
    LBtnContainerDiv.appendChild(LGenerateUIBtn);


    //creating div to show JSON
    LTxtAreaDiv = document.createElement("div");
    LTxtAreaDiv.id = "tsTxtAreaDiv";
    LTxtAreaDiv.className = "tsclsSquareDiv";
    LTxtAreaDiv.style.overflow = "hidden";

    //creating text area
    LTextArea = document.createElement("textarea");
    LTextArea.id = "tsTextArea";
    LTextArea.style.width ="100%";
    LTextArea.style.height = "100%";
    LTextArea.style.overflow = "scroll";
    LTxtAreaDiv.appendChild(LTextArea);


    //appending childs to LDispDiv
    LDispDiv.appendChild(LUIDiv);
    LDispDiv.appendChild(LBtnContainerDiv);
    LDispDiv.appendChild(LTxtAreaDiv);

    //appending the LDispDiv to body
    document.body.appendChild(LDispDiv);    
}
//startApp() ends here 
/*------------------------------------------------------------------------------*/

/*Function to clear the UI division
* Excutes when we switch the method to create UI or onclick of generate Ui btn
* It also calls fn to generate headers wrt method type
*/
function clearUI(){
    var LParent,  LRadioUsingDiv, LRadioUsingTable;;

    LParent = document.getElementById("tsUIDiv");
    while (LParent.hasChildNodes()) {
        LParent.removeChild(LParent.firstChild);
    }

    LRadioUsingDiv = document.getElementById("tsRadioUsingDiv");
    LRadioUsingTable= document.getElementById("tsRadioUsingTable");
    // alert(LRadioUsingDiv.checked);
    if(LRadioUsingDiv.checked){
        createHeaderUsingDiv();
    }else if(LRadioUsingTable.checked){
        createHeaderUsingTable();
    }
     // focusing on first name 
     document.getElementById("tsInputFName").focus();
}

//function to crate headers using div
function createHeaderUsingDiv(){
    alert("Using DIV method, Creating Headers...");
    var LContainerDiv, LFNameHeaderDiv, LLNameHeaderDiv, LDeleteHeaderDiv;
    
    //creating conatiner div
    LContainerDiv = document.createElement("div");
    LContainerDiv.className = "tsclsDataContainer";
    
    LFNameHeaderDiv = document.createElement("div");
    LFNameHeaderDiv.innerHTML = "First Name";
    LFNameHeaderDiv.className = "tsclsDataName";

    LLNameHeaderDiv = document.createElement("div");
    LLNameHeaderDiv.innerHTML = "Last Name";
    LLNameHeaderDiv.className = "tsclsDataName";

    LDeleteHeaderDiv = document.createElement("div");
    LDeleteHeaderDiv.innerHTML = "Delete";  
    LDeleteHeaderDiv.className = "tsclsDataDelete"  
    
    //appending child to container
    LContainerDiv.appendChild(LFNameHeaderDiv);
    LContainerDiv.appendChild(LLNameHeaderDiv);
    LContainerDiv.appendChild(LDeleteHeaderDiv);

    //appending to UI DIV
    document.getElementById("tsUIDiv").appendChild(LContainerDiv);

}

//function to crate headers using table
function createHeaderUsingTable(){
    alert("Using TABLE method, Creating Headers...");
    var LContainerTable, LTableRow, LFNameHeader, LLNameHeader, LDeleteHeader;

    //creating table
    LContainerTable = document.createElement("table");
    LContainerTable.id = "tsContainerTable";
    LContainerTable.className = "tsclsDataContainer";

    //creating row 
    LTableRow = document.createElement("tr");
    LTableRow.className = "tsclsDataContainer";
   
    //creating table data header
    LFNameHeader = document.createElement("th");
    LFNameHeader.className = "tsclsDataName";
    LFNameHeader.innerHTML = "First Name";

    LLNameHeader = document.createElement("th");
    LLNameHeader.className = "tsclsDataName";
    LLNameHeader.innerHTML = "Last Name";

    LDeleteHeader = document.createElement("th");
    LDeleteHeader.className = "tsclsDataDelete";    
    LDeleteHeader.innerHTML = "Delete";

    //adding td to tr
    LTableRow.appendChild(LFNameHeader);
    LTableRow.appendChild(LLNameHeader);
    LTableRow.appendChild(LDeleteHeader);

    //adding tr to table
    LContainerTable.appendChild(LTableRow);
    
    //adding table to ui
    document.getElementById("tsUIDiv").appendChild(LContainerTable);
}
/*-------------------------------------------------------------------------*/
//function to add data to the ui 
function addDataToList(){
    //console.log("working");
    var LRadioUsingDiv, LRadioUsingTable, LGetFName, LGetLName;
    //check for which mtd to execute : check active radio
    //get radio btns
    LRadioUsingDiv = document.getElementById("tsRadioUsingDiv");
    LRadioUsingTable= document.getElementById("tsRadioUsingTable");

    //getting data
    
    LGetFName = document.getElementById("tsInputFName").value.trim();
    LGetLName = document.getElementById("tsInputLName").value.trim();
    // alert(LRadioUsingDiv.checked);
    if(LRadioUsingDiv.checked){
        if((LGetFName.length > 0) && (LGetLName.length > 0)){
            addDataUsingDiv(LGetFName, LGetLName);
        }else{
            alert("Please Enter proper user data");
        }
    }else if(LRadioUsingTable.checked){
        if((LGetFName.length > 0) && (LGetLName.length > 0)){
            addDataUsingTable(LGetFName, LGetLName);
        }else{
            alert("Please Enter proper user data");
        }
    }else{
        alert("select which method you want to use to add data");
    }

    //reseting the entered value
    document.getElementById("tsInputFName").value = "";
    document.getElementById("tsInputLName").value = "";
    // focusing on first name 
    document.getElementById("tsInputFName").focus();
}

function addDataUsingDiv(p_FirstName, p_LastName){
    //alert("div mtd called");
    var LContainerDiv, LFNameDiv, LLNameDiv, LDelBtn;

    //creating container div
    LContainerDiv = document.createElement("div");
    LContainerDiv.className = "tsclsDataContainer";
    
    LFNameDiv = document.createElement("div");
    LFNameDiv.innerHTML = p_FirstName;
    LFNameDiv.className = "tsclsDataName";
    LFNameDiv.addEventListener("click", showFullName);

    LLNameDiv = document.createElement("div");
    LLNameDiv.innerHTML = p_LastName;
    LLNameDiv.className = "tsclsDataName";  
    LLNameDiv.addEventListener("click", showFullName);

    LDelBtn = document.createElement("button");
    LDelBtn.innerHTML = "X";
    LDelBtn.className = "tsclsDelBtn";
    LDelBtn.addEventListener("click", delRec);
    
    //appending child to container
    LContainerDiv.appendChild(LFNameDiv);
    LContainerDiv.appendChild(LLNameDiv);
    LContainerDiv.appendChild(LDelBtn);

    //appending to UI DIV
    document.getElementById("tsUIDiv").appendChild(LContainerDiv); 
}

function addDataUsingTable(p_FirstName, p_LastName){
    var LContainerTable, LTableRow, LFNameTdata, LLNameTData, LDelBtn;

    //creating row 
    LTableRow = document.createElement("tr");
    LTableRow.className = "tsclsDataContainer";
   
    //creating table data header
    LFNameTdata = document.createElement("td");
    LFNameTdata.className = "tsclsDataName";
    LFNameTdata.innerHTML = p_FirstName;
    LFNameTdata.addEventListener("click", showFullName);
    
    LLNameTData = document.createElement("td");
    LLNameTData.className = "tsclsDataName";
    LLNameTData.innerHTML = p_LastName;
    LLNameTData.addEventListener("click", showFullName);

    LDelBtn = document.createElement("button");
    LDelBtn.innerHTML = "X";
    LDelBtn.className = "tsclsDelBtn";
    LDelBtn.addEventListener("click", delRec);

    //adding td to tr
    LTableRow.appendChild(LFNameTdata);
    LTableRow.appendChild(LLNameTData);
    LTableRow.appendChild(LDelBtn);

    //adding tr to table
    LContainerTable = document.getElementById("tsContainerTable");
    LContainerTable.appendChild(LTableRow);
} 
/*-------------------------------------------------------------------------*/
//function to delete record
function delRec(){
    if(confirm("Do you want to remove this record?") == true){
        var LParent;
        LParent = this.parentElement;   
        while (LParent.hasChildNodes()) {
            LParent.removeChild(LParent.firstChild);
        }
        LParent.remove();   
        console.log("a record has been deleted");
    }    
}
/*-------------------------------------------------------------------------*/
// function to show full name
function showFullName(){
    var LParent, LFullName;
    LParent = this.parentElement;
    LFullName = LParent.firstChild.innerHTML + " " +  LParent.firstChild.nextSibling.innerHTML;
    alert("Full Name : " + LFullName);
}

/*-------------------------------------------------------------------------*/
//function to generate json 
function generateJson(){
    //CHECK mtd type
    var LRadioUsingDiv, LRadioUsingTable;
    LRadioUsingDiv = document.getElementById("tsRadioUsingDiv");
    LRadioUsingTable= document.getElementById("tsRadioUsingTable");
    if(LRadioUsingDiv.checked){
        generateJsonFromDiv();
    }else if(LRadioUsingTable.checked){
        generateJsonFromTable();
    }
}

// fn to generate jason from div
function generateJsonFromDiv(){
    var LUIDiv, LRowCount, LColCount, LRowCounter, LColCounter, LNameString, LUserObject, LJSON;

    var LArray = [];
    LUIDiv = document.getElementById("tsUIDiv");
    // getting number of first lvl childs
    LRowCount = LUIDiv.childElementCount;
    
    if(LRowCount > 1){
        //getting number of second lvl childs
        LColCount = LUIDiv.children[0].childElementCount;

        for(LRowCounter = 1; LRowCounter <= LRowCount - 1; LRowCounter++){
            LUserObject = new Object();
            for(LColCounter = 0; LColCounter < LColCount - 1; LColCounter++){
                LNameString = LUIDiv.children[LRowCounter].children[LColCounter].innerText;
                if(LColCounter == 0){
                    //console.log("first name is : " + name);
                    LUserObject.firstName = LNameString;
                }
                if(LColCounter == 1){
                    //console.log("last name is : " + name);
                    LUserObject.lastName = LNameString;
                }   
            }
            //console.log(LUserObject);
            LArray.push(LUserObject);
        }
        LJSON = JSON.stringify(LArray, undefined, 4);
        showJsonToUI(LJSON);
        //console.log(LJSON);
    }else{
        alert("No data to create JSON");
    }

}
// function to generate jason from table
function generateJsonFromTable(){
    var LTable, LNameString, LRowCount, LColCount, LRowCounter, LColCounter, LUserObject, LJSON;
    var LArray = [];
    LTable = document.getElementById("tsUIDiv").firstElementChild;
    //initial check
    if(LTable.localName == "table"){
        //counting rows
        LRowCount = LTable.childElementCount;
        if(LRowCount > 1){
            //taking col count
            LColCount = LTable.children[0].childElementCount;
            for(LRowCounter = 1; LRowCounter <= LRowCount - 1; LRowCounter++){
                //creating a new object to store user data
                LUserObject = new Object();
                for(LColCounter = 0; LColCounter < LColCount - 1; LColCounter++){
                    LNameString = LTable.children[LRowCounter].children[LColCounter].innerHTML;
                    if(LColCounter == 0){
                        // console.log("first name is : " + LName);
                        LUserObject.firstName = LNameString;
                    }
                    if(LColCounter == 1){
                        // console.log("last name is : " + LName);
                        LUserObject.lastName = LNameString;
                    }   
                }
                //pushing data into array
                LArray.push(LUserObject);
            }
            //converting array of objects into JSON pretty json
            LJSON = JSON.stringify(LArray, undefined, 4);
            //printing json
            showJsonToUI(LJSON);
        }
        else{
            alert("no data to create JSON");
        }
    }
} 

/*function to show the generated JSON to Ui 
* this function will show the json text to text area.
*/
function showJsonToUI(p_Json){ 
    document.getElementById("tsTextArea").value = p_Json;
    //focusing on json txt area
    document.getElementById("tsTextArea").focus();
}
/*-------------------------------------------------------------------------*/


//function to create ui
function generateUI(){
    var LRadioUsingDiv, LRadioUsingTable, LJsonText;
    var LUserDataArr = [];
    //check for which mtd to execute : check active radio
    //get radio btns
    LRadioUsingDiv = document.getElementById("tsRadioUsingDiv");
    LRadioUsingTable= document.getElementById("tsRadioUsingTable");

    //getting text from json Ui
    LJsonText = document.getElementById("tsTextArea").value;
    //console.log(LJsonText);
    // alert(LRadioUsingDiv.checked);
    if(LJsonText != "" || LJsonText != " "){
        //parsing JSON data to array of objects
        LUserDataArr = JSON.parse(LJsonText);
        //getting number of records
        LRecCount = LUserDataArr.length;
        
        //calling proper method
        if(LRadioUsingDiv.checked){   
            createUiByDiv(LUserDataArr, LRecCount);
        }else if(LRadioUsingTable.checked){
            createUiByTable(LUserDataArr, LRecCount);
        }else{
            alert("first select the mtd to generate UI");
        }
    }
}

//function to create ui by div
function createUiByDiv(p_UserDataArr, p_RecCount){
    var LFName, LLName, LCounter;
    //clearing the uI first
    clearUI();
    for(LCounter = 0; LCounter < p_RecCount; LCounter++){
        LFName = p_UserDataArr[LCounter].firstName.trim();
        LLName = p_UserDataArr[LCounter].lastName.trim();
        //check for empty string
        if((LFName.length > 0)&&(LLName.length > 0)){
            addDataUsingDiv(LFName, LLName);
        }else{
            alert("Please check the JSON there is an empty string");
        }
        
    }
}

//function to create UI by table
function createUiByTable(p_UserDataArr, p_RecCount){
    var LFName, LLName, LCounter;
    //clearing the uI first
    clearUI();
    for(LCounter = 0; LCounter < p_RecCount; LCounter++){
        LFName = p_UserDataArr[LCounter].firstName.trim();
        LLName = p_UserDataArr[LCounter].lastName.trim();
        //check for empty string
        if((LFName.length > 0)&&(LLName.length > 0)){
            addDataUsingTable(LFName, LLName);
        }else{
            alert("Please check the JSON there is an empty string");
        }
    }
}
/*-------------------------------------------------------------------------*/