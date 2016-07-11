$(document).ready(function () {
    // Set up input field animation.
    Materialize.updateTextFields();

    // Set up page level variables.
    var metronomeState = 0; // 0 = off; 1 = on
    var metronomeBeat = 0; // Holds the current beat of the metronome. 0 when off.
    var delay = 1000.0; // Sets the timeout delay for metronome beat changes.
    var metronomeBeats = 4; // Holds the number of metronome beats.
    var tempo = 60; // Holds the tempo from the beats per minute input field.

    // Event handlers.
    $("#startButton").click(startMetronome);
    $("#beats").blur(beatsChanged);
    $("#bpm").blur(tempoChanged);


    function updateMetronomeBeat() {

        if (metronomeState == 1) {
            // Move the color of the beat.
            if (metronomeBeat > 0) {
                $("#beat" + metronomeBeat).removeClass("green");
            }
            metronomeBeat++;
            if (metronomeBeat > 4)
                metronomeBeat = 1;
            $("#beat" + metronomeBeat).addClass("green");

            // Set up the next callback to move the beat.
            setTimeout(updateMetronomeBeat, delay);
        }

    }

    function startMetronome() {
        // If the metronome is off, turn it on.
        if (metronomeState == 0) {
            // Validate Inputs

            // Start Metronome
            metronomeState = 1;
            updateMetronomeBeat();

            // Flip button
            $("#startButton").addClass("red");
            $("#startButton").text("Stop");

        }
        // If the metronome is on, turn it off.
        else {
            // Turn off the metronome.
            metronomeState = 0;

            // Clear the color on the beat number.
            $("#beat" + metronomeBeat).removeClass("green");
            metronomeBeat = 0;

            $("#startButton").removeClass("red");
            $("#startButton").text("Start");


        }
    }

    function beatsChanged() {
        var beats = $("#beats").val();
        if (beats < 20 && beats > 1) {
            metronomeBeats = beats;
        }
        else
        {

        }
    }

    function tempoChanged() { }

});

