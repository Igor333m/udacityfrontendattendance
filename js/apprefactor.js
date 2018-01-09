/* Model with all data */
let model = {
	students: [
		{
			name: "Slappy the Frog",
			attendance: null
		},
		{
			name: "Lilly the Lizard",
			attendance: null
		},
		{
			name: "Paulrus the Walrus",
			attendance: null
		},
		{
			name: "Gregory the Goat",
			attendance: null
		},
		{
			name: "Adam the Anaconda",
			attendance: null
		}
	]
}

/********************************************************************/
let controller = {

	init: () => {
		view.init();
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
	init: () => {
		this.nameColumns = document.querySelector("tbody");
		this.containerTbody = "";
		controller.getAllStudents().forEach( student => {
			containerTbody += `
				<tr class="student">
					<td class="name-col">${student.name}</td>
					<td class="attend-col"><input type="checkbox"></td>
					<td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="attend-col"><input type="checkbox"></td>
                    <td class="missed-col">0</td>
				</tr>
			`;
		});
		
		this.nameColumns.innerHTML = containerTbody;
	}
}

controller.init();