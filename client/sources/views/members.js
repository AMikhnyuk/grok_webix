import {JetView} from "webix-jet";

import collectionB from "../models/collectionB";

export default class MembersView extends JetView {
	config() {
		const membersTable = {
			view: "datatable",
			localId: "members:table",
			editable: true,
			columns: [
				{
					id: "name",
					header: [
						{
							text: "Member Name"
						},
						{
							content: "textFilter"
						}
					],
					editor: "text",
					sort: "text",
					fillspace: true
				},
				{
					id: "role",
					header: [
						{
							text: "Role"
						},
						{
							content: "selectFilter"
						}
					],
					editor: "text",
					sort: "text",
					adjust: true
				},
				{
					id: "date",
					header: [
						{
							text: "Date of Birth"
						},
						{
							content: "dateRangeFilter"
						}
					],
					editor: "date",
					sort: "date",
					adjust: true
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
					adjust: true
				},
				{
					id: "awards",
					header: [
						{
							text: "Awards"
						},
						{
							content: "textFilter"
						}
					],
					editor: "text",
					sort: "text",
					adjust: true
				}
			]
		};
		return membersTable;
	}

	init() {
		const table = this.$$("members:table");
		table.sync(collectionB);
	}
}
