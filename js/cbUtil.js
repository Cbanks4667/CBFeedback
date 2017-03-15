/**
 * Created by guywi on 2017-03-05.
 */
//Validation Javascript Handled Here

function doValidate_cbAddForm() {
    var form = $("#cbAddForm");
    form.validate(
        {
            rules: {
                cbBusinessName: {
                    required: true,
                    rangelength: [2,20]

                },
                cbEmail: {
                    required: true,
                    email: true
                },
                cbDate: {
                    required: true

                },
                cbFoodQuality:{
                  required: "#cbaddRatings:checked",
                    range: [0,5]
                },
                cbService: {
                    required: "#cbaddRatings:checked",
                    range: [0,5]
                },
                cbValue: {
                    required: "#cbaddRatings:checked",
                    range: [0,5]
                }

            },
            messages: {
                cbBusinessName: {
                    required: "Please enter a business",
                    rangelength: "Length must be between 2 and 20 characters long"
                },
                cbEmail: {
                    required: "Please enter an email",
                    email: "Please enter a valid email address"
                },
                cbDate: {
                    required: "Reviewer date is required"
                },
                cbFoodQuality:{
                    required:"Please enter a value between 0 and 5",
                    range: "Value must be between 0 and 5"
                },
                cbService: {
                    required:"Please enter a value between 0 and 5",
                    range: "Value must be between 0 and 5"
                },
                cbValue: {
                    required:"Please enter a value between 0 and 5",
                    range: "Value must be between 0 and 5"
                }
            }
        });
    return form.valid();
}

function doValidate_cbEditForm() {
    var form = $("#cbEditForm");
    form.validate(
        {
            rules: {
                cbEditBusinessName: {
                    required: true,
                    rangelength: [2,20]

                },
                cbEditEmail: {
                    required: true,
                    email: true
                },
                cbEditDate: {
                    required: true

                },
                cbEditFoodQuality:{
                    required: "#cbEditaddRatings:checked",
                    range: [0,5]
                },
                cbEditService: {
                    required: "#cbEditaddRatings:checked",
                    range: [0,5]
                },
                cbEditValue: {
                    required: "#cbEditaddRatings:checked",
                    range: [0,5]
                }

            },
            messages: {
                cbEditBusinessName: {
                    required: "Please enter a business",
                    rangelength: "Length must be between 2 and 20 characters long"
                },
                cbEditEmail: {
                    required: "Please enter an email",
                    email: "Please enter a valid email address"
                },
                cbEditDate: {
                    required: "Reviewer date is required"
                },
                cbEditFoodQuality:{
                    required:"Please enter a value between 0 and 5",
                    range: "Value must be between 0 and 5"
                },
                cbEditService: {
                    required:"Please enter a value between 0 and 5",
                    range: "Value must be between 0 and 5"
                },
                cbEditValue: {
                    required:"Please enter a value between 0 and 5",
                    range: "Value must be between 0 and 5"
                }
            }
        });
    return form.valid();
}