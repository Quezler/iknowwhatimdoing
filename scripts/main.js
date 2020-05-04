const roll = method => new java.lang.Runnable(){run: method}

Events.on(EventType.ClientLoadEvent, roll(() => {
    Core.app.post(roll(() => {
        Core.app.post(roll(() => {
            Core.app.post(roll(() => {
                if(Core.scene.getDialog() != null) Core.scene.getDialog().hide();
            }));
        }));
    }));
}));
