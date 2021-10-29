import {JetView} from "webix-jet";

import collectionA from "../models/collectionA";

export default class GroupsView extends JetView {
	config() {
		const groupsToolbar = {
			view: "toolbar",
			elements: [
				{},
				{
					view: "button", value: "Export to Exel", width: 150
				},
				{
					view: "button", value: "Refresh", width: 100
				}
			]
		};
		const groupsTable = {
			view: "datatable",
			localId: "groups:table",
			editable: true,
			columns: [
				{
					id: "name",
					header: [
						{
							text: "Group Name"
						},
						{
							content: "textFilter"
						}
					],
					editor: "text",
					sort: "text",
					fillspace: 3
				},
				{
					id: "composition",
					header: [
						{
							text: "Composition"
						},
						{
							content: "textFilter"
						}
					],
					editor: "text",
					sort: "text",
					fillspace: 3
				},
				{
					id: "style",
					header: [
						{
							text: "Music Style"
						},
						{
							content: "textFilter"
						}
					],
					editor: "text",
					sort: "text",
					fillspace: 2
				},
				{
					id: "date",
					header: [
						{
							text: "Creation Date"
						},
						{
							content: "dateRangeFilter"
						}
					],
					editor: "date",
					sort: "date",
					fillspace: 2
				},
				{
					id: "country",
					header: [
						{
							text: "Country"
						},
						{
							content: "textFilter"
						}
					],
					editor: "text",
					sort: "text",
					fillspace: 2
				}
			]

		};
		const ui = {
			rows: [
				groupsToolbar, groupsTable
			]
		};
		return ui;
	}

	init() {
		const table = this.$$("groups:table");
		table.sync(collectionA);
	}
}
