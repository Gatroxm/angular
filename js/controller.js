function controladorTareas($scope){
	$scope.tareas = [
		{texto: 'Ser super heroicos con Angular Js', hecho: true}, 
		{texto: 'Crear Una aplicacion con Angular JS', hecho: false}
	];

	$scope.agregarTarea = function(){ 

		$scope.tareas.push({texto: $scope.textoNuevaTarea,hecho: false});
		$scope.textoNuevaTarea = '';

	};

	$scope.restantes = function() {

		var cuenta = 0;
		angular.forEach($scope.tareas, function(tarea){
			cuenta += tarea.hecho ? 0 : 1;
		});

		return cuenta;
	
	};

	$scope.eliminar = function() {

		var tareasViejas = $scope.tareas;
		$scope.tareas = [];
		angular.forEach(tareasViejas, function(tarea){

			if (!tarea.hecho){
				$scope.tareas.push(tarea);
			}

		});

	};

};
/*
* Tabla 
*/
function ControladorFiltros($scope){

	$scope.empleados = [
		{
			nombre: '', paterno: '', materno: '', primerdia: '', salario: '', telefono: '', comicion: ''
		}
	];

	$scope.agregarEmpleado = function(){ 

		$scope.empleados.push({nombre: $scope.Nuevonombre, paterno: $scope.Nuevopaterno, materno: $scope.Nuevomaterno, primerdia: $scope.Nuevoprimerdia, salario: $scope.Nuevosalario, telefono: $scope.Nuevotelefono, comicion: $scope.Nuevocomicion});

		// $http({
		// 	method : 'POST',
		// 	url: "php/empleados.php",
		// 	data: {nombre:$scope.Nuevonombre, papellido:$scope.Nuevopaterno, sapellido:$scope.Nuevomaterno, imgreso:$scope.Nuevoprimerdia, salario:$scope.Nuevosalario, telefono: $scope.Nuevotelefono, comicion: $scope.Nuevocomicion }
		// });
		
		$scope.Nuevonombre = '';
		$scope.Nuevopaterno = '';
		$scope.Nuevomaterno = '';
		$scope.Nuevoprimerdia = '';
		$scope.Nuevosalario = '';
		$scope.Nuevotelefono = '';
		$scope.Nuevocomicion = '';


	};

	$scope.ordenarPor = function (orden) {

		$scope.ordernSeleccionano = orden;

	};

}