/**
 * Created by guywi on 2017-03-05.
 */

//DATABASE Created HERE

var db;

function errorHandler(tx,error ){
    console.error("SQL Error: " + tx + " (" + error.message);
}

function successTransaction() {
    console.info("Success: Transaction is successful");

}

var DB = {
    createDatabase: function (){
        var shortName = "FeedbackDB";
        var version = "1.0";
        var displayName = "DB for cbFeedback app";
        var dbSize = 2*1024 * 1024;

        console.info("Creating Database ....");
        function dbCreateSuccess() {
            console.info("Success: Database creation successful");
        }
        db = openDatabase(shortName, version, displayName, dbSize,dbCreateSuccess);


    },

    createTables: function() {
        function txFunction(tx) {
            console.info("Creating tables....");

            var sql = "CREATE TABLE IF NOT EXISTS reviews(" + "" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                "business_name VARCHAR(20) NOT NULL," +
                "type VARCHAR(20)," +
                "email VARCHAR(50) NOT NULL," +
                "comments VARCHAR(250)," +
                "date DATE NOT NULL," +
                "add_ratings VARCHAR(1)," +
                "food_quality INTEGER," +
                "service INTEGER," +
                "value INTEGER);";
            var options = [];
            function successCreate() {
                console.info("Success: Table creation successful");
            }
            tx.executeSql(sql,options,successCreate,errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction)
    },
    dropTables: function () {
        function txFunction(tx) {
            console.info("Dropping tables.....");

            var sql = "DROP TABLE IF EXISTS reviews;";
            var options = [];
            function successDrop(){
                console.info("Success: Dropping table successful");
            }
            tx.executeSql(sql,options,successDrop,errorHandler);
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    }
};