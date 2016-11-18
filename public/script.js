$('#file').change(function (e) {
    $('#report').html('');
    $("form").data({files: e.target.files});
});

$("form").submit(function (e) {
    var files = $("form").data().files;
    var data = new FormData();
    $.each(files, function (key, value) {
        data.append(key, value);
    });
    $('#report').html('loading ...... ');
    $.ajax({
        url: '/api/filemetadata/',
        type: 'POST',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        error: function (jXhr, status) {
            $('#report').html('error: ' + status);
        },
        success: function (data) {
            $('#report').html('file size: ' + data.size);
        }
    });
    e.preventDefault();
    return false;
});