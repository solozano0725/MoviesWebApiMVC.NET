$(document).on("ready", function () {
    $('#btnSearch').on('click', function () {
        GetPeliculaById($('#txtIdSearch').val());
    })
    $('#btnDelete').on('click', function () {
        DeletePeliculaById($('#txtIdSearch').val());
    })
    $('#btnUpdate').on('click', function () {
        var pelicula = new Object();
        pelicula.id = $('#txtIdSearch').val();
        pelicula.nombre = $('#txtNombre').val();
        pelicula.actor = $('#txtActor').val();
        pelicula.genero = $('#txtGenero').val();
        pelicula.año = $('#txtAño').val();
        UpdatePelicula(pelicula.id, JSON.stringify(pelicula));
    })
    $('#btnCreate').on('click', function () {
        var pelicula = new Object();
        pelicula.nombre = $('#txtNombre').val();
        pelicula.actor = $('#txtActor').val();
        pelicula.genero = $('#txtGenero').val();
        pelicula.año = $('#txtAño').val();
        CreatePelicula(JSON.stringify(pelicula));
    })
    GetAll();
})


function GetAll() {
    var item = "";
    $('#tblList tbody').html('');
    $.getJSON('/api/peliculas', function (data) {
        $.each(data, function (key, value) {
            item += "<tr><td>" + value.nombre + "</td><td>" + value.actor + "</td><td>" + value.genero + "</td><td>" + value.año + "</td></tr>";
        });
        $('#tblList tbody').append(item);
    });
}

function GetPeliculaById(idPeli) {
    var url = '/api/peliculas/' + idPeli;
    $.getJSON(url)
        .done(function (data) {
            $('#txtNombre').val(data.nombre);
            $('#txtActor').val(data.actor);
            $('#txtGenero').val(data.genero);
            $('#txtAño').val(data.año);
        })
        .fail(function (erro) {
            ClearForm();
        });
};


function DeletePeliculaById(idPeli) {
    var url = '/api/peliculas/' + idPeli;
    $.ajax({
        url: url,
        type: 'DELETE',
        contentType: "application/json;chartset=utf-8",
        statusCode: {
            200: function () {
                GetAll();
                ClearForm();
                alert('Pelicula con id: ' + idPeli + ' fue eliminado');
            },
            404: function () {
                alert('Pelicula con id: ' + idPeli + ' no encontrado');
            }
        }
    });
}


function UpdatePelicula(idPeli, pelicula) {
    var url = '/api/peliculas/' + idPeli;
    $.ajax({
        url: url,
        type: 'PUT',
        data: pelicula,
        contentType: "application/json;chartset=utf-8",
        statusCode: {
            200: function () {
                GetAll();
                ClearForm();
                alert('Pelicula con id: ' + idPeli + ' actualizado');
            },
            404: function () {
                ClearForm();
                alert('Pelicula con id: ' + idPeli + ' no encontrado');
            },
            400: function () {
                ClearForm();
                alert('Error');
            }
        }
    });
}


function CreatePelicula(pelicula) {
    var url = '/api/peliculas/';
    $.ajax({
        url: url,
        type: 'POST',
        data: pelicula,
        contentType: "application/json;chartset=utf-8",
        statusCode: {
            201: function () {
                GetAll();
                ClearForm();
                alert('Pelicula con id: ' + idPeli + ' creado');
            },
            400: function () {
                ClearForm();
                alert('Error');
            }
        }
    });
}


function ClearForm() {
    $('#txtIdSearch').val('');
    $('#txtNombre').val('');
    $('#txtActor').val('');
    $('#txtGenero').val('');
    $('#txtAño').val('');
}