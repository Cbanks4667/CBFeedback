/**
 * Created by guywi on 2017-03-10.
 */

//takes care of business prior to CRUD

function addReview() {
    if(doValidate_cbAddForm()) {
        console.info("Validation ok");

        var business_name = $("#cbBusinessName").val();
        var type = $("#cboptType").val();
        var email = $("#cbEmail").val();
        var comments = $("#cbComments").val();
        var date = $("#cbDate").val();
        var add_ratings = $("#cbaddRatings").prop("checked");
        var food_quality = $("#cbFoodQuality").val();
        var service = $("#cbService").val();
        var value = $("#cbValue").val();

        var options = [business_name,type,email,comments,date,add_ratings,food_quality,service ,value];
        Review.insert(options);
    }
    else
    {
        console.info("Validation failed");
    }
}

function listAllReviews() {

    function successSelectAll(tx,results) {
        var htmlCode = "";
        for (var i=0; i < results.rows.length; i++){
            var row = results.rows[i];
            console.info("id: " + row['id'] + " business name: " +
                row['business_name'] + " type: " + row['type'] + " email: " +
                row['email'] + " comments: " + row['comments'] +
                " date: " + row['date'] + " add_ratings?: " + row['add_ratings'] +
            " food_quality: " + row['food_quality'] + " service: " + row['service'] +
                " value: " + row['value']);

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +
                    " href='#'>" +
                    "<h1> Business Name: " + row['business_name'] + "</h1>" +
                    "<h3> Type: " + row['type'] + "</h3>" +
                    "<h3> Email: " + row['email'] +"</h3>" +
                    "<h3> Reviewer Comments: " + row['comments'] + "</h3>" +
                    "<h3> Date: " + row['date'] + "</h3>" +
                    "<h3> Add Ratings: " + row['add_ratings']+"</h3>" +
                    "<h3> Food Quality: " + row['food_quality']+"</h3>" +
                    "<h3> Service: " + row['service'] +"</h3>" +
                    "<h3> Value: " + row['value'] +"</h3>" +
                    "</a></li>";

        }
        var lv= $("#cbFeedbackList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#cbFeedbackList a").on("click", clickHandler);
        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', "#cbEditFeedbackPage")
        }
    }
    Review.selectAll(successSelectAll);

}

function selectOneReview() {
  var id= localStorage.getItem("id");
  var options = [id];
    function successSelectOne(tx, results) {
        var row = results.rows[0];

        $("#cbEditBusinessName").val(row['business_name']);
        $("#cbEditOptType").val(row['type']).change();
        $("#cbEditEmail").val(row['email']);
        $("#cbEditComments").val(row['comments']);
        $("#cbEditDate").val(row['date']);
        if(row['add_ratings'] == 'true'){
            console.info("property = true");
            if($("#cbEditAddRatings").is(":checked"))
            {

            }
            else {
                $("#cbEditAddRatings").click();
            }

            $("#cbEditFoodQuality").val(row['food_quality']);
            $("#cbEditService").val(row['service']);
            $("#cbEditValue").val(row['value']);
        }
        else{
            console.info("property = false");
            if($("#cbEditAddRatings").is(":checked"))
            {
                $("#cbEditAddRatings").click();
            }
        }

    }
    Review.select(options,successSelectOne);
}

function updateReview() {
    if(doValidate_cbEditForm()){
        console.info("Validation OK");

        var id = localStorage.getItem("id");
        var business_name = $("#cbEditBusinessName").val();
        var type = $("#cbEditOptType").val();
        var email = $("#cbEditEmail").val();
        var comments = $("#cbEditComments").val();
        var date = $("#cbEditDate").val();
        var add_ratings = $("#cbEditAddRatings").prop("checked");
        var food_quality = $("#cbEditFoodQuality").val();
        var service = $("#cbEditService").val();
        var value = $("#cbEditValue").val();

        var options = [business_name,type,email,comments,date,add_ratings,food_quality,service ,value,id];
        Review.update(options);
        viewFeedbackPage_show();
    }
    else{
        console.info("Validation failed");
    }

}

function deleteReview(){
    var id= localStorage.getItem("id");
    var options = [id];

    Review.delete(options);
    $(location).prop('href', "#cbViewFeedbackPage");
}

function saveDefaultEmail() {
    var defaultEmail = $("#cbDefaultEmail").val();
    localStorage.setItem("defaultEmail", defaultEmail);
    alert("Default reviewer email saved");
}

function clearDB() {
    DB.dropTables();
    localStorage.clear();
    $("#cbDefaultEmail").val("");
    DB.createTables();
}