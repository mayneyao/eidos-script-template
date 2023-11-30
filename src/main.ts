import { Eidos, EidosTable } from "@eidos.space/types";
declare const eidos: Eidos;

interface Env {
  // add your environment variables here
}

interface Table {
  // add your tables here
  // key is a variable name of field you want to use, value is id of the field instance
  todo: EidosTable<{
    title: string;
  }>;
}

interface Input {
  // add your input fields here
  content: string;
}

interface Context {
  env: Env;
  tables: Table;
  currentRowId?: string;
}

export default async function (input: Input, context: Context) {
  console.log("Hello Eidos!");
  const tableId = context.tables.todo.id;
  const fieldMap = context.tables.todo.fieldsMap;
  const table = eidos.currentSpace.table(tableId);
  const newTodo = await table.rows.create(
    {
      [fieldMap.title]: input.content,
    },
    {
      // useFieldId is a good practice to avoid field name changes.
      useFieldId: true,
    }
  );
  console.log(newTodo);
  return {
    todoId: newTodo._id,
  };
}
