## Structure

The Test folder is intended to be a mimic of the `src` folder structure, every file have the same name as the file is testing, with the `.test` extention.


## What's been tested

Here, we test only what was created for the project, things like: **CreateContext / useContext**, isn't directly tested here, components, hooks and packages that we didn't created, aren't tested.

## Why of the tests

To help refactor, growing and development, the tests are created as a way to scale and optimize the application without breaking it, or at least the most critical functions of it.

This is one of the reasons why I didn't test the `Context` directly, if we change how it works, or what it gives, even if we upgrade it to Redux, as long as the App is still working as intended, the tests will pass anyway.