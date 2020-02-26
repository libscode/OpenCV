#  OpenCV
OpenCV is an open source mobile app to see their cv

[![MIT License][license-image]][license-url] [![Stars][stars-image]][stars-url] [![js-standard-style][js-standard]][js-standard-url] [![React Native][package-react-native]][react-native-url]

## Prerequisites
- Xcode or Android Studio installed and exported on your ~/.bash_profile or similar
- JDK 1.8
- Node >= 12.*
- react-native-cli

## Installation
open terminal and change directory to your desired folder, then:
```
$ git clone git@github.com:libscode/OpenCV.git YourAppName
$ cd YourAppName
$ yarn install
$ cd ios && pod install
```
## Run Your App
```
$ npx react-native run-android
$ npx react-native run-ios
```
## License
The code is available at [GitHub][home] under the [MIT license][license-url].

## Additional
**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

## Contributors
Suggestions and contributions are welcome via Pull Requests.
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/8052370" width="100px;"/><br /><sub><b>Rully Ardiansyah</b></sub>](https://github.com/DeVoresyah)<br />[💻](https://github.com/libscode/OpenCV/commits?author=DeVoresyah "Code") [📖](https://github.com/libscode/OpenCV/commits?author=DeVoresyah "Documentation") [💬](#question-devoresyah "Answering Questions") [👀](#review-devoresyah "Reviewed Pull Requests") [💡](#example-devoresyah "Examples") | [<img src="https://cdn.dribbble.com/users/3843915/avatars/normal/data?1563263378" width="100px;"/><br /><sub><b>Arkanpo</b></sub>](https://dribbble.com/arkanpo)<br /> [🎨](#logo-design "UI/UX Design") [💡](#concept-arkanpo "Concept") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

[home]: https://github.com/libscode/OpenCV

[license-image]: https://img.shields.io/github/license/libscode/OpenCV.svg?style=flat
[license-url]: LICENSE

[stars-image]: https://img.shields.io/github/stars/libscode/OpenCV.svg?style=flat
[stars-url]: https://github.com/DeVoresyah/JeptureApp/stargazers

[js-standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[js-standard-url]: http://standardjs.com/

[package-react-native]: https://img.shields.io/badge/react--native-0.59.9-blue.svg?style=flat
[react-native-url]: https://github.com/facebook/react-native
