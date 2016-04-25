<!DOCTYPE html>
<html lang="en" ng-app>
<head>
	<meta charset="UTF-8">
	<title>Proyecto con angular</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
	<hr>
	<h2>Lista de tareas</h2>
	<div ng-controller="controladorTareas">
		<span class="text-danger">Faltan {{restantes()}} de {{tareas.length}}</span>
		[<a class="text-danger" ng-click="eliminar()" href="">Eliminar</a>]
		<ul class="unstyled">
			<li ng-repeat="tarea in tareas">
				<input type="checkbox" ng-model="tarea.hecho">
				<span class="hecho-{{tarea.hecho}}">{{tarea.texto}}</span>	
			</li>
		</ul>
		<form ng-submit="agregarTarea()">
			<input type="text" size="30"class="form-controll" placeholder="Agregar una nueva tarea" ng-model="textoNuevaTarea">
			<button class="btn btn-primary" type="submit"> Agregar</button>
		</form>
	</div>
</body>
<script src="js/angular.min.js"></script>
<script src="js/controller.js"></script>
</html>