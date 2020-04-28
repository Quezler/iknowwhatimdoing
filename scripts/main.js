Events.on(EventType.ClientLoadEvent, run(() => {
    Core.app.post(run(() => {
        Core.app.post(run(() => {
            Core.app.post(run(() => {
                if(Core.scene.getDialog() != null) Core.scene.getDialog().hide();
            }));
        }));
    }));
}));
