define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__material__app = material.src__material__app;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__floating_action_button = material.src__material__floating_action_button;
  const src__material__icons = material.src__material__icons;
  const src__painting__alignment = animation$.src__painting__alignment;
  const main = Object.create(dart.library);
  const $toString = dartx.toString;
  let LinkedHashSetOfvoid = () => (LinkedHashSetOfvoid = dart.constFn(collection.LinkedHashSet$(dart.void)))();
  let IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  let MapOfint$int = () => (MapOfint$int = dart.constFn(core.Map$(core.int, core.int)))();
  let VoidToMapOfint$int = () => (VoidToMapOfint$int = dart.constFn(dart.fnType(MapOfint$int(), [])))();
  let SetOfvoid = () => (SetOfvoid = dart.constFn(core.Set$(dart.void)))();
  let VoidToSetOfvoid = () => (VoidToSetOfvoid = dart.constFn(dart.fnType(SetOfvoid(), [])))();
  main.Myapp = class Myapp extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._MyappState.new();
    }
  };
  (main.Myapp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.Myapp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.Myapp.prototype;
  dart.addTypeTests(main.Myapp);
  dart.setMethodSignature(main.Myapp, () => ({
    __proto__: dart.getMethods(main.Myapp.__proto__),
    createState: dart.fnType(main._MyappState, [])
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  main._MyappState = class _MyappState extends src__widgets__framework.State$(main.Myapp) {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "HELLO WORLD APP", home: new main.HomeScreen.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 7, name: "debugShowCheckedModeBanner"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main._MyappState.new = function() {
    main._MyappState.__proto__.new.call(this);
    ;
  }).prototype = main._MyappState.prototype;
  dart.addTypeTests(main._MyappState);
  dart.setMethodSignature(main._MyappState, () => ({
    __proto__: dart.getMethods(main._MyappState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  main.HomeScreen = class HomeScreen extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._HomeScreenState.new();
    }
  };
  (main.HomeScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.HomeScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.HomeScreen.prototype;
  dart.addTypeTests(main.HomeScreen);
  dart.setMethodSignature(main.HomeScreen, () => ({
    __proto__: dart.getMethods(main.HomeScreen.__proto__),
    createState: dart.fnType(main._HomeScreenState, [])
  }));
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  main._HomeScreenState = class _HomeScreenState extends src__widgets__framework.State$(main.HomeScreen) {
    initState() {
      super.initState();
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("Hello world app", {$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 18, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 23, name: "data"})))], src__widgets__widget_inspector._Location))})))}), centerTitle: true, $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 17, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 11, name: "title"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, name: "centerTitle"})))], src__widgets__widget_inspector._Location))})))}), body: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__text.Text.new(dart.toString(this.counter), {$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 18, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 36, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 15, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 11, name: "alignment"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), floatingActionButton: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
              let t0;
              return new (IdentityMapOfint$int()).from([this.counter, (t0 = this.counter, this.counter = dart.notNull(t0) + 1, t0)]);
            }, VoidToMapOfint$int()))]), VoidToSetOfvoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.add, {$creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 18, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 29, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 31, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 11, name: "onPressed"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 12, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 9, name: "appBar"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 9, name: "body"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 9, name: "floatingActionButton"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main._HomeScreenState.new = function() {
    this.counter = 1;
    main._HomeScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._HomeScreenState.prototype;
  dart.addTypeTests(main._HomeScreenState);
  dart.setMethodSignature(main._HomeScreenState, () => ({
    __proto__: dart.getMethods(main._HomeScreenState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(main._HomeScreenState, () => ({
    __proto__: dart.getFields(main._HomeScreenState.__proto__),
    counter: dart.fieldType(core.int)
  }));
  let const$32;
  let const$33;
  main.main = function() {
    src__widgets__binding.runApp(new main.Myapp.new({$creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 10, file: "org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart", parameterLocations: const$32 || (const$32 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/flutter_web.examples.hello_world/main", {
    "package:flutter_web.examples.hello_world/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.hello_world/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,qEACuB,cACrB,yBACD;IAEV;;;;;EACF;;;;;;;;AAIoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAOU;IACR;UAG0B;AACxB,YAAO,mDACK,8CACC,gCAAK,2eACC,+lBAET,sDACiB,kDAEd,gCAAkB,cAAR,ykCAEG,+EACT,cAAM,4BACX,cAAS;;AAAM,wDACT,kCAAS,kCAAO;oEAGrB,gCAAW;IAE1B;;;IA3BI,eAAU;;;EA4BhB;;;;;;;;;;;;;IArDE,6BAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
