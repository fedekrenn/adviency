# 🎄🎅 Adviency

Desarrollo de una aplicación de lista de regalos de Navidad utilizando React. Reto propuesto por [Goncy](https://github.com/goncy)

## 📝 Detalle

El reto consiste en codear la misma app 24 veces, desde 0, pero cada día agregándole una nueva funcionalidad, comenzando por cosas sencillas hasta ir subiendo la dificultad. La app es una lista de regalos de Navidad, donde cada usuario puede agregar un regalo. Cuenta con un botón que al clickearlo agrega un regalo aleatorio de la lista. Tiene como persistencia el uso de localStorage para que los datos no se pierdan al recargar la página. Se puede ver el detalle de cada regalo, editarlo, duplicarlo y eliminarlo. Cuenta con un sonido de fondo que se puede pausar y reanudar (inicia silenciado) y para darle un toque navideño, copos de nieve que caen por la pantalla. Una vez que la lista está completa, se puede imprimir.

## Desafío día por día

1. Para calentar motores vamos a mantener las cosas simples, mostremos una lista de regalos, 3 elementos, fijos, sin nada más.
2. Nuestra app se ve muy poco navideña, demosle unos colores más lindos, rojo, verde, amarillo! Podemos ponernos creativos con lo que queramos!
3. Estamos generosos, vamos a agregar un formulario con un input para escribir nuestro regalo y un botón para agregarlo a nuestra lista, todavía no los podemos borrar, pero... es navidad! Por que querríamos borrar regalos?
4. Papa noel no estuvo muy contento con la demanda de regalos, vamos a tener que agregar un botón de eliminar a cada elemento para poder borrarlos individualmente.
5. La gente está muy indecisa y agrega muchos regalos y después los debe borrar de a uno! Agreguemos un botón para eliminar todos los regalos a la vez!
6. Nuestra aplicación no se ve muy bien cuando no hay regalos, agreguemos un mensaje alentando a agregar regalos cuando no haya ninguno!
7. Tuvimos algunos reportes de regalos vacíos o repetidos, asegurmosnos que la gente solo pueda agregar un regalo si escribió algo y si ese regalo no está ya en la lista!
8. Cometimos un error el día anterior, la gente quiere agregar regalos repetidos para regalarselos a diferentes personas, agreguemos un campo al lado del input de texto para poner la cantidad de unidades del regalo que deberíamos comprar.
9. La gente está triste por que al cerrar la aplicación pierde todos sus regalos 😢. Usemos `localStorage` para guardar los regalos en el dispositivo del usuario y cargarlos cuando vuelve!
10. Las palabras dicen mucho pero las imágenes más! Agreguemos un campo donde podamos pegar un link de imágen para cada regalo y mostremoslo en la lista.
11. Nuestro formulario tiene muchas cosas y molesta a la vista de los usuarios, pasemoslo a un modal / drawer o lo que quieras y pongamos un botón de "Agregar regalo" que lo muestre.
12. La gente no recuerda que regalo corresponde a cada quien, agreguemos un campo para destinatario y mostremoslo.
13. Nuestros usuarios se ponen muy contentos y se equivocan al cargar regalos, agreguemos un botón editar que nos permita cambiar regalos ya agregados.
14. Nuestra aplicación no es muy accesible, hagamos que podamos agregar, borrar y editar regalos sin tocar el mouse.
15. Pronto tendremos que preparar una api para nuestra aplicación, preparemos un método para traernos nuestros regalos que use promesas o async await.
16. La gente está perdiendo la creatividad y necesita una ayuda, agreguemos un botón para obtener un regalo aleatorio para el campo "regalo", podés tener una lista fija de regalos, no es necesario que sean generados.
17. Nos olvidamos de agregar un campo de precio para nuestros regalos! Aseguremosnos de mostrar el precio correcto tomando en cuenta la cantidad de unidades del regalo.
18. La gente agrega muchos regalos y necesita saber el total de lo que gastaría, pongamos el total.
19. La gente quiere hacer el mismo regalo pero a diferentes personas o en diferentes cantidades, agreguemos un botón de duplicar que abra el modal precargado.
20. Queremos tener una lista de regalos para ir a comprar pero no queremos que tenga los botones o precios, agreguemos un botón de previsualizar que nos abra un modal.
21. Fuimos a comprar los regalos pero no teniamos datos en el celular, no queremos que le pase a alguien más, agreguemos un botón de imprimir a esa lista.
22. Levantemos el espíritu navideño agregando un sonido navideño de fondo. No tan alto, tiene que estar deshabilitado por defecto y el usuario puede habilitarlo.
23. Ya casi es navidad! Agreguemos unos copitos de nieve a nuestra app para darle el último toque navideño ❄
24. Creo que después de 23 días de trabajar te mereces este día libre, felicitaciones por todo lo que hiciste y disfrutá de las fiestas 🙌

<br>

## 🚀 Tecnologías utilizadas

- react-snowfall
- sweetalert2

<br>

## 🙋‍♂️ Hola, Soy Federico Krenn

:nerd_face: Desarrollador web Fullstack
<br>
👨‍🎓 Realizando la Tecnicatura en Desarrollo Web en ISPC y Tecnicatura en Software Libre en la UNL
<br>
📫 Conectemos en Linkedin: https://www.linkedin.com/in/fkrenn/