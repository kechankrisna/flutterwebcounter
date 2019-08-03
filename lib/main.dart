// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter_web/material.dart';

void main() {
  runApp(Myapp());
}

class Myapp extends StatefulWidget {
  @override
  _MyappState createState() => _MyappState();
}

class _MyappState extends State<Myapp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "HELLO WORLD APP",
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int counter = 1;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Hello world app"),
          centerTitle: true,
        ),
        body: Container(
          alignment: Alignment.center,
          // child: Text("Counter start ${this.counter.toString()}"),
          child: Text(this.counter.toString()),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => {
                setState(() => {
                      counter: counter++,
                    })
              },
          child: Icon(Icons.add),
        ));
  }
}
