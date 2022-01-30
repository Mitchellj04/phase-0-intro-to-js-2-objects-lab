// Write your solution in this file!
const employee ={
    name: "",
    streetAdress:""
};


function updateEmployeeWithKeyAndValue (employee, key, value){
        const newObj = {... employee};
        newObj[key] = value;
        return newObj;
};

employee[key] = value;

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key,value){
    delete{...employee[key]};
    return {employee};
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    delete employee[key];
    return employee;
}
