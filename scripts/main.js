const roll = method => new java.lang.Runnable(){run: method}

onEvent(ClientLoadEvent, () => {
    Core.app.post(roll(() => {
        Core.app.post(roll(() => {
            Core.app.post(roll(() => {
                if(Core.scene.getDialog() != null) Core.scene.getDialog().hide();
            }));
        }));
    }));
});
