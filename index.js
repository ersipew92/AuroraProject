class ProjectManagementPlatform {
    constructor() {
        this.features = [];
        this.easyToUse = true;
    }

    addFeature(feature) {
        this.features.push(feature);
    }

    viewFeatures() {
        console.log("Features:");
        this.features.forEach(feature => {
            console.log(feature);
        });
    }

    startJourney() {
        console.log("Start your journey towards project success today!");
    }

    isEasyToUse() {
        if (this.easyToUse) {
            console.log("Our platform is easy to use.");
        } else {
            console.log("Our platform may require some learning but offers powerful features.");
        }
    }
}

// 示例用法
const projectPlatform = new ProjectManagementPlatform();
projectPlatform.addFeature("Task management");
projectPlatform.addFeature("Milestone tracking");
projectPlatform.addFeature("Team communication");
projectPlatform.addFeature("Project analytics");

// 查看平台特点
projectPlatform.viewFeatures();

// 开始项目成功之旅
projectPlatform.startJourney();

// 检查平台易用性
projectPlatform.isEasyToUse();
