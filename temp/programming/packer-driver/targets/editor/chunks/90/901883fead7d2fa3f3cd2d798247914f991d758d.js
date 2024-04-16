System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tween, Vec3, Animation, SpriteFrame, Sprite, Graphics, Color, instantiate, Prefab, Button, Chip, NetworkConnect, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfChip(extras) {
    _reporterNs.report("Chip", "./Chip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkConnect(extras) {
    _reporterNs.report("NetworkConnect", "./NetworkConnect", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      Chip = _unresolved_2.Chip;
    }, function (_unresolved_3) {
      NetworkConnect = _unresolved_3.NetworkConnect;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8ab5YQ3ZZPeJeVYhhzn+bz", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'Vec3', 'Animation', 'SpriteFrame', 'Sprite', 'math', 'log', 'Graphics', 'Color', 'instantiate', 'Prefab', 'Button', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass("GameController"), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property({
        type: _crd && Chip === void 0 ? (_reportPossibleCrUseOfChip({
          error: Error()
        }), Chip) : Chip
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Node
      }), _dec17 = property({
        type: Node
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Node
      }), _dec20 = property({
        type: Node
      }), _dec21 = property({
        type: Node
      }), _dec22 = property({
        type: Node
      }), _dec23 = property({
        type: Node
      }), _dec24 = property({
        type: Node
      }), _dec25 = property({
        type: Animation
      }), _dec26 = property({
        type: Animation
      }), _dec27 = property({
        type: Animation
      }), _dec28 = property({
        type: Animation
      }), _dec29 = property({
        type: Animation
      }), _dec30 = property({
        type: Animation
      }), _dec31 = property({
        type: Animation
      }), _dec32 = property({
        type: SpriteFrame
      }), _dec33 = property({
        type: SpriteFrame
      }), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Prefab), _dec37 = property(Prefab), _dec38 = property(Prefab), _dec39 = property({
        type: Node
      }), _dec40 = property({
        type: Node
      }), _dec41 = property({
        type: Node
      }), _dec42 = property({
        type: Label
      }), _dec43 = property({
        type: SpriteFrame
      }), _dec44 = property({
        type: [Button]
      }), _dec45 = property(_crd && NetworkConnect === void 0 ? (_reportPossibleCrUseOfNetworkConnect({
        error: Error()
      }), NetworkConnect) : NetworkConnect), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "betTigerLb", _descriptor, this);

          _initializerDefineProperty(this, "betDragonLb", _descriptor2, this);

          _initializerDefineProperty(this, "betTieLb", _descriptor3, this);

          _initializerDefineProperty(this, "UserName", _descriptor4, this);

          _initializerDefineProperty(this, "BalancerLb", _descriptor5, this);

          _initializerDefineProperty(this, "chipNode", _descriptor6, this);

          _initializerDefineProperty(this, "CardNodeL", _descriptor7, this);

          _initializerDefineProperty(this, "CardNodeR", _descriptor8, this);

          _initializerDefineProperty(this, "AvatarNode", _descriptor9, this);

          _initializerDefineProperty(this, "AvatarNode1", _descriptor10, this);

          _initializerDefineProperty(this, "AvatarNode2", _descriptor11, this);

          _initializerDefineProperty(this, "AvatarNode3", _descriptor12, this);

          _initializerDefineProperty(this, "AvatarL1", _descriptor13, this);

          _initializerDefineProperty(this, "AvatarL2", _descriptor14, this);

          _initializerDefineProperty(this, "AvatarL3", _descriptor15, this);

          _initializerDefineProperty(this, "AvatarL4", _descriptor16, this);

          _initializerDefineProperty(this, "AvatarL5", _descriptor17, this);

          _initializerDefineProperty(this, "AvatarL6", _descriptor18, this);

          _initializerDefineProperty(this, "GridL", _descriptor19, this);

          _initializerDefineProperty(this, "GridR", _descriptor20, this);

          _initializerDefineProperty(this, "ValueAnim", _descriptor21, this);

          _initializerDefineProperty(this, "ValueAnim1", _descriptor22, this);

          _initializerDefineProperty(this, "ValueAnim2", _descriptor23, this);

          _initializerDefineProperty(this, "CardNodeAnim", _descriptor24, this);

          _initializerDefineProperty(this, "WinNotice", _descriptor25, this);

          _initializerDefineProperty(this, "DragonWinintro", _descriptor26, this);

          _initializerDefineProperty(this, "DragonNode", _descriptor27, this);

          _initializerDefineProperty(this, "TigerNode", _descriptor28, this);

          _initializerDefineProperty(this, "StartBet", _descriptor29, this);

          _initializerDefineProperty(this, "ExplosionDra", _descriptor30, this);

          _initializerDefineProperty(this, "listCardRes", _descriptor31, this);

          _initializerDefineProperty(this, "bankCard", _descriptor32, this);

          _initializerDefineProperty(this, "pref", _descriptor33, this);

          _initializerDefineProperty(this, "prefL", _descriptor34, this);

          _initializerDefineProperty(this, "Over", _descriptor35, this);

          _initializerDefineProperty(this, "Under", _descriptor36, this);

          _initializerDefineProperty(this, "Tie", _descriptor37, this);

          // @property(Label)
          // private countDownLb: Label;
          _initializerDefineProperty(this, "ToatalAv", _descriptor38, this);

          _initializerDefineProperty(this, "ToatalUser", _descriptor39, this);

          _initializerDefineProperty(this, "PayUser", _descriptor40, this);

          _initializerDefineProperty(this, "BalanceList", _descriptor41, this);

          _initializerDefineProperty(this, "PayUserSprite", _descriptor42, this);

          _initializerDefineProperty(this, "listCancelBet", _descriptor43, this);

          _initializerDefineProperty(this, "NetworkConnect", _descriptor44, this);

          this.UserBetTigerIcon = 0;
          this.UserBetDragonIcon = 0;
          this.UserBetTieIcon = 0;
          this.clonePosCardL = new Vec3();
          this.clonePosCardR = new Vec3();
          this.randomValueCardR = 0;
          this.randomValueCardL = 0;
          this.balanceUser = 300;
          this.currentCol = 0;
          this.currentRow = 0;
          this.currentRowClone = 0;
          this.currentColL = 0;
          this.currentRowL = 0;
          this.previousPrefabType = null;
          this.previousPrefabTypeL = null;
          this.winIntroType = void 0;
          this.numRows = 6;
          this.numCols = 20;
          this.cellWidth = 27;
          this.cellHeight = 30;
          this.countdownTimerBet = 30;
          this.cloneBalance = 0;
          this.GameEnd = false;
          this.GameStateStart = false;
          this.GameStateIdle = false;
          this.GameStateReuslt = false;
          this.GameStateFight = false;
          this.GameStatePayOut = false;
        }

        start() {
          this.clonePosCardL = this.CardNodeL.position.clone();
          this.clonePosCardR = this.CardNodeR.position.clone();
          this.shuffelCard();
          this.drawRectangle();
          this.drawRectangle1();
          this.drawRectangle2();
          this.drawRectangle3();
          this.drawRectangleTotalUser(0);
          this.drawRectangleTotalUser(1);
          this.drawRectangleTotalUser(2);
          this.drawRectanglel(this.AvatarL1);
          this.drawRectanglel(this.AvatarL2);
          this.drawRectanglel(this.AvatarL3);
          this.drawRectanglel(this.AvatarL4);
          this.drawRectanglel(this.AvatarL5);
          this.drawRectanglel(this.AvatarL6);
          this.drawGrid(this.GridL);
          this.drawGrid(this.GridR);
          this.drawRectangleTotal(0);
          this.drawRectangleTotal(1);
          this.drawRectangleTotal(2);
        }

        update(deltaTime) {
          if (this.NetworkConnect.gameState === "idle" && this.GameStateIdle === false) {
            this.UserName.string = this.NetworkConnect.room.sessionId;
            this.Idle();
            this.GameEnd = false;
            this.GameStateIdle = true;
            this.GameStateReuslt = false;
            this.GameStateFight = false;
          }

          if (this.NetworkConnect.gameState === "startBetting" && this.GameStateStart === false) {
            this.StartBetting();
            this.GameStateStart = true;
          }

          if (this.NetworkConnect.gameState === "startBetting") {
            this.PosBet();
          }

          if (this.NetworkConnect.gameState === "stopBetting") {
            this.GameStateStart = false;
            this.stopBetting();
          }

          if (this.NetworkConnect.gameState === "fight" && this.GameStateFight === false) {
            this.fight();
            this.GameStateFight = true;
          }

          if (this.NetworkConnect.gameState === "showResult" && this.GameStateReuslt === false) {
            this.shownResult();
            this.GameStateReuslt = true;
          }

          if (this.NetworkConnect.gameState === "payout" && this.GameStatePayOut === false) {
            this.PayoutAnim();
            this.GameStatePayOut = true;
          }

          if (this.cloneBalance > 0) {
            this.listCancelBet[0].node.active = true;
          } else {
            this.listCancelBet[0].node.active = false;
          }
        }

        addScore(Score, betLB, betValueIcon) {
          if (this.balanceUser >= Score) {
            betValueIcon = betValueIcon + Score;
            this.balanceUser = this.balanceUser - Score;
            this.cloneBalance = this.cloneBalance + Score;
            this.BalancerLb.string = this.balanceUser.toString();
            betLB.string = betValueIcon.toString();
          }
        }

        betTigerBtn() {
          if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false) {
            this.addScore(this.chipNode.UserBet, this.betTigerLb, this.UserBetTigerIcon);
            this.UserBetTigerIcon += this.chipNode.UserBet;
            this.ToatalUser[2].active = true;
            this.listCancelBet[1].node.active = true;
            this.createSpriteNode(-406, 200, this.ValueAnim);
          }
        }

        betDragonBtn() {
          if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false) {
            this.addScore(this.chipNode.UserBet, this.betDragonLb, this.UserBetDragonIcon);
            this.UserBetDragonIcon += this.chipNode.UserBet;
            this.ToatalUser[0].active = true;
            this.listCancelBet[3].node.active = true;
            this.NetworkConnect.room.send("Bet", JSON.stringify({
              betAmount: this.chipNode.UserBet,
              betType: "Dragon"
            }));
            this.PosBet();
            this.createSpriteNode(-951, 193, this.ValueAnim1);
          }
        }

        betTieBtn() {
          if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false) {
            this.addScore(this.chipNode.UserBet, this.betTieLb, this.UserBetTieIcon);
            this.listCancelBet[2].node.active = true;
            this.UserBetTieIcon += this.chipNode.UserBet;
            this.ToatalUser[1].active = true;
            this.createSpriteNode(-670, 221, this.ValueAnim2);
          }
        }

        shuffelCard() {
          tween(this.CardNodeL).to(0.4, {
            position: new Vec3(1, 70)
          }).call(() => {
            this.CardNodeL.active = false;
            this.CardNodeR.active = false;
            this.CardNodeAnim.node.active = true;
            this.RestartBalnce(); // setTimeout(() => {
            //   this.CardNodeAnim.node.active = false;
            //   this.CardNodeL.active = true;
            //   this.CardNodeR.active = true;
            //   this.CardNodeR.getComponent(Sprite).spriteFrame = this.bankCard;
            //   this.CardNodeL.getComponent(Sprite).spriteFrame = this.bankCard;
            //   tween(this.CardNodeL)
            //     .to(0.4, { position: this.clonePosCardL })
            //     .call(() => {
            //       this.GameEnd = false;
            //       setTimeout(() => {
            //         tween(this.CardNodeL)
            //           .to(0.4, {
            //             position: new Vec3(
            //               this.CardNodeL.position.x + 100,
            //               this.CardNodeL.position.y - 300
            //             ),
            //           })
            //           .call(() => {
            //             this.displayImages();
            //           })
            //           .start();
            //       }, 30000); //Waitime
            //     })
            //     .start();
            //   tween(this.CardNodeR)
            //     .to(0.4, { position: this.clonePosCardR })
            //     .call(() => {
            //       console.log("bat dau dem");
            //       this.startCountdown(this.countdownTimerBet, 30);
            //       this.StartBet.play("Startbet");
            //       setTimeout(() => {
            //         tween(this.CardNodeR)
            //           .to(0.4, {
            //             position: new Vec3(
            //               this.CardNodeR.position.x - 100,
            //               this.CardNodeR.position.y - 300
            //             ),
            //           })
            //           .call(() => {
            //             this.displayImagesCardR();
            //             this.campareCard();
            //             this.createGrid();
            //             this.createGridNot();
            //           })
            //           .start();
            //         this.GameEnd = true;
            //         this.StartBet.play("EndBet");
            //       }, 30000); //WaitTime
            //     })
            //     .start();
            // }, 3000); //ShuffleTime
          }).start();
          tween(this.CardNodeR).to(0.4, {
            position: new Vec3(1, 70)
          }).start();
        }

        displayImages() {
          this.randomValueCardL = this.NetworkConnect.resultDragon; // console.log(this.randomValueCardL);

          const spriteFrame = this.listCardRes[this.randomValueCardL - 1];
          const sprite = this.CardNodeL.getComponent(Sprite);

          if (sprite && spriteFrame) {
            sprite.spriteFrame = spriteFrame;
          } else {
            console.error("Sprite or SpriteFrame is missing!");
          }
        }

        displayImagesCardR() {
          this.randomValueCardR = this.NetworkConnect.resultTiger; // console.log(this.randomValueCardR);

          const spriteFrame = this.listCardRes[this.randomValueCardR - 1];
          const sprite = this.CardNodeR.getComponent(Sprite);

          if (sprite && spriteFrame) {
            sprite.spriteFrame = spriteFrame;
          } else {
            console.error("Sprite or SpriteFrame is missing!");
          }
        }

        campareCard() {
          if (this.randomValueCardR > this.randomValueCardL) {
            this.balanceUser = this.balanceUser + this.UserBetTigerIcon * 2;
            this.BalancerLb.string = this.balanceUser.toString();
            this.WinNotice.play("TigerWin");
            this.DragonWinintro.play("TigerIntro");
            this.winIntroType = "TigerIntro";
            this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
              if (this.winIntroType === "TigerIntro") {
                this.TigerNode.play("TigerAttack"); // this.winIntroType = "TigerAttack";

                this.TigerNode.on(Animation.EventType.FINISHED, () => {
                  this.DragonNode.play("DragonHurt");
                  this.DragonNode.on(Animation.EventType.FINISHED, () => {
                    this.DragonNode.play("DragonIde");
                    this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
                  });
                  this.TigerNode.play("TigerIde"); // this.DragonNode.play("DragonIde");

                  setTimeout(() => {
                    this.shuffelCard();
                  }, 4000);
                  this.TigerNode.off(Animation.EventType.FINISHED);
                });
              }
            });
          }

          if (this.randomValueCardR < this.randomValueCardL) {
            this.balanceUser = this.balanceUser + this.UserBetDragonIcon * 2;
            this.BalancerLb.string = this.balanceUser.toString();
            this.WinNotice.play("DragonWinIcon");
            this.DragonWinintro.play("DragonIntro"); // Sử dụng biến để xác định loại WinIntro

            this.winIntroType = "DragonIntro";
            this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
              // Kiểm tra loại WinIntro
              if (this.winIntroType === "DragonIntro") {
                this.DragonNode.play("DragonAttack");
                this.DragonNode.on(Animation.EventType.FINISHED, () => {
                  this.ExplosionDra.play();
                  this.TigerNode.play("TigerHurt");
                  this.TigerNode.on(Animation.EventType.FINISHED, () => {
                    this.TigerNode.play("TigerIde");
                    this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
                  });
                  this.DragonNode.play("DragonIde");
                  setTimeout(() => {
                    this.shuffelCard();
                  }, 4000);
                  this.DragonNode.off(Animation.EventType.FINISHED);
                });
              }
            });
          }

          if (this.randomValueCardR === this.randomValueCardL) {
            this.balanceUser = this.balanceUser + this.UserBetTieIcon * 18;
            this.BalancerLb.string = this.balanceUser.toString();
            this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
            this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
            this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
            setTimeout(() => {
              this.shuffelCard();
            }, 4000);
          }
        }

        drawRectangle() {
          const width = 250;
          const height = 120;
          const graphics = this.AvatarNode.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangle1() {
          const width = 220;
          const height = 110;
          const graphics = this.AvatarNode1.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangle2() {
          const width = 220;
          const height = 110;
          const graphics = this.AvatarNode2.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangle3() {
          const width = 220;
          const height = 110;
          const graphics = this.AvatarNode3.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        drawRectangleTotalUser(number) {
          const width = 60;
          const height = 20;
          const graphics = this.ToatalUser[number].addComponent(Graphics);
          const lightGray = new Color(0, 0, 0, 255);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 2);
          graphics.fill();
          graphics.stroke();
          const circleRadius = 10;
          graphics.fillColor = Color.WHITE; // Màu trắng

          graphics.strokeColor = Color.BLACK; // Viền màu đen

          graphics.circle(-20, 0, circleRadius); // Vẽ hình tròn tại tọa độ (0,0) với bán kính circleRadius

          graphics.fill(); // Tô màu

          graphics.stroke(); // Vẽ viền
        }

        drawRectangleTotal(list) {
          const width = 100;
          const height = 70;
          const graphics = this.ToatalAv[list].addComponent(Graphics);
          const lightGray = new Color(0, 0, 0, 255);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 1; // Tính toán các điểm để vẽ viên thuốc

          const centerX = 0;
          const centerY = 0;
          const pillHeight = height * 0.6; // Chiều cao của viên thuốc

          const pillWidth = width * 0.8; // Chiều rộng của viên thuốc

          const pillRadius = pillHeight / 2; // Bán kính của đầu viên thuốc

          const bodyWidth = width * 0.5; // Chiều rộng của phần thân viên thuốc
          // Vẽ phần thân của viên thuốc

          graphics.rect(centerX - bodyWidth / 2, centerY - pillRadius, bodyWidth, pillHeight); // Vẽ đầu viên thuốc bên trái

          graphics.arc(centerX - pillWidth / 2 + pillRadius, centerY, pillRadius, -Math.PI / 2, Math.PI / 2, false); // Vẽ đầu viên thuốc bên phải

          graphics.arc(centerX + pillWidth / 2 - pillRadius, centerY, pillRadius, Math.PI / 2, -Math.PI / 2, false);
          graphics.fill(); // Đổ màu

          graphics.stroke(); // Vẽ viền
        }

        drawRectanglel(Avatar) {
          const width = 220;
          const height = 100;
          const graphics = Avatar.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 100);
          graphics.fillColor = lightGray;
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 5;
          graphics.roundRect(-width / 2, -height / 2, width, height, 10);
          graphics.fill();
          graphics.stroke();
        }

        createSpriteNode(posX, PosY, PosNode) {
          // Tạo một Node mới
          const spriteNode = new Node("SpriteNode");
          spriteNode.scale = new Vec3(0.5, 0.5); // Thêm một component Sprite vào Node

          const spriteComponent = spriteNode.addComponent(Sprite); // Gán SpriteFrame cho component Sprite

          spriteComponent.spriteFrame = this.chipNode.buttonPub.node.getComponent(Sprite).spriteFrame; // spriteNode.position=new Vec3(this.chipNode.buttonPub.node.position)
          // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)

          PosNode.addChild(spriteNode);
          tween(spriteNode).to(0.3, {
            position: new Vec3(posX, PosY)
          }).start();
        }

        createSpriteNodePay(posX, posY, posNode, spriteFrames) {
          // Lặp qua từng sprite frame để tạo node tương ứng
          for (let i = 0; i < spriteFrames.length; i++) {
            // Tạo một Node mới
            const spriteNode = new Node("SpriteNode");
            spriteNode.scale = new Vec3(0.5, 0.5); // Thêm một component Sprite vào Node

            const spriteComponent = spriteNode.addComponent(Sprite); // Gán SpriteFrame cho component Sprite dựa trên index

            spriteComponent.spriteFrame = spriteFrames[i]; // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)

            posNode.addChild(spriteNode); // Tween Node đến vị trí mong muốn

            tween(spriteNode).delay(i * 0.1) // thiết lập thời gian trễ dựa trên index của node
            .to(1, {
              position: new Vec3(posX, posY)
            }).call(() => {
              spriteNode.active = false;
            }).start();
          }
        }

        drawGrid(Grid) {
          const numRows = this.numRows;
          const numCols = this.numCols;
          const gridSize = Math.min(575 / numCols, 200 / numRows); // Kích thước ô vuông

          const cellWidth = this.cellWidth; // Chiều rộng của mỗi ô

          const cellHeight = this.cellHeight; // Chiều cao của mỗi ô

          const graphics = Grid.addComponent(Graphics);
          const lightGray = new Color(116, 116, 116, 50);
          const glowColor = Color.BLACK;
          graphics.strokeColor = glowColor;
          graphics.lineWidth = 4; // Vẽ các đường ngang

          for (let i = 0; i <= numRows; i++) {
            const y = i * cellHeight - numRows * cellHeight / 2; // Đặt lưới vào giữa theo chiều cao

            graphics.moveTo(-numCols * cellWidth / 2, y);
            graphics.lineTo(numCols * cellWidth / 2, y);
            graphics.stroke();
          }

          for (let j = 0; j <= numCols; j++) {
            const x = j * cellWidth - numCols * cellWidth / 2; // Đặt lưới vào giữa theo chiều rộng

            graphics.moveTo(x, -numRows * cellHeight / 2);
            graphics.lineTo(x, numRows * cellHeight / 2);
            graphics.stroke();
          } // Tô màu cho lưới


          graphics.fillColor = lightGray;
          graphics.rect(-numCols * cellWidth / 2, -numRows * cellHeight / 2, numCols * cellWidth, numRows * cellHeight);
          graphics.fill();
        }

        createGrid() {
          let prefabType;

          if (this.randomValueCardL === this.randomValueCardR) {
            prefabType = this.Tie;
          } else if (this.randomValueCardL < this.randomValueCardR) {
            prefabType = this.Under;
          } else if (this.randomValueCardL > this.randomValueCardR) {
            prefabType = this.Over;
          }

          if (this.currentRowClone > 5 && prefabType.name !== this.previousPrefabType.name) {
            this.currentCol++; // this.currentRow = 0;

            if (this.currentCol >= this.numCols) {
              this.clearGrid();
              this.currentCol = 0;
            }
          }

          if (this.previousPrefabType !== null && prefabType.name !== this.previousPrefabType.name) {
            this.currentCol++;
            this.currentRow = 0;
            this.currentRowClone = 0;

            if (this.currentCol >= this.numCols) {
              this.clearGrid();
              this.currentCol = 0;
            }
          }

          const cell = instantiate(prefabType);
          const posX = this.currentCol * this.cellWidth;
          const posY = -this.currentRow * this.cellHeight;
          cell.position = new Vec3(posX, posY);
          this.pref.addChild(cell);
          this.previousPrefabType = prefabType;
          this.currentRowClone++;

          if (this.currentRow < 5) {
            this.currentRow++;
          }
        }

        clearGrid() {
          this.pref.removeAllChildren();
        }

        createGridNot() {
          let prefabType;

          if (this.randomValueCardL === this.randomValueCardR) {
            prefabType = this.Tie;
          } else if (this.randomValueCardL < this.randomValueCardR) {
            prefabType = this.Under;
          } else if (this.randomValueCardL > this.randomValueCardR) {
            prefabType = this.Over;
          }

          if (this.currentRowL >= this.numRows) {
            this.currentColL++;
            this.currentRowL = 0;

            if (this.currentColL >= this.numCols) {
              this.clearGridNt();
              this.currentCol = 0;
            }
          }

          const cell = instantiate(prefabType);
          const posX = this.currentColL * this.cellWidth; // Tính vị trí x dựa trên chỉ mục cột hiện tại

          const posY = -this.currentRowL * this.cellHeight; // Tính vị trí y dựa trên chỉ mục hàng hiện tại

          cell.position = new Vec3(posX, posY);
          this.prefL.addChild(cell);
          this.currentRowL++;
        }

        clearGridNt() {
          this.prefL.removeAllChildren();
        }

        startCountdown(timeCountDown, timereset) {
          this.countdownTimerBet = 30;
          const countdownInterval = setInterval(() => {
            this.countdownTimerBet--;

            if (this.countdownTimerBet <= 0) {
              clearInterval(countdownInterval);
            }
          }, 1000);
        }

        Cancel() {
          if (this.GameEnd === false) {
            this.ToatalUser[0].active = false;
            this.ToatalUser[1].active = false;
            this.ToatalUser[2].active = false;
            this.listCancelBet[0].node.active = false;
            this.listCancelBet[1].node.active = false;
            this.listCancelBet[2].node.active = false;
            this.listCancelBet[3].node.active = false;
            this.UserBetDragonIcon = 0;
            this.UserBetTieIcon = 0;
            this.UserBetTigerIcon = 0;
            this.balanceUser = this.balanceUser + this.cloneBalance;
            this.cloneBalance = 0;
            this.BalancerLb.string = this.balanceUser.toString();
            this.betDragonLb.string = this.UserBetDragonIcon.toString();
            this.betTigerLb.string = this.UserBetTigerIcon.toString();
            this.betTieLb.string = this.UserBetTieIcon.toString();
            this.ValueAnim.removeAllChildren();
            this.ValueAnim1.removeAllChildren();
            this.ValueAnim2.removeAllChildren();
          }
        }

        RestartBalnce() {
          this.ToatalUser[0].active = false;
          this.ToatalUser[1].active = false;
          this.ToatalUser[2].active = false;
          this.listCancelBet[0].node.active = false;
          this.listCancelBet[1].node.active = false;
          this.listCancelBet[2].node.active = false;
          this.listCancelBet[3].node.active = false;
          this.UserBetDragonIcon = 0;
          this.UserBetTieIcon = 0;
          this.UserBetTigerIcon = 0;
          this.cloneBalance = 0;
          this.betDragonLb.string = this.UserBetDragonIcon.toString();
          this.betTigerLb.string = this.UserBetTigerIcon.toString();
          this.betTieLb.string = this.UserBetTieIcon.toString();
          this.ValueAnim.removeAllChildren();
          this.ValueAnim1.removeAllChildren();
          this.ValueAnim2.removeAllChildren();
        }

        CancelBetTiger() {
          if (this.GameEnd === false) {
            this.ToatalUser[2].active = false;
            this.listCancelBet[1].node.active = false;
            this.cloneBalance = this.cloneBalance - this.UserBetTigerIcon;
            this.balanceUser = this.balanceUser + this.UserBetTigerIcon;
            this.BalancerLb.string = this.balanceUser.toString();
            this.UserBetTigerIcon = 0;
            this.betTigerLb.string = this.UserBetTigerIcon.toString();
            this.ValueAnim.removeAllChildren();
          }
        }

        CancelBetDragon() {
          if (this.GameEnd === false) {
            this.ToatalUser[0].active = false;
            this.listCancelBet[3].node.active = false;
            this.cloneBalance = this.cloneBalance - this.UserBetDragonIcon;
            this.balanceUser = this.balanceUser + this.UserBetDragonIcon;
            this.BalancerLb.string = this.balanceUser.toString();
            this.UserBetDragonIcon = 0;
            this.betDragonLb.string = this.UserBetDragonIcon.toString();
            this.ValueAnim1.removeAllChildren();
          }
        }

        CancelBetTie() {
          if (this.GameEnd === false) {
            this.ToatalUser[1].active = false;
            this.listCancelBet[2].node.active = false;
            this.cloneBalance = this.cloneBalance - this.UserBetTieIcon;
            this.balanceUser = this.balanceUser + this.UserBetTieIcon;
            this.BalancerLb.string = this.balanceUser.toString();
            this.UserBetTieIcon = 0;
            this.betTieLb.string = this.UserBetTieIcon.toString();
            this.ValueAnim2.removeAllChildren();
          }
        }

        tweenChildrenToPosition(node, targetPosition, duration) {
          node.children.forEach(child => {
            tween(child).to(duration, {
              position: targetPosition
            }).call(() => {
              child.removeFromParent();
            }).start();
          });
        }

        PayoutAnim() {
          if (this.NetworkConnect.TotalUser > 0) {
            console.log("tra cho minh");
          }

          if (this.NetworkConnect.TotalUser > 1) {
            console.log("aaa");
            this.createSpriteNodePay(-1450, 1, this.PayUser[0], this.PayUserSprite);
          }

          if (this.NetworkConnect.TotalUser > 2) {
            console.log("aabbba");
            this.createSpriteNodePay(-1450, -100, this.PayUser[1], this.PayUserSprite);
          }

          if (this.NetworkConnect.TotalUser > 3) {
            console.log("cc");
            this.createSpriteNodePay(-1450, -200, this.PayUser[2], this.PayUserSprite);
          }

          if (this.NetworkConnect.TotalUser > 4) {
            this.createSpriteNodePay(-1450, -300, this.PayUser[3], this.PayUserSprite);
          }

          if (this.NetworkConnect.TotalUser > 5) {
            this.createSpriteNodePay(-1450, -400, this.PayUser[4], this.PayUserSprite);
          }

          if (this.NetworkConnect.TotalUser > 6) {
            this.createSpriteNodePay(-1450, -500, this.PayUser[5], this.PayUserSprite);
          } // this.createSpriteNodePay(
          //   0,
          //   -500,
          //   this.PayUser[6],
          //   this.PayUserSprite
          // );

        }

        Idle() {
          this.shuffelCard();
          this.DragonNode.play("DragonIde");
          this.TigerNode.play("TigerIde");
          this.GameStatePayOut = false; // this.GameStateStart = false;
        }

        StartBetting() {
          console.log("played");
          this.GameStateIdle = false;
          this.CardNodeAnim.node.active = false;
          this.CardNodeL.active = true;
          this.CardNodeR.active = true;
          this.CardNodeR.getComponent(Sprite).spriteFrame = this.bankCard;
          this.CardNodeL.getComponent(Sprite).spriteFrame = this.bankCard;
          this.StartBet.play("Startbet");
          tween(this.CardNodeL).to(0.4, {
            position: this.clonePosCardL
          }).call(() => {// this.GameEnd = false;
          }).start();
          tween(this.CardNodeR).to(0.4, {
            position: this.clonePosCardR
          }).call(() => {}).start(); // this.GameStateStart = true;
        }

        stopBetting() {
          this.StartBet.play("EndBet");
          this.GameEnd = true;
        }

        PosBet() {}

        fight() {
          if (this.NetworkConnect.resultTiger > this.NetworkConnect.resultDragon) {
            this.balanceUser = this.balanceUser + this.UserBetTigerIcon * 2;
            this.BalancerLb.string = this.balanceUser.toString();
            this.WinNotice.play("TigerWin");
            this.DragonWinintro.play("TigerIntro");
            this.winIntroType = "TigerIntro";
            this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
              if (this.winIntroType === "TigerIntro") {
                this.TigerNode.play("TigerAttack"); // this.winIntroType = "TigerAttack";

                this.TigerNode.on(Animation.EventType.FINISHED, () => {
                  this.DragonNode.play("DragonHurt");
                  this.DragonNode.on(Animation.EventType.FINISHED, () => {
                    this.DragonNode.play("DragonIde");
                    this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
                  });
                  this.TigerNode.play("TigerIde");
                  this.TigerNode.off(Animation.EventType.FINISHED);
                });
              }
            });
          }

          if (this.NetworkConnect.resultDragon > this.NetworkConnect.resultTiger) {
            console.log("TigerRRES2", this.NetworkConnect.resultTiger);
            console.log("DragonRRES2", this.NetworkConnect.resultDragon);
            this.balanceUser = this.balanceUser + this.UserBetDragonIcon * 2;
            this.BalancerLb.string = this.balanceUser.toString();
            this.WinNotice.play("DragonWinIcon");
            this.DragonWinintro.play("DragonIntro"); // Sử dụng biến để xác định loại WinIntro

            this.winIntroType = "DragonIntro";
            this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
              // Kiểm tra loại WinIntro
              if (this.winIntroType === "DragonIntro") {
                this.DragonNode.play("DragonAttack");
                this.DragonNode.on(Animation.EventType.FINISHED, () => {
                  this.ExplosionDra.play();
                  this.TigerNode.play("TigerHurt");
                  this.TigerNode.on(Animation.EventType.FINISHED, () => {
                    this.TigerNode.play("TigerIde");
                    this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
                    this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
                  });
                  this.DragonNode.play("DragonIde");
                  this.DragonNode.off(Animation.EventType.FINISHED);
                });
              }
            });
          }
        }

        shownResult() {
          tween(this.CardNodeL).to(0.4, {
            position: new Vec3(this.CardNodeL.position.x + 100, this.CardNodeL.position.y - 300)
          }).call(() => {
            this.displayImages();
            this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
            this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
            this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
          }).start();
          tween(this.CardNodeR).to(0.4, {
            position: new Vec3(this.CardNodeR.position.x - 100, this.CardNodeR.position.y - 300)
          }).call(() => {
            this.displayImagesCardR(); // this.campareCard();
            // this.createGrid();
            // this.createGridNot();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "betTigerLb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betDragonLb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betTieLb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "UserName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "BalancerLb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chipNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CardNodeL", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CardNodeR", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "AvatarNode3", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL3", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL4", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL5", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "AvatarL6", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "GridL", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "GridR", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "ValueAnim", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "ValueAnim1", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "ValueAnim2", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "CardNodeAnim", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "WinNotice", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "DragonWinintro", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "DragonNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "TigerNode", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "StartBet", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "ExplosionDra", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "listCardRes", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "bankCard", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "pref", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "prefL", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "Over", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Under", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Tie", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "ToatalAv", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "ToatalUser", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "PayUser", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "BalanceList", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "PayUserSprite", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "listCancelBet", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "NetworkConnect", [_dec45], {
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
//# sourceMappingURL=901883fead7d2fa3f3cd2d798247914f991d758d.js.map