# node-gamecredits-electrumx-host-parse

[![NPM](https://nodei.co/npm/gamecredits-electrumx-host-parse.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gamecredits-electrumx-host-parse)  

electrum peer string parser

## spec

* http://docs.electrum.org/en/latest/protocol.html#server-peers-subscribe

## install

```
npm i gamecredits-electrumx-host-parse
```

## usage

* jscode

```
const parse = require('electrum-host-parse')
const hostobject = parse.parsePeerString("electrum.gamecredits.network s50002 t50001")
console.log(hostobject)
```

* typescript

```
import * as parse from 'electrum-host-parse'
const hostobject = parse.parsePeerString("electrum.gamecredits.network s50002 t50001")
console.log(hostobject)
```

* result

```
{ host: 'electrum.gamecredits.network',
  ssl: 50002,
  tcp: 50001,
  pruning: null,
  http: null,
  https: null }
```

