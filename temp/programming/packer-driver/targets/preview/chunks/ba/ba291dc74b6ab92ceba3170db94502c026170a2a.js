System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Colyseus, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NetworkConnect;

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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Colyseus = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9288fCnqNOx7X/4BfkUyJf", "NetworkConnect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NetworkConnect", NetworkConnect = (_dec = ccclass("NetworkConnect"), _dec2 = property({
        type: String
      }), _dec3 = property({
        type: Number
      }), _dec4 = property({
        type: Boolean
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Label
      }), _dec(_class = (_class2 = class NetworkConnect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hostname", _descriptor, this);

          _initializerDefineProperty(this, "port", _descriptor2, this);

          _initializerDefineProperty(this, "useSSL", _descriptor3, this);

          _initializerDefineProperty(this, "ListL", _descriptor4, this);

          _initializerDefineProperty(this, "ListLabel", _descriptor5, this);

          this.client = void 0;
          this.room = void 0;
        }

        start() {
          this.client = new (_crd && Colyseus === void 0 ? (_reportPossibleCrUseOfColyseus({
            error: Error()
          }), Colyseus) : Colyseus).Client((this.useSSL ? "wss" : "ws") + "://" + this.hostname + ":" + this.port);
          this.connect();
        }

        connect() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              var rooms = yield _this.client.getAvailableRooms("room1");

              if (rooms.length === 0) {
                _this.room = yield _this.client.create("room1");
                console.log("Created new room with sessionId:", _this.room.sessionId);
              } else {
                // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
                _this.room = yield _this.client.joinById(rooms[0].roomId);
                console.log("Joined existing room with sessionId:", _this.room.sessionId);
              }

              console.log("Joined successfully!");
              console.log("User's sessionId:", _this.room.sessionId);

              _this.room.onMessage("playerList", message => {
                _this.updatePlayerList(message);
              });

              _this.room.onStateChange(state => {
                console.log("Room state changed:", state);
                console.log("onStateChange: ", state);
                console.log("Players", [...state.players.values()]);
              });

              _this.room.onLeave(code => {
                console.log("Left room with code:", code);
              });
            } catch (e) {
              console.error("Error:", e);
            }
          })();
        }

        updatePlayerList(playerList) {
          var numElements = playerList.length;
          this.ListL.forEach(node => {
            node.active = false;
          });

          for (var i = 0; i < numElements && i < this.ListL.length; i++) {
            this.ListL[i].active = true;
            this.ListLabel[i].string = playerList[i].sessionId;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "7bb3-115-79-59-222.ngrok-free.app";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 80;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ListL", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ListLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class)); // import { _decorator, Component, Label, Node } from "cc";
      // const { ccclass, property } = _decorator;
      // import Colyseus from "db://colyseus-sdk/colyseus.js";
      // @ccclass("NetworkConnect")
      // export class NetworkConnect extends Component {
      //   @property({ type: String })
      //   hostname = "7bb3-115-79-59-222.ngrok-free.app";
      //   @property({ type: Number })
      //   port = 80;
      //   @property({ type: Boolean })
      //   useSSL = true;
      //   @property({ type: Node })
      //   private ListL: Node[] = [];
      //   @property({ type: Label })
      //   private ListLabel: Label[] = [];
      //   client!: Colyseus.Client;
      //   room!: Colyseus.Room;
      //   start() {
      //     this.client = new Colyseus.Client(
      //       `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
      //     );
      //     this.connect();
      //   }
      //   async connect() {
      //     try {
      //       this.room = await this.client.joinById("Room1");
      //       console.log("Joined successfully!");
      //       console.log("User's sessionId:", this.room.sessionId);
      //       this.startCountdown();
      //       this.setupEventListeners();
      //     } catch (e) {
      //       console.error("Error:", e);
      //     }
      //   }
      //   startCountdown() {
      //     const countdownInterval = setInterval(() => {
      //       if (this.room.state.countdown > 0) {
      //         this.room.state.countdown--;
      //         console.log("Countdown:", this.room.state.countdown);
      //         this.room.send("countdown", this.room.state.countdown);
      //       } else {
      //         clearInterval(countdownInterval);
      //       }
      //     }, 1000);
      //   }
      //   setupEventListeners() {
      //     this.room.onMessage("countdown", (countdown: number) => {
      //       // Cập nhật giao diện người chơi với giá trị mới của biến đếm ngược
      //     });
      //     this.room.onStateChange((state) => {
      //       console.log("Room state changed:", state);
      //     });
      //     this.room.onLeave((code) => {
      //       console.log("Left room with code:", code);
      //     });
      //   }
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba291dc74b6ab92ceba3170db94502c026170a2a.js.map