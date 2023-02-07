window.loadRevealView = function (viewId, dashboardName) {
    $.ig.RevealSdkSettings.ensureFontsLoadedAsync().then(

        $.ig.RVDashboard.loadDashboard(dashboardName, (dashboard) => {
            console.log(dashboard);
            var revealView = new $.ig.RevealView("#" + viewId);
            revealView.dashboard = dashboard;
        })
    );
}