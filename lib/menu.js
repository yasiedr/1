const inquirer = require("inquirer");
const mysql = require('mysql2');


const showMenu = async () => {
    const { Menu } = await nquirer.prompt([
        {
            type: "list",
      name: "menu",
      message: "What would you like to do?",
      pageSize: 20,
      choices: [
        new inquirer.Separator("-----VIEW-----"),
        "View all departments",
        "View all roles",
        "View all employees",
        new inquirer.Separator("-----ADD-----"),
        "Add a department",
        "Add a role",
        "Add an employee",
        new inquirer.Separator("-----UPDATE-----"),
        "Update an employee",
        new inquirer.Separator("-----REMOVE-----"),
        "Remove a department",
        "Remove a role",
        "Remove an employee",
        new inquirer.Separator("----------------"),
        "Exit",
      ],
    },
  ]);

  let inputs;
  let managerId;
  let roleId;
  let result;
  let firstName;
  let lastName;
  let selectedEmployee
  let selectedRole;
  let selectedDepartment;

        }


        switch (menu) {
            case "View all departments":
              const departments = await department.getAllDepartmentNames();
              if (departments) console.table(departments);
              else console.log("There isn't any department");
              break;
        
            case "View all roles":
              const selectedRoleTitle = await role.showSelectroleMenu();
        
              if (!selectedRoleTitle) {
                console.log("There isn't any role.");
                break;
              }
        
              selectedRole = await role.getByTitle(selectedRoleTitle);
              const roleDepartment = await department.get(selectedRole.department_id);
        
              let departmentName = null;
              if (roleDepartment) {
                departmentName = roleDepartment.name;
              }
        
              console.table({
                title: selectedRole.title,
                salary: selectedRole.salary,
                department: departmentName,
              });
            }