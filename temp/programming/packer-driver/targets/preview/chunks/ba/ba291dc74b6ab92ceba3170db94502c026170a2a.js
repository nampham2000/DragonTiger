System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Colyseus, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, NetworkConnect;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfColyseus(extras) {
    _reporterNs.report("Colyseus", "db://colyseus-sdk/colyseus.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Colyseus = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9288fCnqNOx7X/4BfkUyJf", "NetworkConnect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NetworkConnect", NetworkConnect = (_dec = ccclass("NetworkConnect"), _dec(_class = (_class2 = class NetworkConnect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hostname", _descriptor, this);

          _initializerDefineProperty(this, "port", _descriptor2, this);

          _initializerDefineProperty(this, "useSSL", _descriptor3, this);

          this.client = void 0;
          this.room = void 0;
        }

        start() {
          // Instantiate Colyseus Client
          // connects into (ws|wss)://hostname[:port]
          this.client = new (_crd && Colyseus === void 0 ? (_reportPossibleCrUseOfColyseus({
            error: Error()
          }), Colyseus) : Colyseus).Client((this.useSSL ? "wss" : "ws") + "://" + this.hostname); // Connect into the room

          this.connect();
        }

        connect() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              // const a = [...this.room.state.players.values()]
              _this.room = yield _this.client.joinById("VDGHY");
              console.log("joined successfully!");
              console.log("user's sessionId:", _this.room.sessionId);
              console.log("players", _this.room.state.players);

              _this.room.onMessage("playerList", message => {
                console.log("message received from server");
                console.log("Mess", message); // console.log("players", [...this.room.state.players.values()]);
              });

              _this.room.onStateChange(state => {
                console.log("onStateChange: ", state);
              });

              _this.room.onLeave(code => {
                console.log("onLeave:", code);
              });
            } catch (e) {
              console.error(e);
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "7bb3-115-79-59-222.ngrok-free.app";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba291dc74b6ab92ceba3170db94502c026170a2a.js.map