var reporter = require('cucumber-html-reporter');
 
var options = {
    theme: 'bootstrap',
    jsonFile: 'results.json',
    output: 'cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Linux",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};
 
reporter.generate(options);