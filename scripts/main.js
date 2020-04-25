Events.on(EventType.ClientLoadEvent, run(() => {
    Core.app.post(run(() => {
        Core.app.post(run(() => {
            Core.app.post(run(() => {
                Core.scene.getDialog().hide();
            }));
        }));
    }));
}));
