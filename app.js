
// Funciones para mostrar/ocultar info al pasar el mouse sobre el icono (Desktop)
function mostrarNombre()
{
   document.getElementById("infoNombre").style.display = "block";
}
function ocultarNombre()
{
    document.getElementById("infoNombre").style.display = "none";
}

function mostrarEmail()
{
   document.getElementById("infoEmail").style.display = "block";
}
function ocultarEmail()
{
    document.getElementById("infoEmail").style.display = "none";
}

function mostrarFechaNac()
{
   document.getElementById("infoFechaNac").style.display = "block";
}
function ocultarFechaNac()
{
    document.getElementById("infoFechaNac").style.display = "none";
}

function mostrarDomicilio()
{
   document.getElementById("infoDomicilio").style.display = "block";
}
function ocultarDomicilio()
{
    document.getElementById("infoDomicilio").style.display = "none";
}

function mostrarTelefono()
{
   document.getElementById("infoTelefono").style.display = "block";
}
function ocultarTelefono()
{
    document.getElementById("infoTelefono").style.display = "none";
}



// Funciones para mostrar/ocultar info al hacer click sobre el icono (Movile)
function clickMostrarNombre()
{
        document.getElementById("infoNombre").style.display = "block"
        window.setTimeout(clickOcultarNombre, 1000);
}
function clickOcultarNombre()
{
        document.getElementById("infoNombre").style.display = "None"
}

function clickMostrarEmail()
{
        document.getElementById("infoEmail").style.display = "block"
        window.setTimeout(clickOcultarEmail, 1000);
}
function clickOcultarEmail()
{
        document.getElementById("infoEmail").style.display = "None"
}

function clickMostrarFechaNac()
{
        document.getElementById("infoFechaNac").style.display = "block"
        window.setTimeout(clickOcultarFechaNac, 1000);
}
function clickOcultarFechaNac()
{
        document.getElementById("infoFechaNac").style.display = "None"
}

function clickMostrarDomicilio()
{
        document.getElementById("infoDomicilio").style.display = "block"
        window.setTimeout(clickOcultarDomicilio, 1000);
}
function clickOcultarDomicilio()
{
        document.getElementById("infoDomicilio").style.display = "None"
}

function clickMostrarTelefono()
{
        document.getElementById("infoTelefono").style.display = "block"
        window.setTimeout(clickOcultarTelefono, 1000);
}
function clickOcultarTelefono()
{
        document.getElementById("infoTelefono").style.display = "None"
}

//Boton Sección Principal

function contactarme()
{
    document.getElementById("modalContacto").style.display = "block"
    document.getElementById("principal").style.display = "none"
}

//Boton volver Sección Contacto
function volver()
{    
    document.getElementById("principal").style.display = "block"
    document.getElementById("modalContacto").style.display = "none"
}
