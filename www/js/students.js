const baseSurviceUrl = "https://students-manager.azurewebsites.net/api/students/";
const username = "guest";
const password = "guest";
const base64Auth = btoa(username + ":" + password);

function loadStudents() {
    $.mobile.loading("show");

    $.ajax({
        type: "GET",
        url: baseSurviceUrl,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + base64Auth)
        },
        success: function(students) {
            $.mobile.loading("hide");
            console.log({ students });
            displayStudents(students);
        },
        error: function() {
            $.mobile.loading("hide");
            alert("Error");
        }
    });

    function displayStudents(students) {
        $("#results").empty();

        for (let student of students) {
            $('#results').append(
                $('<li>').append(
                    $('<a>')
                    .attr('href', '#detailsPage')
                    .addClass("ui-btn ui-btn-icon-right ui-icon-carat-r")
                    .click(function() {
                        setStudentDetails(student);
                    })
                    .append(student.fullName)
                )
            );
        }
    }

    function setStudentDetails(student) {
        $("#student-name").text(student.fullName);
        $("#student-faculty-number").text(student.facultyNumber);
    }
}

function getPicutre() {
    navigator.camera.getPicture(succeededCameraCallback, failedCameraCallback, {
        quality: 25,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

function succeededCameraCallback(imageData) {
    $('#myImage').attr('src', 'data:image/jpeg;base64,' + imageData);
}

function failedCameraCallback(message) {
    alert(message);
}