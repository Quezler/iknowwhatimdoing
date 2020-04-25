Events.on(EventType.ClientLoadEvent, run(() => {
    Core.app.post(run(() => {
        Core.app.post(run(() => {
            Core.app.post(run(() => {
                children = Core.scene.root.getChildren();
                children.reverse();
                children.first().hide();
                children.reverse();
            }));
        }));
    }));
}));
