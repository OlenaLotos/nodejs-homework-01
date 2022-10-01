const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

// const argv = require("yargs").argv;

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const contacts = await listContacts();
//       console.log(contacts);
//       break;

//     case "get":
//       const contact = await getContactById(id);
//       if (!contact) {
//         throw new Error(`Contact with id=${id} not found`);
//       }
//       console.log(contact);
//       break;

//     case "add":
//       const lastContact = await addContact(name, email, phone);
//       console.log(lastContact);
//       break;

//     case "remove":
//       const deleteContact = await removeContact(id);
//       if (!deleteContact) {
//         throw new Error(`Contact with id=${id} not found`);
//       }
//       console.log(deleteContact);
//       break;

//     default:
//       console.warn("Unknown action type!");
//   }
// }

// invokeAction(argv);

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

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "5" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
// invokeAction({
//   action: "updateById",
//   id: "TfDxBox-EtSFIvXH7CJF-",
//   title: "Ward",
//   author: "Джон Маккрей",
// });
// invokeAction({ action: "remove", id: "3" });
