/* Model with all data */
let model = {
	students: [
		{
			name: "Slappy the Frog",
			attendance: []
		},
		{
			name: "Lilly the Lizard",
			attendance: []
		},
		{
			name: "Paulrus the Walrus",
			attendance: []
		},
		{
			name: "Gregory the Goat",
			attendance: []
		},
		{
			name: "Adam the Anaconda",
			attendance: []
		}
	]
}

/********************************************************************/
let controller = {

	init: () => {
		view.randomAttendance();
		view.init();
		view.countMissing();
	},

    getRandom: () => {
    	console.log('Creating attendance records...');
        return (Math.random() >= 0.5);
    },

    getAllStudents: () => {
    	return model.students;
    }
}

/********************************************************************/
let view = {
	// Populate table, check boxes, based on attendace records
	init: () => {
		this.nameColumns = document.querySelector("tbody");
		this.containerTbody = "";
		controller.getAllStudents().forEach( student => {
			containerTbody += `
				<tr class="student">
					<td class="name-col">${student.name}</td>`
			student.attendance.forEach( att => {
				if (att) {
					containerTbody += `<td class="attend-col"><input type="checkbox" checked></td>`
				}else {
					containerTbody += `<td class="attend-col"><input type="checkbox"></td>`
				}
			});
				containerTbody += `
                    <td class="missed-col">0</td>
				</tr>`
			;
		});
		
		this.nameColumns.innerHTML = containerTbody;
	},

	randomAttendance: () => {
        for(let i = 0; i < controller.getAllStudents().length; i++) {
            for (var k = 0; k <= 11; k++) {
                model.students[i].attendance.push(controller.getRandom());
            }
        };
	},

	// Count a student's missed days
    countMissing: () => {
    	$allMissed = $('tbody .missed-col');
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

	
}

controller.init();