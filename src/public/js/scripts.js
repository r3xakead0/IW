$(function () {
    $('#especialidad').change(async function (e) {
        let value = $(this).val();
        let urlBase = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
        let url = urlBase + '/activities/' + value;
        
        $("#actividad").empty();
        
        const activities = await fetch(url, { method: 'GET', mode: 'cors' })
            .then(response => {
                return response.json();
            });

        $.each(activities, function() {
            $("#actividad").append($("<option />").val(this.idActividad).text(this.nombre));
        });
    });
});
