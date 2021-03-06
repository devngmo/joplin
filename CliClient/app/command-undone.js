const { BaseCommand } = require('./base-command.js');
const { app } = require('./app.js');
const { _ } = require('lib/locale.js');
const { BaseModel } = require('lib/base-model.js');
const { Folder } = require('lib/models/folder.js');
const { Note } = require('lib/models/note.js');
const { time } = require('lib/time-utils.js');

const CommandDone = require('./command-done.js');

class Command extends BaseCommand {

	usage() {
		return 'undone <note>';
	}

	description() {
		return _('Marks a to-do as non-completed.');
	}

	async action(args) {
		await CommandDone.handleAction(args, false);
	}

}

module.exports = Command;