// use the find method on arrays to implement the function

function getEmployeeById(employees, id ){
    const tst = id;
    return employees.find(({id}) => id === tst)
}

test("Find employee by id", ()=>{
    const employees = [{id:101,name:"Adam"},{id:202,name:"Sierra"},{id:303,name:"Ryan"},{id:404,name:"Tim"}];
    expect(getEmployeeById(employees,303)).toBe(employees[2])
})