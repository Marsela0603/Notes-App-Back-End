const NotesHandler = require('./handler');
const routes = require('./routes');
const { NotePayloadSchema } = require('../../validator/notes/schema');
 
module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};