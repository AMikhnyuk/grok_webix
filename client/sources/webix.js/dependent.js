const LinkedInputs = {
	$init(config) {
		let master = this.$$(config.master);
		master.attachEvent("onChange", (newV) => {
			this.setValue();
			this.getList().clearAll();
			if (newV) this.getList().load(config.dependentUrl + newV);
		});
	}
};

webix.protoUI({
	name: "dependent",
	$cssName: "richselect"
}, LinkedInputs, webix.ui.richselect);
