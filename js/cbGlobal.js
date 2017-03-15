/**
 * Created by guywi on 2017-03-05.
 */

//Event handlers here

function chkAddRatings_change() {
    $("#cbratingsInputs").toggle();
    $("#cbFoodQuality").val("0");
    $("#cbService").val("0");
    $("#cbValue").val("0");
}

function chkEditAddRatings_change() {
    $("#cbEditRatingsInputs").toggle();
    $("#cbFoodQuality").val("0");
    $("#cbService").val("0");
    $("#cbValue").val("0");
}

function updateRatings_change() {
    //if ( doValidate_cbAddForm()) {
        var value = 0;
        value = Number($("#cbFoodQuality").val()) +
            Number($("#cbService").val()) + Number($("#cbValue").val());
        value = value / 3;
        if (isNaN(value) == false)
        {
            $("#cbRatings").val(value);
        }
        else
        {
            doValidate_cbAddForm();
        }

    //}
}

function updateEditRatings_change() {

    var value = 0;
    value = Number($("#cbEditFoodQuality").val()) +
        Number($("#cbEditService").val()) + Number($("#cbEditValue").val());
    value = value / 3;
    if (isNaN(value) == false)
    {
        $("#cbEditRatings").val(value);
    }
    else
    {
        doValidate_cbEditForm();
    }


}

function initDB() {
    console.info("Creating database ...");
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables ...");
            DB.createTables();
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB, can not proceed");
    }
}

function btnAddRecord_click(){
    addReview();
}

function viewFeedbackPage_show() {
    listAllReviews();
}

function editFeedbackPage_show() {

    selectOneReview();
    updateEditRatings_change();
}

function btnDelete_click() {
    deleteReview();
}
function btnUpdate_click() {
    updateReview();
}

function btnSaveDefaults_click() {
    saveDefaultEmail();
}

function btnClearDefaults_click() {
    clearDB();
}
function init() {
    $("#cbaddRatings").on("change", chkAddRatings_change);
    $("#cbEditAddRatings").on("change", chkEditAddRatings_change);
    $("#cbratingsInputs").show();
    $("#cbEditRatingsInputs").hide();
    $("#cbAddRecord").on("click", btnAddRecord_click);
    $("#cbFoodQuality").on("change", updateRatings_change);
    $("#cbService").on("change", updateRatings_change);
    $("#cbValue").on("change",updateRatings_change);
    $("#cbEditFoodQuality").on("change", updateEditRatings_change);
    $("#cbEditService").on("change", updateEditRatings_change);
    $("#cbEditValue").on("change",updateEditRatings_change);
    $("#cbViewFeedbackPage").on("pageshow", viewFeedbackPage_show);
    $("#cbEditFeedbackPage").on("pageshow", editFeedbackPage_show);
    $("#cbDelete").on("click", btnDelete_click);
    $("#cbUpdate").on("click", btnUpdate_click);
    $("#cbCancel").on("click", viewFeedbackPage_show);
    $("#cbSaveDefaults").on("click",btnSaveDefaults_click);
    $("#cbClearDefaults").click("click", btnClearDefaults_click);
}

$(document).ready(function () {
    init();
    initDB();
});


