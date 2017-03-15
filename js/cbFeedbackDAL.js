/**
 * Created by guywi on 2017-03-05.
 */

//Data Access Layer Handled Here (CRUD)

var Review = {
    insert: function (options) {
        function txFunction(tx) {
            var sql = "INSERT INTO reviews (business_name, type, email, comments," +
                "date, add_ratings, food_quality, service, value)" +
                "values(?,?,?,?,?,?,?,?,?);";

            function successInsert() {
                console.info("Success: insert successful");
                alert("New record added");
            }
            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler,successTransaction);
    },
    selectAll: function (successSelectAll) {
        function txFunction(tx) {
            var sql = "SELECT * FROM reviews;";
            var options = [];
            tx.executeSql(sql, options, successSelectAll, errorHandler);

        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, successSelectOne) {
        function txFunction(tx) {
            var sql = "SELECT * FROM reviews WHERE id=?;";
            tx.executeSql(sql,options,successSelectOne,errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options) {
      function txFunction(tx) {
          var sql = "UPDATE reviews SET business_name=?, type=?,email=?,comments=?,date=?," +
              "add_ratings=?,food_quality=?,service=?,value=? WHERE id=?;";

          function successUpdate() {
              console.info("Success: Update Successful");
              alert("Record updated successfully");

          }
          tx.executeSql(sql,options,successUpdate,errorHandler);
      }
      db.transaction(txFunction,errorHandler,successTransaction);
    },
    delete: function (options) {
        function txFunction(tx) {
            var sql = "DELETE FROM reviews WHERE id=?;";

            function successDelete() {
                console.info("Success: delete successful");
                alert("Record Deleted successfully");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);

    }
};