# RNListTest

This is a react native list demo which is using Api for getting the list of items and showing it in 3 different modes.
1. Grid
2. Compact
3. Large

### Code Setup

```sh
$ git clone https://github.com/NikhilVashistha/RNListTest.git
$ cd RNListTest
$ npm install
```

### For running app

**android**

```sh
$ react-native run-android
```

**ios**

```sh
$ react-native run-ios
```

### Components

**App** - It is top level component contains AppNavigator.

**ListScreen** - It is a pure component used for showing the list of articles with some details and 3 buttons of switching modes.

**ListItem** - It is a pure component used for showing the list item in ListScreen component which includes title, description image.
