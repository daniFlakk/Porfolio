# Porfolio
Html: Crear 4 subelementos en la sección de trabajo con nombre y descripción.

<div class="row">
	<div  class="column" id="btn_info" >
		<button name="button_acept" type="button" id="btn_hide" onclick="showDescriptbtn()" description class="btn btn-primary">aceptar</button>
		<p id="descript" style="display: none;">Boton para aceptar </p>
	</div>
	<div class="column" ">
		<img name="imagen_muestra" src="files/work.png" class="img-fluid border border-5" onclick="showDescriptImg()" alt="Imagen avatar"
					width="250">
		<p id="descripImg" style="display: none;">Una imagen de referencia</p>
	</div>
	<div class="column" >
		<input name="Campo_texto" type="text" class="form-control" aria-label="Username" onclick="showDescriptInput()" aria-describedby="basic-addon1">
		<p id="descripInput" style="display: none;">Campo de texto para poder escribir un comentario</p>
	</div>
	<div class="column" >
		<a name="link_gitHub" href="https://github.com/daniFlakk/Porfolio" onclick="showDescriptLink()" target="blank">github proyecto</a>
		<p id="descripLink" style="display: none;">Link que redirige a la pagina de gitHub del proyecto</p>
	</div>
</div>

<hr>


Css: Los elementos creados deben estar distribuidos en 4 columnas. La descripción no debe mostrarse al cargar inicialmente la página.
style="display: none;"

<hr>
Javascript: Cuando el usuario selecciona uno de los elementos, debe mostrar la descripciòn del elemento seleccionado.
function showDescriptbtn() {
    var x = document.getElementById("descript");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

<hr>
Git: se debe crear una rama llamada "Parcial_1", tener minimo 3 commits, dejar en el readme file los puntos desarrollados.
Identacion - nombre de variables, clases e ids en ingles. - buenas practicas - distribución de archivos, titulo de la web, broken links(Imágenes y urls).