


$(document).ready(function() {
    $('#turnOnBtn').on('click', function(e){
        $.ajax({
            url: '/led?status=on',
            method: 'GET',
            success: function(result) {
                console.log(result);
         }
        });
        e.preventDefault();
    });

    $('#turnOffBtn').on('click', function(e){
        $.ajax({
            url: '/led?status=off',
            method: 'GET',
            success: function(result) {
                console.log(result);
         }
        });
        e.preventDefault();
    });

    $('#btnToggle').on('click', function(e){
        let status;
        if($(this).text() == 'Turn On') {
            $(this).text('Turn Off')
            $(this).removeClass().addClass('btn btn-block btn-light');
            status = 'on';
        } else {
            $(this).text('Turn On');
            $(this).removeClass().addClass('btn btn-block btn-dark');
            status = 'off';
        }

        $.ajax({
            url: '/led?status=' + status,
            method: 'GET',
            success: function(result) {
                console.log(result);
         }
        });
        e.preventDefault();
    });

    function pad ( val ) { return val > 9 ? val : "0" + val; }

    $('#timerBtn').on('click',function(e){
        var a = parseInt(document.getElementById("seconds").value);
        var b = parseInt(document.getElementById("minutes").value);
        var sec = b*60+a;
        console.log(sec);
        $.ajax({
            url: '/led?status=on',
            method: 'GET',
            success: function(result) {
                console.log(result);
         }
        });
        e.preventDefault();

        var x = setInterval( function(){
            document.getElementById("secondstimer").innerHTML=pad(--sec%60);
            document.getElementById("minutestimer").innerHTML=pad(parseInt(sec/60,10));
            if (sec ==  0) {
                clearInterval(x);
                $.ajax({
                    url: '/led?status=off',
                    method: 'GET',
                    success: function(result) {
                        console.log(result);
                 }
                });
                e.preventDefault();
                document.getElementById("demo").innerHTML = "DONE";
            }
        }, 1000);




    });


});
