jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "sample-pass.feature",
      "Feature": {
        "Name": "Example passing feature",
        "Description": "  As a user of octo-ark\n  I want to have access to the project repo\n  So that I can read the documentation",
        "FeatureElements": [
          {
            "Name": "Reading documentation",
            "Slug": "reading-documentation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "This step should pass",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "This step should also pass",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "This final step should pass",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true
      }
    },
    {
      "RelativeFolder": "sample-fail.feature",
      "Feature": {
        "Name": "Example failing feature",
        "Description": "  As a user of octo-ark\n  I want to have access to the project repo\n  So that I can read the documentation",
        "FeatureElements": [
          {
            "Name": "Reading documentation",
            "Slug": "reading-documentation",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "This step should pass",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "This step should also pass",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "This final step should fail",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false
      }
    }
  ],
  "Summary": {
    "Tags": [],
    "Folders": [
      {
        "Folder": "sample-pass.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "sample-fail.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 1,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "sample-pass.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "sample-fail.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 2,
      "Passing": 1,
      "Failing": 1,
      "Inconclusive": 0
    },
    "Features": {
      "Total": 2,
      "Passing": 1,
      "Failing": 1,
      "Inconclusive": 0
    }
  },
  "Configuration": {
    "GeneratedOn": "17 November 2016 18:18:14"
  }
});