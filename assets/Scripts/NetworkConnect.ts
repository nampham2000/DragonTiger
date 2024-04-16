import { _decorator, Component, Label, Node, Sprite, tween, Vec3 } from "cc";
const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";

@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property({ type: String })
  hostname = "";

  @property({ type: Number })
  port = 80;

  @property({ type: Boolean })
  useSSL = true;

  @property({ type: Node })
  private ListL: Node[] = [];

  @property({ type: Label })
  private ListLabel: Label[] = [];

  @property(Label)
  private TimerDown: Label;

  client!: Colyseus.Client;
  room!: Colyseus.Room;
  gameState;
  resultDragon;
  resultTiger;
  TotalUser;
  UserBet;
  NotmeBet;

  start() {
    this.client = new Colyseus.Client(
      `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
    );

    this.connect();
  }

  async connect() {
    try {
      
      const rooms = await this.client.getAvailableRooms("room1");
      console.log(rooms.length);

      // if (rooms.length === 0) {
        this.room = await this.client.create("room1");
        console.log("Created new room with sessionId:", this.room.sessionId);
      // } else {
      //   // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
      //   this.room = await this.client.joinById(rooms[0].roomId);
      //   console.log(
      //     "Joined existing room with sessionId:",
      //     this.room.sessionId
      //   );
      // }

      console.log("Joined successfully!");
      console.log("User's sessionId:", this.room.sessionId);

      // this.room.onMessage("playerList", (message) => {
      //   console.log(message);
      //   this.updatePlayerList(message);
      // });

      this.room.onMessage("timer", (message) => {
        this.TimerDown.string = message;
      });

      this.room.onMessage("result", (message) => {
        this.resultDragon = message.dragonCard.value;
        this.resultTiger = message.tigerCard.value;
      });

      this.room.onMessage("userBet", (message) => {
        if (message.playerID !== this.room.sessionId) {
          console.log("Thang kia bet");
          this.UserBet = message.playerID;
        } else {
          console.log("false");
        }
      });

      this.room.onStateChange((state) => {
        console.log("Room state changed:", state);
        console.log("onStateChange: ", state);
        console.log(state.roundState);
        
        const players = [...state.players.values()];
        this.updatePlayerList(players);
        console.log(players);
        this.TotalUser=players.length;

        this.gameState = state.roundState;
      });

      this.room.onLeave((code) => {
        console.log("Left room with code:", code);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }

  updatePlayerList(playerList: any[]) {
    let displayIndex = 0; // Biến đếm số lượng người chơi đã được thêm vào danh sách hiển thị
    const numElements = playerList.length;

    // Ẩn tất cả các node trong danh sách
    this.ListL.forEach((node) => {
        node.active = false;
    });
    for (let i = 0; i < numElements && displayIndex < this.ListL.length; i++) {
        if (playerList[i].sessionId !== this.room.sessionId) {
            this.ListLabel[displayIndex].string = playerList[i].sessionId;
            this.ListL[displayIndex].active = true;
            displayIndex++;
        }
    }
    for (let i = displayIndex; i < this.ListL.length; i++) {
        this.ListL[i].active = false;
    }
}



  // createSpriteNode(posX, PosY, PosNode: Node) {
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
}
