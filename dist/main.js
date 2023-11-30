// src/main.ts
async function main_default(input, context) {
  console.log("Hello Eidos!");
  const tableId = context.tables.todo.id;
  const fieldMap = context.tables.todo.fieldsMap;
  const table = eidos.currentSpace.table(tableId);
  const newTodo = await table.rows.create(
    {
      [fieldMap.title]: input.content
    },
    {
      // useFieldId is a good practice to avoid field name changes.
      useFieldId: true
    }
  );
  console.log(newTodo);
  return {
    todoId: newTodo._id
  };
}
export {
  main_default as default
};
