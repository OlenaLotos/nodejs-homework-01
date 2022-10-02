const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case "add":
      const lastContact = await addContact(name, email, phone);
      console.log(lastContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "list" });
invokeAction({ action: "get", id: "5" });
invokeAction({
  action: "add",
  name: "Mango",
  email: "mango@gmail.com",
  phone: "322-22-22",
});
invokeAction({
  action: "updateById",
  id: "TfDxBox-EtSFIvXH7CJF-",
  title: "Ward",
  author: "Джон Маккрей",
});
invokeAction({ action: "remove", id: "3" });
