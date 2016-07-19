
module
	.factory("usersProvider", usersProvider);

    	usersProvider.$inject = [];

    	function usersProvider() {

	        var service = {
	            getUsers: getUsers  
	        };

	        return service;
	   		
	   		function getUsers() {
	        	return {
					    "usersArray":
					    [
					        {
					            "name":"Nick",
					            "surname":"Diaz",
					            "email":"stockton_209@gmail.com",
					            "phone":"+380630000000"
					        },
					        {
					            "name":"Khabib",
					            "surname":"Nurmagomedov",
					            "email":"hhabib@gmail.com",
					            "phone":"+380630000001"
					        },
					        {
					            "name":"Dana",
					            "surname":"White",
					            "email":"ufc_presedent@gmail.com",
					            "phone":"+380630000002"
					        }
					    ]
				}
	        }
	};