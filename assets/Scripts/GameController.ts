import {
  _decorator,
  Component,
  Label,
  Node,
  tween,
  Vec3,
  Animation,
  SpriteFrame,
  Sprite,
  math,
  log,
  Graphics,
  Color,
  instantiate,
  Prefab,
  Button,
  CCInteger,
} from "cc";
import { Chip } from "./Chip";
import { NetworkConnect } from "./NetworkConnect";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends Component {
  @property({
    type: Label,
  })
  private betTigerLb: Label;

  @property({
    type: Label,
  })
  private betDragonLb: Label;

  @property({
    type: Label,
  })
  private betTieLb: Label;

  @property({
    type: Label,
  })
  private UserName: Label;

  @property({
    type: Label,
  })
  private BalancerLb: Label;

  @property({
    type: Chip,
  })
  private chipNode: Chip;

  @property({
    type: Node,
  })
  private CardNodeL: Node;

  @property({
    type: Node,
  })
  private CardNodeR: Node;

  @property({
    type: Node,
  })
  private AvatarNode: Node;

  @property({
    type: Node,
  })
  private AvatarNode1: Node;

  @property({
    type: Node,
  })
  private AvatarNode2: Node;

  @property({
    type: Node,
  })
  private AvatarNode3: Node;

  @property({
    type: Node,
  })
  private AvatarL1: Node;

  @property({
    type: Node,
  })
  private AvatarL2: Node;

  @property({
    type: Node,
  })
  private AvatarL3: Node;

  @property({
    type: Node,
  })
  private AvatarL4: Node;

  @property({
    type: Node,
  })
  private AvatarL5: Node;

  @property({
    type: Node,
  })
  private AvatarL6: Node;

  @property({
    type: Node,
  })
  private GridL: Node;
  @property({
    type: Node,
  })
  private GridR: Node;

  @property({
    type: Node,
  })
  private ValueAnim: Node;

  @property({
    type: Node,
  })
  private ValueAnim1: Node;

  @property({
    type: Node,
  })
  private ValueAnim2: Node;

  @property({
    type: Animation,
  })
  private CardNodeAnim: Animation;

  @property({
    type: Animation,
  })
  private WinNotice: Animation;

  @property({
    type: Animation,
  })
  private DragonWinintro: Animation;

  @property({
    type: Animation,
  })
  private DragonNode: Animation;

  @property({
    type: Animation,
  })
  private TigerNode: Animation;

  @property({
    type: Animation,
  })
  private StartBet: Animation;

  @property({
    type: Animation,
  })
  private ExplosionDra: Animation;

  @property({
    type: SpriteFrame,
  })
  private listCardRes: SpriteFrame[] = [];

  @property({
    type: SpriteFrame,
  })
  private bankCard: SpriteFrame;

  @property(Node)
  pref: Node;

  @property(Node)
  prefL: Node;

  @property(Prefab)
  private Over: Prefab = null;

  @property(Prefab)
  private Under: Prefab = null;

  @property(Prefab)
  private Tie: Prefab = null;

  // @property(Label)
  // private countDownLb: Label;

  @property({
    type: Node,
  })
  private ToatalAv: Node[] = [];

  @property({
    type: Node,
  })
  private ToatalUser: Node[] = [];

  @property({
    type: Node,
  })
  private PayUser: Node[] = [];

  @property({
    type: Label,
  })
  private BalanceList: Label[] = [];

  @property({
    type: SpriteFrame,
  })
  private PayUserSprite: SpriteFrame[] = [];

  @property({ type: [Button] })
  listCancelBet: Button[] = [];

  @property(NetworkConnect)
  private NetworkConnect: NetworkConnect;

  private UserBetTigerIcon: number = 0;
  private UserBetDragonIcon: number = 0;
  private UserBetTieIcon: number = 0;
  private clonePosCardL: Vec3 = new Vec3();
  private clonePosCardR: Vec3 = new Vec3();
  private randomValueCardR: number = 0;
  private randomValueCardL: number = 0;
  private balanceUser: number = 300;
  private currentCol = 0;
  private currentRow = 0;
  private currentRowClone = 0;
  private currentColL = 0;
  private currentRowL = 0;
  previousPrefabType = null;
  previousPrefabTypeL = null;
  winIntroType;
  private numRows: number = 6;
  private numCols: number = 20;
  private cellWidth: number = 27;
  private cellHeight: number = 30;
  private countdownTimerBet: number = 30;
  private cloneBalance: number = 0;
  private GameEnd: boolean = false;
  private GameStateStart: boolean = false;
  private GameStateIdle: boolean = false;
  private GameStateReuslt: boolean = false;
  private GameStateFight: boolean = false;
  private GameStatePayOut:boolean=false;

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

  update(deltaTime: number) {
    if (
      this.NetworkConnect.gameState === "idle" &&
      this.GameStateIdle === false
    ) {
      this.UserName.string = this.NetworkConnect.room.sessionId;
      this.Idle();
      this.GameEnd = false;
      this.GameStateIdle = true;
      this.GameStateReuslt = false;
      this.GameStateFight = false;
    }
    if (
      this.NetworkConnect.gameState === "startBetting" &&
      this.GameStateStart === false
    ) {
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

    if (
      this.NetworkConnect.gameState === "fight" &&
      this.GameStateFight === false
    ) {
      this.fight();
      this.GameStateFight = true;
    }
    if (
      this.NetworkConnect.gameState === "showResult" &&
      this.GameStateReuslt === false
    ) {
      this.shownResult();
      this.GameStateReuslt = true;
    }
    if (this.NetworkConnect.gameState === "payout"&&this.GameStatePayOut===false) {
      this.PayoutAnim();
      this.GameStatePayOut=true;
    }
    if (this.cloneBalance > 0) {
      this.listCancelBet[0].node.active = true;
    } else {
      this.listCancelBet[0].node.active = false;
    }
  }

  private addScore(Score: number, betLB: Label, betValueIcon: number) {
    if (this.balanceUser >= Score) {
      betValueIcon = betValueIcon + Score;
      this.balanceUser = this.balanceUser - Score;
      this.cloneBalance = this.cloneBalance + Score;
      this.BalancerLb.string = this.balanceUser.toString();
      betLB.string = betValueIcon.toString();
    }
  }

  private betTigerBtn() {
    if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false) {
      this.addScore(
        this.chipNode.UserBet,
        this.betTigerLb,
        this.UserBetTigerIcon
      );
      this.UserBetTigerIcon += this.chipNode.UserBet;
      this.ToatalUser[2].active = true;
      this.listCancelBet[1].node.active = true;

      this.createSpriteNode(-406, 200, this.ValueAnim);
    }
  }

  private betDragonBtn() {
    if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false) {
      this.addScore(
        this.chipNode.UserBet,
        this.betDragonLb,
        this.UserBetDragonIcon
      );
      this.UserBetDragonIcon += this.chipNode.UserBet;
      this.ToatalUser[0].active = true;
      this.listCancelBet[3].node.active = true;
      this.NetworkConnect.room.send(
        "Bet",
        JSON.stringify({ betAmount: this.chipNode.UserBet, betType: "Dragon" })
      );
      this.PosBet();
      this.createSpriteNode(-951, 193, this.ValueAnim1);
    }
  }

  private betTieBtn() {
    if (this.balanceUser >= this.chipNode.UserBet && this.GameEnd === false) {
      this.addScore(this.chipNode.UserBet, this.betTieLb, this.UserBetTieIcon);
      this.listCancelBet[2].node.active = true;
      this.UserBetTieIcon += this.chipNode.UserBet;
      this.ToatalUser[1].active = true;
      this.createSpriteNode(-670, 221, this.ValueAnim2);
    }
  }

  private shuffelCard() {
    tween(this.CardNodeL)
      .to(0.4, { position: new Vec3(1, 70) })
      .call(() => {
        this.CardNodeL.active = false;
        this.CardNodeR.active = false;
        this.CardNodeAnim.node.active = true;
        this.RestartBalnce();
        // setTimeout(() => {
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
      })
      .start();

    tween(this.CardNodeR)
      .to(0.4, { position: new Vec3(1, 70) })
      .start();
  }

  private displayImages() {
    this.randomValueCardL = this.NetworkConnect.resultDragon;
    // console.log(this.randomValueCardL);

    const spriteFrame = this.listCardRes[this.randomValueCardL - 1];
    const sprite = this.CardNodeL.getComponent(Sprite);
    if (sprite && spriteFrame) {
      sprite.spriteFrame = spriteFrame;
    } else {
      console.error("Sprite or SpriteFrame is missing!");
    }
  }

  private displayImagesCardR() {
    this.randomValueCardR = this.NetworkConnect.resultTiger;
    // console.log(this.randomValueCardR);
    const spriteFrame = this.listCardRes[this.randomValueCardR - 1];
    const sprite = this.CardNodeR.getComponent(Sprite);
    if (sprite && spriteFrame) {
      sprite.spriteFrame = spriteFrame;
    } else {
      console.error("Sprite or SpriteFrame is missing!");
    }
  }

  private campareCard() {
    if (this.randomValueCardR > this.randomValueCardL) {
      this.balanceUser = this.balanceUser + this.UserBetTigerIcon * 2;
      this.BalancerLb.string = this.balanceUser.toString();
      this.WinNotice.play("TigerWin");
      this.DragonWinintro.play("TigerIntro");
      this.winIntroType = "TigerIntro";
      this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
        if (this.winIntroType === "TigerIntro") {
          this.TigerNode.play("TigerAttack");
          // this.winIntroType = "TigerAttack";
          this.TigerNode.on(Animation.EventType.FINISHED, () => {
            this.DragonNode.play("DragonHurt");
            this.DragonNode.on(Animation.EventType.FINISHED, () => {
              this.DragonNode.play("DragonIde");
              this.tweenChildrenToPosition(
                this.ValueAnim,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim1,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim2,
                new Vec3(30, 560),
                0.5
              );
            });

            this.TigerNode.play("TigerIde");

            // this.DragonNode.play("DragonIde");
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
      this.DragonWinintro.play("DragonIntro");
      // Sử dụng biến để xác định loại WinIntro
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
              this.tweenChildrenToPosition(
                this.ValueAnim,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim1,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim2,
                new Vec3(30, 560),
                0.5
              );
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
    const width: number = 250;
    const height: number = 120;
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
    const width: number = 220;
    const height: number = 110;
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
    const width: number = 220;
    const height: number = 110;
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
    const width: number = 220;
    const height: number = 110;
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

  drawRectangleTotalUser(number: number) {
    const width: number = 60;
    const height: number = 20;
    const graphics = this.ToatalUser[number].addComponent(Graphics);
    const lightGray = new Color(0, 0, 0, 255);
    graphics.fillColor = lightGray;
    const glowColor = Color.BLACK;
    graphics.strokeColor = glowColor;
    graphics.lineWidth = 5;
    graphics.roundRect(-width / 2, -height / 2, width, height, 2);
    graphics.fill();
    graphics.stroke();

    const circleRadius: number = 10;
    graphics.fillColor = Color.WHITE; // Màu trắng
    graphics.strokeColor = Color.BLACK; // Viền màu đen
    graphics.circle(-20, 0, circleRadius); // Vẽ hình tròn tại tọa độ (0,0) với bán kính circleRadius
    graphics.fill(); // Tô màu
    graphics.stroke(); // Vẽ viền
  }
  private drawRectangleTotal(list: number) {
    const width: number = 100;
    const height: number = 70;
    const graphics = this.ToatalAv[list].addComponent(Graphics);
    const lightGray = new Color(0, 0, 0, 255);
    graphics.fillColor = lightGray;
    const glowColor = Color.BLACK;
    graphics.strokeColor = glowColor;
    graphics.lineWidth = 1;

    // Tính toán các điểm để vẽ viên thuốc
    const centerX = 0;
    const centerY = 0;
    const pillHeight = height * 0.6; // Chiều cao của viên thuốc
    const pillWidth = width * 0.8; // Chiều rộng của viên thuốc
    const pillRadius = pillHeight / 2; // Bán kính của đầu viên thuốc
    const bodyWidth = width * 0.5; // Chiều rộng của phần thân viên thuốc

    // Vẽ phần thân của viên thuốc
    graphics.rect(
      centerX - bodyWidth / 2,
      centerY - pillRadius,
      bodyWidth,
      pillHeight
    );

    // Vẽ đầu viên thuốc bên trái
    graphics.arc(
      centerX - pillWidth / 2 + pillRadius,
      centerY,
      pillRadius,
      -Math.PI / 2,
      Math.PI / 2,
      false
    );

    // Vẽ đầu viên thuốc bên phải
    graphics.arc(
      centerX + pillWidth / 2 - pillRadius,
      centerY,
      pillRadius,
      Math.PI / 2,
      -Math.PI / 2,
      false
    );

    graphics.fill(); // Đổ màu
    graphics.stroke(); // Vẽ viền
  }
  drawRectanglel(Avatar: Node) {
    const width: number = 220;
    const height: number = 100;
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

  createSpriteNode(posX, PosY, PosNode: Node) {
    // Tạo một Node mới
    const spriteNode = new Node("SpriteNode");
    spriteNode.scale = new Vec3(0.5, 0.5);

    // Thêm một component Sprite vào Node
    const spriteComponent = spriteNode.addComponent(Sprite);

    // Gán SpriteFrame cho component Sprite
    spriteComponent.spriteFrame =
      this.chipNode.buttonPub.node.getComponent(Sprite).spriteFrame;
    // spriteNode.position=new Vec3(this.chipNode.buttonPub.node.position)
    // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)
    PosNode.addChild(spriteNode);
    tween(spriteNode)
      .to(0.3, { position: new Vec3(posX, PosY) })
      .start();
  }

  createSpriteNodePay(posX, posY, posNode: Node, spriteFrames: SpriteFrame[]) {
    // Lặp qua từng sprite frame để tạo node tương ứng
    for (let i = 0; i < spriteFrames.length; i++) {
      // Tạo một Node mới
      const spriteNode = new Node("SpriteNode");
      spriteNode.scale = new Vec3(0.5, 0.5);

      // Thêm một component Sprite vào Node
      const spriteComponent = spriteNode.addComponent(Sprite);

      // Gán SpriteFrame cho component Sprite dựa trên index
      spriteComponent.spriteFrame = spriteFrames[i];

      // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)
      posNode.addChild(spriteNode);

      // Tween Node đến vị trí mong muốn
      tween(spriteNode)
        .delay(i * 0.1) // thiết lập thời gian trễ dựa trên index của node
        .to(1, { position: new Vec3(posX, posY) })
        .call(() => {
          spriteNode.active = false;
        })
        .start();
    }
  }

  drawGrid(Grid: Node) {
    const numRows: number = this.numRows;
    const numCols: number = this.numCols;
    const gridSize: number = Math.min(575 / numCols, 200 / numRows); // Kích thước ô vuông
    const cellWidth: number = this.cellWidth; // Chiều rộng của mỗi ô
    const cellHeight: number = this.cellHeight; // Chiều cao của mỗi ô

    const graphics = Grid.addComponent(Graphics);
    const lightGray = new Color(116, 116, 116, 50);
    const glowColor = Color.BLACK;
    graphics.strokeColor = glowColor;
    graphics.lineWidth = 4;

    // Vẽ các đường ngang
    for (let i = 0; i <= numRows; i++) {
      const y = i * cellHeight - (numRows * cellHeight) / 2; // Đặt lưới vào giữa theo chiều cao
      graphics.moveTo((-numCols * cellWidth) / 2, y);
      graphics.lineTo((numCols * cellWidth) / 2, y);
      graphics.stroke();
    }

    for (let j = 0; j <= numCols; j++) {
      const x = j * cellWidth - (numCols * cellWidth) / 2; // Đặt lưới vào giữa theo chiều rộng
      graphics.moveTo(x, (-numRows * cellHeight) / 2);
      graphics.lineTo(x, (numRows * cellHeight) / 2);
      graphics.stroke();
    }

    // Tô màu cho lưới
    graphics.fillColor = lightGray;
    graphics.rect(
      (-numCols * cellWidth) / 2,
      (-numRows * cellHeight) / 2,
      numCols * cellWidth,
      numRows * cellHeight
    );
    graphics.fill();
  }

  private createGrid() {
    let prefabType;
    if (this.randomValueCardL === this.randomValueCardR) {
      prefabType = this.Tie;
    } else if (this.randomValueCardL < this.randomValueCardR) {
      prefabType = this.Under;
    } else if (this.randomValueCardL > this.randomValueCardR) {
      prefabType = this.Over;
    }

    if (
      this.currentRowClone > 5 &&
      prefabType.name !== this.previousPrefabType.name
    ) {
      this.currentCol++;
      // this.currentRow = 0;
      if (this.currentCol >= this.numCols) {
        this.clearGrid();
        this.currentCol = 0;
      }
    }
    if (
      this.previousPrefabType !== null &&
      prefabType.name !== this.previousPrefabType.name
    ) {
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

  private clearGrid() {
    this.pref.removeAllChildren();
  }

  private createGridNot() {
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

  private clearGridNt() {
    this.prefL.removeAllChildren();
  }

  private startCountdown(timeCountDown: number, timereset: number) {
    this.countdownTimerBet = 30;
    const countdownInterval = setInterval(() => {
      this.countdownTimerBet--;
      if (this.countdownTimerBet <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  private Cancel() {
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

  private RestartBalnce() {
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

  private CancelBetTiger() {
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

  private CancelBetDragon() {
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

  private CancelBetTie() {
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

  tweenChildrenToPosition(node: Node, targetPosition: Vec3, duration: number) {
    node.children.forEach((child: Node) => {
      tween(child)
        .to(duration, { position: targetPosition })
        .call(() => {
          child.removeFromParent();
        })

        .start();
    });
  }

  private PayoutAnim(){
    if (this.NetworkConnect.TotalUser > 0) {
      console.log("tra cho minh");
    }
    
    if (this.NetworkConnect.TotalUser > 1) {
      console.log("aaa");

      this.createSpriteNodePay(
        -1450,
        1,
        this.PayUser[0],
        this.PayUserSprite
      );
    }
    if (this.NetworkConnect.TotalUser > 2) {
      console.log("aabbba");

      this.createSpriteNodePay(
        -1450,
        -100,
        this.PayUser[1],
        this.PayUserSprite
      );
    }
    if (this.NetworkConnect.TotalUser > 3) {
      console.log("cc");

      this.createSpriteNodePay(
        -1450,
        -200,
        this.PayUser[2],
        this.PayUserSprite
      );
    }
    if (this.NetworkConnect.TotalUser > 4) {
      this.createSpriteNodePay(
      -1450,
      -300,
      this.PayUser[3],
      this.PayUserSprite
    );
    }

    if (this.NetworkConnect.TotalUser > 5) {
            this.createSpriteNodePay(
      -1450,
      -400,
      this.PayUser[4],
      this.PayUserSprite
    );
    }
    
    if (this.NetworkConnect.TotalUser > 6) {
         this.createSpriteNodePay(
      -1450,
      -500,
      this.PayUser[5],
      this.PayUserSprite
    );
    }

   

    // this.createSpriteNodePay(
    //   0,
    //   -500,
    //   this.PayUser[6],
    //   this.PayUserSprite
    // );
  }

  private Idle() {
    this.shuffelCard();
    this.DragonNode.play("DragonIde");
    this.TigerNode.play("TigerIde");
    this.GameStatePayOut=false;
    // this.GameStateStart = false;
  }

  private StartBetting() {
    console.log("played");
    this.GameStateIdle = false;
    this.CardNodeAnim.node.active = false;
    this.CardNodeL.active = true;
    this.CardNodeR.active = true;
    this.CardNodeR.getComponent(Sprite).spriteFrame = this.bankCard;
    this.CardNodeL.getComponent(Sprite).spriteFrame = this.bankCard;
    this.StartBet.play("Startbet");
    tween(this.CardNodeL)
      .to(0.4, { position: this.clonePosCardL })
      .call(() => {
        // this.GameEnd = false;
      })
      .start();
    tween(this.CardNodeR)
      .to(0.4, { position: this.clonePosCardR })
      .call(() => {})
      .start();
    // this.GameStateStart = true;
  }

  private stopBetting() {
    this.StartBet.play("EndBet");
    this.GameEnd = true;
  }
  private PosBet() {
  
  }

  private fight() {
    if (this.NetworkConnect.resultTiger > this.NetworkConnect.resultDragon) {
      this.balanceUser = this.balanceUser + this.UserBetTigerIcon * 2;
      this.BalancerLb.string = this.balanceUser.toString();
      this.WinNotice.play("TigerWin");
      this.DragonWinintro.play("TigerIntro");
      this.winIntroType = "TigerIntro";
      this.DragonWinintro.on(Animation.EventType.FINISHED, () => {
        if (this.winIntroType === "TigerIntro") {
          this.TigerNode.play("TigerAttack");
          // this.winIntroType = "TigerAttack";
          this.TigerNode.on(Animation.EventType.FINISHED, () => {
            this.DragonNode.play("DragonHurt");
            this.DragonNode.on(Animation.EventType.FINISHED, () => {
              this.DragonNode.play("DragonIde");
              this.tweenChildrenToPosition(
                this.ValueAnim,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim1,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim2,
                new Vec3(30, 560),
                0.5
              );
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
      this.DragonWinintro.play("DragonIntro");
      // Sử dụng biến để xác định loại WinIntro
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
              this.tweenChildrenToPosition(
                this.ValueAnim,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim1,
                new Vec3(30, 560),
                0.5
              );
              this.tweenChildrenToPosition(
                this.ValueAnim2,
                new Vec3(30, 560),
                0.5
              );
            });
            this.DragonNode.play("DragonIde");
            this.DragonNode.off(Animation.EventType.FINISHED);
          });
        }
      });
    }
  }
  private shownResult() {
    tween(this.CardNodeL)
      .to(0.4, {
        position: new Vec3(
          this.CardNodeL.position.x + 100,
          this.CardNodeL.position.y - 300
        ),
      })
      .call(() => {
        this.displayImages();
        this.tweenChildrenToPosition(this.ValueAnim, new Vec3(30, 560), 0.5);
        this.tweenChildrenToPosition(this.ValueAnim1, new Vec3(30, 560), 0.5);
        this.tweenChildrenToPosition(this.ValueAnim2, new Vec3(30, 560), 0.5);
      })
      .start();

    tween(this.CardNodeR)
      .to(0.4, {
        position: new Vec3(
          this.CardNodeR.position.x - 100,
          this.CardNodeR.position.y - 300
        ),
      })
      .call(() => {
        this.displayImagesCardR();
        // this.campareCard();
        // this.createGrid();
        // this.createGridNot();
      })
      .start();
  }
}
