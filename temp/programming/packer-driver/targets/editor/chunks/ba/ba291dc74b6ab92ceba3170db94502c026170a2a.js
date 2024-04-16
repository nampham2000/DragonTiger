System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Colyseus, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, NetworkConnect;

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

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'tween', 'Vec3']);

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
      }), _dec7 = property(Label), _dec(_class = (_class2 = class NetworkConnect extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hostname", _descriptor, this);

          _initializerDefineProperty(this, "port", _descriptor2, this);

          _initializerDefineProperty(this, "useSSL", _descriptor3, this);

          _initializerDefineProperty(this, "ListL", _descriptor4, this);

          _initializerDefineProperty(this, "ListLabel", _descriptor5, this);

          _initializerDefineProperty(this, "TimerDown", _descriptor6, this);

          this.client = void 0;
          this.room = void 0;
          this.gameState = void 0;
          this.resultDragon = void 0;
          this.resultTiger = void 0;
          this.TotalUser = void 0;
          this.UserBet = void 0;
          this.NotmeBet = void 0;
        }

        start() {
          this.client = new (_crd && Colyseus === void 0 ? (_reportPossibleCrUseOfColyseus({
            error: Error()
          }), Colyseus) : Colyseus).Client(`${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`);
          this.connect();
        }

        async connect() {
          try {
            const rooms = await this.client.getAvailableRooms("room1");

            if (rooms.length === 0) {
              this.room = await this.client.create("room1");
              console.log("Created new room with sessionId:", this.room.sessionId);
            } else {
              // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
              this.room = await this.client.joinById(rooms[0].roomId);
              console.log("Joined existing room with sessionId:", this.room.sessionId);
            }

            console.log("Joined successfully!");
            console.log("User's sessionId:", this.room.sessionId); // this.room.onMessage("playerList", (message) => {
            //   console.log(message);
            //   this.updatePlayerList(message);
            // });

            this.room.onMessage("timer", message => {
              this.TimerDown.string = message;
            });
            this.room.onMessage("result", message => {
              this.resultDragon = message.dragonCard.value;
              this.resultTiger = message.tigerCard.value;
            });
            this.room.onMessage("userBet", message => {
              if (message.playerID !== this.room.sessionId) {
                console.log("Thang kia bet");
                this.UserBet = message.playerID;
              } else {
                console.log("false");
              }
            });
            this.room.onStateChange(state => {
              console.log("Room state changed:", state);
              console.log("onStateChange: ", state);
              const players = [...state.players.values()];
              this.updatePlayerList(players);
              console.log(players);
              this.gameState = state.roundState;
            });
            this.room.onLeave(code => {
              console.log("Left room with code:", code);
            });
          } catch (e) {
            console.error("Error:", e);
          }
        }

        updatePlayerList(playerList) {
          const numElements = playerList.length;
          this.ListL.forEach(node => {
            node.active = false;
          });

          for (let i = 0; i < numElements && i < this.ListL.length; i++) {
            if (this.UserBet) this.ListL[i].active = true;
            this.ListLabel[i].string = playerList[i].sessionId;
          }
        } // createSpriteNode(posX, PosY, PosNode: Node) {
        //   // Tạo một Node mới
        //   const spriteNode = new Node("SpriteNode");
        //   spriteNode.scale = new Vec3(0.5, 0.5);
        //   // Thêm một component Sprite vào Node
        //   const spriteComponent = spriteNode.addComponent(Sprite);
        //   // Gán SpriteFrame cho component Sprite
        //   spriteComponent.spriteFrame =
        //     this.chipNode.buttonPub.node.getComponent(Sprite).spriteFrame;
        //   // spriteNode.position=new Vec3(this.chipNode.buttonPub.node.position)
        //   // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)
        //   PosNode.addChild(spriteNode);
        //   tween(spriteNode)
        //     .to(0.3, { position: new Vec3(posX, PosY) })
        //     .start();
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hostname", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "7bb3-115-79-59-222.ngrok-free.app";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "port", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 80;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useSSL", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ListL", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ListLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "TimerDown", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba291dc74b6ab92ceba3170db94502c026170a2a.js.map