import {JetView} from "webix-jet";

import albumsCollection from "../models/albumsCollection";
import collectionA from "../models/collectionA";
import songsCollection from "../models/songsCollection";


export default class SettingsView extends JetView {
	config() {
		const settingsForm1 = {
			view: "form",
			localId: "settings:form1",
			elements: [
				{
					template: "Add song",
					type: "section"
				},
				{
					view: "richselect",
					label: "Group",
					localId: "form1:group",
					name: "groupId",
					options: {
						body: {
							data: collectionA,
							template: "#name#"
						}
					},
					on: {
						onChange: () => {
							const album = this.$$("form1:album");
							album.enable();
							album.setValue();
						}
					}
				},
				{
					view: "richselect",
					label: "Album",
					localId: "form1:album",
					name: "albumId",
					options: {
						body: {
							data: albumsCollection,
							template: "#name#"

						},
						on: {
							onShow: () => {
								const groupId = this.$$("form1:group").getValue();

								if (groupId) {
									this.$$("form1:album").getList().filter("#groupId#", groupId);
								}
							}
						}
					},
					on: {
						onChange: (id) => {
							const table = this.$$("settings:table");
							table.filter("#albumId#", id);
							this.$$("add:button").enable();
						}

					},
					disabled: true
				}
			]
		};
		const settingsForm2 = {
			view: "form",
			localId: "settings:form2",
			elements: [

			]
		};
		const settingsTable = {
			view: "datatable",
			localId: "settings:table",
			editable: true,
			columns: [
				{
					id: "id", header: "№"
				},
				{
					id: "name",
					header: "Song",
					editor: "text",
					fillspace: true

				},
				{
					template: '<i class="webix_icon wxi-trash remove"></i>',
					width: 50
				}


			],
			onClick: {
				remove: (e, item) => {
					webix.confirm("Delete?").then(() => {
						songsCollection.remove(item.row);
					});
					return false;
				}
			},
			select: true
		};
		const tableForm = {
			view: "form",
			localId: "table:form",
			elements: [

				{
					cols: [
						{
							view: "text",
							name: "name",
							invalidMessage: "Must not be empty"
						},
						{
							view: "button",
							localId: "add:button",
							value: "Add",
							width: 150,
							click: () => {
								this.addSong();
							},
							disabled: true
						},
						{
							view: "button",
							css: "webix_button webix_primary",
							value: "Clear",
							width: 150,
							click: () => {
								this.clearForm();
							}
						}
					]
				}
			],
			rules: {
				name: webix.rules.isNotEmpty
			}
		};
		const ui = {

			rows: [
				{
					cols: [
						settingsForm1, settingsForm2
					]
				},
				settingsTable,
				tableForm
			]
		};
		return ui;
	}

	init() {
		songsCollection.waitData.then(() => {
			this.$$("settings:table").sync(songsCollection);
		});
	}

	addSong() {
		const id = this.$$("form1:album").getValue();
		const form = this.$$("table:form");
		if (form.validate()) {
			const textValue = form.getValues().name;
			songsCollection.add({name: textValue, albumId: +id});
			this.clearForm();
		}
	}

	clearForm() {
		const form = this.$$("table:form");
		const album = this.$$("form1:album");
		const group = this.$$("form1:group");
		const addButton = this.$$("add:button");
		album.setValue();
		group.setValue();
		album.disable();
		addButton.disable();
		form.clearValidation();
		form.clear();
	}
}
